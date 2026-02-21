import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <>
      {/* Page Heading & Context */}
      <section className="bg-surface-light dark:bg-[#1e1e1e] pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#dcdcdc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-header-blue dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-4">Engineering Excellence in Action</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Explore our comprehensive portfolio of heavy-duty equipment and engineering solutions tailored for the mining, metallurgy, drilling, and transport sectors.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm font-bold text-header-blue dark:text-gray-200">Catalog Updated</p>
                <p className="text-xs text-gray-500">October 2023</p>
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
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-white shadow-md transition-all hover:shadow-lg focus:outline-none ring-2 ring-offset-2 ring-primary">
              All Industries
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-header-blue hover:bg-gray-50 border border-gray-200 transition-all hover:shadow-md">
              Mining
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-header-blue hover:bg-gray-50 border border-gray-200 transition-all hover:shadow-md">
              Metallurgy
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-header-blue hover:bg-gray-50 border border-gray-200 transition-all hover:shadow-md">
              Drilling
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-header-blue hover:bg-gray-50 border border-gray-200 transition-all hover:shadow-md">
              Transport
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card 1: Mining */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSH9Ts63viUdqOlSdPwASLNAZQBodmzZeYfO5UQojlbFHaEFVaA44VdsD3zK9mRWONkezQrusCcgerd0zDnDyI4IJwxlE1mTGIGIPYu6qEJck_mtV-aRk7Q3lPA4b1kskJgJuwBV3U0tofTsjpDVMTKYPL_VSLmvcJTEvopaN1valULioTBp0fS1TWrTBDqLsX3XzS0uwV2tcvj7SnPz8LShcyecJQWz5NzjV5PnO3P9vItaqYjNc1KmFOg5iJOmTPIGYODJ5Axg')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Mining</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Titanium Excavator Bucket</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Capacity: 45m³ • Weight: 12 Tons</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Titanium Excavator Bucket</h3>
                <p className="text-gray-500 text-xs">Mining Sector</p>
              </div>
            </div>

            {/* Card 2: Transport */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAffPeUmQ3CjoGtu2aw0HA1gUql1iBSrPSvrKPTdddoVIFpaZh6j5oCL-9vuY8K3-1sODihHT3_jXBQ8n9BHNHpjfuLktqsgNdlVhRJLguBKeUkwhawwMc-9ZuWecwoYJyzNusWCfTDuVhau-XMTXgw3LGlobNTwueM3pXutkeGFTcV_pYoN1dQyB_s5IahJfwSajmOcYDB4n_9pn9zNQaWnk2BHk4QI8tbEa32v56ZtR6Hj7C5oWi_wA6hExRyN7kD42ybhWmH_w')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Transport</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Conveyor Belt System X5</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Length: 500m • Speed: 4m/s</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Conveyor Belt System X5</h3>
                <p className="text-gray-500 text-xs">Transport Sector</p>
              </div>
            </div>

            {/* Card 3: Metallurgy */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-e6JZ72GsDkF_9OVXTjETYZvRFBoVI9DgZJRlT8E_puqzalrP3dq0Dl9R_2qvSzKcLWBMMMIpfHXFSsN8IArfyRKIplYaWig3nujTPV-f6PIuSYBF38RG0d3XxtUilMHNgZA-ijiAH6yUquY2EHgctBUPbcy8uiild9lr9KGYzvW-jLkUzvIMXS5h-07v7X-QU1NrSIq00kYl18elX3o6I5dd7eSHexR2nK-BdS6cgQgQM-xvCzGlZuwHuiMtfkNlWGzAq8qYMQ')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Metallurgy</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Blast Furnace Module</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Temp: 2200°C • Vol: 4000m³</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Blast Furnace Module</h3>
                <p className="text-gray-500 text-xs">Metallurgy Sector</p>
              </div>
            </div>

            {/* Card 4: Drilling (LINKED TO DETAIL PAGE) */}
            <Link to="/products/titan-x" className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA04M_ZFyZ4-AEA5L08ZfM0tGpLjjDwTSgFhYcf-SFbDYCEPREty_lYxVoxl9JngcEs4c3C8UdUNPxGqY8koE2vavfdUZVrRhNCJMrWkzlB7NQsBclmegZeo_lc0Qq20CotbAGqgGURR4ErvPpNY_nbHp8BDy-3hvgSQ1Z5gwT2enw5Jl0fRZY2zulVmosfFT7Z0qNPHHfV2-dFkeV0bHVnBjuO0AAIi3T8yMTYOBbPxVGCSrq9bhLCtojC3UDNmyOdxykuTjBSCQ')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Drilling</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Hydraulic Rotary Rig</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Depth: 1200ft • Torque: 300kNm</p>
                  <span className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Details
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Hydraulic Rotary Rig</h3>
                <p className="text-gray-500 text-xs">Drilling Sector</p>
              </div>
            </Link>

            {/* Card 5: Transport */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTA46bJEHDgEuItMegL9Q-ZNNqDUuQGvh5ksZJiXEwgpWVXGXrWwMqBBuRr6ITINZbeDidUwh8L8L09LSGOzbaPfq4yZm0ntQS41FXmhXmLi6MN1uei4LeDMdgSHy9BL_azj6-EJgFVH4HjxH2G1KuC1REpxugk3QTwXaPBb8-iVn_hQ544AaKfMWUt8IhTAts1sB0y8gTWjiFngz2Rr2XU5hw0-QkZWeNDtHpiOav1C0296uAvC0mlK4HOrE-BBiW3h5jrisDGg')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Transport</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Hauler 700 Series</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Payload: 300T • Engine: 4000HP</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Hauler 700 Series</h3>
                <p className="text-gray-500 text-xs">Transport Sector</p>
              </div>
            </div>

            {/* Card 6: Drilling */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-3B2h1BDzxKmfJFcqsqthFQnpIx1xuB25sQ8ZM_tZ9_U1P0ckAF1GslOXb7HeufSmsA4gBJOcTHeASJNVq892vJjoO33WdBSJMmmPOKl6KH_RfvybWOHi9_vM8VGa9IIcer0owsFwQHouT7HAg8TmqAhtuAW62aZF5ub2a4PiLVz9bMQwT9KHX_NddY39DFlT2mkQcHKcpRH00DRMN96wiphKItpqG0laO5e4akUpTT7v_oUbcW8OHPyN9jT0q04QfHOB5h3qDg')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Drilling</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Diamond Core Bit Set</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Diameter: 200mm • Hardness: 10Mohs</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Diamond Core Bit Set</h3>
                <p className="text-gray-500 text-xs">Drilling Sector</p>
              </div>
            </div>

            {/* Card 7: Mining */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt_9YAne1R6QTiqg_CGX3rknsQ_ZwYO9KC-sAJnYJPwqLCs3G_FCES7vk0hw2Qu265ofngeiN5f117Wjsxnl1D8TtqNKscZDv03Zdb7bL24EaW7gXdNrDysZdq-XrFlQcaWx3nE4e9GZ99jZP3XDUWZ0OuNNocRl7aexu22eQwQdMctSxaGItLU3uFtMEQFGPdppxaiScLAmEbKExlJySub9PnwmS4q2m-r21d2qTA_OmFICqs_J4Zz94wXv4MVMOwQiaVmMt1KA')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Mining</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Jaw Crusher J-40</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Output: 600 TPH • Power: 250kW</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Jaw Crusher J-40</h3>
                <p className="text-gray-500 text-xs">Mining Sector</p>
              </div>
            </div>

            {/* Card 8: Metallurgy */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBbqf3I6v6Rf8SE_ovyAUfvl-JaStDYJZSjEfTIfyT8IWPuqiQa44tgENGkvKBxMx-xe7oL9CYU-kSY3g2AI1X29vVB-s2q14shVCbyTNZN7UyS5px3MDkS8IncyblZoYGwMgwuVyMVXSAQY4TWWVrywoQx7NwByCtYGIz0_ZjT5a1nY7kZ5ciJORGFmQLscM4kd0K6wgNcKejT5n9tcxaAi34ojllOexwRJykiVedUx09dE81nWfDi70lOpQJ44ZR6xwl8rlOnQ')" }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-header-blue/90 via-header-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Metallurgy</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">Precision Casting Mold</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                  <p className="text-gray-200 text-xs border-l-2 border-primary pl-2 mb-3">Tolerance: ±0.1mm • Alloy: Steel</p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> View Specs
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white group-hover:hidden">
                <h3 className="text-header-blue font-bold text-sm">Precision Casting Mold</h3>
                <p className="text-gray-500 text-xs">Metallurgy Sector</p>
              </div>
            </div>
          </div>

          {/* Pagination / Load More */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-header-blue bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-header-blue transition-all">
              Load More Equipment
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;