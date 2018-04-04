import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.renderVideo();
    }

    renderVideo(){
        let videoList = [
			"/src/videos/iStock-577748032.mp4"
		];
		let posters = [
			"/src/videos/poster.jpg"
		];
		let randomVideo = Math.floor(Math.random()*videoList.length);
		document.querySelector("#videoplayer").innerHTML = "<video id='video' autoplay muted playsinline poster='" + posters[randomVideo] + "' loop><source src='" + videoList[randomVideo] + "' type='video/mp4'></video>";
    }
    

    render(){
        return(
            <div className="height100 homePage">
                <div className="videoCont clearfix">
                    <div className="bannerContent">
                        <h2>Southern Hospitality at its Finest</h2>
                        <h3><span>A Premier Hospitality Experience</span></h3>
                    </div>
                    <div className="videoOverlay"></div>
                    <div id="videoplayer"></div>
                </div>
                <footer className="footer clearfix">
                    <div className="footerInner">
                        <div className="fooCol"><p>Made by <a href="http://myriann.com/" target="_blank">Myriann</a></p></div>
                        <div className="fooCol address alignCenter">
                            <h5>HOS Management</h5>
                            <p>1000 Town Center Blvd. Suite 503 Pooler, Georgia 31322<br />
                            Phone: (912) 344-4538 Fax: (912) 344-4705 <a href="mailto:info@hosmanagement.com">info@hosmanagement.com</a></p>
                        </div>
                        <div className="fooCol">
                            <p>&copy; Copyright 2018. HOS Management. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;