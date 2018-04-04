import React from 'react';
import Footer from './Footer';
class OurTeam extends React.Component {
    render(){
        return(
            <div>
                <div className="innerHeader clearfix">
                    <h2 className="heading2">Our Team</h2>
                    <div className="contentWrapper clearfix">
                        <div className="ourTeam clearfix">
                            <div className="teamRow">
                                <h5>Kirit R. Patel</h5>
                                <h6>Chief Executive Officer</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Anil R. Patel</h5>
                                <h6>President and Chief Development Officer</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Riki Patel</h5>
                                <h6>Vice President of Operations</h6>
                            </div>
                            <div className="teamRow">					
                                <h5>Kris Patel</h5>
                                <h6>Chief Financial Officer</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Bill Dowell</h5>
                                <h6>Director of Operations</h6>
                            </div>
                            <div className="teamRow">
                                <h5>David Thornton</h5>
                                <h6>Director of Operations</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Joseph Barthelmess</h5>
                                <h6>Controller</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Monica Haselden</h5>
                                <h6>Director of Revenue Management</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Wendy Googe</h5>
                                <h6>Director of Sales for Coastal Georgia</h6>
                            </div>
                            <div className="teamRow">
                                <h5>Stephanie Noble</h5>
                                <h6>Director of Sales - Savannah Area</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default OurTeam;