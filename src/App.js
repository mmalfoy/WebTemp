import { BrowserRouter ,Route, Routes} from "react-router-dom";
import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import MyTravelMain from './MyTravel/MyTravelMain'; 



function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="app">
        <Routes>
            <Route exact path="/mypage" element={<MyTravelMain />}>       
        </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
