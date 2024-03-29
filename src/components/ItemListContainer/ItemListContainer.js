import React , {useState, useEffect}from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer (){
    const {id} = useParams();
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${id}`)
        .then(res => res.json())
        .then(function(data){
            setProducts(data.products)
        } );


    },[id])

    return <ItemList products={products} />
    
}



export default ItemListContainer;