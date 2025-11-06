import "./globals.css";


export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    
    return (
        <html lang="ru">
            <head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Urbanist:wght@100..900&display=swap"
                    rel="stylesheet"
                />

                {/* Animate.css */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />

                {/* Swiper CSS */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
            </head>
            <body>
                {children}
                </body>
           
      
        </html>
    );
}
