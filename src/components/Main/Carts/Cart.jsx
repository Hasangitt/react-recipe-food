import { FaRegClock } from "react-icons/fa";
import { SlFire } from "react-icons/sl";

const Cart = ({cart, handleCooks}) => {
    
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = cart;
    return (
        <div className="border p-6 rounded-md space-y-3 w-[400px]">
            <img className="w-full h-[300px] rounded-md" src={recipe_image} alt="cover picture of recipe cart"/>
            <h1 className="text-xl">{recipe_name}</h1>
            <p className="text-sm text-gray-500">{short_description}</p>
            <hr />
            <p>Ingraditents: {ingredients.length}</p>
            <p>
                {
                    ingredients.map((ingradient, idx) => <li key={idx}><span>{ingradient}</span></li>)
                }
            </p>
            <hr />
            <div className="flex gap-5">
                <div className="flex gap-2 items-center">
                    <span><FaRegClock></FaRegClock></span>
                    <p>{preparing_time}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span><SlFire></SlFire></span>
                   <p>{calories}</p>
                </div>
            </div>
             <button onClick={() => handleCooks(cart)} className="bg-green-500 p-3 text-center rounded-full cursor-pointer">Want to cook</button>
        </div>
    );
};

export default Cart;