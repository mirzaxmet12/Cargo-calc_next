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
                        <h2>TransLogistics</h2>
                        <p>
                            Раньше оформление и согласование таможенных заявок занимало по полдня. Теперь система автоматически проверяет данные, формирует отчёты и уведомляет сотрудников. Время сократилось в 4 раза.</p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-38-35.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Ирина Ковалёва</h2>
                                <p> Руководитель отдела ВЭД</p>
                            </div>

                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                        <h2>CargoLine</h2>
                        <p>
                            До внедрения программы приходилось вручную сверять накладные и остатки на складе. Теперь данные обновляются в реальном времени, ошибки исключены.
                        </p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-39-43.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Дмитрий Орлов</h2>
                                <p>Начальник склада</p>
                            </div>

                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                        <h2>EuroTrade Customs</h2>
                        <p>
                            Раньше мы теряли время на поиск документов и заполнение форм. Сейчас всё в единой системе: от регистрации заявки до передачи в таможню.
                        </p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-41-25.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Анна Миронова</h2>
                                <p>Таможенный брокер</p>
                            </div>

                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                        <h2> PortService</h2>
                        <p>
                            Старые таблицы часто давали сбои, из-за чего приходилось переделывать отчёты. Новая программа формирует их в один клик и сохраняет в архив.
                        </p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-43-37.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Сергей Волков</h2>
                                <p>Логист</p>
                            </div>

                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                        <h2>Global Freight</h2>
                        <p>
                            Система помогает отслеживать все грузы, проходящие через таможню, и контролировать складские остатки. Теперь мы всегда знаем, где находится каждая партия.
                        </p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-44-15.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Мария Соколова</h2>
                                <p>Менеджер по логистике</p>
                            </div>

                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">
                        <h2>TradeExpress</h2>                 
                               <p>
                            Раньше заявки оформляли на бумаге и пересылали сканами. Сейчас всё онлайн, с электронной подписью и автоматической проверкой.
                        </p>
                        <div className="card_row">
                            <span>
                                <img src="photo_2025-09-10_20-45-09.jpg" alt="img" />
                            </span>
                            <div>
                                <h2>Алексей Громов</h2>
                                <p>Координатор по ВЭД</p>
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