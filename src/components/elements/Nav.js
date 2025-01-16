import React from "react"
import {Link} from "gatsby"

const Nav = ({classes})=>{
    return <nav className={`mobMenuDiv mobMenuNav ${classes}`}>
        <ul className="fx ac gap1">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/car-glue">Оклейка автомобилей</Link></li>
            <li><Link to="/car-detailing">Детейлинг автомобилей</Link></li>
            <li><Link to="/our-projects">Галерея работ</Link></li>
        </ul>
    </nav>
}

export default Nav