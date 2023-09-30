import React from 'react';

const Socials = () => (
  <div className="flex flex-col">
    <div className="flex flex-row place-content-between">
      <button type="button">
        <i className="fa-brands fa-twitter mx-1 hover:text-twitter-blue text-gray-600" />
      </button>
      <button type="button">
        <i className="fa-brands fa-facebook mx-1 hover:text-facebook-blue text-gray-600" />
      </button>
      <button type="button">
        <i className="fa-brands fa-instagram mx-1 hover:text-instagram-purple text-gray-600" />
      </button>
      <button type="button">
        <i className="fa-brands fa-tiktok mx-1 hover:text-tiktok-black text-gray-600" />
      </button>
      <button type="button">
        <i className="fa-brands fa-pinterest mx-1 hover:text-pinterest-red text-gray-600" />
      </button>
    </div>
    <div>
      <p className="text-xs">2023 © Microverse</p>
    </div>
  </div>
);

export default Socials;
