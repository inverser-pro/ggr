import React from "react";
import SvgIcon from "./SvgIcon";

const ButtonsIn = ({classes='',menu})=>{
    return  <span className="fx gap">
        <button className={`${classes} fx ac gap btn br w1 fwb MPBtnFree MPBtnFreeBlack`} role="button">
            <SvgIcon hash="sigin" width="20"/>
            Вход
            </button>
        <button className={`${classes} fx ac gap btn br w1 fwb MPBtnLogin`} role="button">
            <SvgIcon hash="action" width="20"/>
            Акции
        </button>
        <button
            className="pr"
            aria-label="Open menu"
            onClick={menu}
            role="button"
        >
            <img width="40" loading="lazy" src="/media/tech/btn-menu.svg" alt="Menu Button"/>
        </button>
    </span>;
}

export default ButtonsIn;