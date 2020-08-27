import React from "react";
import CustomerCard from './CustomerCard'


const CustomerSection = () => {
  return (
    <React.Fragment>
      <div
        style={{
          'paddingTop': '200px'
        }}
        className="customer-wrap">
      <h2 className="survey-header">Customer's<br/>Stories</h2>
        <div className="d-flex card-wrap">
          <div className="d-flex flex-column justify-content-around py-4 pr-4">
            <img className="" src={require('../images/bi_arrow-right.svg')} alt="" />
            <img className="" src={require('../images/bi_arrow-left.svg')} alt="" />
          </div>
          <CustomerCard
            cardImage={require('../images/brian-lim.png')}
            cardName={'Brian Linn'}
            cardTitle={'CEO AT EMAZINGGROUP'}
            cardStars={require('../images/rating-1.svg')}
          />
          <CustomerCard
            cardImage={require('../images/david-vassilakis.png')}
            cardName={'David Vassilakis'}
            cardTitle={'CEO AT FITAFFINITY.COM'}
            cardStars={require('../images/rating.svg')}
          />
          <CustomerCard
            cardImage={require('../images/andrew-uhacz.png')}
            cardName={'Andrew Uhacz'}
            cardTitle={'VICE PRESIDENT AT FLOORCITY.COM'}
            cardStars={require('../images/rating-1.svg')}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerSection