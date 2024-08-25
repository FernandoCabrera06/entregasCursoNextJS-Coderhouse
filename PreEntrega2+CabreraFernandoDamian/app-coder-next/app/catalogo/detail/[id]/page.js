import ProductDetail from "@/components/products/ProductDetail"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import { products } from "./../../../../data/mockData"

export async function generateMetadata({ params }) {
  const producto = products.find((prod) => prod.id == params.id)

  return {
    title: `Rocco alimentos - ${producto.category}`,
    description: `${producto.description}`,
    brand: `${producto.brand}`,
  }
}

const Catalogo = ({ params }) => {
  const { id } = params

  return (
    <main>
      <Header />
      <div className="text-3xl flex justify-center mt-3">
        <h1> Detalle Producto </h1>
      </div>
      <div>
        <ProductDetail id={id} />
      </div>
      <Footer />
    </main>
  )
}

export default Catalogo
