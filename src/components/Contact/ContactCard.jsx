
function ContactCard({ iconUrl, title, content }) {
  return (
    // give this div flex propertie
    // this main div contain box shadow width height
    <div className="flex align-baseline p-4 shadow-lg w-96 md:w-[561px] rounded-lg bg-white mb-4">
      {/* this div of image is left side  */}
      {/* icon div have rounded background color background: #D9D9D9; and icon image is inside that rounded */}
      <div className="bg-[#D9D9D9] w-[60px] h-[60px] p-4 rounded-full ">
        <img src={iconUrl} alt="icon" className="" />
      </div>
      {/* this below div is at left side  */}
      <div className="ml-4">
        <h3 style={{ color: "#75706D" }} className='text-2xl mt-1 mb-2 font-[Adamina]'>{title}</h3>
        <p className='font-[Adamina] text-xl'>{content}</p>
      </div>


    </div>
  )
}

export default ContactCard


