import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import "../styles.css"
import Pizza from './Pizza'

interface EditPizzaFormProps {
    data: Pizza
    updatePizza: (newPizza: Pizza) => void
    handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit}) => {

    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSibmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, price, img } = editPizza

        if (title && price && img) {
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }

    return (
        <form onSubmit={handleSibmit} className='edit-form'>
            <input
                name="title"
                type="text"
                placeholder='Enter title'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder='Enter price'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder='Enter img'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type="submit">
                confirm action
            </button>
        </form>
    )
}

export default EditPizzaForm
