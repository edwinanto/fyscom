import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (form.current) {
      // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
      // Sign up at https://www.emailjs.com/
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID', 
          'YOUR_TEMPLATE_ID', 
          form.current, 
          {
            publicKey: 'YOUR_PUBLIC_KEY',
          }
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            form.current?.reset();
          },
          (error) => {
            console.error('FAILED...', error.text);
            setLoading(false);
            setError(true);
          },
        );
    }
  };
  return (
    <div className="flex flex-1 flex-col lg:flex-row h-full">
      {/* Left Column: Content & Form */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-background-light lg:max-w-[60%] xl:max-w-[55%]">
        <div className="flex flex-col gap-8 px-6 py-12 md:px-12 lg:px-16 lg:py-16">
          {/* Page Heading */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <span className="size-2 rounded-full bg-accent-red"></span>
              Contáctanos
            </div>
            <h1 className="text-text-main text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Construyamos algo duradero juntos.
            </h1>
            <p className="text-text-sub text-lg font-normal leading-relaxed">
              ¿Listo para optimizar sus operaciones? Comuníquese con nuestro equipo de ingeniería para obtener soluciones en minería, metalurgia y transporte.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4">
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main">Sede Principal</h3>
                <p className="text-sm text-text-sub mt-1">Calle Piedra Redonda Mz. C9 Lt. 7<br/>Urb. Los Cedros - Chorrillos - Lima - Perú</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main">Teléfono</h3>
                <p className="text-sm text-text-sub mt-1">
                  <a href="tel:+15550192834" className="hover:text-primary transition">+51 931 752 688 / +51 957 895 946</a>
                </p>
                <p className="text-xs text-text-sub">Lun-Vie, 8am-6pm EST</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main">Correo Electrónico</h3>
                <p className="text-sm text-text-sub mt-1">
                  <a href="mailto:ventas@fyscom.com.pe" className="hover:text-primary transition">ventas@fyscom.com.pe</a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section - debemos ejecutar npm install @emailjs/browser en la terminal*/}
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-xl font-bold text-text-main">Envíanos un Mensaje</h2>
            <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
              {/* Row 1 */}
              <div className="flex flex-col gap-6 md:flex-row">
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 text-sm font-semibold text-text-main">Nombre Completo</span>
                  <input type="text" name="user_name" required className="h-12 w-full rounded-lg border-gray-200 bg-background-light px-4 text-base text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-sub/50 transition" placeholder="Introduce tu nombre" />
                </label>
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 text-sm font-semibold text-text-main">Correo Electrónico</span>
                  <input type="email" name="user_email" required className="h-12 w-full rounded-lg border-gray-200 bg-background-light px-4 text-base text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-sub/50 transition" placeholder="name@company.com" />
                </label>
              </div>
              {/* Row 2 */}
              <div className="flex flex-col gap-6 md:flex-row">
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 text-sm font-semibold text-text-main">Nombre de la Empresa</span>
                  <input type="text" name="company_name" className="h-12 w-full rounded-lg border-gray-200 bg-background-light px-4 text-base text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-sub/50 transition" placeholder="Introduce el nombre de tu empresa" />
                </label>
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 text-sm font-semibold text-text-main">Industria</span>
                  <div className="relative">
                    <select name="industry" className="h-12 w-full appearance-none rounded-lg border-gray-200 bg-background-light px-4 text-base text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" defaultValue="">
                      <option value="" disabled>Seleccone una industria...</option>
                      <option value="mining">Minería</option>
                      <option value="metallurgy">Metalurgia</option>
                      <option value="drilling">Perforación</option>
                      <option value="transport">Transporte y Logística</option>
                      <option value="other">Otro</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-sub">
                      {/*<span className="material-symbols-outlined text-[20px]">expand_more</span>*/}
                    </span>
                  </div>
                </label>
              </div>
              {/* Row 3 */}
              <label className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-text-main">Mensaje</span>
                <textarea name="message" required className="min-h-[140px] w-full resize-none rounded-lg border-gray-200 bg-background-light p-4 text-base text-text-main outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-sub/50 transition" placeholder="Háblanos sobre los requisitos de tu proyecto..."></textarea>
              </label>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-text-sub">
                    Al enviar este formulario, aceptas nuestra <a href="#" className="underline hover:text-primary">Política de Privacidad</a>.
                  </p>
                  <button type="submit" disabled={loading} className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-accent-red px-8 text-sm font-bold text-white shadow-lg shadow-accent-red/20 transition hover:bg-red-600 hover:shadow-xl focus:ring-4 focus:ring-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </div>
                {success && (
                  <div className="p-4 text-sm text-green-700 bg-green-100 rounded-lg">
                    ¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
                  </div>
                )}
                {error && (
                  <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    Lo sentimos, hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por teléfono.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Column: Google Maps */}
      <div className="relative min-h-[400px] flex-1 lg:min-h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.6217056189107!2d-77.01690872404802!3d-12.206123644890136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7599b81270d%3A0xa46e88a6bfe7ebab!2sPiedra%20Redonda%2C%20Chorrillos%2015067!5e0!3m2!1ses-419!2spe!4v1770767038787!5m2!1ses-419!2spe"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Fyscom - Chorrillos, Lima"
        ></iframe>
      </div>
    </div>
  );
};



export default Contact;