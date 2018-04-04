import React from 'react';
import Footer from './Footer';

class Careers extends React.Component{
    render(){
        return(
            <div>
                <div className="innerHeader clearfix">
                    <h2 className="heading2">Careers</h2>
                    <div className="contentWrapper clearfix">
                        <div className="careers clearfix">
                            <h3>If you're interested in applying for an open position at one of HOS Management's properties, please fill out our online application and we will respond once we receive and review your information.</h3>
                            <div className="formCont clearfix">
                                <form>
                                    <div className="frmCol fLeft">
                                        <div className="frmRow">
                                            <input className="txtInput" type="text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="frmRow">
                                            <input className="txtInput" type="text" name="email" placeholder="Email" />
                                        </div>
                                        <div className="frmRow">
                                            <input className="txtInput" type="text" name="phone" placeholder="Phone" />
                                        </div>
                                        <div className="frmRow">
                                            <input className="txtInput" type="file" name="image" />
                                        </div>
                                    </div>	
                                    <div className="frmCol fRight">
                                        <div className="frmRow">
                                            <input className="txtInput" type="text" name="position" placeholder="Position" />
                                        </div>
                                        <div className="frmRow">
                                            <textarea className="txtArea" name="message" placeholder="Message" cols="10" rows="5"></textarea>
                                        </div>
                                        <div className="frmRow">
                                            <input className="btnSubmit" type="submit" value="SUBMIT" />
                                        </div>
                                    </div>	
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Careers;