"use client";

import AnimatedCounter from "@/components/animatedCounter";
import GallerySlider from "@/components/GallerySlider";
import { neue2 } from "../fonts/neuePlak";
import { neue6 } from "../fonts/neuePlak";

export default function TestFramePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO INTRO VIDEO */}
      <section className="relative h-screen w-full overflow-hidden">

        const offset = useParallax(0.2);

        <video
          src="/videos/vehicles/porsche/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <h1 className={`${neue2.className} text-white text-5xl md:text-7xl mr-47 font-semibold tracking-wide drop-shadow-lg`}>
            PORSCHE
          </h1>
          <h3 className={`${neue6.className} text-white text-5xl md:text-7xl ml-57 font-semibold tracking-wide drop-shadow-lg`}>
            911
          </h3>
        </div>

      </section>

      <div className="w-full h-24 bg-gradient-to-b from-black to-white"></div>

      <section className="w-full bg-white text-black py-24">

        {/* TOP HEADER */}
        <div className="text-center mb-20 px-4">
          <h2 className="text-5xl font-semibold tracking-tight mb-2">
            Rendimiento que define una era
          </h2>
          <p className="text-gray-700 text-xl max-w-xl mx-auto">
            Cifras que reflejan precisión alemana y eficiencia extrema.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 min-h-[630px]">

          {/* LEFT: IMAGE */}
          <div className="col-span-2 w-full h-[87%] flex items-center justify-center overflow-hidden translate-x-[-18%] translate-y-[6%] rounded-md">
            <img
              src="/images/vehicles/porsche/img1.jpg"
              alt="Porsche Side"
              className="w-[145%] max-w-none object-contain translate-x-[4%]"
            />
          </div>

          {/* RIGHT: CENTERED SPECS */}
          <div className="flex flex-col items-center justify-center text-center space-y-12">

            {/* SPEC 1 */}
            <div>
              <h3 className="text-5xl font-semibold">
                <AnimatedCounter target={4.1} suffix=" s" />
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Aceleración 0–100 km/h
              </p>
            </div>

            {/* SPEC 2 */}
            <div>
              <h3 className="text-5xl font-semibold">
                <AnimatedCounter target={290} suffix=" kW" />
                <span className="mx-2">/</span>
                <AnimatedCounter target={394} suffix=" CV" />
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Potencia máxima (kW/CV)
              </p>
            </div>

            {/* SPEC 3 */}
            <div>
              <h3 className="text-5xl font-semibold">
                <AnimatedCounter target={294} suffix=" km/h" />
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Velocidad máxima
              </p>
            </div>

            {/* BUTTON under specs (still centered) */}
            <button className="px-8 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
              Todos los detalles técnicos
            </button>

          </div>

        </div>

      </section>
      <div className="w-full h-32 bg-gradient-to-b from-white to-black"></div>
      <section>
        <GallerySlider
          images={[
            "images/vehicles/porsche/gallery/01.jpg",
            "images/vehicles/porsche/gallery/02.jpg",
            "images/vehicles/porsche/gallery/03.jpg",
            "images/vehicles/porsche/gallery/04.jpg",
          ]}
        />
      </section>
    </main>
  );
}
