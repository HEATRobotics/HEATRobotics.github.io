import React from "react";
import './rounded-image.css';
function RoundedImage({ img, path, placeholder }) {
    return (
        <div className="rounded-image">
            {img ? (
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${path}/${img}`}
                    alt={`${placeholder}'s Picture`}
                />
            ) : (
                placeholder && <span>{placeholder.split(" ").map(word => word[0]).join("").toUpperCase()}</span>
            )}
        </div>
    );
}

export default RoundedImage;
