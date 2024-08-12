import React from "react";
import {Link} from "gatsby"
import ButtonsIn from "./elements/ButtonsIn.js";
import Nav from "./elements/Nav";

const Header = ({handleOverlayMenu})=>{
    console.log('HEADER JS');

    return  <div className="container pf z4 fx fsb hTop">
        <Link to="/" className="fx ac mainHref">
            <img className="hTopLogo" loading="lazy" width="158" src="/media/logo.svg" alt="Logo Hype2"/>
        </Link>
        <div className="fx768 ac">

            <Nav 
                classes={'dnB1440 headerNav'}
            />

            <ButtonsIn
              classes={'dn375'}
            />
            <button
                className="pr"
                aria-label="Open menu"
                onClick={handleOverlayMenu}
                role="button"
            >
                <img width="40" loading="lazy" src="/media/tech/btn-menu.svg" alt="Menu Button"/>
            </button>
        </div>
        <div className="pa fullpageStrips">
            <q className="pa"></q>
            <div></div>
        </div>
    </div>;
}

export default Header;