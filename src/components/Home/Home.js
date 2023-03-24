import React , {useState, useEffect}from "react";
import ItemList from "../ItemList/ItemList";

function Home(){
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(function(data){
            setProducts(data.products)
        } );


    },[]);

    return <ItemList products={products}/>
}

export default Home;