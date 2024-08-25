import ProductForm from "@/components/admin/ProductForm"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import React from "react"

export const metadata = {
  title: "Rocco Alimentos - Administrador",
  description: "E-commerce de alimentos para mascotas",
  keywords: ["coderhouse", "e-commerce", "nextjs", "mascotas", "alimento"],
  openGraph: {
    title: "Next.js",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    aythors: ["Fernando Cabrera"],
  },
}

const Admin = () => {
  return (
    <main>
      <Header />
      <div className="text-3xl flex justify-center mt-3 mb-16">
        <h1> Cargar/Editar productos</h1>
      </div>
      <div className="flex justify-center bg-slate-200 border-solid border-2 border-sky-400 mx-auto w-1/3">
        <ProductForm />
      </div>
      <Footer />
    </main>
  )
}

export default Admin
