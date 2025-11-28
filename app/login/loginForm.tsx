"use client";

import { useState } from "react";
import { timelessFont } from "../fonts/timeless";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col justify-start w-full max-w-sm">
    
      <div className={`${timelessFont.className} text-3xl font-bold text-white tracking-[0.25em] text-center pb-15 mb-6`}>
        TIMELESS
      </div>
      
      <h1 className="text-xl font-semibold mb-6 text-white tracking-wide">
        ¡Bienvenido! Por favor, inicia sesión con tus credenciales
      </h1>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
        />

        <button
          type="button"
          onClick={() => setLoading(true)}
          className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-s border border-white/20 text-m transition"
        >
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
