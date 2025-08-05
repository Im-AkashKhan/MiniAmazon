import { useState } from "react"
import { products } from "../data/data"




function Product() {

    const [product , setProduct] = useState(products)

   


  return (
    <div className="CardOuter">
        <div className="container">
            <div className="row">

                {
                    product.map((item) => (
                        <div key={item.id} className="col-md-6 mt-4">
                    <div className="card">
                    <img src={item.img} style={{height : "150px"}} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {item.product_name} </h5>
                        <p className="card-text"> {item.product_desc} </p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                        <button className="btn btn-danger mx-2">RS : {item.price} </button>
                    </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product