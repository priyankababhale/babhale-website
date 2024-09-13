import React from 'react'

const SectionHead = ({text_center = false, heading}) => {
  return (
    <div className={`w-full section-header ${text_center === 'true' ? 'text-center' : {}}`}>
      <h2>{heading}</h2>
    </div>
  )
}

export default SectionHead
