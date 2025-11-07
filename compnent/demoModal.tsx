"use client";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";

export default function DemoModal() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 10000);
        return () => clearTimeout(timer);
    }, []);

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

            if (res.ok) {
                setAlert({ type: "success", text: "Заявка успешно отправлена ✅" });
                form.reset();
                setOpen(false);
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
        <>
            {open && (
                <div className="demo modal-overlay">
                    <div className="modal">
                        <button className="close-btn" onClick={() => setOpen(false)}>
                            ✕
                        </button>
                        <h2>Опробовать демо</h2>
                        <form className="form card" 
                        // onSubmit={handleSubmit}
                        >
                            {/* <div className="form-row one">
                                <div>
                                    <label htmlFor="fname">Имя</label>
                                    <input id="fname" name="fname" type="text" placeholder="Введите имя" required />
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
                                <label htmlFor="company">Название компании</label>
                                <input id="company" name="company" type="text" placeholder="Введите название компании" required />
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
            )}

 
            {alert && (
                <div className={`bottom-alert ${alert.type}`}>
                    {alert.text}
                </div>
            )}
        </>
    );
}
