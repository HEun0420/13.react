import {NavLink, Link} from 'react-router-dom';


function NavBar(){

const activeStyle = {
    backgroundColor : 'orangered',
}
    return(
        <div>
            <ul>
                {/* <li><a href={"/"}>Home</a></li>
                <li><a href={"/MyPage"}>마이페이지</a></li>
                <li><a href={"/Login"}>로그인페이지</a></li> */}
            
            {/* <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/MyPage"}>마이페이지</Link></li>
            <li><Link to={"/Login"}>로그인페이지</Link></li> */}


            <li><NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
            <li><NavLink to="/MyPage" style={({isActive}) => isActive? activeStyle : undefined}>마이페이지</NavLink></li>
            <li><NavLink to="/Login" style={({isActive}) => isActive? activeStyle : undefined}>로그인페이지</NavLink></li>
            
            
            </ul>
        </div>
    )
};

export default NavBar;