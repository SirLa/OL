import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getData,handleClick} from '../actions';
import '../css/region.css'

class Region extends Component{
    render(){
        let regionMap;
        let leagueMap;
        let gameMap;
        if(this.props.regions && this.props.clickedSportIndex!==null){

            regionMap = this.props.regions.map((item,index) => {
                //console.log(item["Leagues"])
                if(item !== null && item["Leagues"].length>0) {
                    leagueMap = item["Leagues"].map((item,index)=>{
                        if(item["Games"].length>0){
                        gameMap = item["Games"].map((item,index)=>{
                            console.log( item["Team1Name"]+" "+item["Team2Name"])
                            return(
                                <li  key={index} className="game">{item["Team1Name"]+" vs "+item["Team2Name"]}</li>
                            )
                        })}
                              return (
                                  <ul key={index} className="league" id={index}><div className="leagueName">{item["LeagueName"]}</div><hr/>{gameMap}</ul>
                               )
                            })
                    return (
                        <div key={index} className="region" id={index}>
                            {leagueMap}

                        </div>
                    )
                }
            });
        }
        return (
            <div className="region-nav">
                {this.props.regions?<ul></ul>:null}
                {regionMap}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.sports.data.Sports && state.sports.index!==null){

        let ind = state.sports.index;
        // {console.log(state.sports.data.Sports[ind].Regions)}
        return {
            clickedSportIndex: state.sports.index,
            regions: state.sports.data.Sports[ind].Regions
        }
    }else{
        return {};
    }
}
const mapDispatchToProps = (dispatch)  => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Region);