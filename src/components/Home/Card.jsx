import React from 'react'

const Card = ({ iconUrl, title, content, width, iconWidth, iconHeight }) => {
  return (
    <div
      className='my-10'
      style={{ width: width }}
    >
      <img src={iconUrl} alt="icon" width={iconWidth} height={iconHeight} />  {/* there's a bug here, icon is not rendering */}
      <h3 className=' text-2xl mt-1 mb-2 font-[Adamina]'>{title}</h3>
      <p style={{color: "#75706D"}} className=' text-xl font-[Adamina]'>{content}</p>
    </div>
  )
}

export default Card