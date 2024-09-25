import Image from "../Home/Image"
import Section3 from "../Home/Section3"

const Services = () => {
    return (
        <>


            <div className="relative">
                <Image
                    url={"src/assets/images/services.png"}
                    width="1519"
                    height="384"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-[Adamina] text-center">
                        Services that we provide
                    </p>
                </div>
            </div>

            <Section3 />

        </>
    )
}

export default Services






