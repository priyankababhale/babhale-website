

const Image = ({url, height, width, alt="image" }) => {
  return (
    <div style={{width:width, height:height}}>
    <img
      src={url}
      alt={alt}
      width="100%"
      height="100%"
    />
    </div>
  )
}

export default Image
