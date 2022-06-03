import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (Category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(Category)
            .then( img => {
                setTimeout(() => {
                    setState({
                        data:img,
                        loading:false
                    });
                }, 3000);            
            });
    },[])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     });
    // }, 3000);

    return state;
}