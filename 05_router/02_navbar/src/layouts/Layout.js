import Header from '../components/Header'
import NavBar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

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