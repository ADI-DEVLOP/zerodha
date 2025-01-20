import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSellClick = async () => {
        if (stockQuantity <= 0 || stockPrice <= 0) {
            alert("Quantity and Price must be greater than 0.");
            return;
        }

        setIsProcessing(true);
        try {
            await axios.post("http://localhost:3002/newOrder", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL",
            });
            alert("Order placed successfully!");
            GeneralContext.closeSellWindow();
        } catch (error) {
            console.error("Error placing the order:", error);
            alert("Failed to place the order. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCancelClick = () => {
        GeneralContext.closeSellWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(Number(e.target.value))}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(Number(e.target.value))}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Proceeds estimate ₹120.50</span>
                <div>
                    <Link
                        className={`btn btn-red ${isProcessing ? "disabled" : ""}`}
                        onClick={!isProcessing ? handleSellClick : null}
                    >
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
