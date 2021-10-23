import React from "react";
import Img from "./img/o2ltt5qf_snb.jpg"
import Like from "./img/heart.png"
import Down from "./img/cloud-computing.png"
import {Link} from "react-router-dom";
import ItemCss from "./css/item_book.css"

export default class ItemBook extends React.Component {
    render() {
        return (
            <div id="block_book" className="col-4 mb-4">
                <div className="container-fluid text-start border border-4 p-0">
                    <Link to="#"><img id="img_book" className="img-fluid" src={Img} alt="Img"/></Link>
                    <div className="text-start bg-white pb-1 ps-2">
                        <div className="row">
                            <div className="col">
                                <Link to="#" id="title_book"><h4>Hello Word!</h4></Link>
                            </div>
                            <div className="col text-end me-1">
                                <Link to="#"><span>
                                    <img src={Like} alt="Like" width="20px" data-bs-toggle="tooltip" title="Like"/>
                                </span></Link>
                                <Link to="#"><span>
                                    <img className="ms-2" src={Down} alt="Down" width="20px"
                                         data-bs-toggle="tooltip" title="Download"/>
                                </span></Link>
                            </div>
                        </div>

                        <div><strong>Author: </strong>F. Genry</div>
                        <div><strong>ISBN: </strong>123456789</div>
                        <div><small>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable</small></div>
                    </div>
                </div>
            </div>
        )
    }
}