import img from '../../assets/banner-main.png'

const Banner = ({ handleclimes}) => {
    return (
        <div className='mb-10'>
             <div  className='mt-28 bg-gradient-to-r from-indigo-400 to-orange-300 rounded-xl p-6' >
               <div className='flex justify-center'>
               <img className='mb-7' src={img} alt="" />
               </div>
            <h3 className='text-4xl font-bold  text-center mb-6'>Assemble Your Ultimate Dream 11 Cricket Team </h3>
            <h3 className='text-2xl font-medium text-center mb-6'>Beyond Boundaries Beyond Limits</h3>
            <button onClick={handleclimes}  className='bg-[#E7FE29] p-3 rounded-xl font-bold btn-outline btn m-6'>Clime Free Cradit</button>
           </div>
        </div>
    );
};

export default Banner;