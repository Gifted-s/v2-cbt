import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faWindowClose, faClock, faListAlt, faTasks } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
    render() {
        const { presentPage: present } = this.props
        return (
            <div className="col-md-2 col-sm-3 sidebar">
                {window.innerWidth <= 768 ?
                    <div onClick={() => this.props.toggle()} className="close_btn" style={{ float: 'right' }}>
                        <FontAwesomeIcon style={{ width: 25, height: 25, color: '#3297d3' }} icon={faWindowClose} />
                    </div> : null}

                <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} className="bg-primary my-3 ml-1" >
                    <Link className="logo__" to="/" style={{ textDecorationWidth: 0, borderBottomColor: 'white', borderBottom: 'none' }}> </Link>
                </div>
                <div onClick={() => this.props.navigateTo('edit')} className="cd">
                    <h5>CELEFUTA</h5>
                    <p>CBT ADMIN PAGE</p>

                </div>
                <div
                    onClick={() => {
                        this.props.navigateTo('monitor')
                        this.props.toggle()

                    }}

                    className={present === "monitor" ? ` cr  sidebar_item` : 'sidebar_item'}>

                    <span > <FontAwesomeIcon icon={faClock} className={present === "monitor" ? `cr cr_icon` : "sidebar_text"} /></span>  <span className="sidebar_text">Dashboard</span>

                </div>

                <div onClick={() => {
                    this.props.navigateTo('schedule')
                    this.props.toggle()

                }} className={present === "schedule" ? ` cr  sidebar_item` : 'sidebar_item'}>

                    <span><FontAwesomeIcon icon={faTasks} className={present === "schedule" ? `cr cr_icon` : "sidebar_text"} /></span> <span className="sidebar_text" >Schedule Test</span>

                </div>


                <div
                    onClick={() => {
                        this.props.navigateTo('result')

                        this.props.toggle()
                        this.props.history.push('/result')
                    }}

                    className={present === "result" ? ` cr  sidebar_item` : 'sidebar_item'}>

                    <span><FontAwesomeIcon className={present === "result" ? `cr cr_icon` : "sidebar_text"} icon={faListAlt} /></span> <span className="sidebar_text">View result </span>

                </div>

                <div onClick={() => {
                    this.props.navigateTo('courses')
                    this.props.toggle()

                }} className={present === "courses" ? ` cr  sidebar_item` : 'sidebar_item'}>

                    <span> <FontAwesomeIcon className={present === "courses" ? `cr cr_icon` : "sidebar_text"} icon={faUpload} /></span> <span className="sidebar_text">Upload questions</span>

                </div>
                {/* <div
       onClick={()=>{
        this.props.navigateTo('edit')
        this.props.toggle()

        }}
       
       className={present=== "edit" ? ` cr  sidebar_item`: 'sidebar_item' }>
           
           <span><FontAwesomeIcon className={present=== "edit" ? `cr cr_icon`:"sidebar_text" } icon={faPen} /></span> <span className="sidebar_text" >Edit Profile</span>
       
       </div> */}


            </div>
        )
    }
}

export default withRouter(Sidebar)