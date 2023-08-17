import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyTravelMain from "./MyTravel/MyTravelMain"

function App() {
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<MyTravelMain />} />
            <Route path="/mypage" element={<MyTravelMain />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
    );
}

export default App;