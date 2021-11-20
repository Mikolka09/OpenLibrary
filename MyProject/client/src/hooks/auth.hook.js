import {useState, useCallback, useEffect} from "react";

const storageName = "userData";

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    const logIn = useCallback((jwtToken, id, email) => {
        setToken(jwtToken);
        setUserId(id);
        setUserEmail(email);

        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken, userEmail:email}));
    }, []);

    const logOut = useCallback(() => {
        setToken(null);
        setUserId(null);
        setUserEmail(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            logIn(data.token, data.userId, data.userEmail);
        }
    }, [logIn])


    return {logIn, logOut, token, userId, userEmail};
}