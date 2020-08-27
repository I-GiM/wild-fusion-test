import React from 'react'


const CustomerCard = (props) => {
  return (
    <div style={{
      'borderRadius': '5px'
    }} className="bg-white p-4 m-3">

      <div className="d-flex">
        <img style={{
          'width': '45px',
          'height': '45px',
          'objectFit': 'cover'
        }} className="mr-3" src={props.cardImage} alt=""/>
        <div className="d-flex flex-column">
          <span style={{'fontWeight': '700'}} className="">{props.cardName}</span>
          <span style={{'color': '#7F828A', 'fontSize': '0.7rem'}} className="">{props.cardTitle}</span>
        </div>
      </div>
      <p style={{'fontSize': '0.7rem', 'margin': '20px 0'}} className="">
        Increased review rates have helped
        us grow our brands 35% year over
        year. With S very easy collect
        organic reviews from our happy
        customers that love to share our
        experience wht our brands
      </p>
      <img className="" src={props.cardStars} alt="" />
    </div>
  )
}

export default CustomerCard