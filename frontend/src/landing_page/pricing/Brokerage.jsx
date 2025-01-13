import React from "react";

function Brokerage(){
    return (
        
        <div className="container border-bottom">
            <div className="row p-4 mt-5 text-center border-top">
                <div className="col-8 p-5">
                    
                    <h3 className="fs-5">Brokerage calculator</h3>
                    <ul style={{textAlign:"left ",lineHeight:"2.4"}} className="text-muted">
                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. </li>
                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.₹9 + GST (Not levied on transfers done via UPI)</li>
                    </ul>
                </div>

                <div className="col-4 p-5">
                    
                    <h3 className="fs-5">List of charges</h3>
                    <p className="ext-muted"></p>
                </div>

                
            </div>
        </div>
    );
}
export default Brokerage;