import Image from "../Home/Image"
import SectionHead from "../Home/SectionHead"


const Portfolio = () => {
    return (
        <>

            <div className="relative">
                <Image
                    url={"src/assets/images/services.png"}
                    width="1519"
                    height="384"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-8xl font-[Adamina] text-center leading-tight mb-4">
                        Our Portfolio
                    </p>
                    <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Adamina] text-center leading-snug mb-4">
                        Explore Our Finest Creations:
                    </p>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Adamina] text-center leading-normal">
                        A Portfolio Highlighting Our Outstanding Achievements and Creative Excellence!
                    </p>
                </div>
            </div>


            <div
                className="w-[1380px] h-[259px]  top-[596px] flex text-center ml-20 mt-8 mb-8  text-[31px] font-[Adamina] font-normal leading-[40.86px] text-justify ">
                Welcome to the portfolio of Babhale Infotech, where we proudly showcase our remarkable 
                achievements in mobile app development, website development, digital marketing, and content 
                creation. We are dedicated to delivering high-quality solutions that empower our clients to reach 
                their business objectives. Backed by a team of skilled professionals who share a commitment to 
                excellence, we strive to provide services that consistently exceed expectations and drive success 
                for our clients.
            </div>

            <div className="font-[Adamina] ">
                <SectionHead
                    heading="Education Bank"
                    text_center="true"
                />
            </div>

            <div className="  flex justify-betweeen mb-7">

                <div className="  top-[1250px] left-[40px] mt-14 ml-24">
                    <Image
                        url={"src/assets/images/profile.png"}
                        width="544px"
                        height="433px"
                    />


                </div>

                <div className="w-[738px] h-[454px] absolute top-[1000px] left-[730px] text-[25px] font-[Adamina] font-normal leading-[35px] text-justify">
                    An educational mobile app should provide a diverse array of content that is engaging and easy to access. On the home screen, users can be welcomed with daily lessons or trending topics to pique their interest, along with a quick-start guide for effortless navigation. The courses section should be neatly categorized by subjects like Math, Science, and Language Learning, with lessons tailored to various skill levels—beginner, intermediate, and advanced. To enhance learning, each lesson can be followed by interactive quizzes, while progress tracking and visual indicators like achievement badges and progress bars can help keep users motivated.</div>

            </div>

            <div className="w-[1360px] h-[707px]  top-[1547px] left-[20px] text-[25px] ml-16 font-normal leading-[35px] text-justify font-[Adamina] ">
 


                Various learning modes can accommodate different learning preferences. The app could provide text-based lessons with key points and examples, enhanced by video tutorials and audio lessons for those who favor visual or auditory learning styles. Interactive simulations would allow users to apply what they've learned in real-time, improving the overall learning experience. Additionally, personalized features such as a user dashboard would enable learners to set goals, track progress, and receive tailored course recommendations based on their interests.
                arious learning modes can accommodate different learning preferences. The app could provide text-based lessons with key points and examples, enhanced by video tutorials and audio lessons for those who favor visual or auditory learning styles. Interactive simulations would allow users to apply what they've learned in real-time, improving the overall learning experience. Additionally, personalized features such as a user dashboard would enable learners to set goals, track progress, and receive tailored course recommendations based on their interests.
                For those who prefer live interaction, the app could offer live classes and webinars, providing real-time learning opportunities with subject matter experts. A resources section could offer supplementary materials such as eBooks, downloadable PDFs, practice tests, and a glossary for easy reference. Push notifications could remind users about upcoming lessons, quizzes, or live sessions, helping them stay engaged and on track.
                Lastly, the app could adopt a freemium model, offering basic lessons for free while advanced content is accessible via subscriptions or in-app purchases. Non-intrusive ads could be included in free lessons, with an option for users to upgrade to an ad-free experience. This comprehensive content strategy ensures that the app delivers a holistic, engaging, and user-friendly educational experience, catering to a wide variety of learners and their preferences.
            </div>






        </>

    )
}

export default Portfolio