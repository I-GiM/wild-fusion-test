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
      </div>
    </React.Fragment>
  )
}

export default LandingPage