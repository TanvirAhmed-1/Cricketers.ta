import logo from '../../../assets/logo.png'
import baner from '../../../assets/banner-main.png'
import "./Header.css"
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const Header = ({coinheader}) => {


   const[presentcoin, setPresentCoin]=useState(1000)


   useEffect(() => {
    if (coinheader > 0 && presentcoin>coinheader ) {
          setPresentCoin((prev) => prev - coinheader);
    }
    return
  },[coinheader, presentcoin]);
  
  

    return (
        <div>
            <div className='flex flex-col lg:flex-row md:flex-row justify-between  items-center px-4 pt-8'>
                <div>
                    <img src={logo} alt="" srcSet="" />
                </div>
                <div className='flex flex-col lg:flex-row md:flex-row justify-evenly items-center'>
                    <ul className='flex lg:gap-12 md:gap-7 items-center text-base font-normal text-gray-500'>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Fixture</a></li>
                        <li><a href="http://">Teams</a></li>
                        <li><a href="http://">Schedules</a></li>

                    </ul>
                    
                    <div className='ml-12'>
                       <button className='px-5 py-3 bg-white border-gray-400 border-2 rounded-xl flex items-center text-base font-semibold'>
                            {presentcoin} Coin
                            
                            <img className='w-8 ml-2' src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" alt="" srcSet="" />
                    
                        </button>
                       </div>

                </div>
            </div>
            {/* banar con */}

          <div className='bg-black rounded-xl'>
          <div className='back_img bg-cover bg-center w-full h-[545px] my-7  text-white flex flex-col gap-4 justify-center items-center'>
                  <img className='rounded-xl' src={baner} alt=""/>
                  <h1 className='font-bold text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                  <p className='text-2xl font-medium  text-gray-500'>Beyond Boundaries Beyond Limits</p>
                  <button onClick={()=>setPresentCoin(presentcoin+10000)} className='px-6 py-3 bg-blue-500 rounded-xl'>Claim Free Credit</button>
                
               
            </div>
          </div>
        </div>
    );
};
Header.propTypes = {
coinheader: PropTypes.number
}
export default Header;