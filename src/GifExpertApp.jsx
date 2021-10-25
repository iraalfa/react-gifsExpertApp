import React from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = React.useState(['Zelda'])

    // const handleApp = () => {
    //    // setCategories([...categories, 'HunterXHunter'])
    //    setCategories( categories => [...categories, 'HunterXHunter']) // callBack donde el primer argumento es el valor del estado inicial y luego regresa el nuevo estado
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                    { categories.map((category) => {
                      return  <GifGrid
                        key={category}
                        category={category}
                        />
                      })
                    }
            </ol>
        </div>
    )
}

export default GifExpertApp
