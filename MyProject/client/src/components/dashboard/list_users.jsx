import React from "react";
import {useHttp} from "../../hooks/http.hook";
import {Link} from "react-router-dom";

export const ListUsers = () => {
    const {request} = useHttp();


    const listHandler = async () => {
        try {
            const data = await request('/api/user/dashboard/userDetails', "GET");
            items(data);
        } catch (e) {
        }
    }

    let items = function (data){
        console.log(data);
        data.map(function (item, i){
            return (<tr key={item.id}>
                <th scope="row">{i}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.books.id}</td>
                <td>
                    <Link to="#" className="btn btn-success btn-sm">Edit</Link>
                    <Link to="#" className="btn btn-primary btn-sm mx-1">Details</Link>
                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                </td>
            </tr>)
        })
    }

    return (
        <div className="container">
            <div className="text-center"><h3><u>LIST USERS</u></h3></div>
            <p>
                <button className="btn btn-info fw-bold btn-sm" onClick={listHandler}>Show Users list</button>
            </p>
            <div>
                <table className="table table-success table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Books</th>
                        <th scope="col">Buttons</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                </table>
            </div>
        </div>
    )
}