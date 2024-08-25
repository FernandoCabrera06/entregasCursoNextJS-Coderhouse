import Boton from "@/components/ui/Boton"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import QtySelector from "../../components/products/QtySelector"
import "./page.css"

export const metadata = {
  title: "Rocco Alimentos",
  description: "E-commerce de alimentos para mascotas",
  keywords: [
    "coderhouse",
    "perros",
    "e-commerce",
    "Royal Canin",
    "mascotas",
    "alimento",
  ],
}

const item = {
  id: 1,
  stock: 3,
  description:
    "Royal Canin Alimento Seco para Perro Adulto Raza Grande, 13.6 kg",
  img: "https://i.ibb.co/ZmRRk2w/royal.png",
  price: 22100,
  suggested: true,
  brand: "Royal Canin",
  discountRate: 15,
  category: "perros",
}

const Cart = () => {
  return (
    <>
      <Header />
      <section>
        <div className="text-3xl flex justify-center mt-3 mb-3">
          <h1> Carrito </h1>
        </div>
        <div className="card-compra-container">
          <div className="card-compra a">
            <div className="card-compra-info">
              <div>
                <Image
                  src="/card.png"
                  alt="producto de catálogo"
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <p>
                  Royal Canin Alimento Seco para Perro Adulto Raza Grande, 13.6
                  kg
                </p>
                <h2>$2.210</h2>
              </div>
            </div>
            <div>
              <QtySelector item={item} esCarrito />
            </div>
          </div>

          <div className="card-compra b">
            <div className="card-compra-info">
              <div>
                <Image
                  src="/card.png"
                  alt="producto de catálogo"
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <p>
                  Royal Canin Alimento Seco para Perro Adulto Raza Grande, 13.6
                  kg
                </p>
                <h2>$2.210</h2>
              </div>
            </div>
            <div>
              <QtySelector item={item} esCarrito />
            </div>
          </div>
          <div className="cuenta-total">
            <h1>Resumen del pedido</h1>
            <p>Subtotal:...................$2.998</p>
            <p>Descuentos:.........................</p>
            <p>Envío:..........................$200</p>
            <hr />
            <h2>Total: $3.198</h2>
            <div>
              <Boton>Comprar ahora</Boton>
              <Boton>Continuar buscando</Boton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Cart
