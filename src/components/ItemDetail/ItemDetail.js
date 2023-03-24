import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(){
    const { id} = useParams();
    const[product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(function(data){
            setProduct(data)
        } );


    }, [id]);

    return <div className="container">
        <div className="row">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <ItemCount stock={product.stock}/>
        </div>
    </div>

}
 export default ItemDetail;