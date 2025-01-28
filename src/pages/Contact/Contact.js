import React from 'react';
import SkewedDiv from "../../components/Container/container";
import PageTitle from "../../components/PageTitle/page-title";
import Parallax from "../../components/Parallax/parallax";


function Contact() {
    return (
        <div className="reset-styles">
            <PageTitle title="Contact Us"
            description="Have questions or want to get involved? Reach out to Heat Robotics! We’re excited to connect with others who share our passion for robotics and public safety."></PageTitle>
            <Parallax image={`wildfire-4.jpg`} />

            <SkewedDiv>
                <h3>Contact Us</h3>
                <p>Have questions or want to learn more about EMBR and Heat Robotics? We'd love to hear from you! Whether you're a firefighter, sponsor, or robotics enthusiast, feel free to reach out. You can contact us via email at <a href="mailto:team.heatrobotics@gmail.com" target={"_blank"}>team.heatrobotics@gmail.com</a> or follow us on our social media channels for the latest updates. We’re here to help and share more about our mission to assist firefighters in wildfire recovery.</p>

                <br/>

                <h3>Join our team</h3>
                <p>Are you passionate about robotics, technology, and helping communities? Heat Robotics is always looking for dedicated individuals to join our team. Whether you’re an engineer, designer, or simply eager to contribute, we welcome fresh ideas and new talents. Together, we can make a difference in the fight against wildfires. Get involved and be a part of something impactful by reaching out to us at <a href="mailto:team.heatrobotics@gmail.com" target={"_blank"}>team.heatrobotics@gmail.com</a>.</p>

            </SkewedDiv>

            <Parallax image={`wildfire-3.jpg`} />
        </div>
    );
}

export default Contact;