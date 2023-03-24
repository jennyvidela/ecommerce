import React from "react";
import { Link } from "react-router-dom";


function ItemList({products}){

    return<>
        <div className="container">
            <div className="row">
                   {products.map(p=> <div key={p.id} className="col-xl-4 col-lg-4">
                    <div className="card">
                    <img src={p.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                        <Link to={`/item/${p.id}`}>Ver mas</Link>
                    </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default ItemList;

