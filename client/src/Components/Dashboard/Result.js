import React, { Component } from 'react'
import todaysDate from '../../utils/gifted-date'
import axios from 'axios'
import { apiRoot } from '../../config/config'
export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

    }
    componentDidMount() {
        axios.get(`${apiRoot}/dash`)
            .then(res => {
                this.setState({ users: res.data.user_data })
            })
            .catch(err => {
                throw err
            })
    }
    style = { border: '1px solid rgba(0,0,0,0.3)', paddingTop: 6 }
    render() {

        return (
            <div className="container">
                {
                    this.state.users ?
                        <>
                            <h4 className="text-uppercase text-center my-4">RESULT FOR THE {this.state.users[0] && this.state.users[0].course} TEST HELD ON {todaysDate.getFullDate()}   </h4>
                            <h5 className="text-center">100 LEVEL</h5>

                            <div style={{ marginTop: 40 }} className="row ">
                                <div className="col-md-3">
                                    <h6>NAME</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6>MATRIC NUMBER</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6>SCORE</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6>TIME COMPLETED</h6>
                                </div>
                            </div>


                            <div className="row">
                                {
                                    this.state.users.map(user => {
                                        return (
                                            <>
                                                <div style={this.style} className="col-md-3">
                                                    <p>{user.name}</p>
                                                </div>
                                                <div style={this.style} className="col-md-3">
                                                    <p>{user.matric_number}</p>
                                                </div>
                                                <div style={this.style} className="col-md-3">
                                                    <p>{user.score}</p>
                                                </div>
                                                <div style={this.style} className="col-md-3">
                                                    <p>{user.time_completed}</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }


                            </div>
                        </>
                        :
                        null
                }








                <div style={{ marginTop: 50 }} className="row">
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }} className="col-md-12">
                        <button onClick={() => window.print()} className="btn btn-light">
                            PRINT RESULT
                        </button>
                    </div>
                </div>

            </div>


        )
    }
}
