import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getData,handleClick} from '../actions';
import '../css/region.css'

class Region extends Component{
    render(){
        let leagueNameMap;
        if(this.props.regions && this.props.clickedSportIndex!==null){
            //console.log(this.props.clickedSportIndex);
            let leagueNames = [];
            this.regionBar = this.props.regions.map((item,index) => {
                // if(item!==null){
                    //console.log(item["Leagues"].length)

                    for(let i = 0; i<item["Leagues"].length;i++){

                        //console.log(i)
                        leagueNames.push(item["Leagues"][i]["LeagueName"])
                    }
                    console.log(index)
                       /* return (
                            <li key={index} className="region" id={index}><div>{/!*item["RegionName"] + " " + *!/arr[index]} </div><br/></li>
                        )*/



                //}
            });
            leagueNameMap = leagueNames.map((item,index)=>{
                return (
                    <li key={index} className="region" id={index}><div>{/*item["RegionName"] + " " + */leagueNames[index]} </div></li>
                )
            })
        }
        return (
            <div className="region-nav">
                {this.props.regions?<ul>{leagueNameMap}</ul>:null}
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
