
import Button from './Button'
import Image from './Image';

const Section1 = () => {

  const handleClick = ()=>{
    
  }

  return (
    <>
      
      <Button 
      background='bg-red-500'
      color='text-white'
      text='Read more'
      border='border border-blue-500'
      hoverBackground='hover:bg-blue-700'
      onClick={handleClick}/>

      <div className='p-4'>
      <Image 
        url="https://example.com/small-image.jpg" 
        height="h-24" 
        width="w-24" 
        alt="Small image"
      />

      </div>

    </>
  )
}

export default Section1