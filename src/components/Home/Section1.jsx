import Button from './Button'
import Image from './Image'
const Section1 = () => {
  return (
    <>
    <div>
    <div className="border-b-2 border-black mb-2 md:mb-4" ></div>
      <div className='flex flex-wrap justify-around .. text-center '>

        <div  className="mt-10 md:mt-40">
           <div className=" font-medium text-3xl  md:text-5xl text-center mt-20"><p>Web and <span className='orange-text'>Mobile</span> App <br/> Development <span className='orange-text'>Company</span>
           </p>
           <div className='flex justify-center items-center text-2xl p-4 md:p-14'>
            <Button />
          </div></div>

         
        
        </div>


        <div>
           <Image
            url={'src/assets/images/image1.png'}
            width="601px"
            height="484px"
          />
        </div>

      </div>

      <div className='m-20 font-medium text-4xl text-center'>
        <div className="border-b-2 border-black mb-4" ></div>
        We’re a Worldide <span className="text-orange-500 font-bold">IT Company </span>changing how the World’s greatest brands interface with clients and
        <span className="text-orange-500 font-bold"> develop</span>their business with Babhale, you get <span className='orange-text text-orange-500 font-bold'>insight and skill</span>, speed and deftness,
        and a solid portion of <span className="text-orange-500 font-bold">sober-mindedness</span> to drive your Business forward.
        <div className="border-b-2 border-black mt-4"></div>
      </div>
    </div>
    </>
  )
}

export default Section1
