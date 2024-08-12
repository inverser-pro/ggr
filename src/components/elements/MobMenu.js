import React from "react";
import ButtonsIn from "./ButtonsIn";
import Nav from "./Nav";
import {Link} from "gatsby"

const MobMenu = ({menuOpen,callback}) =>{
    const mobMenuCl=menuOpen?'mobMenuCl':''

    return <div className={`pf z5 fx fdc fsb mobMenu dn1440 ${mobMenuCl}`}>
        <div className="fx fsb container hTop mobMenuDiv">
            <Link to="/"><img className="hTopLogo" width="137" src="/media/logo-circle.svg" alt="Logo Hype2"/></Link>
            <div className="fx gap">
                <ButtonsIn
                    classes={'dn375'}
                />
                
                <button
                    className="pr hTopBtn"
                    aria-label="Close menu"
                    onClick={callback}
                    role="button"
                >
                    <img width="30" src="/media/btn-close.svg" alt="Close Menu Button"/>
                </button>
            </div>
        </div>
        <Nav />
        <div className="vshd768 container mobMenuDiv mobMenuBtns">
            <ButtonsIn/>
        </div>
    </div>
}

export default MobMenu