import React from "react";
import ContCss from "./css/contact_container.css"
import HeadingContact from "./heading_contact";
import MapContact from "./map_contact";
import FormContact from "./form_contact";

export default class ContactContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="cont_cont">
                <HeadingContact/>
                <div className="row">
                    <MapContact/>
                    <FormContact/>
                </div>
            </div>
        )
    }
}