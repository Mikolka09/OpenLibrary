import React from "react";
import Img from "./img/o2ltt5qf_snb.jpg";
import "./css/top10_allCategories.css";

export const Top10AllCategories = () => {

    return (
        <div className="container">
            <div><h3><u>Top 10 books of all Categories</u></h3></div>
            <div>
                <table className="table table-success table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Img</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date of Publish</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="click_tr" onClick={() => {
                        alert("Cool!");
                    }}>
                        <th scope="row">1</th>
                        <td><img src={Img} alt="Img" width="50px"/></td>
                        <td>Otto Motto</td>
                        <td>F. Ganry</td>
                        <td>Fantasi</td>
                        <td>02/10/2009</td>
                        <td>123456789</td>
                        <td>10</td>
                        <td>9</td>
                    </tr>
                    <tr className="click_tr" onClick={() => {
                        alert("Cool!");
                    }}>
                        <th scope="row">2</th>
                        <td><img src={Img} alt="Img" width="50px"/></td>
                        <td>Otto Motto</td>
                        <td>F. Ganry</td>
                        <td>Fantasi</td>
                        <td>02/10/2009</td>
                        <td>123456789</td>
                        <td>10</td>
                        <td>9</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}