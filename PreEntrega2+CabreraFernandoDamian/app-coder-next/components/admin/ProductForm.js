"use client"
import React, { useState } from "react"
import Boton from "../ui/Boton"

const categorias = ["Perros", "Aves", "Gatos", "Reptiles", "Peces", "Otros"]

const ProductForm = () => {
  const [product, setProduct] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-4">
      <div className="mb-3">
        <label htmlFor="description">Descripción:</label>
        <input
          className="ml-3"
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock">Stock:</label>
        <input
          className="ml-3"
          type="number"
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="img">Imagen (URL):</label>
        <input
          className="ml-3"
          type="text"
          id="img"
          name="img"
          value={product.img}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price">Precio:</label>
        <input
          className="ml-3"
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="suggested">¿Prodcuto Sugerido?</label>
        <input
          className="ml-3"
          type="checkbox"
          id="suggested"
          name="suggested"
          checked={product.suggested}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="brand">Marca:</label>
        <input
          className="ml-3"
          type="text"
          id="brand"
          name="brand"
          value={product.brand}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="discountRate">Porcentaje de descuento:</label>
        <input
          className="ml-3"
          type="number"
          id="discountRate"
          name="discountRate"
          value={product.discountRate}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category">Categoría:</label>
        <select
          className="ml-3"
          id="category"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        >
          {categorias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <Boton type="submit" className="mt-6">
          Guardar
        </Boton>
      </div>
    </form>
  )
}

export default ProductForm
