import './Footer.css'
import logo from '../../../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='relative'>
            <div className='w-full h-44 bg-white'>

            </div>
              <div className="absolute  mx-auto inset-x-0 top-0  w-4/5 h-[384px] border-2 border-gray-300 rounded-xl bg-white">
                <div className="border-2 search_img  h-full bg-cover bg-no-repeat flex flex-col gap-6 justify-center items-center">
                    <h1 className='lg:text-3xl text-2xl font-bold text-center'>Subscribe to our Newsletter</h1>
                    <p className='text-xl font-normal text-gray-400'>Get the latest updates and news right in your inbox!</p>
                    <div className='text-center '>
                        <input className=' border-2 py-2 px-2 lg:py-3 rounded-xl lg:mr-6' type="email" name="" id=""  placeholder='Enter your email'/>
                        <button className='font-semibold lg:text-xl text-base px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500  to-fuchsia-500  '>
                            Subscribe</button>
                    </div>
                </div>
              </div>

         {/* footer */}
         <div className='bg-black text-white  flex flex-col justify-center items-center pb-20 w-full mx-auto'>
         
         <div className='lg:mt-56 md:mt-60 mt-64'>
         <div className='flex justify-center items-center mb-10'>
                <img className='  p-4' src={logo} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly items-center w-4/5 mx-auto'>
                <div>
                    <h4 className='text-xl font-medium text-white mb-4'>About Us</h4>
                    <p className='text-base font-normal text-gray-500'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h4 className='text-xl font-medium text-white mb-4 mt-10'>Quick Links</h4>
                    <div>
                    <ul className='flex flex-col gap-2 justify-center text-base font-normal text-gray-500'>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Fixture</a></li>
                        <li><a href="http://">Teams</a></li>
                        <li><a href="http://">Schedules</a></li>

                    </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h4 className='text-xl font-medium text-white mt-4'>Subscribe</h4>
                    <p className='text-base font-normal text-gray-500'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex flex-col lg:flex-row lg:gap-3  gap-3'>
                    <input className='px-3 py-3 lg:rounded-l-xl rounded-xl bg-gray-300 text-sm ' type="text" name="" id=""placeholder='Enter your email ' />
                    <button className='font-semibold lg:text-xl text-base text-black px-3 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-r-xl bg-gradient-to-r from-cyan-500  to-fuchsia-500  '>
                            Subscribe</button>
                    </div>
                </div>
            </div>
         </div>
         <hr className=' border-2 border-white w-full mt-8'></hr>
          <div className='flex justify-center items-baseline pt-12'>
            <p className='text-xl text-white '>@2024 Your Company All Rights Reserved.</p>
          </div>
        </div>

        </div>
    );
};

export default Footer;