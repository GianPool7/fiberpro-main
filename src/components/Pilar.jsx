import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pilaresFP = [
  { id: 1, nombre: "VELOCIDAD SIMÉTRICA", img: "https://fiberpro.com.pe/wp-content/uploads/2024/04/speed.png" },
  { id: 2, nombre: "ALCANCE 2.4 GHZ Y 5 GHZ", img: "https://fiberpro.com.pe/wp-content/uploads/2024/04/alcance.png" },
  { id: 3, nombre: "100% FIBRA ÓPTICA", img: "https://fiberpro.com.pe/wp-content/uploads/2024/04/fibra.png" },
  { id: 4, nombre: "CONEXIÓN MULTIDISPOSITIVO", img: "https://fiberpro.com.pe/wp-content/uploads/2024/04/conexion.png" },
];

export default function PilaresGSAP() {
  useEffect(() => {
    pilaresFP.forEach((_, index) => {
      gsap.from(`.pilar-${index}`, {
        scrollTrigger: {
          trigger: `.pilar-${index}`,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="p-2 z-0">
      <div className="p-2 w-full flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-around p-4 xl:w-3/5 w-full gap-3">
          {pilaresFP.map((item, i) => (
            <div key={item.id} className={`pilar-${i} border-4 rounded-3xl p-4 w-60 shadow-2xl hover:scale-105 transition-transform`}>
              <img className="block m-auto" src={item.img} alt={item.nombre} />
              <p className="text-center p-2 mt-3 text-orange-600 font-bold">{item.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
