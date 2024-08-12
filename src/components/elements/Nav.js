import React from "react"
import {Link} from "gatsby"

const Nav = ({classes})=>{
    return <nav className={`mobMenuDiv mobMenuNav ${classes}`}>
        <ul className="fx fdc">
            <li>
                <h3>
                    <Link to="/">Главная</Link>
                    <Link to="/car-glue">Оклейка автомобилей</Link>
                    <Link to="/car-detailing">Детейлинг автомобилей</Link>
                    <Link to="/our-projects">Галерея работ</Link>
                </h3>
            </li>
        </ul>
    </nav>
}

export default Nav