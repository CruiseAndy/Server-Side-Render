import React from 'react';

const Home = () => {
    return (
        <div className="center-align" style={{ marginTop: '200px' }} >
            <h3>Welcome</h3>
            <p>Check out these awesome fearures</p>
            <iframe src="https://www.npr.org/player/embed/625406645/625406646" width="100%" height="290" frameborder="0" scrolling="no" title="NPR embedded audio player"></iframe>
        </div>
    );
};

export default {
    component: Home
};