import React from 'react';
import './Footer.css';
import footer_logo from './image/footer_logo.png';
import vn from './image/vn.gif';
import us from './image/us.gif';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img alt="vn" src={vn}/>
                <img alt="us" src={us}/>
                <h5>© 2019 DOMINO'S PIZZA VIETNAM | PRIVACY POLICY</h5>
            </div>
            <div className="footer__right">
                <div className="hotline">
                    <h3>HOTLINE</h3>
                    <h4>19008198</h4>
                </div>
                <img alt="footer_logo" src={footer_logo} />
            </div>
        </div>
    )
}

export default Footer
