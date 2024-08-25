import { products } from "@/data/mockData"
import Image from "next/image"
import QtySelector from "./QtySelector"
import GoBack from "../ui/GoBack"

const ProductDetail = ({ id }) => {
  const item = products.find((product) => product.id == id)

  return (
    <div ClassName="max-w-4xl m-auto">
      <GoBack className="text-sm" />
      <div className="container m-auto flex justify-center">
        <article className="CardItem">
          <header className="Header">
            <h6 className="ItemHeader">{item.description}</h6>
          </header>
          <picture className="flex justify-center mt-2 mb-2">
            <Image
              src={item.img}
              alt={item.description}
              className="ItemImg"
              width={140}
              height={140}
            />
          </picture>
          <section>
            <p className="Info"> Categoria: {item.categoryId}</p>
            <p className="Info"> Precio: ${item.price}</p>
            <p className={item.stock ? "Info" : "Info sinStock"}>
              {" "}
              Stock disponible: {item.stock}
            </p>
          </section>
          <footer className="ItemFooter">
            <QtySelector item={item} />
          </footer>
        </article>
      </div>
    </div>
  )
}

export default ProductDetail