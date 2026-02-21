import React, { useState, useEffect } from 'react';

// Logo Imports
import heri1 from '../src/assets/img/catalog/logo_sum/heri1.png';
import heri2 from '../src/assets/img/catalog/logo_sum/heri2.png';
import heri3 from '../src/assets/img/catalog/logo_sum/heri3.png';
import heri4 from '../src/assets/img/catalog/logo_sum/heri4.svg';
import heri5 from '../src/assets/img/catalog/logo_sum/heri5.png';

const logoList = [heri1, heri2, heri3, heri4, heri5];

// Ferretería Logos
import feri1 from '../src/assets/img/catalog/logo_sum/feri1.png';
import feri2 from '../src/assets/img/catalog/logo_sum/feri2.png';
import feri3 from '../src/assets/img/catalog/logo_sum/feri3.svg';
import feri4 from '../src/assets/img/catalog/logo_sum/feri4.png';
import feri5 from '../src/assets/img/catalog/logo_sum/feri5.png';
const feriLogos = [feri1, feri2, feri3, feri4, feri5];

// Maquinarias Logos
import maqu1 from '../src/assets/img/catalog/logo_sum/maqu1.svg';
import maqu2 from '../src/assets/img/catalog/logo_sum/maqu2.svg';
import maqu3 from '../src/assets/img/catalog/logo_sum/maqu3.png';
import maqu4 from '../src/assets/img/catalog/logo_sum/maqu4.png';
import maqu5 from '../src/assets/img/catalog/logo_sum/maqu5.png';
const maquLogos = [maqu1, maqu2, maqu3, maqu4, maqu5];

// Eléctrico e Iluminación Logos
import male1 from '../src/assets/img/catalog/logo_sum/male1.png';
import male2 from '../src/assets/img/catalog/logo_sum/male2.png';
import male3 from '../src/assets/img/catalog/logo_sum/male3.svg';
import male4 from '../src/assets/img/catalog/logo_sum/male4.png';
import male5 from '../src/assets/img/catalog/logo_sum/male5.png';
import male6 from '../src/assets/img/catalog/logo_sum/male6.png';
import male7 from '../src/assets/img/catalog/logo_sum/male7.png';
import male8 from '../src/assets/img/catalog/logo_sum/male8.png';
const maleLogos = [male1, male2, male3, male4, male5, male6, male7, male8];

// Lubricantes Logos
import lubr1 from '../src/assets/img/catalog/logo_sum/lubr1.png';
import lubr2 from '../src/assets/img/catalog/logo_sum/lubr2.png';
import lubr3 from '../src/assets/img/catalog/logo_sum/lubr3.png';
import lubr4 from '../src/assets/img/catalog/logo_sum/lubr4.png';
import lubr5 from '../src/assets/img/catalog/logo_sum/lubr5.svg';
const lubrLogos = [lubr1, lubr2, lubr3, lubr4, lubr5];

// Define product categories and mapping
const categories = [
  { id: 'all', label: 'Todos los productos' },
  { id: 'her', label: 'Herramientas' },
  { id: 'fer', label: 'Ferretería' },
  { id: 'maq', label: 'Maquinarias' },
  { id: 'ele', label: 'Eléctrico e Iluminación' },
  { id: 'lub', label: 'Lubricantes' },
  { id: 'val', label: 'Válvulas y Conexiones' },
];

// Configuration to manually override product titles
// Key: filename without extension (e.g., 'ele1')
// Value: The display title (e.g., 'Termomagnético 3x100A')
const productOverrides: Record<string, string> = {
  'ele1': 'Kit de terminales de cable',
  'ele13': 'Controladores Logicos',
  'ele16': 'Iluminación LED High Bay',
  'ele17': 'Tablero de Control Electrico',
  'ele3': 'Cable Electrico',
  'ele7': 'Conectores Electrico Industriales',
  'ele4': 'Conectores Electricos',
  'ele8': 'Pantalla HMI Teclado FSTN',
  'fer1': 'Disco y Ruedas Abrasivas',
  'fer2': 'Kit de herramientas',
  'fer3': 'Electrodo de Soldadura',
  'fer4': 'Carro de Herramientas',
  'fer5': 'Set De Desarmador y Alicates',
  'fer6': 'Set De Desarmador y Llaves',
  'fer7': 'Disco Flap Laminado',
  'fer8': 'Soldadura Nazca Soldexa',
  'fer9': 'Perno Allen',
  'her1': 'Sierra Circular',
  'her2': 'Martillo Demoledor',
  'her10': 'Taladro Atornillador Percutor',
  'her3': 'Nivel Láser Profesional',
  'her4': 'Amoladora Angular',
  'her5': 'Radio de Obra con Cargador',
  'her6': 'Sierra Caladora',
  'her7': 'Fresadora de Inmersión',
  'her8': 'Taladro de Base Magnética',
  'her9': 'Aspiradora Húmedo/Seco',
  'maq1': 'Soldadora de Arco Sumergido',
  'maq10': 'Amoladora Recta Neumática',
  'maq11': 'Compresores de Tornillo Rotativo',
  'maq12': 'Compresor de Aire de Pistón',
  'maq2': 'Máquinas de Soldar MIG/MAG',
  'maq3': 'Soldadora Multiproceso',
  'maq4': 'Compresor de Aire de Tornillo Rotativo',
  'maq5': 'Compresor de Aire Portátil',
  'maq6': 'Compresor de Tornillo Chicago',
  'maq7': 'Compresor Estacionario OIL FREE',
  'maq8': 'Lijadora Neumática de Alta Velocidad',
  'maq9': 'Llave de Impacto Neumática Industrial',
  'lub1': 'Líquido Anticongelante y Refrigerante',
  'lub2': 'Grasa Lubricante Sintética',
  'lub3': 'Grasa de Larga Duración',
  'lub4': 'Aceite de Motor',
  'lub5': 'Lubricante de Alta Viscosidad',
  'lub6': 'Grasa Sintética para Cadenas',
  'lub7': 'Aceite de Tecnología Sintética',
  'lub8': 'Grasa Lubricante Industrial',
  'val1': 'Válvula de Compuerta de Acero',
  'val2': 'Válvula de Mariposa Sanitaria',
  'val3': 'Válvula de Bola Sanitaria de 3 Vías',
  'val4': 'Válvula de Mariposa Acero',
  'val5': 'Válvula de Compuerta',
  'val6': 'Válvula de Globo Industrial',
  'val7': 'Componentes de Conexiones',
  // Add more overrides here as needed
};

interface Product {
  id: string;
  category: string;
  image: string;
  title: string;
  specs?: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    // Dynamically load images from src/assets/img/catalog
    const modules = import.meta.glob('../src/assets/img/catalog/*/*.{png,jpg,jpeg,webp}', { eager: true });
    
    const loadedProducts: Product[] = Object.entries(modules).map(([path, mod]: [string, any]) => {
      // Extract category from path: ../src/assets/img/catalog/[category]/[filename]
      const parts = path.split('/');
      const category = parts[parts.length - 2].toLowerCase(); // e.g., 'ele', 'fer'
      const filename = parts[parts.length - 1];
      const filenameNoExt = filename.split('.')[0];
      
      // Use override if available, otherwise format filename
      let title = productOverrides[filenameNoExt];
      if (!title) {
        title = filenameNoExt.replace(/[-_]/g, ' ');
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }

      return {
        id: path,
        category,
        image: mod.default,
        title: title,
        specs: 'Disponible en stock',
      };
    });

    setProducts(loadedProducts);
  }, []);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <>
      {/* Page Heading & Context */}
      <section className="bg-surface-light dark:bg-[#1e1e1e] pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#dcdcdc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-header-blue dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-4">Suministros Industriales</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Explore nuestra cartelera, contamos con equipos y herramientas para todo tipo de industria
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm font-bold text-header-blue dark:text-gray-200">Catalogo Actualizado</p>
                <p className="text-xs text-gray-500">Febrero 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg focus:outline-none ring-2 ring-offset-2 ring-primary ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-header-blue hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tools Sub-section - Only visible when "her" category is active */}
          {activeCategory === 'her' && (
            <div className="mb-12 animate-fade-in">
              {/* Tool Categories Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">cut</span> HERRAMIENTAS DE CORTE
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">power</span> HERRAMIENTAS ELÉCTRICAS
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">blur_on</span> HERRAMIENTAS ABRASIVAS
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">battery_charging_full</span> HERRAMIENTAS INALÁMBRICAS
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">construction</span> HERRAMIENTAS DE PERFORACIÓN
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">handyman</span> HERRAMIENTAS MANUALES
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">air</span> HERRAMIENTAS NEUMÁTICAS
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">straighten</span> HERRAMIENTAS DE MEDICIÓN
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary">electrical_services</span> HERRAMIENTAS AISLANTES
                    </li>
                  </ul>
                </div>
              </div>

              {/* Logo Carousel */}
              <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Marcas Destacadas</p>
                <div className="relative w-full flex overflow-x-hidden">
                  <div className="logo-slider-track">
                    {/* First set of logos */}
                    {logoList.map((logo, index) => (
                      <div key={`logo-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img 
                          src={logo} 
                          alt={`Brand ${index + 1}`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {logoList.map((logo, index) => (
                      <div key={`logo-dup-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img 
                          src={logo} 
                          alt={`Brand ${index + 1}`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ferretería Sub-section */}
          {activeCategory === 'fer' && (
            <div className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">blur_on</span> ABRASIVOS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">construction</span> EQUIPOS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">build</span> FIJACIÓN Y TORNILLERÍA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">settings</span> PERNOS, TUERCAS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">whatshot</span> ACCESORIOS PARA SOLDADURA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">radio_button_unchecked</span> ARANDELAS Y ANILLOS</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Marcas Destacadas</p>
                <div className="relative w-full flex overflow-x-hidden">
                  <div className="logo-slider-track">
                    {/* First set */}
                    {feriLogos.map((logo, index) => (
                      <div key={`fer-logo-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                    {/* Duplicate set */}
                    {feriLogos.map((logo, index) => (
                      <div key={`fer-logo-dup-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Maquinarias Sub-section */}
          {activeCategory === 'maq' && (
            <div className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">precision_manufacturing</span> EQUIPOS DE SOLDADURA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">factory</span> EQUIPOS INDUSTRIALES</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">water_drop</span> EQUIPOS DE BOMBAS DE AGUA</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">plumbing</span> EQUIPOS PARA TUBERIA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">air</span> EQUIPOS DE NEUMATICOS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">compress</span> COMPRESORES</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">electric_bolt</span> GENERADORES</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">carpenter</span> SIERRA FIJAS</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Marcas Destacadas</p>
                <div className="relative w-full flex overflow-x-hidden">
                  <div className="logo-slider-track">
                    {/* First set */}
                    {maquLogos.map((logo, index) => (
                      <div key={`maq-logo-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                    {/* Duplicate set */}
                    {maquLogos.map((logo, index) => (
                      <div key={`maq-logo-dup-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Válvulas Sub-section */}
          {activeCategory === 'val' && (
            <div className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">valve</span> GUILLOTINA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">water_drop</span> SANITARIAS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> UNICIMA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">settings</span> DAVIS VALE</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">change_circle</span> MARIPOSA</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">shield</span> DK SHORITSU</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">verified</span> YIDU</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">architecture</span> ACERO FORJADO</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">science</span> SANITARIAS ACERO A234 E INOXIDABLE</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">domain</span> CIFUNSA Y F</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Eléctrico Sub-section */}
          {activeCategory === 'ele' && (
            <div className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">battery_full</span> LINTERNA PILAS Y BATERIAS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">cable</span> CABLES Y ALAMBRES ELECTRICOS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">lightning_stand</span> PUESTA A TIERRA</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">sensors</span> ALARMAS Y SENSORES</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">electrical_services</span> MENEKES</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">emergency</span> LUCES DE EMERGENCIA</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">toggle_on</span> TABLEROS Y LLAVES TERMOMAGNETICAS</li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">power_settings_new</span> INTERRUPTORES Y TDMACORRIENTES</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Marcas Destacadas</p>
                <div className="relative w-full flex overflow-x-hidden">
                  <div className="logo-slider-track">
                    {/* First set */}
                    {maleLogos.map((logo, index) => (
                      <div key={`ele-logo-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                    {/* Duplicate set */}
                    {maleLogos.map((logo, index) => (
                      <div key={`ele-logo-dup-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lubricantes Sub-section */}
          {activeCategory === 'lub' && (
            <div className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">oil_barrel</span> ACEITES</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">opacity</span> GRASAS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"><span className="material-symbols-outlined text-primary">ac_unit</span> REFRIGERANTES</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Marcas Destacadas</p>
                <div className="relative w-full flex overflow-x-hidden">
                  <div className="logo-slider-track">
                    {/* First set */}
                    {lubrLogos.map((logo, index) => (
                      <div key={`lub-logo-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                    {/* Duplicate set */}
                    {lubrLogos.map((logo, index) => (
                      <div key={`lub-logo-dup-${index}`} className="mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-[4/3] w-full bg-white overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay Detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{categories.find(c => c.id === product.category)?.label || product.category}</p>
                  <h3 className="text-white text-lg font-bold leading-tight mb-2 truncate">{product.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                    <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">{product.specs}</p>
                    <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[16px]">visibility</span> Ver detalle
                    </button>
                  </div>
                </div>
                {/* Static Content */}
                <div className="p-4 bg-white group-hover:hidden border-t border-gray-100">
                  <h3 className="text-header-blue font-bold text-sm truncate">{product.title}</h3>
                  <p className="text-gray-500 text-xs truncate">
                    {categories.find(c => c.id === product.category)?.label || 'Producto'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback for empty results */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <span className="material-symbols-outlined text-4xl mb-2">image_not_supported</span>
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-header-blue bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-header-blue transition-all"
              >
                Cargar más productos
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;