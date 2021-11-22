import React from "react";
import {useHttp} from "../../../../hooks/http.hook";

export const TableTbody = () => {
    const {request} = useHttp();

    const listHandler = async () => {
        try {
            const data = await request('/api/user/dashboard/userDetails', "GET");

        } catch (e) {
        }
    }

    return(
        <tbody>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Books</th>
            <th scope="col">Buttons</th>
        </tr>
        </tbody>
    )
}