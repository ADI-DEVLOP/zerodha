import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor : 'rgb(250, 250, 250)'}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/logo.svg' style={{width:'50%'}} />
                    <p>
                        &copy ; 2010 - 2014 ,Zerodha Broking Ltd.

All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href="">About</a><br>
                    </br>
                    <a href="">Products</a><br>
                    </br>
                    <a href="">Pricing</a><br>
                    </br>
                    <a href="">Referral programme</a><br>
                    </br>
                    <a href="">Careers</a><br>
                    </br>
                    <a href="">Zerodha.tech</a><br>
                    </br>
                    <a href="">Press & media</a><br>
                    </br>
                    <a href="">Zerodha Cares (CSR)</a><br>
                    </br>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href="">Contact us </a><br>
                    </br>
                    <a href="">Support portal</a><br>
                    </br>
                    <a href="">Z-Connect blog</a><br>
                    </br>
                    <a href="">List of charges</a><br>
                    </br>
                    <a href="">Downloads & resources</a><br>
                    </br>
                    <a href="">Videos</a><br>
                    </br>
                    <a href="">Market overview</a><br>
                    </br>
                    <a href="">How to file a complaint?</a><br>
                    </br>
                    <a href="">Status of your complaints</a><br>
                    </br>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="">Open an Account</a><br>
                    </br>
                    <a href="">Fund transfer</a><br>
                    </br>
                    <a href="">60 day challenge</a><br>
                    </br>

                </div>

            </div>
            <div className='mt-5 fs-6 text-muted'>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            </div>



        </div>
        </footer>
    );
}

export default Footer;