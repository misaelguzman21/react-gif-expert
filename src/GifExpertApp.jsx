import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // agregar una nueva categoria
        if ( categories.includes(newCategory) ) return; 
        //setCategories(categories.push("Valorant"));
        setCategories( [ newCategory, ...categories] );
        //setCategories( cat => [...categories, 'Valorant']);

    }

    return (
        <>

            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={ setCategories } /> */}
            <AddCategory 
                onNewCategory={ event => onAddCategory(event)} 
            />

            {/* <button onClick={ onAddCategory }> Agregar </button> */}
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }


        </>        
    )
}