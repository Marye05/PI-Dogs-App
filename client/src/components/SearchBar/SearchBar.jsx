import { useState } from "react"
import style from "./SearchBar.module.css";


const SearchBar = ({onSearch}) => {
    
    const [ name, setName ] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    
    return (
        <div className={style.container} >
         <input className={style.search} type='search' value={name} onChange={handleChange} />
         <button onClick={() => {onSearch(name); setName('')}}>Buscar Raza</button>
        </div>
    )
}

export default SearchBar