import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import style from "./book_filters.module.css"

export default function BookFilters({ pagefilter, setPagefilter, genreFilter, setGenreFilter }:iBookFilters) {

    const handleSliderChange = (event:any) => {
        const newValue = parseInt(event.target.value, 10); // Convierte el valor a un número entero
        setPagefilter(newValue); // Actualiza el estado con el nuevo valor del slider
    };

    const genreFilterChange = (event:any) => {
        const newValue = event.target.value; // Convierte el valor a un número entero
        setGenreFilter(newValue); // Actualiza el estado con el nuevo valor del slider
    };

    return (<div className={style.main + " horizontalContainer"}>
        <div className={"pageFilter verticalContainer"}>
            <label htmlFor="pagefilter">cantidad max. paginas</label>
            <div className="horizontalContainer">
                <input type="range" id="pagefilter" name="pagefilter" value={pagefilter} min="0" max="999" onChange={handleSliderChange} />
                <p>{pagefilter}</p>
            </div>
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="genre">Género</label>
            <select className={style.genreFilter} value={genreFilter} id="genreFilter" name="genrefilter" onChange={genreFilterChange}>
                <option value="Todos">Todos</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
                <option value="Terror">Terror</option>
            </select>
        </div>
    </div>)
}