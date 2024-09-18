import SectionHead from "./SectionHead"
import Card from "./Card"
import Image from "./Image"

const Section3 = () => {
  return (
    <div>
      <SectionHead
        heading="Services that we provide"
        text_center="true"
      />

      <div className="flex flex-wrap justify-between mx-20">
        <Card
          iconUrl="src/assets/icons/3.png"
          title="Amazon Cloud Services"
          content="Amazon Web Services (AWS) is the most cost–efficient cloud service to host all your apps & websites. Our AWS experts help you effectively host your business on AWS with purchase, as per demand based on your business requirements & budgets."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/1.png"
          title="Mobile Apps"
          content="We build robust mobile apps that converts your “Mobile Vision into a Profitable Reality”. Our team of expert developers of iOS & Android apps, amazing UI/UX designs & latest technologies & strategies of development brings in best mobile app that generates profits."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/2.png"
          title="Web App"
          content="Our responsive web apps gives an amazing user experience. We give your business a beautiful online presence with a wonderfully designed web app. We specialize in responsive web & e-commerce apps. Our innovative concepts & creative designs make your app tick."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />

        <Card
          iconUrl="src/assets/icons/6.png"
          title="Development"
          content="We specialize in cross platform, responsive app development for front-end & back-end. We follow agile development for all native iOS, android Mobile & Windows App."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/4.png"
          title="Strategy"
          content="From ideas conceptualizing your vision into a strong mobile strategy, our experts take you step by step to the perfect mobility solution for your solution. "
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/5.png"
          title="Design"
          content="Our designs are focused on optimum utility & app performance.Awesome UI/UX & a flawless wireframe design is our Mantra for a successful app development."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />

        <Card
          iconUrl="src/assets/icons/content-marketing.png"
          title="Marketing"
          content="Creating a good app is just the beginning; we bring branding, users and store optimisation. Only the right marketing strategy can make your app successful & bring the desired business & profitability"
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/big-data-analysis.png"
          title="Analytics"
          content="We improve the reach & performance of your app with analytics. What is working and Where you need to correction? We help you identify & increase the source of traffic and maximize conversion."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
        <Card
          iconUrl="src/assets/icons/report.png"
          title="SEO"
          content="We specialized in SEO services to rank your apps high in search engines likes Google, Bing and Yahoo etc. Strong keyword research and quality back-links take your websites on tops of Google rankings."
          width="375px"
          iconWidth="62px"
          iconHeight="62px"
        />
      </div>

      <div className="flex flex-wrap  mx-14 mt-10">
        <div
          style={{ width: "590px" }}
          className="px-4"
        >
          <h3 className="font-bold text-5xl underline">People Choose us Because we Provide great Solutions</h3>

          <p className="font-medium my-8" style={{ color: "#75706D", fontSize: "22px" }}>
            We give an extensive scope of information about IT and to ensure your business data and to give you true Serenity. We help you with overseeing dangers and trust in your innovation frameworks.
          </p>

          <p className="font-medium text-3xl py-5">
            <img src="src/assets/icons/Vector.png" width="26px" className="inline-block mr-4" />
            Find the actual problems
          </p>
          <p className="font-medium text-3xl py-5">
            <img src="src/assets/icons/Vector.png" width="26px" className="inline-block mr-4" />
            Proper steps for solutions
          </p>
          <p className="font-medium text-3xl py-5">
            <img src="src/assets/icons/Vector.png" width="26px" className="inline-block mr-4" />
            Beneficial strategies
          </p>
          <p className="font-medium text-3xl py-5">
            <img src="src/assets/icons/Vector.png" width="26px" className="inline-block mr-4" />
            Great support team
          </p>
        </div>

        <div style={{ width: "700px" }}>
          <h3 className="font-bold" style={{ fontSize: "45px"}}>
            Have <span className="orange-text">Business</span> Problems?<br /> Just Dial us with no <span className="orange-text">hesitation</span> We have <span className="orange-text">expert</span> team.
          </h3>
          <p className="font-bold mt-3" style={{color: "#FF2D2D", fontSize: "40px", zIndex: "2"}}>
            +91-79722-69828
          </p>
          <Image 
            url="src/assets/images/image8.png"
            height="601px"
            width="601px"
          />
        </div>
      </div>
    </div>
  )
}

export default Section3