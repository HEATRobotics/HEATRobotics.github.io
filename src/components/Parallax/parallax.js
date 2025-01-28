import React from 'react';
import './parallax.css';

function Parallax({ image }) {
    return (
        <div className="parallax" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background/${image})` }}></div>
    );
}

export default Parallax;
