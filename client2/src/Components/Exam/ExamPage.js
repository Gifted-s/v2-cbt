import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import genrand from '../../utils/genrand'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { apiRoot } from '../../config/config'

export default class ExamPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      currentIndex: 0,
      optionTable: [],
      correctOptions: []
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0)
    try {
      const response = await axios.get(`${apiRoot}/questions`)
      const { questions } = response.data


      let random_numbers = genrand(1, questions.length)
      let newArr = []
      for (let j = 0; j < random_numbers.length; j++) {
        newArr.push(questions[random_numbers[j] - 1])
      }



      const correctOptionTempTable = []
      const optionTableTemp = []
      for (let j = 0; j < newArr.length; j++) {
        correctOptionTempTable.push(newArr[j].correctAnswer)
        optionTableTemp.push('')
      }
      this.setState({ optionTable: optionTableTemp })
      this.setState({ correctOptions: correctOptionTempTable })
      this.setState({ questions: newArr })

    } catch (error) {
      throw error.response.data
    }

  }
  checkQuestionType = function (string) {
    const re = new RegExp(/images/, 'i')
    const isImage = string.search(re)
    if (isImage === 1) {
      return true
    }
    return false
  }

  render() {

    const { currentIndex, questions, optionTable } = this.state
    return (
      <React.Fragment>
        <Nav correctOptions={this.state.correctOptions} optionTable={this.state.optionTable} course={this.props.location.state.course} time={this.props.location.state.time} user={{ name: this.props.location.state.name, matno: this.props.location.state.matno }} history={this.props.history} />

        <div className="container-fluid ">
          {

            this.state.questions.length > 0 ?
              <React.Fragment>


                <div className="question_container col-md-11 mt-1 ">

                  <div className="question col-md-12">
                    <p className="number">Question({currentIndex + 1})</p>
                    {/* <p className="question_text">Who is the best cooerdinartor in the name of football excellence is there</p> */}
                    <p className="question_text">{this.checkQuestionType(questions[currentIndex].question) ? <img alt='questionImage' src={questions[currentIndex].question} /> : questions[currentIndex].question}</p>
                  </div>

                  <div className="option_container">
                    <div className="form-check">
                      <input class="form-check-input" type="radio"
                        onClick={() => {
                          const optionTableTemp = optionTable
                          optionTable[currentIndex] = "A"
                          this.setState({ optionTable: optionTableTemp })
                        }} name="exampleRadios" id="exampleRadios1" value="option1"
                        checked={optionTable[currentIndex] === "A" ? true : null}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        <span style={{ float: 'left' }} className="mr-1">(A)</span>
                        {this.checkQuestionType(questions[currentIndex].optionA) ? <img alt='questionImage' src={questions[currentIndex].optionA} /> : questions[currentIndex].optionA}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        onClick={() => {
                          const optionTableTemp = optionTable
                          optionTable[currentIndex] = "B"
                          this.setState({ optionTable: optionTableTemp })
                        }}
                        className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"
                        checked={optionTable[currentIndex] === "B" ? true : null} />
                      <label class="form-check-label" for="exampleRadios2">
                        <span style={{ float: 'left' }} className="mr-1">(B)</span>
                        {this.checkQuestionType(questions[currentIndex].optionB) ? <img alt='questionImage' src={questions[currentIndex].optionB} /> : questions[currentIndex].optionB}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        onClick={() => {
                          const optionTableTemp = optionTable
                          optionTable[currentIndex] = "C"
                          this.setState({ optionTable: optionTableTemp })
                        }}
                        class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
                        checked={optionTable[currentIndex] === "C" ? true : null} />
                      <label class="form-check-label" for="exampleRadios3">
                        <span style={{ float: 'left' }} className="mr-1">(C)</span>
                        {this.checkQuestionType(questions[currentIndex].optionC) ? <img alt='questionImage' src={questions[currentIndex].optionC} /> : questions[currentIndex].optionC}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        onClick={() => {
                          const optionTableTemp = optionTable
                          optionTable[currentIndex] = "D"
                          this.setState({ optionTable: optionTableTemp })
                        }} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4"
                        checked={optionTable[currentIndex] === "D" ? true : null} />
                      <label class="form-check-label" for="exampleRadios4">
                        <span style={{ float: 'left' }} className="mr-1">(D)</span>
                        {this.checkQuestionType(questions[currentIndex].optionD) ? <img alt='questionImage' src={questions[currentIndex].optionD} /> : questions[currentIndex].optionD}
                      </label>
                    </div>
                    <div className="btns row justify-content-between d-flex mt-2 w-100">
                      <div onClick={() => {
                        this.setState((prevState) => {
                          return { currentIndex: prevState.currentIndex === 0 ? questions.length - 1 : prevState.currentIndex - 1 }
                        })
                      }} className="btn btn-primary offset-md-1">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Previous
                      </div>
                      <div
                        onClick={() => {

                          this.setState((prevState) => {
                            return { currentIndex: prevState.currentIndex === questions.length - 1 ? 0 : prevState.currentIndex + 1 }
                          })
                        }} className="btn ml-2 btn-primary">
                       Save  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </div>
                    </div>

                  </div>

                </div>

                <div style={{ paddingTop: 9, paddingBottom: 16, borderTopWidth: 1, borderTopColor: 'rgb(0,0,0)' }} className="number_container col-md-12 mt-1 ">
                  {questions.map((question, index) => {
                    return (
                      <div style={{ fontWeight: '600' }} onClick={() => this.setState({ currentIndex: index })} className={`btn mr-1 mt-1 ${currentIndex === index ? 'btn-danger' : optionTable[index] ? 'btn-success' : 'btn-primary'}`}>
                        {index + 1}
                      </div>
                    )
                  })
                  }

                </div>
              </React.Fragment>

              :
              null

          }


        </div>
      </React.Fragment>

    )
  }
}
