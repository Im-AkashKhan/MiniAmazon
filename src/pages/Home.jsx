import React from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product'

function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
         <div className="row">
           <div className="col-md-4 bg-success">
            <h4>Filter Area</h4>
          </div>

          <div className="col-md-8 bg-warning">
            <div className="innerProducts">
              <h2 className='mt-5'>OUR RECENT PRODUCTS</h2>
              <Product />
            </div>
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Home