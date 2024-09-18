import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, seterror] = useState("")
  const Url = "https://fakestoreapi.com/products"
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Url)
        const data = await response.json()
        console.log(data)
        setData(data)
        setLoading(false)
      } catch (error) {
        seterror(error.message);
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <h1>Fetch Data Products</h1>
      <div className="container">

        {loading ? (
          <div>Loading....</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="cards">
            {data.map((items) => (
              <div className="details" key={items.id}>
                <h3>{items.title}</h3>
                <p>{items.price}</p>
                <p>{items.category}</p>
                <img src={items.image} />
                <p>{items.rating.rate}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  )

}

export default App