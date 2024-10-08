import SectionHead from './SectionHead'
import Card from './Card'
import Image from './Image'
import Button from './Button'

const Section2 = () => {
  return (
    <div>
      <div >
        <SectionHead
          heading="Free Consultation"
          btn_flag = 'true' // condtionally rendering button 
        />
      </div>


      {/* Main Components */}
      <div class="flex flex-wrap my-16 ml-5">

        {/* image  components */}
        < Image
          url={"src/assets/images/image6.png"}
          width="451px"
          height="451px"
        />

        {/* card components  */}
        <div class="flex-1  p-4">
          <div class="flex flex-wrap overflow-auto justify-around">

            <Card
              iconUrl={"src/assets/icons/icon-1.png"}
              title="Creative Ideas"
              content="We bring your imagination with our creative ideas on your table."
              width="396px"
              iconWidth="48px"
              iconHeight="55px"
            />


            <Card
              iconUrl={"src/assets/icons/icon-2.png"}
              title="Quality Work"
              content="You will find 99.99% quality work with us during and after developement life cycle."
              width="396px"
            />

            <Card
              iconUrl={"src/assets/icons/icon-3.png"}
              title="Talented Team"
              content="Our Team has average 16+ Years of experience working with many big giant clients in their career span."
              width="396px"
            />

            <Card
              iconUrl={"src/assets/icons/icon-4.png"}
              title="Online Support"
              content="We provide Online support from Mon-Fri between 9.00 am to 6 pm"
              width="396px"
            />


          </div>
        </div>
      </div>

      {/* SECOND COMPONENT */}
      <div class="flex flex-wrap justify-around">
        <div className='mt-10'>


          <h1 class="w-[391px] h-[158px] ml-[70px] font-roboto text-[40px] font-bold leading-[46.88px] text-left text-[#003366] ">
            Provide the Best <br /> Solutions to Improve <br /> your Business</h1>

          <p class="w-[564px] h-[66px]  ml-[70px] font-roboto text-[25px] font-medium leading-[29.3px] text-left mt-12">
            Create some exclusive way to solve our customer problems</p>


          <p class="w-[576px] h-[66px] ml-[70px] font-roboto text-[25px] font-medium leading-[29.3px] text-left mt-5">
            Successfully providing the best Business solutions from so many years</p>

          <div class="w-[135px] h-[45px] mt-4 ml-[70px]  ">
            <Button
              color='#009DFF'
              background='white'
              border='1px solid #009DFF'
              text="Let's Start"


            />
          </div>

        </div>

        <div className=''>
          < Image
            url={"src/assets/images/image4.png"}
            width="550px"
            height="483px"
          />
        </div>
      </div>




    </div>
  )
}

export default Section2



















