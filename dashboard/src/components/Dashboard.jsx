import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import Watchlist from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const  Dashboard = () => {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <Watchlist/>
            </GeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/holdings" element={<Holdings />} />
                    <Route exact path="/positions" element={<Positions />} />
                    <Route exact path="/funds" element={<Funds />} />
                    <Route exact path="/apps" element={<Apps />} />

                </Routes>
            </div>
        </div>
    )
}

export default Dashboard