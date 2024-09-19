import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#1F1F1F", color: "#FFF" }}
      className='flex flex-wrap justify-around pb-10'
    >
      <div
        style={{ width: "210px" }}
        className="my-10 mx-4"
      >
        <h3 className='orange-text font-normal text-4xl font-serif'>Useful Links</h3>
        <ul className="pl-5 list-disc">
          <li className="text-xl my-3"><Link to='/'>Home</Link></li>
          <li className="text-xl"><Link to='/about'>About Us</Link></li>
        </ul>
      </div>

      <div
        style={{ width: "405px" }}
        className="my-10"
      >
        <h3 className='orange-text font-normal text-4xl font-serif'>Contact Info</h3>
        <p className="text-xl my-4"><img src="src\assets\icons\phone-icon.png" className="footer-icon mr-4" width="25px" height="25px" /> +91-7020217425</p>
        <p className="text-xl"><img src="src\assets\icons\location-icon.png" className="footer-icon mr-4" width="25px" height="25px" />Office Address</p>
        <p className="pl-10 text-xl">1st Floor, Plot No. 10/4, STPI IT Park, Gayatri Nagar, Nagpur – 440022</p>
      </div>
      <div
        style={{ width: "292px" }}
        className="my-10"
      >
        <div style={{ width: '292px', height: '141px' }}
        >
          <img src="src\assets\images\logo.png" className="bg-white borde rounded-md" alt="logo" width='100%' height='100%' />

          <h4 className="orange-text font-serif text-center my-3 text-2xl">Follow Us</h4>
          <ul className="flex gap-3 justify-center overflow-auto">
            <li><Link to='/'><img src="src\assets\icons\linkedin.png" width="38px" height="38px" /></Link></li>
            <li><Link to='/'><img src="src\assets\icons\facebook.png" width="38px" height="38px" /></Link></li>
            <li><Link to='/'><img src="src\assets\icons\instagram.png" width="38px" height="38px" /></Link></li>
            <li><Link to='/'><img src="src\assets\icons\twitter.png" width="38px" height="38px" /></Link></li>
            <li><Link to='/'><img src="src\assets\icons\skype.png" width="38px" height="38px" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer