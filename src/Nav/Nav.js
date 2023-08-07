import { Link } from "react-router-dom";
import "./Nav.css";
import React from "react";
import { ReactComponent as Logo } from "./Traveler_logos.svg";

function Nav() {
    return (
        <div className="nav">
            <Link to="/main" style={{ textDecoration: "none" }}>
                <div className="nav-logo">
                    <Logo className="nav-logo-image" />
                </div>
            </Link>
            <div className="nav-menu">
                <Link to="/find" style={{ textDecoration: "none" }}>
                    <button className="nav-menu-item find-travel">
                        <div className="nav-menu-box">여행 찾기</div>
                    </button>
                </Link>
                <Link to="/story" style={{ textDecoration: "none" }}>
                    <button className="nav-menu-item story">
                        <div className="nav-menu-box">스토리</div>
                    </button>
                </Link>
                <Link to="/note" style={{ textDecoration: "none" }}>
                    <button className="nav-menu-item my-note">
                        <div className="nav-menu-box">나의 노트</div>
                    </button>
                </Link>
                <Link to="/mypage" style={{ textDecoration: "none" }}>
                    <button className="nav-menu-item my-travel">
                        <div className="nav-menu-box">나의 여행</div>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
