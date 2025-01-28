import React, {useEffect, useState} from 'react';
import './contrainer.css'

const SkewedDiv = ({ children }) => {

  return (
      <div>
        <div className="container">
            <div className="container-data">
              {children}
            </div>
        </div>
      </div>
  );
};

export default SkewedDiv;
