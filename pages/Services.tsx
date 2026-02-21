import React from 'react';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary py-20 px-6 sm:px-10 lg:px-40 overflow-hidden">
        {/* Abstract Industrial Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-2 backdrop-blur-sm border border-white/20">
            <span className="material-symbols-outlined text-white text-sm px-2">verified</span>
            <span className="text-white text-xs font-semibold uppercase tracking-wider pr-2">ISO 9001 Certified Provider</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Comprehensive Industrial Catalog
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Explore our specialized engineering and logistical support services designed for the toughest environments in mining, metallurgy, and transport.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-surface-light dark:bg-surface-dark border-b border-[#e6e9f4] dark:border-[#2a2e3e] sticky top-[73px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <button className="whitespace-nowrap flex h-9 items-center justify-center px-5 rounded-full bg-primary text-white text-sm font-semibold shadow-sm transition-transform hover:scale-105">
              All Sectors
            </button>
            <button className="whitespace-nowrap flex h-9 items-center justify-center px-5 rounded-full bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-[#0d101c] dark:text-gray-200 text-sm font-medium border border-transparent hover:border-gray-300 transition-colors">
              Mining
            </button>
            <button className="whitespace-nowrap flex h-9 items-center justify-center px-5 rounded-full bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-[#0d101c] dark:text-gray-200 text-sm font-medium border border-transparent hover:border-gray-300 transition-colors">
              Metallurgy
            </button>
            <button className="whitespace-nowrap flex h-9 items-center justify-center px-5 rounded-full bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-[#0d101c] dark:text-gray-200 text-sm font-medium border border-transparent hover:border-gray-300 transition-colors">
              Diamond Drilling
            </button>
            <button className="whitespace-nowrap flex h-9 items-center justify-center px-5 rounded-full bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-[#0d101c] dark:text-gray-200 text-sm font-medium border border-transparent hover:border-gray-300 transition-colors">
              Transport
            </button>
          </div>
          {/* Search */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-[#252a3d] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search services..." type="text"/>
          </div>
        </div>
      </div>

      {/* Service Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">construction</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">landscape</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Underground Excavation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Expert blasting and tunneling services tailored to challenging geological conditions with maximizing safety protocols.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">analytics</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">query_stats</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Geological Surveying</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Advanced mapping and soil analysis to identify resource-rich zones and minimize exploratory drilling costs.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">science</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">science</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Process Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Chemical analysis and yield improvement strategies for refinery plants to boost metal recovery rates.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">architecture</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Diamond Core Drilling</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                High-precision diamond drilling for deep earth exploration ensuring maximum core recovery integrity.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 5 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">local_shipping</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">forklift</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Heavy Lifting & Transport</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Comprehensive logistics for oversized industrial equipment, including route planning and permit acquisition.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 6 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">health_and_safety</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Site Safety Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Implementation of rigorous safety protocols and training to ensure zero-harm work environments.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 7 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">bolt</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">electric_bolt</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Power Generation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Remote site power solutions including diesel generators and hybrid renewable energy systems.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Card 8 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">handyman</span>
            </div>
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">settings</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d101c] dark:text-white text-lg font-bold leading-tight">Fleet Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                Scheduled and emergency repair services for heavy-duty mining trucks and excavation machinery.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <a href="#" className="inline-flex items-center text-action font-bold text-sm hover:underline gap-1 group/btn">
                Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 border border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-[#0d101c] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
            Load More
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-surface-light dark:bg-surface-dark py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-primary dark:text-white mb-4">Ready to optimize your operations?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">Contact our engineering team today to discuss how we can tailor our services to your specific project needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-action hover:bg-red-700 text-white text-base font-bold transition-colors shadow-md">
              Request a Quote
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-primary text-primary dark:text-white dark:border-white hover:bg-primary/5 dark:hover:bg-white/10 text-base font-bold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;