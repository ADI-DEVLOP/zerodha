import React from "react";

function LeftSection( {imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}){
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-6 p-5 ">
                    <img src={imageURL} />
                </div>

                <div className="col-6 p-5 mt-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a href={tryDemo} >Try Demo</a>
                        <a href={learnMore } style={{marginLeft: "54px"}}>Learn More</a>
                    </div>

                    <div>
                        <a href={googlePlay} ><img src="media/googlePlayBadge.svg"/></a>
                        <a href={appStore} style={{marginLeft: "54px"}}><img src="media/appstoreBadge.svg"/></a>
                    </div>

                    

                </div>

            </div>
        </div>
    );
}
export default LeftSection;