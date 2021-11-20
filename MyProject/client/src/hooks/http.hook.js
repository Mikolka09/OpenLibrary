import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers = {'Content-Type': 'application/json'};
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json();

            if (response.ok) {
                setLoading(false);
                return data;
            } else {
                alert("Something went wrong!");
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError};
}