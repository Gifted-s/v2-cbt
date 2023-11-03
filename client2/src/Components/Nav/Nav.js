import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from '@sweetalert/with-react'
import axios from 'axios'
import { faUser, faSadTear, faBookOpen, faArrowCircleRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { apiRoot } from '../../config/config'
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minute: 0,
      finish: false
    }
  }
  componentDidMount() {
    this.setState({ minute: this.props.time })
    const user_has_time = localStorage.getItem('user')
    if (!user_has_time) {
      this.props.history.push('/')
    }

    this.makeTime = setInterval(() => {
      this.setState((prevState) => {
        return { seconds: prevState.seconds === 0 ? 59 : prevState.seconds - 1 }
      })
      if (this.state.seconds === 59) {
        this.setState((prevState) => {
          return { minute: prevState.minute - 1 }
        })

      }
      if (this.state.minute <= 0 && this.state.seconds === 0) {


        setTimeout(() => {
          localStorage.clear('user')
          this.props.history.push({ pathname: '/' })
        }, 100)
        let score = 0
        for (let i = 0; i < this.props.correctOptions.length; i++) {
          if (this.props.optionTable[i] === this.props.correctOptions[i]) {
            score++
          }
        }
        axios.post(apiRoot + '/submit', {
          name: this.props.user.name,
          course: this.props.course,
          score,
          matric_number: this.props.user.matno,
          time_completed: `${this.state.minute} MINUTE ${this.state.seconds} SECONDS`
        })
          .then()
        clearInterval(this.makeTime)
        this.setState({ finish: true })
        swal(<div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
            <div style={{ marginTop: 40, marginBottom: 40 }}>
              <FontAwesomeIcon icon={faSadTear} style={{ fontSize: 60, color: 'deeppink' }} />
              <FontAwesomeIcon icon={faSadTear} style={{ fontSize: 60, color: 'rgb(321,127,33)' }} />
              <FontAwesomeIcon icon={faSadTear} style={{ fontSize: 60, color: 'rgb(100,211,0)' }} />
            </div>

            <h5 className="my-2 text-secondary">Sorry {this.props.user.name} time is up!!!</h5>
            <p className="text-secondary" style={{ fontSize: 20 }}>We will have to log you out automatically</p>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <FontAwesomeIcon icon={faClock} style={{ fontSize: 20, color: 'rgba(0,0,0,0.6)' }} />

            </div>
          </div>

        </div>)
      }
    },
      1000)
  }
  componentWillUnmount() {
    clearInterval(this.makeTime)
  }






  handleSubmit_ = () => {
    swal({
      title: "Are you sure?",
      text: `Note that once you submit you can't return to this page, if you try login in again we will only record result of your first attempt `,
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        const { optionTable, correctOptions } = this.props
        if (willDelete) {
          let score = 0
       
          window.location = '/'
          localStorage.clear('user')
          for (let i = 0; i < correctOptions.length; i++) {
            if (optionTable[i] === correctOptions[i]) {
              score++
            }
          }
           
          axios.post(apiRoot + '/submit', {
            name: this.props.user.name,
            course: this.props.course,
            score,
            matric_number: this.props.user.matno,
            time_completed: `${this.state.minute} MINUTE ${this.state.seconds} SECONDS`
          })
            .then()
        }
        else {

        }

      })
  }





  render() {
    const { minute, seconds } = this.state
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <span class="navbar-brand text-uppercase"><FontAwesomeIcon icon={faUser} /> Writer's name: {this.props.user.name}</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <span class="navbar-brand" href="#"><FontAwesomeIcon icon={faBookOpen} /> COURSE: {this.props.course}</span>
            </li>
          </ul>
        </div>
        <form class="form-inline">
          <span style={{backgroundColor:'#CD5C5C', padding:8, alignItems:"center", borderRadius:5, justifyContent:'space-between', display:'flex'}} class={`time mr-4 ${minute < 2 ? 'animate' : null}`}><FontAwesomeIcon style={{ fontSize: 30, marginRight: 12 }} icon={faClock} /> {!this.state.finish ? `TIME LEFT:  ${minute}MIN: ${seconds}SEC` : `TIMES'S UP:  ${0}MIN: ${0}SEC`} </span>
          <button onClick={this.handleSubmit_} style={{ fontWeight: '500' }} class="btn btn-light my-2 my-sm-0" type="button">  SUBMIT <FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </form>
      </nav>
    )
  }
}

export default withRouter(Nav)