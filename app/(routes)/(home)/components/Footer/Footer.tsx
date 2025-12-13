"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Información */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fox Rental Cars</h3>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
              Tu mejor opción para alquilar vehículos de calidad. Experiencia confiable y servicio excepcional.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">+51 999 888 777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">info@foxrentalcars.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("fleet")}
                  className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-left"
                >
                  Nuestra Flota
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-left"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Alquiler por Día
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Alquiler por Semana
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Alquiler Mensual
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Seguro Completo
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Asistencia 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal y redes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/terminos" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cancelacion" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Política de Cancelación
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} Fox Rental Cars. Todos los derechos reservados.
            </p>

            <div className="flex gap-4 text-sm">
              <span className="text-gray-700 dark:text-gray-300">Aceptamos:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">VISA</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Mastercard</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">PayPal</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
