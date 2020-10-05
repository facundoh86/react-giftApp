import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem.view';

export const RiftRid = ({category}) => {

const {loading, data:images} = useFetchGifs(category);

    return (
    <>
        <h3 className="animate__animated animate__fadeInDownBig"> {category}</h3>
        {loading && <p  className='animate__animated animate__hinge'>Loading...</p>}
        <div className="card-grid">
                {
                    images.map(img => {
                    return <GiftGridItem
                    key={img.id}
                    {...img}/>
                    })
                }
        </div>
    </>
    )
}
