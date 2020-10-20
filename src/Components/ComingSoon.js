import React, { Component } from 'react';
import '../Styles/ComingSoon.css';
import Countdown from './CountDown';
import {Logo} from './Logo';
import logo from '../Images/bg-removebg-preview.png';
import Title from './Title';
import Description from './Description';
import Subscribe from './Subscribe';

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-10-25 00:00:00"
    },
    logo: {
        alt: "DOC2Door Logo",
        src: logo,      
    },
    title: {
      text: "Doc2Door",
    },
    description: {
      text: "Welcome to Doc2Doors, a one stop platform for you to find and book appointments with the hospitals near you. We completely change the way of going to the hospital. We make it safe, easy and hassle free. We are launching soon. For GIVEAWAY subscirbe with your emailid so we can contact you ",
    },
    subscribe: {
      placeholder:'Submit Email Id for GIVEAWAY' ,
      buttonText:"Subscribe",
    }
  }
  render() {
    const {
      countdown,
      logo,
      title,
      description,
      subscribe

    } = this.state;
  return (
    <div className="background">
      <Countdown futureDate={countdown.futureDate} />
      <Logo alt={logo.alt} src={logo.src} />
      <Title text={title.text} />
      <Description text={description.text} />
      <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}/>
    </div>
  )};
}


export default ComingSoon;
