import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import datajson from './Products.json';

export default function ItemListContainer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(datajson);
        }, 500);
    }, []);

    return(
        <div>
            <ItemList dataInput={data}/>
        </div>
    )
}