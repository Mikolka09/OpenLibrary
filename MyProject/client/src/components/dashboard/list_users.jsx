import React from "react";
import {useHttp} from "../../hooks/http.hook";

export const ListUsers = () => {
    const {request} = useHttp();
    const listHandler = async () => {
            try {
                const data = await request('/api/user/dashboard/userDetails', "GET");
                console.log(data);
                //history.push("/login");
            } catch (e) {
            }
    }

    return(
        <div>
            <button onClick={listHandler}>List</button>
        </div>
    )
}