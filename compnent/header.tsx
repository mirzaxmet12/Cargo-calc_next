"use client";
import React, { useState, useEffect } from "react";

function Header() {
    const [active, setActive] = useState(false);

    // 🔹 Smooth scroll 
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    // 🔹 Nav link 
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setActive(false);
    };

    return (
        <header className="header">
            <div className="container header-bar">
                <div className="header_logo">
                    <img src="Frame 83.png" alt="img" />
                    <a className="brand" href="#">
                        Cargo Calc
                    </a>
                </div>

                {/* Desktop nav */}
                <nav className="header-center">
                    <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="nav-link">Главная</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="nav-link">О нас</a>
                    <a href="#features" onClick={(e) => handleNavClick(e, "#features")} className="nav-link">Функционал</a>
                    <a href="#contacts" onClick={(e) => handleNavClick(e, "#contacts")} className="nav-link">Контакты</a>
                </nav>

                <div>
                    <a href="#demo" className="btn btnDemo">Получить демо</a>
                    <input type="checkbox" name="nav-toggle" id="nav-toggle" checked={active} readOnly />
                    <label
                        htmlFor="nav-toggle"
                        className="burger"
                        onClick={() => setActive(!active)}
                    >
                        <div className={`plate plate4 ${active ? "active" : ""}`}>
                            <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path className="line line1" d="M 50,35 H 30" />
                                <path className="line line2" d="M 50,35 H 70" />
                                <path className="line line3" d="M 50,50 H 30" />
                                <path className="line line4" d="M 50,50 H 70" />
                                <path className="line line5" d="M 50,65 H 30" />
                                <path className="line line6" d="M 50,65 H 70" />
                            </svg>
                            <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                                <path className="line" d="M 34,32 L 66,68" />
                                <path className="line" d="M 66,32 L 34,68" />
                            </svg>
                        </div>
                    </label>

                    {/* Mobile nav */}
                    <nav className={`nav ${active ? "open" : ""}`}>
                        <ul>
                            <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")}>Главная</a></li>
                            <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>О нас</a></li>
                            <li><a href="#contacts" onClick={(e) => handleNavClick(e, "#contacts")}>Контакты</a></li>
                            <li><a href="#features" onClick={(e) => handleNavClick(e, "#features")}>Функционал</a></li>
                            <li><a href="#benifist" onClick={(e) => handleNavClick(e, "#benifist")}>Преимущества проет</a></li>
                            <li><a href="#customer" onClick={(e) => handleNavClick(e, "#customer")}>Отзывы клиентов</a></li>
                            <li><a href="#demo" onClick={(e) => handleNavClick(e, "#demo")}>Демо</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </header>
    );
}

export default Header;
