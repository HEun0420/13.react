import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Menu from './pages/Menu';
import MenuDetails from "./pages/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/Menu'>
          <Route index element={<Menu/>}/>
          {/* :menuCode = pathVarialbe */}
          <Route path=":menuCode" element={<MenuDetails/>}/>
          <Route path="search" element={<MenuSearchResult/>}/>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
