
function Demo() {

    return (
        <section id="demo" >
        <div className="container demo reveal">
            <h1 className="title">Опробовать демо</h1>
            <div className="demo-card">
                <div className="demo-info">
                    <h1>Попробуйте сами — это удобно!</h1>
                    <p>Никаких рисков: просто оставьте заявку и получите доступ к демо-версии.</p>
                    <p>Оцените, как легко автоматизировать работу склада.</p>
                    <div>
                        <img src="Frame 117 (1).png" alt="img"/>
                        <img src="Frame 118.png" alt="img"/>
                    </div>
                </div>
                <form className="form card" action="#" method="post">
                    <div className="form-row one">
                        <div>
                            <label htmlFor="fname">Имя</label>
                            <input id="fname" name="fname" type="text" placeholder="Введите имя" required />
                        </div>
                        <div>
                            <label htmlFor="lname">Фамилия</label>
                            <input id="lname" name="lname" type="text" placeholder="Введите фамилию" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div>
                            <label htmlFor="company">Название компании</label>
                            <input name="email" id="company" type="text" placeholder="Введите название компании"
                                required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="Введите почту" required />
                        </div>
                        <div>
                            <label htmlFor="phone">Телефон</label>
                            <input id="phone" name="phone" type="tel" placeholder="+998 - xxx - xx - xx" required />
                        </div>
                    </div>
                    <button className="btn" type="submit">Отправить заявку</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Demo