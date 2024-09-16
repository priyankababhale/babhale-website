const Button = ({ background = "#FF2D2D", color = "#FFF", text = "Read more", border = "0px solid black" }) => {
  return (
    <button
      style={{backgroundColor: background, color: color, border: border}}
      className={`py-2 px-4 font-medium`}
    >
      {text}
    </button>
  )
}

export default Button
