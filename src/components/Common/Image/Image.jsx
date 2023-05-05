import React from 'react'

const Image = ({src, alt, width, height}) => {
  return (
    <div className='image-box' style={getImageCtnStyle(width, height)} >
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  )
}

const getImageCtnStyle = (width, height) => {
  return {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: width ? width : "auto",
  height: height ? height : "auto",
}};

const imageStyle = {
  maxWidth: '100%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

export default Image