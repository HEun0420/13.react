import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
