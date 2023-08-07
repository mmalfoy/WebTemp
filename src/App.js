import { BrowserRouter ,Route, Routes} from "react-router-dom";
import './App.css';
import React from 'react';
import MyTravelMain from './MyTravel/MyTravelMain'; 



function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Routes>
          <Route exact path="/mypage" element={<MyTravelMain />}>       
      </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
