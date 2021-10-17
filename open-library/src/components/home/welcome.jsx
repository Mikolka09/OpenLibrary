import React from "react";
import ImgBook from "./img/medium.jpg"

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-6">
                    <p className="h2 text-uppercase">lorem ipsum dolor sit amet</p>
                    <p className="fst-italic fs-6">Gravida malesuada at mattis</p>
                    <p className="fs-5">Etiam mollis venenatis ultricies praesent amet taciti in luctus, consequat
                        viverra augue lobortis ridiculus maximus risus congue convallis, facilisi rhoncus donec nisi
                        fermentum mus elementum. Gravida malesuada at mattis lacinia iaculis hac potenti parturient
                        congue, nulla hendrerit nunc netus dignissim cras sagittis pretium sapien, neque ac dictumst
                        turpis enim curae libero montes. Consequat sit dis convallis felis nunc leo fermentum varius
                        ornare ultrices maecenas, dolor interdum faucibus finibus class congue phasellus vel donec
                        commodo, lacus dictum etiam per placerat aenean cursus blandit vehicula nulla. Class enim
                        habitant sapien tristique rutrum iaculis vivamus donec id rhoncus, praesent at molestie nisl
                        sodales dictum venenatis vulputate ante dolor augue, pulvinar sed faucibus ullamcorper vitae
                        cursus justo magnis fermentum.</p>
                </div>
                <div className="col-6">
                    <img src={ImgBook} alt="Books" class="img-responsive"/>
                </div>
            </div>
        )
    }
}