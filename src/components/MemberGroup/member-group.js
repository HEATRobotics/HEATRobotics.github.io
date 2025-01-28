import React from "react";
import Member from "../Member/member";
import "./member-group.css"

function Group({ title, members }) {

    return (
        <div className="team-group">
            <h2>{title}</h2>
            <br />
            <div className="team-group-flex">
                {members.map((member, i) => (
                    <Member key={i} img={member.img} name={member.name} position={member.position} link={member.linkedInURL} />
                ))}
            </div>
        </div>
    );
}

export default Group;
