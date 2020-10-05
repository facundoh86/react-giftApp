import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import { RiftRid } from './components/RiftRid';

const GiftExpertApp = () => {

    const[categories, setCategories] = useState(['Futbol']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Licha'])
    //}
    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>



            <ol>
                {
                    categories.map( category  => {
                        return <RiftRid key={category}  category={category}/>
                    })
                }
            </ol>
        </div>
    )
}

export default GiftExpertApp;