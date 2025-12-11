"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Ajusta según la altura de tu NavBar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Información de la Empresa */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Fox Rental Cars</h3>
            <p className="text-sm mb-4">
              Tu mejor opción para alquilar vehículos de calidad. Experiencia confiable y servicio excepcional.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+51 999 888 777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@foxrentalcars.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-black text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-sm hover:text-gray-600 transition-colors text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fleet')}
                  className="text-sm hover:text-gray-600 transition-colors text-left"
                >
                  Nuestra Flota
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-sm hover:text-gray-600 transition-colors text-left"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm hover:text-gray-600 transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-black text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 transition-colors">
                  Alquiler por Día
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 transition-colors">
                  Alquiler por Semana
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 transition-colors">
                  Alquiler Mensual
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 transition-colors">
                  Seguro Completo
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-gray-600 transition-colors">
                  Asistencia 24/7
                </Link>
              </li>
            </ul>
          </div>
          