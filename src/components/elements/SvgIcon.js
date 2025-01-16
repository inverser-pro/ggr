import React from "react";
const SvgIcon = ({hash, width=24, class_=''})=>(
  <svg className={`svg ${class_}`} width={width} height={width}>
      <use xlinkHref={`/media/i.svg#${hash}`}></use>
  </svg>
)
export default SvgIcon