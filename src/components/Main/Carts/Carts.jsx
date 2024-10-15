import { useEffect, useState } from "react";
import Cart from "./Cart";

const Carts = ({cart}) => {
    
    console.log(cart)

    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then (data => setCarts(data));
    },[])

    return (
        <div className="grid grid-cols-2 gap-10 w-2/3">
            {
             carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;