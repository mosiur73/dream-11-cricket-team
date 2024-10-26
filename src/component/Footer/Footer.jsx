import img from './/../../assets/logo-footer.png'

const Footer = () => {
    const bgstyle={
        backgroundImage:
        "url('https://i.ibb.co.com/DR67VdL/bg-shadow.png')",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    }
    return (
        <div className='bg-[#06091A] '>

            <div style={bgstyle} className='max-w-5xl h-80 rounded-xl  mx-auto -translate-y-40 shadow-slate-600'>
                 <div className='pt-12 '>
                 <h3 className='text-3xl font-bold text-[#131313] text-center mb-6'>Subscribe to our Newsletter</h3>
                 <h5 className='mb-6 text-center'>Get the latest updates and news right  in your inbox!</h5>
                 <div className=''>
                    <input className='w-60 py-3 rounded-xl pl-4' type="text" placeholder='Enter your email' />
                    <button className='btn ml-3 font-bold '>Subscribe</button>
                 </div>
                 </div>
            </div>
             <div className='pb-12 flex justify-center '>
                  <img src={img} alt="" />
                </div>
            <footer className="footer  text-[#FFFFFF] p-10 border-b-2 pb-20 ">
               
 
  <nav>
    <h6 className="footer-title text-white">About Us</h6>
   <p>
   We are a passionate team dedicated <br />
    to providing the best services to our <br /> customers.
   </p>
  </nav>
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <form>
    <h6 className="footer-title text-[#FFFFFF]">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label ">
        <span className="label-text text-[#FFFFFF]">Subscribe to our newsletter for the <br /> latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
<div className='pt-6 pb-6 text-[#FFFFFF]'>
    <h3>@2024 Your Company All Rights Reserved.</h3>
</div>

        </div>
    );
};

export default Footer;