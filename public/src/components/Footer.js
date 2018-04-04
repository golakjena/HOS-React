import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="footerInnerPage clearfix">
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
        );
    }
}

export default Footer;