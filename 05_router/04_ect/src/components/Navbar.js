import {NavLink, Link} from "react-router-dom";

function Navbar (){
    
    const selectedLight={
        backgroundColor: 'lightgray',
        color: 'darkgreen'
    }

    return(
        <div>
            <ul>
                <li><NavLink style={({isActive}) => isActive? selectedLight: undefined} to="/">메인</NavLink></li>
                <li><NavLink style={({isActive}) => isActive? selectedLight: undefined} to="/Login">로그인페이지</NavLink></li>
                <li><NavLink style={({isActive}) => isActive? selectedLight: undefined} to="/MyPage">마이페이지</NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;
