import Button from './Button'
import Image from './Image'
const Section1 = () => {
  return (
    <>
    <div style={{ border: '1px solid black' }} ></div>
      <div className='flex flex-wrap justify-around ..'>

        <div className='relative h-64' >
           <div className="m-8 ... p-40 ... font-medium text-5xl  text-center"><p>Web and <span className='orange-text'>Mobile</span> App <br/> Development <span className='orange-text'>Company</span>
           </p></div>

          <div className='flex justify-center items-center text-2xl -mt-40'>
            <Button />
          </div>
        
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
        We’re a Worldide <span className="text-orange-500 font-bold">IT Company </span>changing how the World’s greatest brands interface with clients and
        <span className="text-orange-500 font-bold"> develop</span>their business with Babhale, you get <span className='orange-text text-orange-500 font-bold'>insight and skill</span>, speed and deftness,
        and a solid portion of <span className="text-orange-500 font-bold">sober-mindedness</span> to drive your Business forward.
        <div className="border-b-2 border-black mt-4"></div>
      </div>

    </>
  )
}

export default Section1
