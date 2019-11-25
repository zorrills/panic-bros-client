import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import './styles.scss';

class HomePage extends Component {

    render() {
        return (
            <div className="homeContainer">
                <img className="background" src='/assets/Background_Dark.png' />
                <div className="fade-box">
                    <Fade bottom>
                        <div className="title-card">
                            Welcome to the Panic Bros Podcast
                            <img className="josue" src='/assets/Josue_Sprite_Transparent.png' />
                            <img className="simon" src='/assets/Simon_Sprite_Transparent.png' />
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}
export default HomePage;