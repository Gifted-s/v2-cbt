import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import todaysDate from '../Gifted-Date/Gifted-Date'
import { faHandPointRight,faFolder,faChartLine,faChartPie,faChartArea, faChartBar, faPeopleCarry, faTasks, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import Graph from './Graph';
export default class Overview extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
        
        
      }
    render() {
     
return (
<React.Fragment>
    <div style={{ backgroundColor:'white'}} className="container-fluid">
    <div className="row" onClick={()=> this.props.close()}>
        <h4 className="text-secondary mb-4 my-3 ml-3">Monitor student's performance in realtime </h4>
        {
            this.props.userdata !==[]?
            <Graph userdata={this.props.userdata}/>
            :
            null

        }
        
     </div>
    </div>
    </React.Fragment>
        )
    }
}
