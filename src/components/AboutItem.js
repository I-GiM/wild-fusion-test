import React from 'react'


const AboutItem = ({itemImage, itemTitle, itemText}) => {
  return (
    <div className="about-item">
      <img className="img-fluid about-item--image" src={ itemImage } alt="" />
      <h3 className="about-item--title">{ itemTitle }</h3>
      <p className="about-item--text">{ itemText }</p>
    </div>
  )
}

export default AboutItem