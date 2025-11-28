// app/search/page.tsx
"use client";

import { useState } from "react";
import DealershipMap, { Dealership } from "@/components/DealershipMap";

export default function SearchPage() {
  const [selectedDealer, setSelectedDealer] = useState<Dealership | null>(null);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* MAP FULLSCREEN */}
      <div className="absolute inset-0 z-0">
        <DealershipMap onDealerClick={setSelectedDealer} />
      </div>

      {/* CLICK-AWAY BACKDROP (desktop only optional) */}
      {selectedDealer && (
        <div
          className="absolute inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setSelectedDealer(null)}
        />
      )}

      {/* FLOATING CARD (DESKTOP) */}
      {selectedDealer && (
        <div
          className="
            hidden md:block
            absolute top-1/2 right-6 md:right-10
            -translate-y-1/2
            z-40
          "
        >
          <div
            className="
              w-[700px] max-h-[90vh]
              bg-black/70 backdrop-blur-xl
              rounded-2xl border border-white/10
              shadow-2xl text-white
              p-6 overflow-hidden
            "
          >
            {/* header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {selectedDealer.name}
                </h2>
                <p className="text-xs md:text-sm text-white/60">
                  {selectedDealer.city}, España
                </p>
              </div>

              <button
                onClick={() => setSelectedDealer(null)}
                className="
                  px-3 py-1 
                  rounded-md 
                  bg-white/10 hover:bg-white/20 
                  text-xs md:text-sm
                "
              >
                Cerrar
              </button>
            </div>

            {/* content */}
            <div className="overflow-y-auto pr-1 max-h-[85vh] space-y-3 text-sm text-white/70">
              <p>
                Aquí irán los coches disponibles en este concesionario. De momento
                esto es contenido de prueba.
              </p>

              {/* GRID: TWO CARDS PER ROW */}
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-48 rounded-xl bg-white/5 border border-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING CARD (MOBILE) */}
      {selectedDealer && (
        <div
          className="
            md:hidden
            absolute bottom-4 left-1/2 -translate-x-1/2
            z-40
            w-[92vw]
          "
        >
          <div
            className="
              bg-black/85 backdrop-blur-xl
              rounded-2xl border border-white/10
              shadow-2xl text-white
              p-4
            "
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h2 className="text-base font-semibold">
                  {selectedDealer.name}
                </h2>
                <p className="text-[11px] text-white/60">
                  {selectedDealer.city}, España
                </p>
              </div>
              <button
                onClick={() => setSelectedDealer(null)}
                className="px-2 py-1 rounded-md bg-white/10 text-[11px]"
              >
                Cerrar
              </button>
            </div>

            <p className="text-[11px] text-white/70">
              Aquí puedes mostrar un resumen rápido de los coches de este
              concesionario en móvil.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
