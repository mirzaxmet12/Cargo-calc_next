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
                    spaceBetween={18}
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

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
    </div>

</div>
</div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
    </div>

</div>
</div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
    </div>

</div>
</div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
    </div>

</div>
</div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
    </div>

</div>
</div></SwiperSlide>
                    <SwiperSlide> <div className="p-6 card">

<p>
Раньше мы вели склад вручную в таблицах, и это постоянно приводило к ошибкам и потерям. С переходом на Smart-Sawda учёт стал прозрачным, сотрудники тратят меньше времени на инвентаризацию, а я всегда вижу реальные остатки. Это сильно упростило работу и помогло нам избежать лишних расходов.</p>
<div className="card_row">
    <span>
        <img src="image 1.png" alt="img" />
    </span>
    <div>
        <h2>Игорь Смирнов</h2>
        <p>Руководитель TexnoMarket</p>
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