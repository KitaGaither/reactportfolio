import React, { Component } from 'react';
import meglasses from '../assets/images/meglasses.png';

class AboutMe extends Component {
    render() {
        return(
            <div className="home-components div2 text-center about-me">
                <h1 style={{color: 'white'}}>
                    About Me 
                </h1>
                <img
                src={meglasses}
                alt="lakita gaither"
                className="about-avatar"
                />
                <p style={{color: 'white', marginLeft: 300, marginRight: 300}}>
                Hi, my name is Kita!
I'm a Full-Stack Web developer(MERN). My area of interest is in Front-End development and UI. I have a background in Graphic Design, Web Design and Web Development. I am proficient in Javascript, React, React Native, HTML and CSS. I love connecting and networking with interesting people.

                </p>
            </div>
        );
    }
}
export default AboutMe;