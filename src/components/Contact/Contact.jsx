import Image from "../Home/Image"
import ContactCard from "./ContactCard"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Home/Button';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (

    <>

      {/* first part */}

      {/* image section  */}
      <div className="relative ">

        <Image
          url="src/assets/images/Contactus_1.png"
          height="1519"
          width="100%"
        />

        {/* Text section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-orange-500 text-2xl lg:text-6xl font-[Adamina] mb-2 md:mb-4">CONTACT US</p>
          <p className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl  font-[Adamina] text-center">Speak with <br />an IT Specialist</p>
        </div>
      </div>



      {/* second part */}
      <div className=" w-full m-12 relative h-screen" >

        {/* Image section */}
        <Image
          url="src/assets/images/Contactus_2.png"
          height="1519"
          width="100%"
          className="w-full"
        />

        <div className="absolute inset-0 flex flex-wrap justify-around items-center p-10">

          {/* card component div */}
          <div className="space-y-8">

            <ContactCard
              iconUrl="src/assets/icons/mail_1.png"
              title="Email"
              content="nagpurit2024@gmail.com"
            />

            <ContactCard
              iconUrl="src/assets/icons/location.png"
              title="Address"
              content="1st Floor, Plot No. 10/4, STPI IT Park, Gayatri Nagar, Nagpur – 440022"
            />

            <ContactCard
              iconUrl="src/assets/icons/Vector_1.png"
              title="Phone"
              content="+91-70202-17425 "

            />

          </div>

          {/* Card section end */}
          {/* Map section */}

          <div className="w-[500px] h-[500px]  rounded-md shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.941761502445!2d79.04617497532539!3d21.120979880551474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf114b968315%3A0xd946bc75e0d7b949!2sNGPIT!5e1!3m2!1sen!2sin!4v1727317878978!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
            />


          </div>
          {/* Map section end */}
        </div>
      </div>

      {/* third section  */}
      <div className="w-1437 h-992 bg-[#212121] top-[1138px]  flex justify-between" >

        <div className='p-8 ' >
          <h1 className="w-[325px] h-[200px] relative top-[10px] left-[50px] font-[Adamina] orange-text  text-[80px] leading-[100px] text-center">
            Send The <br /> Message</h1>

          <h3 className="w-570 h-100  top-[10px] relative  left-[50px] font-[Adamina] text-[30px] leading-50 text-left text-white">
            We are happy to <span className="font-[Adamina] text-[30px] font-normal leading-50 orange-text ">
              help you .</span>
            Do visit our <br />office or contact us.</h3>

          <div className="relative w-505 h-166   top-[30px] left-[50px] p-4 border-3 border-2 border-orange-500">

            <p className="relative w-454 h-100   font-[Adamina] text-[27px] leading-55 text-center text-white">
              “Power is Gained By Sharing Your <br /> Knowledge, Not Hoarding it”</p>
          </div>
        </div>


        <div className=" items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-[#D9D9D9] px-16  py-20 w-300 h-200   max-w-md mr-52 mt-8"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4  pr-36 py-2 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 pb-20 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div className='ml-44 mt-6 w-186 h-65'>
              <Button
                color='#FFFFFF'
                background='#003366'
                text="Sent Message"
              />
            </div>
          </form>

        </div>


      </div>


      {/* Fourth Section */}
      <div className="">
        {/* background image */}
        <Image
          url="src/assets/images/Contactus_1.png"
          height="1519"
          width="100%"
        />


        {/* image div */}



        {/* text content div */}




      </div>




    </>
  )
}

export default Contact


