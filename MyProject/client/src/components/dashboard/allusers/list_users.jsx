import React from "react";
import {TableThead} from "./table_users/table_thead";

export const ListUsers = () => {

    const items = function (data) {
        //console.log(data.length);
        for (let i = 0; i < data.length; i++) {
            return (<tr key={i}>
                <th scope="row">{i}</th>
                <td>username</td>
                <td>email</td>
                <td>Roles</td>
                <td>Books</td>
                {/*<td>
                    <Link to="#" className="btn btn-success btn-sm">Edit</Link>
                    <Link to="#" className="btn btn-primary btn-sm mx-1">Details</Link>
                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                </td>*/}
            </tr>)
        }
    }

    if (isBtn) {
        table = (
            <div>
                <table className="table table-success table-striped table-hover">
                   <TableThead/>

                </table>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="text-center"><h3><u>LIST USERS</u></h3></div>
            <p>
                <button className="btn btn-info fw-bold btn-sm" onClick={listHandler}>Show Users list</button>
            </p>
            {table}
        </div>
    )
}