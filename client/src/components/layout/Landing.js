import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";




const Landing = ({ isAuthenticated }) => {

  if(isAuthenticated){
    return <Redirect to = '/dashboard'/>
  }

    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Welcome to SelfQ</h1>
            <p className="lead">
             It is Health That is real Wealth
             And not peices of Gold and Silver
            </p>
            <div className="buttons">
              <Link to='/register' className="btn btn-primary">Sign Up</Link>
              <Link to='/login' className="btn btn-light">Login</Link>
            </div>
          </div>
          <AliceCarousel autoPlay autoPlayInterval="2000">
      <a href = "https://www.who.int/news/item/22-03-2021-covid-19-highlights-urgent-need-to-reboot-global-effort-to-end-tuberculosis">
      <img src="https://i.ibb.co/Sx6TBsx/self1.jpg" className="sliderimg"/>
      </a>
      <a href = "https://www.who.int/news/item/19-03-2021-statement-of-the-who-global-advisory-committee-on-vaccine-safety-(gacvs)-covid-19-subcommittee-on-safety-signals-related-to-the-astrazeneca-covid-19-vaccine">
      <img src="https://i.ibb.co/XWJcyFW/self2.jpg" className="sliderimg"/>
      </a>
      <a href = "https://www.who.int/news/item/17-03-2021-who-statement-on-astrazeneca-covid-19-vaccine-safety-signals">
      <img src="https://i.ibb.co/TMRFyFC/self3.jpg" className="sliderimg"/>
      </a>
      <a href = "https://www.who.int/news/item/16-03-2021-new-research-highlights-risks-of-separating-newborns-from-mothers-during-covid-19-pandemic">
      <img src="https://i.ibb.co/F6LvNLP/self4.jpg" className="sliderimg"/>
      </a>
</AliceCarousel>

        </div>
      </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps) (Landing);