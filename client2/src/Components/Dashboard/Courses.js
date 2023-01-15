import React, { Component } from 'react';
import Home from '../QuestionUpload/QuestionUpload';
import swal from '@sweetalert/with-react';
import { courses } from '../../config/ccm';
export default class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: 'MATHEMATICS'
    }

  }
  componentDidMount() {
    window.scrollTo(0, 0)
    swal(
      <div>
        <div class="form-group">
          <label>Select course</label>
          <select onChange={(e) => this.setState({ course: e.target.value })} class="custom-select">
            {
              courses.map(c => <option selected value={c.key}> {c.value}</option>)
            } 
          </select>
        </div>
      </div>)
  }

  render() {
    return (
      <div onClick={() => this.props.close()} style={{ backgroundColor: 'white' }} className="container schedule">
        <Home change={this.setState} course={this.state.course} />
      </div>
    )
  }
}
