import React, { Component } from 'react';
import './MyProfile.css'


class MyProfile extends Component {
    render() {
        return (
            <div className="App comp-body">
                <h1>Other Interests</h1>
                <img src={require('./images/ales-nesetril-734016-unsplash.jpg')} className="otherImg"/>
                    <p>Code Sites</p>
                <img src={require('./images/rhone-671486-unsplash.jpg')} className="otherImg"/>
                <p>Travel and Explore</p>
                <img src={require('./images/chris-liverani-563711-unsplash.jpg')} className="otherImg"/>
                <p>Video Game</p>

            </div>
        );
    }
}

export default MyProfile;
