import React from 'react';
import '../css/footer.css'

const Footer = () => {
  return (
    <div className="site-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <p className="text-center text-white">
              Copyright © {new Date().getFullYear()} <a href="#">Kind Heart</a> Charity Org. | Powered by   
              <a href="https://hanannawaz.me" target="_blank">
                 hanannawaz.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
