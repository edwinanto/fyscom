import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

// Client Logos

import logoFima from '../src/assets/img/logo-fima.png';
import logoUnna from '../src/assets/img/logounna.png';
import logoRedrilsa from '../src/assets/img/redrilsa.png';
import logoSanLorenzo from '../src/assets/img/sanlorenzo.webp';
import logoStracon from '../src/assets/img/stracon_logo.png';
import logoGM from '../src/assets/img/GMoperaciones.jpg';


const heroImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zBxpORt6mZWemHgdYd2O5jlbQYmruODvapOVgWum-3e3AS9m_MzjW-StWDrdTzZxobfgR-IUyXFf7Kii4sZiCZX35u7cvaAVcsEAy4FRNucWZqx60RY39H7-hQjUqtjOlGNxCSJkPTRHn_KObK4i-VhpowSJDs-oNYSm5UN9qMEz4r3N9Fj7EMz3ohUHPj5xyDUZnd62pBnoFK6pAwRHFvX7K3TFn4yYcyYljoe2pauu_pMWblZr9ePxCZt9A3lw7gJNNdlw7g", // Original Hero
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAk9kkhU9oE9m-dvVewY43HIYYItP7mXtbknvp8FKGhPqlFYg60tcHLnuKJllS-CxptVfRMv535wpbZpnK_g_9bkrFnXFB7GwX6SXbconwwyh0mtgHeuzMtNZStb1Iy4abqt7NzZKC495hKbFAF8uasNHcaFdvqN-XktlSbKqQIxp8oMp7_bbRGlc6_VboT-XC2Oujl0L3lZZDQRx90jIg28tQG1VYnI1krIx-gIu8BnAMe5YveZJzdpNg220IxNFDu2TLNJ1xKkw", // Mining
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5fKCRcgYtvvdZbgn9bSggzotiuoV5ZssSUl56xx_03D5J0fLAkf0l6HSZvFkU4xj64SKPWBDYCO5uPIf2aPfweHH13ZyNhWurYgjd9elma4cJw312cS41G9qm-Rse4ojuu_wlDQBw3nf7CtWUgEuA3r6xhU-kl1tv3aCVD4MIFlXFzck7tJuzjdwc-cHhWP8Ox3lK--SgbrOh3ps1LkV5ui7HKgbuzWktKEkKrO_C_rYJwBOxxdGJsIwQUi6T3Bc-WMR0IJvhaQ", // Metallurgy
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAYf5c5QlFZKzusps5coU9ecTLIHytsJDl77NhGf_f5GQzIv90Ct2afD-LdJWx6pTNAk-BEqajc1pHJehdmlIDB-v2A-p38i2pyRi5G_Jd9D6u4MUSkpcfv36ZuHhq-Mu8oo9cZyKV6oOy6XGTYU91FfaKoPjMrlhJpfgIkLqLDnevkbDk7avC_IDwnoluHDXSRG5tvZBc9Vv_1nHRYm_3oErF_w7C1QvkxCRqlIl_2pliWYO9rMnTATDj_lbIQeIh2USLYTttKuw", // Drilling
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4N8-uiALe5iSwPQObeBpaqbwGz1HVTJD7n9ThOFjUrr6lrdtQKKC1y9MZW-0ENC42YhZzGa9ZKjlFmUMJ4jA-FNjvMpk5TuVy7d7mj848fT8MmvOOeeu9tBN9bf2_VRHm0U4JeHS_4g3_nODZ3R1U48COJwpNWn60TtOhovEb0xYwxYbm8VHUPy6SNaIXYNa52Ez6keYPmQgR-ihycmMYtW0Qlm5bvZJto51a8sJnd3aR1g8f7CbYZfTlAtCHpBJrIeqSs8DXg"  // Transport
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[700px] md:h-[850px] lg:h-[900px] flex items-center bg-gray-900 overflow-hidden">
        {/* Premium Background Carousel */}
        <HeroCarousel images={heroImages} />
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase">Una Nueva Generación de Excelencia</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Proveemos<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Soluciones Confiables</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Nos especializamos en el suministro de componentes industriales y repuestos técnicos para operaciones de alta exigencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-accent hover:bg-red-700 text-white h-12 px-8 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Explora Nuestros Productos
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white h-12 px-8 rounded-lg text-base font-bold transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Ver Video
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Core Sectors Grid */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-primary dark:text-white text-base font-bold uppercase tracking-widest mb-2">Nuestra Experiencia</h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Productos para tu Industria</h3>
            </div>
            <Link to="/supply" className="group flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:text-accent transition-colors">
              Ver Catálogo
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Mining */}
            <Link to="/supply" className="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-[380px] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAk9kkhU9oE9m-dvVewY43HIYYItP7mXtbknvp8FKGhPqlFYg60tcHLnuKJllS-CxptVfRMv535wpbZpnK_g_9bkrFnXFB7GwX6SXbconwwyh0mtgHeuzMtNZStb1Iy4abqt7NzZKC495hKbFAF8uasNHcaFdvqN-XktlSbKqQIxp8oMp7_bbRGlc6_VboT-XC2Oujl0L3lZZDQRx90jIg28tQG1VYnI1krIx-gIu8BnAMe5YveZJzdpNg220IxNFDu2TLNJ1xKkw')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="size-12 rounded-lg bg-accent/90 flex items-center justify-center text-white mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">diamond</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Minería</h4>
                <p className="text-gray-200 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  Suministramos herramientas, maquinarias, compresores, lubricantes y ferretería industrial para operaciones mineras de alta exigencia.
                </p>
                <span className="text-white text-sm font-bold flex items-center gap-1 group-hover:text-accent transition-colors">
                  Ver productos <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
            {/* Card 2: Metallurgy */}
            <Link to="/replacement" className="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-[380px] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5fKCRcgYtvvdZbgn9bSggzotiuoV5ZssSUl56xx_03D5J0fLAkf0l6HSZvFkU4xj64SKPWBDYCO5uPIf2aPfweHH13ZyNhWurYgjd9elma4cJw312cS41G9qm-Rse4ojuu_wlDQBw3nf7CtWUgEuA3r6xhU-kl1tv3aCVD4MIFlXFzck7tJuzjdwc-cHhWP8Ox3lK--SgbrOh3ps1LkV5ui7HKgbuzWktKEkKrO_C_rYJwBOxxdGJsIwQUi6T3Bc-WMR0IJvhaQ')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="size-12 rounded-lg bg-accent/90 flex items-center justify-center text-white mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">science</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Metalurgia</h4>
                <p className="text-gray-200 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  Vendemos repuestos industriales, rodamientos, chumaceras, manómetros y accesorios de soldadura para plantas metalúrgicas.
                </p>
                <span className="text-white text-sm font-bold flex items-center gap-1 group-hover:text-accent transition-colors">
                  Ver productos <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
            {/* Card 3: Drilling */}
            <Link to="/components" className="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-[380px] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYf5c5QlFZKzusps5coU9ecTLIHytsJDl77NhGf_f5GQzIv90Ct2afD-LdJWx6pTNAk-BEqajc1pHJehdmlIDB-v2A-p38i2pyRi5G_Jd9D6u4MUSkpcfv36ZuHhq-Mu8oo9cZyKV6oOy6XGTYU91FfaKoPjMrlhJpfgIkLqLDnevkbDk7avC_IDwnoluHDXSRG5tvZBc9Vv_1nHRYm_3oErF_w7C1QvkxCRqlIl_2pliWYO9rMnTATDj_lbIQeIh2USLYTttKuw')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="size-12 rounded-lg bg-accent/90 flex items-center justify-center text-white mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">construction</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Perforación</h4>
                <p className="text-gray-200 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  Proveemos componentes hidráulicos, bombas de paletas y pistones, motores y válvulas para equipos de perforación.
                </p>
                <span className="text-white text-sm font-bold flex items-center gap-1 group-hover:text-accent transition-colors">
                  Ver productos <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
            {/* Card 4: Transport */}
            <Link to="/supply" className="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-[380px] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy4N8-uiALe5iSwPQObeBpaqbwGz1HVTJD7n9ThOFjUrr6lrdtQKKC1y9MZW-0ENC42YhZzGa9ZKjlFmUMJ4jA-FNjvMpk5TuVy7d7mj848fT8MmvOOeeu9tBN9bf2_VRHm0U4JeHS_4g3_nODZ3R1U48COJwpNWn60TtOhovEb0xYwxYbm8VHUPy6SNaIXYNa52Ez6keYPmQgR-ihycmMYtW0Qlm5bvZJto51a8sJnd3aR1g8f7CbYZfTlAtCHpBJrIeqSs8DXg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="size-12 rounded-lg bg-accent/90 flex items-center justify-center text-white mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">local_shipping</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Logística y Transporte</h4>
                <p className="text-gray-200 text-sm mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  Ofrecemos lubricantes, material eléctrico, válvulas, conexiones y repuestos para flotas de transporte pesado e industrial.
                </p>
                <span className="text-white text-sm font-bold flex items-center gap-1 group-hover:text-accent transition-colors">
                  Ver productos <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 md:py-28 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Grid */}
            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdsExtvKipJWYNu__ZnbHNwaYZzmSY1imWxQ6Bc3cJvOZB37UO5Sd26d5641w-vQsa664pifCn5PeDH_iKqROq0izMpnoDdKY5HM0mO1wqYrm4TqtMR9xhqhaQEf8VDQkb601Nj4ndm6TpFvzybYqOUHmyZDnoqI9gQmfQZ83x_5bXyjyVYbbuQpJFi3Ws-tm31KyJqkecZ7TI87SNYh6RIq2Ee6957MBuz3LL97KY2OuGXtjNbmlE1tYEFoSH1p6u_cjm-InrFA" alt="Engineer" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                  <div className="bg-primary p-6 rounded-xl text-white text-center">
                    <h3 className="text-4xl font-black mb-1">6+</h3>
                    <p className="text-sm font-medium opacity-80">Años de Experiencia</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40">
                    <span className="material-symbols-outlined text-4xl text-accent mb-2">public</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alcance Nacional</h3>
                  </div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWRKETwyDGLHkYdnPpsHjEM3Keo6W37m6-AN7091ybzWXCKXoNQihpsxQDJu28eAtN22XN3jJJi6_XILm33VRdGjRt1kawIJ4mmr-yFXPaI3h0R7k3bzC4YcI1O7u822wDqoi9r6PKxKXNpk1VfmcZ7DRJyDOYHY62gM-Ma37g0QB9EqDeSEsIE7JkUe8dkv9-acSzYPVy_sRrfzX7N-EbsrY30aY8YoFWiedvLaXWD0EUB4ZwhrNCNY7FpnaQig1tP1hoY8vhSQ" alt="Welder" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-primary dark:text-white text-base font-bold uppercase tracking-widest mb-3">Sobre Nosotros</h2>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                Excelencia e Innovación<br/><span className="text-primary dark:text-blue-400">Industrial comprobadas</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Somos una empresa con 6 años de experiencia en el mercado, especializada en soluciones para el sector industrial, respaldadas por una flota de equipos disponible para venta.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Brindamos un servicio de postventa integral a nivel nacional, orientado a garantizar la continuidad operativa, soporte técnico oportuno y atención eficiente a nuestros clientes.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A lo largo de los años, hemos trabajado con empresas del sector industrial, consolidando relaciones de confianza basadas en cumplimiento, calidad de servicio y resultados comprobables.
              </p>
              <Link to="/about" className="flex w-fit items-center gap-2 border-2 border-primary text-primary dark:text-white dark:border-white hover:bg-primary hover:text-white px-6 py-3 rounded-lg text-sm font-bold transition-all">
                <span>Leer Nuestra Historia</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white/80 text-base font-bold uppercase tracking-widest mb-2">Nuestra Ventaja</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Por qué los clientes nos eligen</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="size-14 rounded-full bg-accent flex items-center justify-center text-white mb-6 shadow-lg">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Compromiso y mejora continua</h4>
              <p className="text-white/70 leading-relaxed text-justify">
                Nuestros clientes nos eligen porque cumplimos lo que prometemos. A lo largo de 6 años hemos consolidado relaciones con empresas del sector industrial que valoran la seriedad, el compromiso y la mejora continua.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="size-14 rounded-full bg-accent flex items-center justify-center text-white mb-6 shadow-lg">
                <span className="material-symbols-outlined text-3xl">business_center</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Soluciones confiable</h4>
              <p className="text-white/70 leading-relaxed text-justify">
                Contamos con un portafolio completo de productos industriales y un enfoque claro: garantizar continuidad operativa, seguridad y eficiencia en cada proyecto de nuestros clientes.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="size-14 rounded-full bg-accent flex items-center justify-center text-white mb-6 shadow-lg">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Experiencia y respaldo</h4>
              <p className="text-white/70 leading-relaxed text-justify">
                Nuestra experiencia, capacidad de respuesta y servicio postventa a nivel nacional nos permiten convertirnos en un aliado técnico y comercial confiable para operaciones críticas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestros Clientes */}
      <section className="py-16 md:py-20 bg-surface-light dark:bg-surface-dark border-t border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-10">
          <div className="text-center">
            <h2 className="text-primary dark:text-white text-base font-bold uppercase tracking-widest mb-2">Nuestros Clientes</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Empresas que Confían en Nosotros</h3>
          </div>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none"></div>
          {/* Slider track */}
            <div className="logo-slider-track py-4">
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {[
                  { name: 'Fima', logo: logoFima },
                  { name: 'Unna', logo: logoUnna },
                  { name: 'Redrilsa', logo: logoRedrilsa },
                  { name: 'San Lorenzo', logo: logoSanLorenzo },
                  { name: 'Stracon', logo: logoStracon },
                  { name: 'GM Operaciones', logo: logoGM },
                  // Duplicating to ensure enough width for smooth infinite scroll if needed, 
                  // or just rely on the outer array duplication. 
                  // Adding a few generic ones if we strictly need more length, 
                  // but for now let's stick to the assets provided.
                ].map((client, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="logo-slider-item flex-shrink-0 mx-5 md:mx-8 flex items-center justify-center"
                    title={client.name}
                  >
                    <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 select-none h-24 w-48 transition-all hover:shadow-md hover:border-primary/30">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-around items-center gap-8 md:gap-4">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-1">6+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Años en el Mercado</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-1">100+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tipos Productos</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-1">98%</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Clientes Satisfechos</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-1">10</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Expertos en el rubro</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;