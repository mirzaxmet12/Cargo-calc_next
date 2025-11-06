import React from 'react'


function Home() {

    return (
        <section id="home">
            <div className="container home animate__animated animate__fadeInUp">
                <div className="home-content">
                    {/* <div className="content-title"></div> */}
                    <h1>Автоматизация магазинов и складов</h1>
                    <p>Мы разработали удобное и современное решение для автоматизации торговли и складского учёта.</p>
                    <p>Система помогает контролировать движение товаров, управлять продажами и печатать чеки и штрих-коды — всё в одном месте.</p>
                    <a href="#demo">Попробовать сейчас</a>
                </div>
                <div className="home-media">
                    <div className="home_img">
                        <img src="Objects.png" alt="img"/>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default Home
