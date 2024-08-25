import Image from "next/image"
import "./Header.css"

const Header = () => {
  return (
    <header className="w-full bg-sky-700">
      <div className="container m-auto py-6 flex justify-between items-center">
        <a href="/">
          <div className="logo-sitio-container">
            <Image
              src="/logo.png"
              id="logo-sitio"
              alt="logo sitio"
              width={50}
              height={50}
            />
            <p className="text-base text-slate-100">
              Rocco - Alimentos para mascotas
            </p>
          </div>
        </a>
        <nav className="flex justify-between gap-2">
          <a className="text-base text-slate-100 p-3" href="/">
            Inicio
          </a>

          <a className="text-base text-slate-100 p-3" href="/catalogo/todos">
            Catálogo
          </a>

          <a className="text-base text-slate-100 p-3" href="/admin">
            Administrador
          </a>

          <a className="text-base text-slate-100 p-3" href="/carrito">
            <span id="contadorCarrito" className="badge text-bg-danger"></span>
            Carrito 🛒
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
