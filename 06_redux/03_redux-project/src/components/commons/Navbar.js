import {NavLink} from 'react-router-dom'
import pokemons from '../../pages/Pokemons';
import Main from '../../pages/Main';

function Navbar(){

    return(
        <div>
            <ul>
                <li><NavLink to = '/'>메인으로</NavLink></li>
                <li><NavLink to = '/pokemons'>포켓몬 목록 보기</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;