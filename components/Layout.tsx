import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../public/img/logo.ico';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/products') {
      return ['/products', '/supply', '/replacement', '/components'].some(p => location.pathname.startsWith(p)) 
        ? "text-accent" 
        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white";
    }
    return location.pathname === path ? "text-accent" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              {/*<div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white group-hover:bg-primary-hover transition-colors">
                
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
              </div>*/}
              <img src={logoIcon} alt="Logo" width={50} height={50} />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-corporate leading-none">Fyscom</span>
                <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Soluciones Integrales para la Industria</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Inicio</Link>
              
              {/* Products Dropdown */}
              <div className="relative group h-20 flex items-center">
                <Link to="" className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive('/products')}`}>
                  Productos
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">expand_more</span>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2 flex flex-col">
                    <Link to="/supply" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">conveyor_belt</span>
                      Suministros Industriales
                    </Link>
                    <Link to="/replacement" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">settings</span>
                      Repuestos
                    </Link>
                    <Link to="/components" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">memory</span>
                      Componentes
                    </Link>
                  </div>
                </div>
              </div>
              {/*<Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services')}`}>Servicios</Link>*/}
              <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>Nosotros</Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact')}`}>Contacto</Link>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link to="/contact" className="flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg">
                <span>Solicitar Cotización</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 p-2"
              >
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
              <div>
                <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Productos</Link>
                <div className="pl-6 space-y-1">
                  <Link to="/supply" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Suministros Industriales</Link>
                  <Link to="/replacement" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Repuestos</Link>
                  <Link to="/components" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Componentes</Link>
                </div>
              </div>
              <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary pt-20 pb-10 text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-lg bg-white text-primary">
                  <span className="material-symbols-outlined text-2xl"><img src={logoIcon} alt="Logo" width={30} height={30} /></span>
                </div>
                <span className="text-xl font-bold tracking-tight">Fyscom</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Ofreciendo productos industriales y de ingeniería de primer nivel. Construimos la columna vertebral de la infraestructura moderna.
              </p>
              <div className="flex gap-4">
                <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
                  <span className="material-symbols-outlined text-lg">alternate_email</span>
                </a>
                <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
                  <span className="material-symbols-outlined text-lg">language</span>
                </a>
              </div>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-black pl-3">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">Sobre Nosotros</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">Nuestros Servicios</Link></li>
                <li><Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">Portafolio de Productos</Link></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Relaciones con Inversionistas</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Trabaja con Nosotros</a></li>
              </ul>
            </div>
            {/* Column 3: Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-black pl-3">Sectores Principales</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Operaciones Mineras</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Metalurgia y Procesamiento</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Perforación de Petróleo y Gas</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Transporte Pesado</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Automatización Industrial</a></li>
              </ul>
            </div>
            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-black pl-3">Mantente Informado</h4>
              <p className="text-white/70 text-sm mb-4">Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones de la industria.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" placeholder="Ingresa tu correo electrónico" type="email" />
                </div>
                <button className="w-full h-12 bg-accent hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-sm" type="submit">
                  Suscríbete Ahora
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              Copyright © 2026 Fyscom S.A.C. Todos los derechos reservados.
            </p>
            <div className="flex gap-6"> {/*
              <a className="text-white/50 hover:text-white text-sm" href="#">Política de Privacidad</a>
              <a className="text-white/50 hover:text-white text-sm" href="#">Términos de Servicio</a>
              <a className="text-white/50 hover:text-white text-sm" href="#">Mapa del Sitio</a>*/}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;