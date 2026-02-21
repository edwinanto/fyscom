import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { id: _id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="w-full bg-[#fcf8f8] border-b border-[#f0f0f0]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link to="/" className="text-corporate-blue/60 hover:text-primary font-medium">Home</Link>
            <span className="material-symbols-outlined text-[16px] text-corporate-blue/40">chevron_right</span>
            <Link to="/products" className="text-corporate-blue/60 hover:text-primary font-medium">Mining Equipment</Link>
            <span className="material-symbols-outlined text-[16px] text-corporate-blue/40">chevron_right</span>
            <span className="text-corporate-blue font-bold">Titan-X Series</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
          
          {/* LEFT COLUMN: Product Images (Sticky on Desktop) */}
          <div className="lg:col-span-7 h-fit lg:sticky lg:top-24">
            <div className="w-full bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] relative group mb-4">
              {/* Main Image */}
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuOAIPhKKD4vsUQgt34Am3eELv_xAGv-pa4WMySaBqm5LhoP0PLbNtrfHlN2WvFKEdvhPN-8p-aaDJGirsqrWxBQ2Ogd4BNOu-hrKi_7Ri2dXvwJ7x4NhgTHuCr9i0vhkG5aau0FaMj9wUsG3RTyK5bqHFnPEloslDBVEXv6uBDlZ7YtUm9CkimnTDM6tFPPYzPzOLBo7Je5t09icxpx0lThC5eyPC9bqcGw1kKlNi47DGVrw1CE3cH77jfCuWzhkf-qugxrJxyQ')" }}></div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-white/90 p-2 rounded-lg shadow-sm hover:bg-white text-corporate-blue transition-colors" title="Zoom">
                  <span className="material-symbols-outlined">zoom_in</span>
                </button>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              <button className="relative min-w-[100px] w-[100px] aspect-square rounded-lg overflow-hidden border-2 border-primary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANe8_P675WI2V-qqq59pBHdRuhvHHZ3TqpPHI7hiTq8AGClmTTFHNOsXrBW0MVjAoF-_5HKFcUmXk1hSFw1WoP-3x2679TsecR3khlGNP5Bi7Q1zBlt7TzwT25uh5-6bieQOxop6nvhqlph00zGYp_xgvQA0bDUeBBij4_4XaZ8OmdrJk4I35V-p8AEqhsGMAbDFjO6ASIjGL5Eyh-ygiosnMok1J-EBI03GD_VlMNayj7u82-Q6UJtFYxmQC3TgveGKyp2cauTw')" }}></div>
              </button>
              <button className="relative min-w-[100px] w-[100px] aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-corporate-blue/30">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS3zDmKYla2FXOjz1ny2SJI_2FQWSFV7jBKh6JfWQ7tU1sv5sxmZfqbOhf1aIuCUNJgEPWNqHoXjX0ySStxj2b6HIwc4rzgrJ1n26bMVilrrHVhciyzEdsdUZvblaPMuq1bMcMam4b-gjmSd6-VtECuFJfTGY2PMjUI1LL2czBsY9h-z5xmWUYc5lg6bcdN0C0XBD1JNZ-cAJNI-FfKlS-oZukqz9cqgJicMPJj7wTiXb01UH_4vWhaKb_zETIXYFj9b0tzSDpMw')" }}></div>
              </button>
              <button className="relative min-w-[100px] w-[100px] aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-corporate-blue/30">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCqyRTsD4_v9D_13WWtnneTn5hYjcI9PL-hJFoiaLzOQlg63clse3j6Sd6QAuLDFrmBu4cYrHgZ1l8_kSrMSnI6taUWsgr7TBfcsqojSmc2SxddTgrZg_hWnzTGyQ-1u50v2b-iwIHcNdD6cNamdBpc7R3PjEpvZHRPRDEwhPe5PRvigEJ-lkxOmSvNE4VqKyvSSGJU45RuCBZ_tdQDrJhTat_mX1-gXsd3Ra7KjS16emVcS-lXTcU4KlXCLAL-2LkxpicIy5hkw')" }}></div>
              </button>
              <button className="relative min-w-[100px] w-[100px] aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-corporate-blue/30">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBglfEgFckmmzhbxT-g7M1Sr5EdQchL1vVWVrp4EacVBAHaqmk2MOIhcw29kPDALihHXLz18Dw4AMR4iLfTq8JXf6s4Ni7Ib-orj8W2eiRWJlE1o1qFVsEFNplacboDUDE8NI1rrYdue4G0lVFG0_wz2EIG8GrClZSI8FUJd94_82Zgdc5XIQ1Cmkm-QvmHO4mI2nrnsceyO5p-gtgvBDHQE0L3Q2MabcXcLwmZw5HkWwg29en_VnqVj16blPBX9yyDvgXrKmpzA')" }}></div>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Details & Specs Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Header Info */}
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue tracking-tight leading-tight mb-3">Titan-X Heavy Duty Drill Rig</h1>
              <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                <span className="bg-blue-100 text-corporate-blue px-2 py-1 rounded">Series 5000</span>
                <span className="text-green-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span> In Stock
                </span>
                <span className="text-gray-500">SKU: TX-5500-HD</span>
              </div>
              <p className="text-corporate-blue/80 text-lg leading-relaxed">
                Engineered for extreme depths and harsh environments, the Titan-X offers superior torque and stability for open-pit mining operations. Features reinforced chassis and advanced hydraulic load sensing.
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary hover:bg-red-700 text-white h-12 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                <span className="material-symbols-outlined">request_quote</span>
                Request Quote
              </button>
              <button className="flex-1 border-2 border-corporate-blue/10 hover:border-corporate-blue/30 text-corporate-blue bg-white h-12 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined">download</span>
                Spec Sheet
              </button>
            </div>

            {/* Technical Specs (Sidebar Style) */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-corporate-blue mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">tune</span> Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Operating Weight</span>
                  <span className="font-semibold text-corporate-blue">54,000 kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Engine Power</span>
                  <span className="font-semibold text-corporate-blue">403 kW (540 hp)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Drilling Depth</span>
                  <span className="font-semibold text-corporate-blue">Max 55 meters</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Hole Diameter</span>
                  <span className="font-semibold text-corporate-blue">152 - 270 mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Fuel Capacity</span>
                  <span className="font-semibold text-corporate-blue">1200 Liters</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                  <span className="text-gray-600 text-sm">Gradeability</span>
                  <span className="font-semibold text-corporate-blue">50%</span>
                </div>
              </div>
              <button className="w-full text-primary font-bold text-sm mt-5 hover:underline flex items-center justify-center gap-1">
                View Full Specifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Detailed Description Text */}
            <div>
              <h3 className="text-lg font-bold text-corporate-blue mb-3">Product Description</h3>
              <div className="prose prose-blue text-gray-600 text-sm leading-relaxed space-y-4">
                <p>
                  The Titan-X is our flagship heavy-duty drill rig, specifically designed to meet the rigorous demands of large-scale open-pit mining. Built on a modular platform, it allows for quick maintenance and component replacement, minimizing downtime significantly.
                </p>
                <p>
                  Equipped with the proprietary <strong>Hydra-Sense™</strong> technology, the rig automatically adjusts hydraulic pressure based on rock density, ensuring optimal fuel efficiency and drill bit longevity. The cabin is pressurized and sound-insulated to ISO standards, providing a safe and comfortable environment for operators working long shifts.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Advanced dust suppression system included.</li>
                  <li>GPS-enabled autonomous drilling ready.</li>
                  <li>360-degree camera system for enhanced safety.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="bg-background-light w-full py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-corporate-blue">Related Equipment</h2>
            <div className="flex gap-2">
              <button className="size-10 rounded-full bg-white text-corporate-blue shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="size-10 rounded-full bg-white text-corporate-blue shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <a href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeYDbUTg-H2HpgFKgBTdA6DHDJvSYkrTmwukHDVN0UGqBYHKup1dVrt1yjMexpXFLd0FvZjuZ85O5gV0PmUfLTQ5M1t-BJqngMwSAEm95_w3fW_Z89cSeexpZzZpOTTGS6Dy47WjUFZWOihA7rg1EPyENsBeJPdHSh8cRhlLzxFP5a6eQr_vQPOd5bvZQSCdblN6k40RdYs83ilMSk-rh0pwNPMHz5M1gARJwYFM2YH05wcOhHSwUxy_8BblP1uis_e8QdutmV_Q')" }}></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-corporate-blue text-lg mb-1 group-hover:text-primary transition-colors">Atlas Hauler 50T</h4>
                <p className="text-sm text-gray-500 mb-4">Articulated Dump Truck</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-corporate-blue">50 Tonne</span>
                  <span className="text-primary text-sm font-bold flex items-center">View <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></span>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj-wM5ufOmk7jaYiix4ugTOMN2Iky3924LDhDAXNBramBVeNJNe4_QCyb5fc-vV3ul8Ci2tfkPesJsur6dgjogl5OHHuymeq1XwevsrNiOmGgLduErrK9AQobaB2IKy9MpBd6_6DveCW0bEdzHPKKTkRI0eTVNgdQujdsHET-EN9VM2y10f0WWWe9aEiRiBDayJIdIqq5bse9rv35bapk9xi-lzuXVQQ_6so2q1MpUCK801zt5b0ilLxPXsJDnIbKiU8IYebpsqw')" }}></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-corporate-blue text-lg mb-1 group-hover:text-primary transition-colors">Titan-S Compact</h4>
                <p className="text-sm text-gray-500 mb-4">Mobile Drilling Unit</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-corporate-blue">25 Meter</span>
                  <span className="text-primary text-sm font-bold flex items-center">View <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></span>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYOsJW30FCBcNy4nF9Ib2Kef2vuA2xlWCIwo6zPc7SYzEAQRQzoBfykwVk3zaiThLXUs8jCNHu0-KwLVeY7Va3fXc2OEsjIQ0_0UsGKYPFRCHvRNMcuMoKAv091e6WlLnEgpziPhkhIOp7LOIYyvJXICxEoXxK-O2CCSMk1Po-V6Pcosu78xRRU603-Tr_tV9-IvLSNgHnRm16AIUFfoZcj-o3Lz4dIlsij3_5LLIVmUXV02GPGAPcVUY8CBwN3Lo-IZhXEsMA8A')" }}></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-corporate-blue text-lg mb-1 group-hover:text-primary transition-colors">EX-900 Excavator</h4>
                <p className="text-sm text-gray-500 mb-4">Hydraulic Excavator</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-corporate-blue">90 Tonne</span>
                  <span className="text-primary text-sm font-bold flex items-center">View <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></span>
                </div>
              </div>
            </a>
            {/* Card 4 */}
            <a href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNYUQvghw5TcE6oYTEqb07Ww0K-kZj2EycQEmdWWN4eRwDQMWFZy8e1p86PyH7xDYzI7fJVe_UkBW3pWlO2HZXfgq8hadfRfjVSIymTm3BR-AZNmJsXFVVQpxhCJm9wq7bQyopLhH1ZWNrm5q3ii3_hSkFQ7mD3VkmgrMgcHP2FyI1IsU_Xi27ZTU9x3Xhu-Nl_Xpch7_4tYFmG0C_qOz-3J3P4Ppr9gyVN-CbVRzZsXl6-HAbum41XEs0hKtygpaVnJ6CUsCJAQ')" }}></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-corporate-blue text-lg mb-1 group-hover:text-primary transition-colors">ConveyMax 2000</h4>
                <p className="text-sm text-gray-500 mb-4">Material Handling</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-corporate-blue">Custom</span>
                  <span className="text-primary text-sm font-bold flex items-center">View <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="w-full bg-corporate-blue py-16 md:py-20 relative overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-[960px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need customized specifications?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Our engineering team can adapt the Titan-X for specific geological conditions or project requirements. Contact us for a technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-red-700 text-white font-bold h-12 px-8 rounded-lg transition-colors">
              Contact Engineering
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white/10 font-bold h-12 px-8 rounded-lg transition-colors">
              Find Distributor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;