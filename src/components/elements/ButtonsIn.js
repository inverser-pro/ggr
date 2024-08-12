import React from "react";

const ButtonsIn = ({classes=''})=>{
    return  <>
        <button className={`${classes} db btn br w1 MPBtnFree MPBtnFreeBlack`} role="button">Free Trial</button>
        <button className={`${classes} db btn br w1 cf MPBtnLogin`} role="button">Sign up / Log in</button>
    </>;
}

export default ButtonsIn;