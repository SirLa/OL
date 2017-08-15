import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {getData,handleSportClick} from '../actions';
import Region from './Region'
import '../css/sport.css'

class Sport extends Component{
    componentDidMount(){
        this.props.getData();
    }
    render(){
        if(this.props.sports){
            //console.log(this.props.sports)
            this.sportBar = this.props.sports.map((item,index) => {
                if(item!==null){
                    return (
                        <li key={index} className="sport" id={index} >
                                <div onClick={
                                    (event) => {
                                        this.props.handleSportClick(index,!this.props.open)
                                    }
                                }>{item["SportName"]}</div>
                                {/*{index === this.props.clickedSportIndex  && this.props.open  ? <Region/>:null}*/}
                                </li>
                    )
                }
            })
        }
        return (
            <div className="sport-nav">
                {this.props.sports? <ul className="sportBar">{this.sportBar}</ul>:null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   console.log(state)
    return {
        clickedSportIndex: state.sports.index,
        sports: state.sports.data.Sports,
        open: state.sports.open

    }
}
const mapDispatchToProps = (dispatch)  => {
    return {
        handleSportClick: (index,boolean) => {
            dispatch(handleSportClick(index,boolean));

        },
        getData: () => {
            // " http://www.mocky.io/v2/598d97550f0000fd021c8c34"
            axios.get("http://www.mocky.io/v2/598997ae4100009504820f36").then(res => {dispatch(getData(res.data))})
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sport);
