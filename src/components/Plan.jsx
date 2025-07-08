// src/components/SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const pFamiliares=[
    {id:1,anterior:"100",plan:"Familiar",duplica:"Duplica tu velocidad",tiempo:"X6 meses",mbps:200,wsp:"https://rebrand.ly/kkupxki",precio:"50"},
    {id:2,anterior:"250",plan:"Familiar",duplica:"Duplica tu velocidad",tiempo:"X6 meses",mbps:500,wsp:"https://rebrand.ly/kkupxki",precio:"70"},
    {id:3,anterior:"400",plan:"Familiar",duplica:"Duplica tu velocidad",tiempo:"X6 meses",mbps:800,wsp:"https://rebrand.ly/kkupxki",precio:"90"},
    {id:4,anterior:"500",plan:"Premiun",duplica:"",tiempo:"",mbps:1000,router:"1 router",ruta:"/planes/router.svg",wsp:"https://bit.ly/3G1UxGL",precio:"110"},
    {id:5,anterior:"600",plan:"Premiun",duplica:"",tiempo:"",mbps:1000,router:"1 router",repetidor:"1 repetidor",ruta:"/planes/router.svg",wsp:"https://bit.ly/3G1UxGL",precio:"150"},
    {id:6,anterior:"800",plan:"Premiun",duplica:"",tiempo:"",mbps:1000,router:"1 router",repetidor:"2 repetidores",ruta:"/planes/router.svg",wsp:"https://bit.ly/3G1UxGL",precio:"250"},
]


const pilares=[
    {id:1,texto:"100% Fibra Óptica",img:"/beneficios/fibra.svg"},
    {id:2,texto:"Internet Limitado y simétrico",img:"/beneficios/simetrica.svg"},
    {id:3,texto:"Mayor velocidad",img:"/beneficios/velocidad.svg"},
]


export default function SwiperSlider() {
  return (
    <div className="">
        <div className="p-2">
            <h1 className="text-6xl font-bold text-center text-blue-700">Nuestros <span className="text-orange-600">Planes</span></h1>
        </div>

        <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className=""
    >
      {pFamiliares.map((item) => (
        <SwiperSlide key={item.id} className='bg-center bg-cover p-2'>

            <div className="absolute -top-6 w-full p-2 flex justify-center">
                <span className="bg-cyan-400 text-white font-bold p-2 rounded-full">Plan {item.plan}</span>
            </div>

            <div class="flex justify-center text-center w-full">

                <div class="rounded-3xl border-blue-700 border-4 p-2 shadow-xs shadow-black w-full">

                    <div className="mt-4">
                        <h1 class="text-4xl font-bold text-blue-700">100% Fibra</h1>
                        <p class="text-3xl font-bold text-orange-600">Instalación Gratis</p>
                    </div>


                        <div class="lg:flex justify-between gap-2 lg:p-2 xl:w-full w-4/5 block m-auto">

                            <div class="text-base/12 text-center p-4 xl:w-1/2 w-full grid grid-cols-1 gap-2">
                                <p id="cantidadAnterior" class="line-through text-3xl">{item.anterior} mbps</p>
                                <h2 class="font-extrabold text-blue-700 text-6xl">{item.mbps} Mbps</h2>
                                <p class="text-2xl">{item.duplica || item.router}</p>
                                <p class="text-2xl">{item.tiempo || item.repetidor}</p>

                                <div class="block m-auto w-11/12">
                                    <h2 id="precio" class="bg-orange-500 lg:text-4xl text-2xl lg:p-2 p-1 rounded-3xl font-bold text-white w-full">S/{item.precio}.00</h2>
                                    <span class="bg-cyan-400 rounded-2xl p-2 text-white">Mensuales</span>
                                </div>


                            </div>

                            <div class="lg:grid lg:grid-cols-1 gap-4 lg:p-4 p-1 xl:w-1/2 w-full flex flex-wrap justify-center ">
                                {pilares.map((pilar) => (
                                    <div class="rounded-2xl w-4/5 p-2 lg:w-full flex lg:justify-center m-auto gap-3 border-2 border-orange-500">
                                    
                                        <div class="xl:p-2 xl:flex xl:justify-center xl:w-1/2 block m-auto w-full">
                                            {/* Verifica que itemPilares.img exista antes de usarla */}
                                            <img class="xl:w-3/4" src={pilar.img} alt="" />
                                        </div>
                                        
                                        <div class="flex justify-center items-center p-2 text-blue-700 xl:w-1/2 w-full">
                                            <p className="font-semibold">{pilar.texto || 'Texto no disponible'}</p>
                                        </div>
                                
                                    </div>
                                ))}
                            </div>

                        </div>

                        <a href="" target="_blank" id="link" class="">
                            <div class="block m-auto lg:p-2 p-1 xl:w-1/2 w-5/6 bg-blue-700 rounded-3xl shadow-2xs shadow-black cursor-pointer  hover:scale-105 mt-2 mb-2">
                                <h2 class="font-bold lg:text-3xl text-1xl text-white">Quiero este plan!!</h2>
                            </div>
                        </a>

                </div>

            </div>

        </SwiperSlide>
      ))}
        </Swiper>
    </div>
  );
}
