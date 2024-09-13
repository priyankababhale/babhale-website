

import PropTypes from 'prop-types';
const Image = ({url, height = "h-32", width = "w-32", alt = "image"}) => {
  return (
    <img
      src={url}
      alt={alt}
      className={`${height} ${width} object-cover rounded`}
    />
  )
}

export default Image
