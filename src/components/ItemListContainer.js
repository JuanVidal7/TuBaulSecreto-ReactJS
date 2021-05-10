import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import db from './Firebase';

const productsCollection = db.collection('productos').orderBy('id', 'asc')

export default function ItemListContainer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        productsCollection.get()
        .then(querySnapshot => {
            setData(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        })
    }, []);

    return (
        <div>
            <ItemList dataInput={data} />
        </div>
    )
}