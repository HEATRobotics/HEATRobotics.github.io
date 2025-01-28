import React, {useEffect, useState} from 'react';
import SkewedDiv from "../../components/Container/container";
import SponsorSlideshow from "../../components/SponsorSlideShow/sponsor-slideshow";
import './Sponsors.css';
import PageTitle from "../../components/PageTitle/page-title";
import Parallax from "../../components/Parallax/parallax";


function Sponsors() {
    const [sponsorData, setSponsorData] = useState([]);
    const [loading, setLoading] = useState(true);


    const loadSponsors = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/json/sponsors.json`);
            const data = await response.json();
            setSponsorData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error loading sponsors:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        loadSponsors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reset-styles">

            <PageTitle
                title="Sponsors"
                description="Interested in supporting Heat Robotics and our mission to assist firefighters with innovative robotic technology? We're always open to discussing partnership opportunities, sponsorships, and collaborations. By joining us, you'll be helping to shape the future of wildfire recovery and emergency response. To connect with our team, please reach out via email at [email@example.com]. Whether you're looking to learn more about our project or explore how your organization can get involved, we're excited to hear from you and work together to make a lasting impact.">
            </PageTitle>

            <Parallax image={`wildfire-1.jpg`} />

            <SkewedDiv>
                {sponsorData.map((data, index) => (
                    <SponsorSlideshow key={index} tier={data.tier} sponsors={data.sponsors} />
                ))}
            </SkewedDiv>

            <Parallax image={`wildfire-3.jpg`} />

        </div>
    );
}

export default Sponsors;


