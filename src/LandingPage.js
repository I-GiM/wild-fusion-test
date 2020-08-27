import React from 'react'
import logo from './images/logo.svg'
import { Navbar, Nav, Button } from 'react-bootstrap'
import AboutItem from "./components/AboutItem";


const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="body-wrap">
        {/* NavBar Section */}
        <Navbar className="navigation" expand="lg">
          <Navbar.Brand href="#home">
            <img className="" src={ logo } alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="mx-auto navigation-links">
              <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-links" href="">Features</Nav.Link>
              <Nav.Link className="nav-links" href="">Pricing</Nav.Link>
              <Nav.Link className="nav-links" href="">Our Reviews</Nav.Link>
              <Nav.Link className="nav-links" href="">Blog</Nav.Link>
              <Nav.Link className="nav-links" href="">Help</Nav.Link>
            </Nav>
            <div className="navigation-links nav-buttons" >
              <Button className="button button-2">Login</Button>
              <Button className="button">Sign up now</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>

        {/* Hero Section*/}
        <div className="hero-section">
          <h1 className="hero-section--header">Harness the Power<br />of Customers Words</h1>
          <Button className="button button-3">Sign up Now</Button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="hero-section--images">
            <div className="">
              <img className="img-fluid" src={ require('./images/iPhone.png')} alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src={ require('./images/fb-comment.png')} alt="" />
              <img className="img-fluid" src={ require('./images/discount-chat.png')} alt="" />
            </div>
            <div className="d-flex flex-column display-medium hero-images-third">
              <img className="img-fluid" src={ require('./images/mail.png')} alt="" />
              <img className="img-fluid" src={ require('./images/cart.png')} alt="" />
            </div>
            <div className="d-flex flex-column display-medium hero-images-fourth">
              <img className="img-fluid" src={ require('./images/google-beolit.png')} alt="" />
              {/*<img className="img-fluid" src={ require('./images/google.png')} alt="" />*/}
              <div className="emojis-beo">
                <img className="img-fluid" src={ require('./images/headset.png')} alt="" />
                <img className="img-fluid" src={ require('./images/emojis.png')} alt="" />
              </div>
            </div>
          </div>
        </div>

      {/* Brands Section */}
      <div className="brands-section">
        <img className="img-fluid mx-4" src={ require('./images/colgate-logo.png') } alt="" />
        <img className="img-fluid mx-4" src={ require('./images/Purple_Inc_logo.png') } alt="" />
        <img className="img-fluid mx-4" src={ require('./images/secret-lab-logo.png') } alt="" />
        <img className="img-fluid mx-4" src={ require('./images/velasca-logo.png') } alt="" />
        <img className="img-fluid mx-4" src={ require('./images/linjer-logo.png') } alt="" />
      </div>

      {/* About section */}
      <div className="about-section">
        <h2 className="about-header">User-Content<br />Generation Software<br />for Businesses</h2>
        <div className="about-details-wrap">
            <AboutItem
              itemImage={ require('./images/increased-conversions.png') }
              itemTitle={ 'Increased of\nconversions' }
              itemText={ 'Lorem ipsum dolor sit amet,\n' +
              'consectetur adipiscing elit.\n' +
              'Mauris vel sem nisi. Ut porta,' }
            />
          <AboutItem
            itemImage={ require('./images/direct-reviews.png') }
            itemTitle={ 'Reviews directly\nin the mail' }
            itemText={ 'Lorem ipsum dolor sit amet,\n' +
            'consectetur adipiscing elit.\n' +
            'Mauris vel sem nisi. Ut porta,' }
          />
          <AboutItem
            itemImage={ require('./images/third-party.png') }
            itemTitle={ 'Third-party\nintegrations' }
            itemText={ 'Lorem ipsum dolor sit amet,\n' +
            'consectetur adipiscing elit.\n' +
            'Mauris vel sem nisi. Ut porta,' }
          />
        </div>
      </div>

      {/* Survey section */}
      <div className="survey-section">
        <div className="survey-details-wrap">
          <div className="survey-details--left">
            <div className="user-star">
              <img className="img-fluid" src={ require('./images/vaadin_user-star.svg') } alt="" />
            </div>
            <div className="">
              <span className="little-header">PLATFORM</span>
              <h2 className="survey-header">Net Promoter<br />Score Surveys</h2>
              <p className="survey--text">A simple and proven methodology that<br />
              companies use to measure customer happiness as<br />
              it relates to company brand, product or service</p>
            </div>
          </div>
          <div className="survey--list">
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/vaadin_user-star-orange.svg') } alt=""/>
              <span className="survey--item selected-item"><sup>01</sup>Reviews & Ratings</span>
            </div>
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/raphael_chat.svg') } alt=""/>
              <span className="survey--item"><sup>02</sup>Community Q & A</span>
            </div>
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/ic_sharp-emoji-emotions.svg') } alt=""/>
              <span className="survey--item"><sup>03</sup>Net Promoter Score</span>
            </div>
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/ic_baseline-share.svg') } alt=""/>
              <span className="survey--item"><sup>04</sup>Social Media Marketing</span>
            </div>
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/fa-solid_shopping-cart.svg') } alt=""/>
              <span className="survey--item"><sup>05</sup>Checkout Review</span>
            </div>
            <div className="survey--list-item">
              <img className="pr-4" src={ require('./images/ant-design_pie-chart-filled.svg') } alt=""/>
              <span className="survey--item"><sup>06</sup>Sentiment Analysis</span>
            </div>
          </div>
        </div>
        <div className="survey--image">
          <img className="img-fluid" src={ require('./images/dashboard-pic.png') } alt="" />
        </div>
      </div>

      {/* Business goals section */}
      <div className="biz-goals-section">
        <div className="goals-wrap">
          <div className="goals-left">
            <div  className="goals-num-wrap">
              <div className="goals-num">1</div>
              <div className="goals-num">2</div>
              <div className="goals-num round-select">3</div>
              <div className="goals-num">4</div>
              <div className="goals-num">5</div>
              <div className="goals-num">6</div>
              <div className="goals-num">7</div>
              <div className="goals-num">8</div>
            </div>
            <div className="goals-header-wrap">
              <h2 className="survey-header goals-header">Realize your<br />Business Goals</h2>
              <p className="survey--text goals--text">You want to build trust and increase<br />
                sales for your business. Stamped.io<br />
                makes these objectives easy to achieve.</p>
              <Button className="button button-4">Sign up Now</Button>
            </div>
          </div>
          <div className="goals-right">
            <img className="img-fluid" src={ require('./images/discount-chat.png') } alt="" />
            <h3 className="about-item--title text-center">Retention</h3>
            <p className="about-item--text text-center">
              Build a community and<br />
              encourage your customers to<br />
              keep coming back for more.
            </p>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage