import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import swal from 'sweetalert';


const Schedule = React.lazy(() => import('./Schedule'))
const Courses = React.lazy(() => import('./Courses'))
const Monitor = React.lazy(() => import('./Monitor'));
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSidebar: false,
      presentPage: 'monitor',
      userdata: []
    }
  }

  componentDidMount() {

    swal({
      text: 'Enter secret key to access this page',
      content: "input",
      button: {
        text: "Submit",
        closeModal: true,
      }
    })
      .then(password => {
        if (password !== "celefuta001") {
          swal('Invalid password', '', 'error')
          this.props.history.push('/')
        }
        else {
          swal('Access granted', '', 'success')
        }

      })

  }

  toggle() {
    this.setState({ showSidebar: !this.state.showSidebar })
  }
  changeScreen(screen) {
    window.scrollTo(0, 0)
    this.setState({ presentPage: screen })
  }


  render() {


    return (
      <div className="container-fluid dash">

        <div className="row ">


          {
            this.state.showSidebar && window.innerWidth <= 768 ?

              <Sidebar presentPage={this.state.presentPage} navigateTo={this.changeScreen.bind(this)} toggle={this.toggle.bind(this)} />

              :
              window.innerWidth > 768 ?
                <Sidebar presentPage={this.state.presentPage} navigateTo={this.changeScreen.bind(this)} toggle={this.toggle.bind(this)} />
                :
                null

          }

          <div style={{ position: `${window.innerWidth < 768 ? "absolute" : 'relative'} ` }} className="col-md-10 col-sm-3 dashboard_right">


            <div className="dash_nav">
              <div className="icon__" style={{ float: 'left', marginTop: 14, marginRight: 30 }}  >
                <span className="__icon" onClick={this.toggle.bind(this)}><FontAwesomeIcon style={{ width: 30, marginLeft: 14, height: 27 }} icon={faBars} />
                </span>
                <span style={{ fontWeight: '600', color: 'white', marginLeft: 10 }} className="logout_text">
                  Admin
                </span>



              </div>

              <div style={{ float: 'right', cursor: 'pointer', marginTop: 14, marginRight: 30 }} className="user">

              
                <span
                  style={{ fontWeight: '600', marginLeft: 40, cursor: 'pointer' }} onClick={() => {
                    swal({
                      title: "Are you sure?",
                      text: "",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    })
                      .then((willDelete) => {
                        if (willDelete) {
                          localStorage.clear('user')
                          this.props.history.push('/')
                        } else {

                        }
                      });
                  }} className="logout_text">
                  <span >logout<FontAwesomeIcon style={{ marginLeft: 6, cursor: 'point' }} icon={faSignOutAlt} /></span></span>


              </div>

            </div>
            {
              this.state.presentPage === 'monitor' ?
                <React.Suspense fallback={
                  <div style={{ backgroundColor: 'white', height: 400, flex: 1, display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="container schedule">
                    <div>
                      <Spinner size='large' />
                    </div>
                  </div>
                }>
                  <Monitor userdata={this.state.userdata} change={this.changeScreen.bind(this)} close={() => this.setState({ showSidebar: false })} />
                </React.Suspense>

                :
                this.state.presentPage === 'schedule' ?
                  <React.Suspense fallback={
                    <div style={{ backgroundColor: 'white', height: 400, flex: 1, display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="container schedule">
                      <div>
                        <Spinner size='large' />
                      </div>
                    </div>
                  }> <Schedule changeScreen={this.changeScreen.bind(this)} close={() => this.setState({ showSidebar: false })} />
                  </React.Suspense>
                  :
                  this.state.presentPage === 'courses' ?
                    <React.Suspense fallback={
                      <div style={{ backgroundColor: 'white', height: 400, flexDirection: 'column', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="container schedule">
                        <div>
                          <Spinner size='large' />
                        </div>
                      </div>
                    }><Courses close={() => this.setState({ showSidebar: false })} /></React.Suspense>
                    :

                    null
            }

          </div>

        </div>



      </div>
    )
  }
}
