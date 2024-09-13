import React from 'react'
import image1 from './image1.png'


const Home = () => {
  return (
    <div className='flex display-flex'>

      <div className='box1 text-center font-roboto' >

        <h2>Web and  <b className='bold ' >Mobile</b> App
          Development <b className='bold'>Company</b></h2>
        <button className='button  font-roboto'>Read more</button>
      </div>
      <img src={image1} alt="image1" className='home-image1' />
      <div>
      
      </div>

        <hr></hr>

    </div>
  )
}

export default Home