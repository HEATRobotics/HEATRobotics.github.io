import React from "react";
import "./member.css"
import RoundedImage from "../RoundedImage/rounded-image";
function Member({ img, name, position, link }) {

    const linkHandler = (e) => {
        if (link) { // Prevent members without links from being clicked.
            window.open(link, "_blank");
        }
    }

    return (
        <div className="team-member" onClick={ linkHandler }>
            <RoundedImage img={img} path={"team-photos"} placeholder={name}></RoundedImage>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
}

export default Member;
