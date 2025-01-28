import React, { useState, useEffect } from "react";
import SkewedDiv from "../../components/Container/container";
import Group from "../../components/MemberGroup/member-group";
import "./OurTeam.css";
import PageTitle from "../../components/PageTitle/page-title";
import Parallax from "../../components/Parallax/parallax";

function OurTeam() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadGroups = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/json/members.json`);
            const data = await response.json();
            setGroups(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading groups:", error);
            setLoading(false);
        }
    };

    // Fetch the groups data on component mount
    useEffect(() => {
        loadGroups();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reset-styles">
            <PageTitle
                title="Our Team"
                description="Meet the passionate and skilled individuals behind Heat Robotics. Our team is dedicated to building cutting-edge technology to support firefighters and improve safety in emergency situations."
            />

            <Parallax image="wildfire-5.jpg" />

            <SkewedDiv>
                {groups.map((group, i) => (
                    <Group key={i} title={group.title} members={group.data} />
                ))}
            </SkewedDiv>

            <Parallax image="wildfire-1.jpg" /> {/* Different image for the second parallax */}
        </div>
    );
}

export default OurTeam;
