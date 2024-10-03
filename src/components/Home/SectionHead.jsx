import Button from "./Button"

const SectionHead = ({text_center = false, heading, btn_flag = false}) => {
  return (
    <div className={`w-full section-header ${text_center && 'text-center'}`}>
      <h2>{heading}</h2>

      {btn_flag && <Button />}
    </div>
  )
}

export default SectionHead
