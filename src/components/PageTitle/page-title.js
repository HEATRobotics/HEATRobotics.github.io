import React from 'react';
import './page-title.css';

function PageTitle({ title, description }) {
    return (
        <div className="page-title">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
}

export default PageTitle;
