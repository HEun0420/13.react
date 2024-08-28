import {NavLink} from "react-router-dom"
import navStyle from "./Navbar.module.css"

function Navbar(){

    const highLightStlye = {
        backgroundColor: 'darkslategray',
        color: 'orange'
    }

    const unHighLightStlye ={
        color: 'white',
        fontWeight: 'ligt-bold'
    }

    return(
        <div className={navStyle.NavbarList}>
        {/* <div> */}
            <ul>
                <li><NavLink to="/" style={({isActive})=> isActive? highLightStlye : unHighLightStlye }>Home</NavLink></li>
                <li><NavLink to="/MyPage" style={({isActive})=> isActive? highLightStlye : unHighLightStlye }>소개</NavLink></li>
                <li><NavLink to="/Menu" style={({isActive})=> isActive? highLightStlye : unHighLightStlye }>메뉴 목록</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;