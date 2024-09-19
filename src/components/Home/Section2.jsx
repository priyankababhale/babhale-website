

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
        />
      </div>


      {/* Main Components */}
      <div class="flex flex-wrap my-16 ml-5">

        {/* image  components */}
        <div>< Image
          url={"src/assets/images/image6.png"}
          width="451px"
          height="451px"
        /></div>

        {/* card components  */}
        <div class="flex-1  p-4">
          <div class="flex flex-wrap overflow-auto justify-around">
            <div>
              <Card
                iconUrl={"src/assets/icons/icon-1.png"}
                title="Creative Ideas"
                content="We bring your imagination with our creative ideas on your table."
                width="396px"
                iconWidth="48px"
                iconHeight="55px"
              />
            </div>

            <div> <Card
              iconUrl={"src/assets/icons/icon-2.png"}
              title="Quality Work"
              content="You will find 99.99% quality work with us during and after developement life cycle."
              width="396px"
            /></div>

            <div> <Card
              iconUrl={"src/assets/icons/icon-3.png"}
              title="Talented Team"
              content="Our Team has average 16+ Years of experience working with many big giant clients in their career span."
              width="396px"
            /></div>

            <div> <Card
              iconUrl={"src/assets/icons/icon-4.png"}
              title="Online Support"
              content="We provide Online support from Mon-Fri between 9.00 am to 6 pm"
              width="396px"
            /></div>


          </div>
        </div>
      </div>
      {/* Second Container */}
      <div class="flex flex-wrap " >
        <div class="flex-1  ">

          <h1 className="font-roboto text-4xl font-bold leading-[46.88px] text-left w-[391px] h-[158px] absolute top-[1752px] left-[70px] ml-8 py-6 mt-10">
            Provide the Best <br /> Solutions to Improve <br /> your Business
          </h1>

          <p className="font-roboto text-[25px] font-medium leading-[29.3px] text-left w-[564px] h-[66px] absolute top-[1950px] left-[70px] ml-8 mt-10">
            Create some exclusive way to solve our customer problems
          </p>

          <p className="font-roboto text-[25px] font-medium leading-[29.3px] text-left w-[576px] h-[66px] absolute top-[2046px] left-[70px] ml-8 mt-5">
            Successfully providing the best Business solutions from so many years</p>


          <div className="w-[145px] h-[50px] absolute top-[2132px] left-[70px] ml-8 mt-10">
            <Button
              color='#009DFF'
              background='white'
              border='1px solid #009DFF'
              text="Let's Start"


            />
          </div>

        </div>
        <div class="flex-1  mb-5 ml-16">
          < Image
            url={"src/assets/images/image4.png"}
            width="580px"
            height="580x"
          />
        </div>
      </div>

    </div>
  )
}

export default Section2