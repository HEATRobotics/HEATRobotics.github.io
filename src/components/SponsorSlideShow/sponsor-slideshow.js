import React, {useEffect, useState} from 'react';
import './sponsor-slideshow.css';
import RoundedImage from "../RoundedImage/rounded-image";

function SponsorSlideshow({ tier, sponsors }) {
    const [visibleIndex, setVisibleIndex] = useState(0); // Default visible index
    const [transitioningIndex, setTransitioningIndex] = useState(null);
    const [direction, setDirection] = useState(null); // Tracks swipe direction
    const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds
    const tierClass = tier.toLowerCase(); // Use tier name in lowercase for class

    let interacted = false;

    useEffect(() => {
        // Clear the interval when component unmounts or user interacts
        const autoSlide = setInterval(() => {
            handleNext();
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(autoSlide);
    }, [interacted, visibleIndex]);

    const handleNext = () => {
        interacted = true;
        setDirection("left");
        setTransitioningIndex(visibleIndex);
        setVisibleIndex((prev) => (prev < sponsors.length - 1 ? prev + 1 : 0));
    };

    const handlePrevious = () => {
        interacted = true;
        setDirection("right");
        setTransitioningIndex(visibleIndex);
        setVisibleIndex((prev) => (prev > 0 ? prev - 1 : sponsors.length - 1));
    };

    const handleAnimationEnd = () => {
        setTransitioningIndex(null); // Clear transitioning sponsor after animation
    };

    return (
        <div className={`sponsor-container ${tierClass}`}>
            <h2>{tier}</h2>
            {/* Previous button */}
            <div className={'sponsor-row'}>
                <button onClick={handlePrevious} className="nav-button left-button">
                    &lt;
                </button>

                {/* Sponsor content */}
                <div className="sponsor-content">
                    {sponsors.map((sponsor, index) => {
                        const isVisible = index === visibleIndex;
                        const isTransitioning = index === transitioningIndex;
                        let animationClass = "";

                        if (isTransitioning) {
                            animationClass = direction === "left" ? "slide-out-right" : "slide-out-left";
                        } else if (isVisible) {
                            animationClass = direction === "left" ? "slide-in-left" : "slide-in-right";
                        }

                        return (
                            <div
                                key={index}
                                className={`sponsor ${animationClass} ${index !== 0 ? "translate-up" : ""}`}
                                onAnimationEnd={isTransitioning ? handleAnimationEnd : undefined}
                                style={{ display: isVisible || isTransitioning ? "block" : "none"}}
                            >
                                <h3>{sponsor.name}</h3>
                                <RoundedImage
                                    img={sponsor.logo}
                                    path={"sponsor-photos"}
                                    placeholder={sponsor.name}
                                />
                                <p>{sponsor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Next button */}
                <button onClick={handleNext} className="nav-button right-button">
                    &gt;
                </button>
            </div>

        </div>
    )
}


export default SponsorSlideshow;
