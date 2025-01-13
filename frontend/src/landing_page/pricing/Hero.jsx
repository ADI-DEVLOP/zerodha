import React from "react";

function Hero(){
    return (
        
        <div className="container border-bottom">

            <div className="row p-4 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <p>List of all charges</p>
            </div>

            <div className="row p-4 mt-5 text-center">
                <div className="col-4 p-5">
                    <img src="/media/pricing0.svg"/>
                    <h1>Free equity delivery</h1>
                    <p className="ext-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="/media/intradayTrades.svg"/>
                    <h1>Intraday and F&O trades</h1>
                    <p className="ext-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="/media/pricingMF.svg"/>
                    <h1>Free direct MF</h1>
                    <p className="ext-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                </div>
            </div>
        </div>
    );
}
export default Hero;