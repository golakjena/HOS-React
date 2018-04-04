import React from 'react';
import Footer from './Footer';

class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <div className="innerHeader clearfix">
                    <h2 className="heading2">About Us</h2>
                    <div className="contentWrapper clearfix">
                        <div className="aboutUs clearfix">
                            <h3>HOS Management</h3>
                            <h4>A Premier Hospitality Experience</h4>
                            <p>From truly humble beginnings, brothers Kirit and Anil Patel started with one hotel and built a premier hospitality empire grounded in family values and corporate industry excellence.Today, HOS is a second generation hospitality and development group with over 30 years of industry experience managing a diverse collection of iconic hotel brands throughout the Southeast region including Hilton, Choice, IHG and Marriott, with Aloft and Fairfield Inn &amp; Suites currently in development in historic downtown Savannah. With a solid financial, development and managerial structure in place, HOS has successfully cultivated long-standing relationships with hotel partners, investors and most importantly, hotel guests. The philosophy behind the HOS brand and their enduring success is simple: family. As a company, HOS is committed to cultivating a comfortable and welcoming atmosphere for hotel associates and ambassadors, who will in return take exceptional care of our valuable guests. We are proud of the legacy we have built as a thriving family-oriented hospitality brand invested in the region. Our mission today and in the future is to continue to build thriving, sustainable hotel properties, provide incredible guest experiences and give back to the communities in which we do business through company &amp; employee-driven philanthropic initiatives.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default AboutPage;