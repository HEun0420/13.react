import {NavLink} from "react-router-dom"

function Navbar(){

    const highLightStlye = {
        backgroundColor: 'yellow',
        color: 'orange'
    }

    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive})=> isActive? highLightStlye : undefined }>Home</NavLink></li>
                <li><NavLink to="/MyPage" style={({isActive})=> isActive? highLightStlye : undefined }>소개</NavLink></li>
                <li><NavLink to="/Menu" style={({isActive})=> isActive? highLightStlye : undefined }>메뉴 목록</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;