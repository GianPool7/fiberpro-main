// src/components/SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <div className="p-2">
        <h1 className="font-bold text-6xl text-center text-blue-700">Nuestros <span className="text-orange-500">Planes</span></h1>
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
      {[1, 2, 3, 4, 5].map((num) => (
        <SwiperSlide key={num} className='bg-center bg-cover p-2'>

                <div class="flex justify-center text-center w-full">

                    <div class="rounded-3xl border-blue-700 border-4 p-2 shadow-xs shadow-black w-full">

                        <h1 class="text-4xl font-bold text-blue-700">100% Fibra</h1>
                        <p class="text-3xl font-bold text-blue-700">Instalación Gratis</p>

                        <div class="lg:flex justify-between gap-2 lg:p-2 xl:w-full w-4/5 block m-auto">

                            <div class="text-base/12 text-center p-4 xl:w-1/2 w-full grid grid-cols-1 gap-2">
                                <p id="cantidadAnterior" class="line-through text-3xl">200 mbps</p>
                                <h2 id="cantidadActual" class="font-extrabold text-blue-700 text-6xl">400 Mbps</h2>
                                <p class="text-2xl">Duplica tu velocidad</p>
                                <p class="text-2xl">X6 meses</p>

                                <div class="block m-auto w-3/4">
                                    <h2 id="precio" class="bg-orange-500 lg:text-4xl text-2xl lg:p-2 p-1 rounded-3xl font-bold text-white w-full">S/70.00</h2>
                                    <span class="bg-cyan-400 rounded-2xl p-2 text-white">Mensuales</span>
                                </div>


                            </div>

                            <div class="lg:grid lg:grid-cols-1 gap-4 lg:p-4 p-1 xl:w-1/2 w-full flex flex-wrap justify-center ">

                                    <div class="rounded-2xl w-4/5 p-2 lg:w-full sm:flex block lg:justify-center m-auto gap-3 border-2 border-orange-500">
                                    
                                        <div class="xl:p-2 xl:flex xl:justify-center xl:w-1/2 block m-auto w-full">
                                            {/* Verifica que itemPilares.img exista antes de usarla */}
                                            {/* <img class="xl:w-3/4" src={itemPilares.img || 'default-image.jpg'} alt={`Imagen de ${itemPilares.texto || 'Elemento'}`} /> */}
                                        </div>
                                        
                                        <div class="flex justify-center items-center p-2 text-blue-700 xl:w-1/2 w-full">
                                            {/* <p>{itemPilares.texto || 'Texto no disponible'}</p> */}
                                        </div>
                                
                                    </div>
                                


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
