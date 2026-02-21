import React, { useState, useEffect } from 'react';

// Logo Imports
import comp1 from '../src/assets/img/catalog/logo_comp/Captura-de-pantalla-2021-06-04-141107.png';
import comp2 from '../src/assets/img/catalog/logo_comp/eatoncharlynnlogo.jpg';
import comp3 from '../src/assets/img/catalog/logo_comp/parker-hannifin-logo-png_seeklogo-106265.png';
import comp4 from '../src/assets/img/catalog/logo_comp/rexroth.svg';
import comp5 from '../src/assets/img/catalog/logo_comp/vickers-logo.jpg';

const logoList = [comp1, comp2, comp3, comp4, comp5];

// Define product categories and mapping
const categories = [
  { id: 'all', label: 'Todos los Componentes' },
  { id: 'bmh', label: 'Bombas y Motores Hidráulicos' },
  { id: 'boh', label: 'Bombas Oleo Hidráulicas' },
  { id: 'bpp', label: 'Bombas de Paletas y Pistones' },
];

// Configuration to manually override product titles
// Key: filename without extension (e.g., 'bmh1')
// Value: The display title (e.g., 'Motor Hidráulico Serie 2000')
const productOverrides: Record<string, string> = {
  // Example overrides:
  'boh1': 'A4VG',
  'boh2': '4WRA',
  'boh3': 'A4VSO',
  'boh4': 'A8VSO',
  'boh5': 'A2FM',
  'boh6': 'A4VSO',
  'boh7': 'A24VG',
  'boh8': '4WREE',
  'bmh1': 'SERIE 400',
  'bmh10': '3520VQ',
  'bmh2': 'SERIE 10 000',
  'bmh3': 'DG4V',
  'bmh4': 'PVB',
  'bmh5': 'V20',
  'bmh6': 'SERIE 600',
  'bmh7': 'PVH',
  'bmh8': 'Eaton Serie 2000',
  'bmh9': '70160-LBA',
  'bpp1': 'PGP315',
  'bpp2': 'T6CCZ-B31',
  'bpp3': 'PGP50',
  'bpp4': 'Piston Pump 5000',
  'bpp5': 'Vane Pump H-4525V',
  'bpp6': 'PV0',
  'bpp7': 'Parker Denison T6C',
  'bpp8': 'SERIE PVB, PVM',
  'bpp9': 'F1-081',
  'bpp10': 'PGP75',
  
  // Add your own overrides here
};

interface Product {
  id: string;
  category: string;
  image: string;
  title: string;
  specs?: string;
}

const Components: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    // Dynamically load images from src/assets/img/catalog/componentes
    const modules = import.meta.glob('../src/assets/img/catalog/componentes/*/*.{png,jpg,jpeg,webp}', { eager: true });
    
    const loadedProducts: Product[] = Object.entries(modules).map(([path, mod]: [string, any]) => {
      // Extract category from path: ../src/assets/img/catalog/componentes/[category]/[filename]
      const parts = path.split('/');
      const category = parts[parts.length - 2].toLowerCase(); // e.g., 'bmh', 'boh'
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
        specs: 'Componente Industrial',
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
              <h2 className="text-header-blue dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-4">Componentes Industriales</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Soluciones hidráulicas y componentes de alta precisión para maquinaria pesada.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm font-bold text-header-blue dark:text-gray-200">Catálogo Actualizado</p>
                <p className="text-xs text-gray-500">Febrero 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Logo Carousel */}
          <div className="overflow-hidden bg-white dark:bg-white/5 py-8 rounded-xl border border-gray-100 dark:border-gray-700 mb-8">
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
                    {categories.find(c => c.id === product.category)?.label || 'Componente'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback for empty results */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <span className="material-symbols-outlined text-4xl mb-2">image_not_supported</span>
              <p>No se encontraron componentes en esta categoría.</p>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-header-blue bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-header-blue transition-all"
              >
                Cargar más componentes
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Components;