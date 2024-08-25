"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"

const QtySelector = ({ item, esCarrito }) => {
  const [quantity, setQuantity] = useState(item.stock == 0 ? 0 : 1)

  const handleAdd = () => {
    console.log({
      ...item,
      quantity,
    })
  }

  useEffect(() => {}, [quantity])

  return (
    <div className="flex items-center gap-3">
      <Counter counter={quantity} setCounter={setQuantity} max={item.stock} />
      {!esCarrito && <Boton onClick={handleAdd} className="text-xs/[22px]">Agregar al carrito</Boton>}
    </div>
  )
}

export default QtySelector
