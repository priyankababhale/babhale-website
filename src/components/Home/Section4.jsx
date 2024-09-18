import React from 'react'
import Image from './Image'
import Button from './Button'
import SectionHead from './SectionHead'


const Section4 = () => {
  return (

    <>
      <SectionHead
        text_center="true"
        heading="Sucessfully completed 100+ projects with numbers of satisfied client"
      />

      {/* Main container */}
      <div className=' flex flex-wrap justify-between mx-14 '>

        {/* image container */}
        <div>
          <Image
            url="src/assets/images/image7.png"
            height="601px"
            width="601px"
          />
        </div>

        <div className=' ml-100 h-601  w-640 top-4561 gap-80 mt-12'>


          <h2 className='font-bold text-4xl  p-8' >We have a Creative Team Discover  <br />
            our experts</h2>
          <p className='font-medium ml-8' style={{ color: "#75706D", fontSize: "25px" }}>Create some exclusive way to solve our customer <br />problems</p>
          <h1 className='font-bold text-2xl p-8' style={{ fontSize: "25px" }} >Our team has expertise with UI/UX designing which can <br />
            help our customer to know how will product will look like <br />
            before going to development phase..</h1>
          <div className='inline-block pl-8' style={{ fontSize: "25px" }}>
            <Button
              text="Let Us Know"
            />
          </div>
        </div>

      </div>

    </>
  )
}



export default Section4