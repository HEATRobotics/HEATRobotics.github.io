import React from 'react';
import './parallax.css';

const getBackgroundImage = (image) => {
    const basePath = `${process.env.PUBLIC_URL}/assets/background/`;
    const screenWidth = window.innerWidth;

    let imageSize;
    if (screenWidth > 1920) {
        imageSize = "1920";
    } else if (screenWidth > 1200) {
        imageSize = "1200";
    } else {
        imageSize = "800";
    }
    console.log("Loaded image: ", `${basePath}${image}-${imageSize}.webp`);
    return `${basePath}${image}-${imageSize}.webp`;
};

function Parallax({ image }) {
    return (
        <div
            className="parallax"
            style={{backgroundImage: `url(${getBackgroundImage(image)})`}}
        ></div>
    );
}

export default Parallax;
