import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import db from './Firebase';

const productsCollection = db.collection('productos').orderBy('id', 'asc');

export function getProducts() {
    return productsCollection.get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
}

export default function ItemListContainer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <ItemList dataInput={data} />
        </div>
    )
}