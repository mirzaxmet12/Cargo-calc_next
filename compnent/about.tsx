import React from 'react'

function About() {

    return (
        <section id="about">
            <div className="container about animate__animated animate__fadeInUp reveal">
                <h1 className="title">О нас</h1>
                <div className="about_card">
                    <div className="card">
                        <img src="Frame 90 (1).png" alt=""/>
                        <p>Мы — команда IT-специалистов с опытом в разработке бизнес-решений для логистики и складской
                            отрасли.</p>
                        <span></span>
                    </div>
                    <div className="card">
                        <img src="cube.png" alt=""/>
                        <p>Наша цель — упростить и ускорить работу таможенных складов с помощью современных технологий.
                            Мы
                            понимаем реальные задачи бизнеса и предлагаем удобные инструменты, которые экономят время,
                            снижают ошибки и повышают эффективность.</p>
                        <span></span>
                    </div>
                    <div className="card">
                        <img src="screen-share (1).png" alt=""/>
                        <p>Наше приложение уже внедряется на действующих складах и успешно помогает автоматизировать
                            повседневные процессы — от расчета тарифов до учёта заявок.</p>
                        <span></span>
                    </div>

                </div>
            </div>
        </section> 
    )
}

export default About
