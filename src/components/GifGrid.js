import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ Category }) => {

    const {data:Renombrado , loading} = useFetchGifs(Category);    

    console.log(Renombrado, loading);

    // const [Images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(Category)
    //         .then(imgs => setImages(imgs));
    // }, [Category])



    return (
        <>
            <h3> {Category} </h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
            
            {
                Renombrado.map( img => (
                    <GifGridItem key={img.id} {...img}/>
                ))
            }
            </div>
        </>
    )
}
