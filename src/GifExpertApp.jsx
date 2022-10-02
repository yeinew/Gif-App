import { useState } from "react"
import { AddCategory, GifGrid, } from "./components";




export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball Z'])
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories(cat => [newCategory, ...cat])
    // setCategories([newCategory, ...categories ])
  }

  
  return (
    <>

      {/* titulo */}
      <h1>
        GifExpertApp
      </h1>

      {/* Input */}
      <AddCategory

        onNewCategory={value => onAddCategory(value)}

      />


      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      ))
      }


    </>
  )
}
