import {useState} from 'react'

export const UseStateCart = () => {
    const [cartCount, setCartCount] = useState(0)
    function handleClick(){
        setCartCount(cartCount+1)
    }

  return (
    <>
    <h1>Number of items in the cart :{cartCount}</h1>
    <button onClick={handleClick}> {cartCount} add cart</button>
    </>
  )
}
