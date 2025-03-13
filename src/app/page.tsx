import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="https://instagram.fubt3-1.fna.fbcdn.net/v/t51.2885-19/465139448_1617668455773947_216651395761797997_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fubt3-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2AHkAzZTSUI-4ySjqep4aNoMBJFkXN-WY4qU_04SbNCasPW-gI1Xrf3FR03p5_vjuGAltimTInVjmk-4hY4Y7Vjw&_nc_ohc=F8sT3luCcS4Q7kNvgHhWy3P&_nc_gid=4b013f1aa6c847bbb33c6f43105e6b57&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AYHskEA-i4SX7bDLQ-TPslAjpHHzeuE4qTprxjpoHlZAfg&oe=67D8E471&_nc_sid=ead929" alt="Real Fun Wave Logo" width={50} height={50} className="rounded-full" />
                    <h1 className="text-2xl font-bold">Real Fun Wave</h1>
                </div>
                <ul className="flex gap-4">
                    <li><Link href="#about">Sobre Nosotros</Link></li>
                    <li><Link href="#trips">Viajes</Link></li>
                    <li><Link href="#next-trips">Próximos Viajes</Link></li>
                    <li><Link href="#contact">Contacto</Link></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[500px] w-full">
                <Image src="/surf-hero.jpg" alt="Surf Trip" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                    <h2 className="text-4xl font-bold">Explora los Mejores Destinos de Surf</h2>
                    <p className="mt-2 text-lg">Viaja con nosotros y descubre olas perfectas alrededor del mundo</p>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="p-8 text-center">
                <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
                <p className="mt-4 text-lg">Somos apasionados del surf y organizamos viajes a los mejores spots del mundo.</p>
            </section>

            {/* Trips Section */}
            <section id="trips" className="p-8 bg-white text-center">
                <h2 className="text-3xl font-bold">Nuestros Viajes</h2>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <Image src="/bali.jpg" alt="Bali" width={300} height={200} className="rounded" />
                        <h3 className="text-xl font-semibold mt-2">Bali, Indonesia</h3>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <Image src="/costa-rica.jpg" alt="Costa Rica" width={300} height={200} className="rounded" />
                        <h3 className="text-xl font-semibold mt-2">Costa Rica</h3>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <Image src="/hawaii.jpg" alt="Hawaii" width={300} height={200} className="rounded" />
                        <h3 className="text-xl font-semibold mt-2">Hawaii, EE.UU.</h3>
                    </div>
                </div>
            </section>

            {/* Next Trips Section */}
            <section id="next-trips" className="p-8 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold">Próximos Viajes</h2>
                <p className="mt-4 text-lg">Únete a nuestras próximas aventuras y vive experiencias inolvidables.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-200 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">Maldivas - Abril 2025</h3>
                        <p>Reserva tu lugar y disfruta de las mejores olas en el paraíso.</p>
                    </div>
                    <div className="bg-blue-200 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">Australia - Julio 2025</h3>
                        <p>Explora las legendarias playas australianas con nosotros.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-8 text-center">
                <h2 className="text-3xl font-bold">Contáctanos</h2>
                <p className="mt-4 text-lg">Escríbenos para planear tu próximo viaje de surf.</p>
            </section>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
            >
                📩 WhatsApp
            </a>
        </div>
    );
}