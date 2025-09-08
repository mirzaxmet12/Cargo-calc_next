"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Customer() {

    return (
        <section id="customer" >
            <div className="container  reveal">
                <h1 className="title">
                    Что говорят о нас?
                </h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    keyboard={{ enabled: true }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    }}
                    modules={[Navigation, Pagination, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                                <img src="image 2.png" alt="img" />
                                <p>
                                    Раньше мы вели учёт вручную, и на обработку одной заявки уходило до 30 минут. С
                                    новым
                                    приложением всё автоматизировано — время сократилось в 3 раза, ошибки исчезли.
                                    Отчёты
                                    формируются в один клик, а дашборд помогает контролировать склад в реальном времени.
                                    Отличное
                                    решение для нашей сферы!
                                </p>
                                <div className="card_row">
                                    <span>
                                        <img src="c74eb4fa83f1606fa21a1ca312243f9284535627.png" alt="img" />
                                    </span>
                                    <div>
                                        <h2>Алексей Петров</h2>
                                        <p>Руководитель BLG Logistics</p>
                                    </div>

                                </div>
                            </div></SwiperSlide>
                  
                    <div className="swiper_row">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </Swiper>
               
            </div>
        </section>
    )
}

export default Customer