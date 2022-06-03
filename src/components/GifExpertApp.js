import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const Categories = ['One punch', 'Hulk', 'Dragon Ball'];

    const [Categories, setCategories] = useState(['One punch']);

    // const handleAdd = () =>{
    //     //setCategories([...Categories, 'Carlos']);
    //     setCategories( cats => [...Categories, 'Carlos']);
    // }

    return (
        <div>
            <h2> GifExpertApp </h2>

            <AddCategory setCategories={setCategories}/>

            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    Categories.map( (category) => 
                        <GifGrid key={category} Category={category}/>
                    )
                }
            </ol>

        </div>
    )
}