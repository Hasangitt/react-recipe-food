
import { CgProfile } from "react-icons/cg";
import './Header.css'

const Header = () => {
    return (
        <>
        <div className='flex justify-evenly items-center mx-auto md:max-w-8xl p-12'>
            <div>
                <a className='text-3xl' href="#">Recipe Calories</a>
            </div>
            <div className='space-x-8'>
                <button className='button-underline'>Home</button>
                <button className='button-underline'>Recipes</button>
                <button className='button-underline'>About</button>
                <button className='button-underline'>Search</button>
            </div>
            <div className='flex items-center space-x-4 '>
                <div>
                    <input className='border p-2 rounded-full' type="text" placeholder='search'/>
                </div>
                <button className='text-4xl text-green-500'><CgProfile></CgProfile></button>
            </div>
        </div>
        <div className='background' >
                <div>
                    <h1 className='text-white text-6xl font-serif text-center font-semibold align-middle pt-40'>Discover an exceptional cooking <br />class tailored for you!</h1>
                    <h5 className='text-white text-center pt-8 text-2xl'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</h5>
                    <div className='flex gap-2 justify-center pt-10'>
                        <button className='button-border-1'>Explore Now</button>
                        <button className='button-border'>Our Feedback</button>
                    </div>
                </div>
        </div>
     </>
    );
};


export default Header;