import React , {useState} from 'react';
import Header from './Header';

const Container = ({children}) =>{
    const [menuOpen, setmenuOpen] = useState(false)
          , handleOverlayMenu=()=>setmenuOpen(prev => {
            return !prev
          });

    return (
    <div className="ovh">
        <div className="container">
            <Header
                handleOverlayMenu={handleOverlayMenu}
            />
            <div>{children}</div>
        </div>
        {/* <MobMenu
            menuOpen={menuOpen}
            callback={handleOverlayMenu}
        /> */}
    </div>
    )
}
export default Container
