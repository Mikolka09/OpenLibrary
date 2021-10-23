import React from "react";
import ImgMap from "./img/map-new.jpg";

export default class MapContact extends React.Component {
    render() {
        return (
            <div className="col-6">
                <img className="img-fluid" src={ImgMap} alt="Map"/>
            </div>
        )
    }
}