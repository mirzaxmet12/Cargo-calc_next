"use client";
import About from "@/compnent/about";
import Benifist from "@/compnent/benifist";
import Contacts from "@/compnent/contacts";
import Customer from "@/compnent/customer";
import Demo from "@/compnent/demo";
import DemoModal from "@/compnent/demoModal";
import Features from "@/compnent/features";
import Footer from "@/compnent/footer";
import Header from "@/compnent/header";
import Home from "@/compnent/home";
import { useEffect } from "react";


export default function HomePage() {
    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll(".reveal");

            reveals.forEach((el) => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add("animate__animated", "animate__fadeInUp");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        window.addEventListener("load", revealOnScroll);

        // cleanup
        return () => {
            window.removeEventListener("scroll", revealOnScroll);
            window.removeEventListener("load", revealOnScroll);
        };
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <Home />
            <About />
            <Features />
            <Benifist />
            <Demo />
            <Customer />
            <Contacts />
             <DemoModal/> 
            <Footer />
        </div>
    );
}
