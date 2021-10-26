import React from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
   const [inputValue, setInputValue] = React.useState('')

   const handleInputChange = (e) => {
        setInputValue(e.target.value)

        // console.log('handleInputChange llamado');
   }

   const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submit hecho')
        // console.log('handleSubmit', inputValue); // console.log para los test

         /* trim().length > 2 = borra los espacios vacios antes y despues y luego hacer la validacion.
         setCategories() = agrega lo que haya en inputValue al array de categories junto con una copia de categories
         tambien. setInputValue('') = Para no hacer un doble posteo mandamos un string vacio.
         [inputValue, ...categories] = Ponemos inputValue delante para muestre los datos nuevos primero */

         if(inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories])
            setInputValue('')
        }
   }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
 // haciendo que setCategories sea obligatorio como argumento en las props de este componente, AddCategory
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory
