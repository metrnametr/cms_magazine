import React from 'react';

import './style.scss';

const Loader = () => (
  <div className="loader">
    <div className="lds-ripple">
        <div />
        <div />
    </div>
  </div>
);

export default Loader;
