import React from 'react';
import Region from './Region'
import "../css/main.css"
const Main = () => (
    <div className="bettingContainer">
            <div className="Vbet bet">
                <h3>Vbet</h3>
                <Region/>
            </div>
            <div className="SBObet bet">
                <h3>SBObet</h3>
                <Region/>
            </div>
            <div className="Bet365 bet">
                <h3>Bet365</h3>
                <Region/>
            </div>
            <div className="Marathonebet bet">
                <h3>Marathonebet</h3>
                <Region/>
            </div>
            <div className="clear"></div>
    </div>
)
export default Main;