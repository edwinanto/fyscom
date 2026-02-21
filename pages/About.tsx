import React from 'react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background-light dark:bg-background-dark">
        <div className="layout-container flex flex-col justify-center">
          <div className="@container">
            <div className="relative flex min-h-[480px] flex-col gap-6 items-center justify-center p-8 text-center">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
                style={{backgroundImage: "linear-gradient(rgba(3, 26, 119, 0.7), rgba(3, 26, 119, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTSKIeGvOqvmT4y_K1ULpARO4lIeTE_y5qx6oVX6sNNX8dYgQl665g0fIYbtJgsqHiUBFAS1jo1JYDLVlBQycYLgK1RtE721Yf7tRc8yXW0UbYsLuLBdQ6NKOIXOoYEi18QQeM4TB0_2OcbVIyBbjS_UIbQC9-zILdclO0PhQKGax6BmURs8ovuB6IVDPpotdidjujopflZu0EkxADti8cdlRS2xOKuTmga-B7pZxCgOWRf-i4JeWxWHK7ql3OPnGLaFWkxsMbWA')" }}
              >
              </div>
              <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl drop-shadow-sm">
                  Empowering Global Industry
                </h1>
                <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl max-w-2xl mx-auto">
                  Since 1995, we have been the trusted partner for integrated solutions in mining, metallurgy, drilling, and transport logistics.
                </h2>
              </div>
              <div className="relative z-10 mt-4 flex gap-4">
                <button className="flex h-12 items-center justify-center rounded-lg bg-white px-6 text-primary font-bold shadow-lg hover:bg-gray-100 transition-colors">
                  Our Projects
                </button>
                <button className="flex h-12 items-center justify-center rounded-lg border-2 border-white px-6 text-white font-bold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section (Mission/Vision) */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-primary dark:text-white text-3xl font-black leading-tight tracking-tight md:text-4xl">
                Sobre Nosotros
              </h2>
              <p className="text-text-dark dark:text-gray-300 text-lg font-normal leading-relaxed max-w-3xl">
                Somos una empresa con 6 años de experiencia en el mercado. Ofrecemos soluciones mediante una flota de equipos disponible para la venta. Además de un servicio de postventa integral a nivel nacional.
              </p>
              <p className="text-text-dark dark:text-gray-300 text-lg font-normal leading-relaxed max-w-3xl">
                Trabajamos con importantes negocios del sector industrial y, a lo largo de los años, hemos forjado de manera constante la confianza de nuestros clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mission Card */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-accent-grey bg-background-light dark:bg-[#1a1f36] dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-300">
                  <span className="material-symbols-outlined text-[28px]">target</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-dark dark:text-white text-xl font-bold">Nuestra Misión</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-base justify-center">Proveer suministros de alta calidad, con un compromiso constante hacia la satisfacción de nuestros clientes, impulsando el desarrollo de sus operaciones de obra.</p>
                </div>
              </div>
              {/* Vision Card */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-accent-grey bg-background-light dark:bg-[#1a1f36] dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-300">
                  <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-dark dark:text-white text-xl font-bold">Nuestra Visión</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-base justify-center">Convertirnos en líderes reconocidos a nivel nacional,destacando por nuestra excelencia en calidad, servicio y capacidad de adaptación a las necesidades del mercado.</p>
                </div>
              </div>
              {/* Values Card */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-accent-grey bg-background-light dark:bg-[#1a1f36] dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/30 dark:text-blue-300">
                  <span className="material-symbols-outlined text-[28px]">verified_user</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-dark dark:text-white text-xl font-bold">Nuestros Valores</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-base justify-center">Nuestra empresa nació de la unión familiar, con esfuerzo,dedicación y colaboración como pilares. Estos valores nos impulsan a mejorar cada día y a brindar soluciones de calidad a nuestros clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background-light dark:bg-background-dark border-t border-accent-grey/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary dark:text-white text-3xl font-black mb-4">Our History</h2>
            <p className="text-text-dark dark:text-gray-300">A legacy of growth and industrial leadership.</p>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-x-4">
            {/* Item 1 */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-primary text-primary shadow-sm z-10">
                <span className="material-symbols-outlined text-[20px]">flag</span>
              </div>
              <div className="w-0.5 bg-accent-grey h-full -mt-2"></div>
            </div>
            <div className="pb-10 pl-2">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-bold text-lg">1995 - Foundation</span>
                <p className="text-slate-600 dark:text-gray-400">Company founded specializing in high-precision drilling services in North America.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 bg-accent-grey h-4"></div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-primary text-primary shadow-sm z-10">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </div>
              <div className="w-0.5 bg-accent-grey h-full -mt-2"></div>
            </div>
            <div className="pb-10 pl-2 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-bold text-lg">2005 - Major Expansion</span>
                <p className="text-slate-600 dark:text-gray-400">Expanded operations into metallurgy and heavy transport sectors, securing key government contracts.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 bg-accent-grey h-4"></div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-primary text-primary shadow-sm z-10">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </div>
              <div className="w-0.5 bg-accent-grey h-full -mt-2"></div>
            </div>
            <div className="pb-10 pl-2 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-bold text-lg">2015 - Global Reach</span>
                <p className="text-slate-600 dark:text-gray-400">Opened strategic offices in 3 continents, serving top-tier mining clients in Australia and Africa.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 bg-accent-grey h-4"></div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-sm z-10">
                <span className="material-symbols-outlined text-[20px]">emoji_events</span>
              </div>
            </div>
            <div className="pb-2 pl-2 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-bold text-lg">2024 - Innovation Award</span>
                <p className="text-slate-600 dark:text-gray-400">Recognized globally for sustainable industrial technologies and green mining initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-primary dark:text-white text-3xl font-black leading-tight tracking-tight">Meet Our Leadership</h2>
            <p className="mt-4 text-text-dark dark:text-gray-300 max-w-2xl">
              Guided by decades of experience, our leadership team is dedicated to operational excellence and strategic growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img alt="James Sterling" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9j5_UAiqVt8yL2A-L_7ZU_fUcwe5cLOolcdBAj6XkRVU6bIn1m4LuCzWzqOXnGa0utlp1ZOX4loA_Y2QtPrCuRK3LD4G4SVZoJjMyjIEoAvKSQLYfIRNxH8jtu2hOf934UnYde7K1gOoPAHso7n_Q0h61OTUx0cPg8f_QokyPPTLf22GFn3K2z5_tn3S9zKfM0Dz-wLMX8R4sP3VDWD1Cz1z_gwDLjB6jyVdgR-RSueZoibhm379lnrsHIv__jaJF0QX-9YCDvA" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-text-dark dark:text-white text-lg font-bold">James Sterling</h3>
                <span className="text-primary dark:text-blue-300 font-medium text-sm">Chief Executive Officer</span>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img alt="Elena Rodriguez" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZK35uYhAEXMhKHtwl3pSkzz6SR5ya8Xjl_zc_bMrURt4bRWEshp3idXo58RebZ-MA13uljHexCpoPYFmSKJA_UYmq9LTUUqkT2jg_BJYiHRnYGaHrydh3xBhoI75ENLoldDiGXP5Fp6X8uBhiGogOBMPuzY5Od8VosxWpWOwWJXcQJPBFFFhHC--5vefE1WdZWW11nP1ljmjaDkw0RWXxIMs1JjCebGaa3nWWH88b6O8lrWxP0iD02QX9jJNqndrDRYMkS8mSCw" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-text-dark dark:text-white text-lg font-bold">Elena Rodriguez</h3>
                <span className="text-primary dark:text-blue-300 font-medium text-sm">Chief Technology Officer</span>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img alt="David Chen" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBne7FV1Eb72ubTRVsuJIOiRUiIn5PERboOjAG7yovCUMeV4lwHqOwYnNJ_INiJrQ6ZI-m2USfhN8rKlcgv5kDUXLmStP37ipnVyVMuhPR48TJe29fBWoYIRDfzP5Ecm1iC8k3ubxTMMuuhzWw5eAzStwCDJ7zn-H-OFYEMbNAC_YUj3tKopTwmzPjnRNGxO-G8n88yvXq1TNChUoKxBNiw0TW9rWXNMxiGgF5veRsUOk9YyZuugY2e1Hc7hBeVKvtfADh8hRnxWg" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-text-dark dark:text-white text-lg font-bold">David Chen</h3>
                <span className="text-primary dark:text-blue-300 font-medium text-sm">Director of Operations</span>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img alt="Sarah Jenkins" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxy5ziINePqOPEMCqKo-qaTFg8eT4Bvf6MibYgxqUHJnZiK6AamtXaKJYLLNO0EaNi2TMLUa_AIuBQfaWlIkXiKbjgYp8FkdSTME4MxLhPgGzc7ri1Kwg3HEqG9ajpmg0P5Ixz_QC96H_VIoyi2OeV5WmqpKXmcJW7TBw-l8aydT8lQ3IZeoSI4x4Wkro5nmFhMtxYJkjIgPvWUUjlJbCNaJ06i4mrZJcap9bokvSnkQSmVrX_SAHvYy9LxxPc_u3ptq_lPtDyIw" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-text-dark dark:text-white text-lg font-bold">Sarah Jenkins</h3>
                <span className="text-primary dark:text-blue-300 font-medium text-sm">Head of Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;