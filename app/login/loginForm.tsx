"use client";

import { useState } from "react";
import { timelessFont } from "../fonts/timeless";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    employeeCode: "",
  });

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ----------------------------
  // LOGIN WITH CREDENTIALS
  // ----------------------------
  async function handleLogin() {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        alert("Credenciales incorrectas");
        setLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  // ----------------------------
  // REGISTER A NEW USER
  // ----------------------------
  async function handleRegister() {
    if (form.password !== form.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        alert("Hubo un error creando tu cuenta");
        setLoading(false);
        return;
      }

      // AUTO LOGIN AFTER REGISTER
      await fetch("/api/auth/callback/credentials", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      router.push("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-start w-full max-w-sm">

      {/* BRAND */}
      <div
        className={`${timelessFont.className} text-3xl font-bold text-white tracking-[0.25em] text-center pb-15 mb-6`}
      >
        TIMELESS
      </div>

      {/* TITLE */}
      <h1 className="text-xl font-semibold mb-6 text-white tracking-wide">
        {isRegister
          ? "Crea tu cuenta para continuar"
          : "¡Bienvenido! Por favor, inicia sesión"}
      </h1>

      {/* LOGIN FORM */}
      {!isRegister && (
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-s border border-white/20 text-m transition disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>

          {/* GOOGLE BUTTON */}
          <a
            href="/api/auth/google"
            className="block w-full text-center p-3 bg-blue-500/60 hover:bg-blue-500 rounded-s border border-white/20 text-m transition"
          >
            Continuar con Google
          </a>
        </form>
      )}

      {/* REGISTER FORM */}
      {isRegister && (
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <input
            name="confirm"
            type="password"
            placeholder="Confirmar contraseña"
            value={form.confirm}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <input
            name="employeeCode"
            type="text"
            placeholder="Código de empleado (opcional)"
            value={form.employeeCode}
            onChange={handleChange}
            className="w-full p-3 rounded-s bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30"
          />

          <button
            type="button"
            onClick={handleRegister}
            disabled={loading}
            className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-s border border-white/20 text-m transition disabled:opacity-50"
          >
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>
      )}

      {/* TOGGLE */}
      <div className="text-center mt-6 text-white/60 text-sm">
        {!isRegister ? (
          <>
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => setIsRegister(true)}
              className="text-white underline hover:text-white/80"
            >
              Regístrate
            </button>
          </>
        ) : (
          <>
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => setIsRegister(false)}
              className="text-white underline hover:text-white/80"
            >
              Inicia sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}
