"use client";
import { PatternFormat } from "react-number-format";
import { useState } from "react";

function Demo() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      first_name: formData.get("fname"),
      second_name: formData.get("lname"),
      email: formData.get("email"),
      phone_number: formData.get("phone"),
    };

    try {
      const res = await fetch("https://cargo-calc.uz/api/v1/main_page/form/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
console.log(res);

      if (res.ok) {
        setAlert({ type: "success", text: "Заявка успешно отправлена ✅" });
        form.reset();
      } else {
        setAlert({ type: "error", text: "Ошибка при отправке ❌" });
      }
    } catch (error) {
      setAlert({ type: "error", text: "Сервер недоступен ❌" });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <section id="demo">
      <div className="container demo reveal">
        <h1 className="title">Хотите опробовать демо?</h1>
        <div className="demo-card">
          <div className="demo-info">
            <h1>Попробуйте <span>Smart-Sawda</span> в действии — без обязательств и оплаты</h1>
            <p>
            <img src="Search.png" alt="img" />
            Проведите тестовый учёт товара
            </p>
            <p>
            <img src="Grid Four 02.png" alt="img" />
            Cистема показывает остатки в реальном времени</p>
            <p>
            <img src="Shape.png" alt="img" />
            Сформируйте пробный отчёт и оцените аналитику</p>
          </div>

          <form className="form card" onSubmit={handleSubmit}>
            {/* <div className="form-row one">
              <div>
                <label htmlFor="fname">Имя и фамилия</label>
                <input id="fname" name="fname" type="text" placeholder="Введите имя и фамилию" required />
              </div>
              <div>
                <label htmlFor="lname">Фамилия</label>
                <input id="lname" name="lname" type="text" placeholder="Введите фамилию" required />
              </div>
            </div> */}

            <div className="form-row">
            <div>
                <label htmlFor="fname">Имя и фамилия</label>
                <input id="fname" name="fname" type="text" placeholder="Введите имя и фамилию" required />
              </div>
              <div>
                <label htmlFor="company">Название компании</label>
                <input id="company" name="company" type="text" placeholder="Введите название компании" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Введите почту" required />
              </div>
              <div>
                <label htmlFor="phone">Телефон</label>
                <PatternFormat
                  id="phone"
                  name="phone"
                  format="+998 (##) ###-##-##"
                  allowEmptyFormatting
                  mask="_"
                  placeholder="+998 (__) ___-__-__"
                  className="phone-input"
                  required
                />
              </div>
            </div>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        </div>
      </div>

      {alert && (
        <div className={`alert ${alert.type}`}>
          {alert.text}
        </div>
      )}

      <style jsx>{`
        .alert {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 20px;
          border-radius: 8px;
          color: #fff;
          font-weight: 600;
          animation: slideUp 0.3s ease;
          z-index: 1000;
        }
        .alert.success {
          background: #4caf50;
        }
        .alert.error {
          background: #f44336;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 40px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </section>
  );
}

export default Demo;
