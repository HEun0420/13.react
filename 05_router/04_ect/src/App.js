import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import MyPage from "./pages/Mypage";
import Login from "./pages/Login";
import Layout from "./layouts/Layout";
import Error from './pages/Error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='*' element={<Error />} />
        </Route>
        {/* <Route path='*' element={<Error/>}/> */}
        {/* 에러페이지 레이아웃을 안넣고 싶다면 밖으로 꺼내기 */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
