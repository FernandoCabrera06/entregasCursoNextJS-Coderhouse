import { products } from "@/data/mockData"
import ProductCard from "./ProductCard"

const ProductList = ({ category }) => {
  const items =
    category === "todos"
      ? products
      : products.filter((item) => item.category == category)
  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ProductList
