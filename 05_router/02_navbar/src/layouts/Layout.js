import Header from '../components/Header'
import NavBar from '../components/Navbar'
import {Outlet} from 'react-router-dom'


// Outlet : react-router-dom에서 지원하는 기능으로
//          부모인 Layout 컴포넌트가 렌더링 되는 순간
//          자식 경로의 컴포넌트를 바꿔치기 해서 랜더링 할 수 있다.
function Layout() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet/>
            {/* Outlet */}
        </>
    )
};

export default Layout;