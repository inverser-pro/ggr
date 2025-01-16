import React from "react";
import {Link} from "gatsby"
import ButtonsIn from "./elements/ButtonsIn.js";
import Nav from "./elements/Nav";

const Header = ({handleOverlayMenu})=>{
    console.log('HEADER JS');

    return  <div className="container w1 pf z4 fx fsb ac gap2 hTop">
        <Link to="/" className="fx ac mainHref">
            <img className="hTopLogo" loading="lazy" width="158" src="/media/logo.svg" alt="Logo Hype2"/>
        </Link>
        <Nav 
            classes={'dnB1440 headerNav'}
        />

        <ButtonsIn
            classes={'dn375'}
            menu={handleOverlayMenu}
        />
    </div>;
}

export default Header;