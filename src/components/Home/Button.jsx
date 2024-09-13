/* eslint-disable react/prop-types */
// const Button = ({background = "#FF2D2D", color = "#FFF", text="Rad more", border="0px solid red"}) => {
//   return (
//     <div className="inline-flex ">
      
//     </div>
//   )
// }

// export default Button


// src/components/Button.jsx


// import PropTypes from 'prop-types';

const Button = ({ 
  background = "bg-red-500", 
  color = "text-white", 
  text = "Read more", 
  border = "border-0",
  onClick 
}) => {
  return (
    <button 
      className={`px-4 py-2 ${background} ${color} ${border} rounded hover:bg-red-600 transition-all`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};




export default Button;
