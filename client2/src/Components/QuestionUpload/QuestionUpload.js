import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import { apiRoot } from '../../config/config'
import fs from 'fs'
const QuestionUpload = (props) => {
   const [correctAnswer, setCorrectAnswer] = useState('') 
   const [questionText, setQuestion] = useState('')
   const [optionA, setOptionA] = useState('')
   const [optionB, setOptionB] = useState('')
   const [optionC, setOptionC] = useState('')
   const [course, setCourse] = useState('')
   const [optionD, setOptionD] = useState('') 
   const [uploadedFile, setUploadedFile] = useState(null)
   const [uploadedFile1, setUploadedFile1] = useState(null)
   const [uploadedFile2, setUploadedFile2] = useState(null)
   const [uploadedFile3, setUploadedFile3] = useState(null)
   const [uploadedFile4, setUploadedFile4] = useState(null)
   const [uploadProgress, setUploadProgress] = useState(0)
   const [uploadProgress1, setUploadProgress1] = useState(0)
   const [uploadProgress2, setUploadProgress2] = useState(0)
   const [uploadProgress3, setUploadProgress3] = useState(0)
   const [uploadProgress4, setUploadProgress4] = useState(0)


   useEffect(() => {
      setCourse(props.course)
   })



   const handleUpload = (e) => {

      const formData = new FormData()
      console.log(e.target.files[0])
      formData.append('file', e.target.files[0] ) ; 
    
      axios.post(`${apiRoot}/post`, formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         },
         onUploadProgress: (progressEvent) => { 
            setUploadProgress(parseInt(Math.round((progressEvent.loaded) * 100 / progressEvent.total))) 
         }
      })
         .then((res) => {
            const { fileName, filePath } = res.data
            console.log(fileName, filePath)
            setUploadedFile({ fileName, filePath })
         })
         .catch(err => {
            console.log(err)
         })

   }


   const handleUpload1 = (e) => {

      const formData = new FormData()
      console.log(e.target.files[0])
      formData.append('file', e.target.files[0] ) ; 
    
      axios.post(`${apiRoot}/post`, formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         },
         onUploadProgress: (progressEvent) => { 
            setUploadProgress1(parseInt(Math.round((progressEvent.loaded) * 100 / progressEvent.total))) 
         }
      })
         .then((res) => {
            const { fileName, filePath } = res.data
            console.log(fileName, filePath)
            setUploadedFile1({ fileName, filePath })
         })
         .catch(err => {
            console.log(err)
         })

   }


   const handleUpload2 = (e) => {

      const formData = new FormData()
      console.log(e.target.files[0])
      formData.append('file', e.target.files[0] ) ; 
    
      axios.post(`${apiRoot}/post`, formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         },
         onUploadProgress: (progressEvent) => { 
            setUploadProgress2(parseInt(Math.round((progressEvent.loaded) * 100 / progressEvent.total))) 
         }
      })
         .then((res) => {
            const { fileName, filePath } = res.data
            console.log(fileName, filePath)
            setUploadedFile2({ fileName, filePath })
         })
         .catch(err => {
            console.log(err)
         })

   }


   const handleUpload3 = (e) => {

      const formData = new FormData()
      console.log(e.target.files[0])
      formData.append('file', e.target.files[0] ) ; 
    
      axios.post(`${apiRoot}/post`, formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         },
         onUploadProgress: (progressEvent) => { 
            setUploadProgress3(parseInt(Math.round((progressEvent.loaded) * 100 / progressEvent.total))) 
         }
      })
         .then((res) => {
            const { fileName, filePath } = res.data
            console.log(fileName, filePath)
            setUploadedFile3({ fileName, filePath })
         })
         .catch(err => {
            console.log(err)
         })

   }

   const handleUpload4 = (e) => {

      const formData = new FormData()
      console.log(e.target.files[0])
      formData.append('file', e.target.files[0] ) ; 
    
      axios.post(`${apiRoot}/post`, formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         },
         onUploadProgress: (progressEvent) => { 
            setUploadProgress4(parseInt(Math.round((progressEvent.loaded) * 100 / progressEvent.total))) 
         }
      })
         .then((res) => {
            const { fileName, filePath } = res.data
            console.log(fileName, filePath)
            setUploadedFile4({ fileName, filePath })
         })
         .catch(err => {
            console.log(err)
         })

   }

   const handleSubmit = (e) => {
      e.preventDefault()
      function slicePath(string) {
         const index = string.lastIndexOf('.')
         return string.slice(index + 1, string.length)

      }

      if (!uploadedFile && !questionText) {
         return swal('Error', 'Please type the question or upload an image of the question', 'error')
      }
      else {
         if (uploadedFile && slicePath(uploadedFile.filePath) !== "jpg" && slicePath(uploadedFile.filePath) !== "png") {
            return swal('Error', 'Unsuported file format for question image file', 'error')
         }
      }



      if (!uploadedFile1 && !optionA) {
         return swal('Error', 'Please type option A or upload an image of option A', 'error')
      }
      else {
         if (uploadedFile1 && slicePath(uploadedFile1.filePath) !== "jpg" && slicePath(uploadedFile1.filePath) !== "png") {
            return swal('Error', 'Unsuported file format for option A image file', 'error')
         }
      }


      if (!uploadedFile2 && !optionB) {
         return swal('Error', 'Please type option B or upload an image of option B', 'error')
      }
      else {
         if (uploadedFile2 && slicePath(uploadedFile2.filePath) !== "jpg" && slicePath(uploadedFile2.filePath) !== "png") {
            return swal('Error', 'Unsuported file format for option B image file', 'error')
         }
      }


      if (!uploadedFile3 && !optionC) {
         return swal('Error', 'Please type option C  or upload an image of option C', 'error')
      }
      else {
         if (uploadedFile3 && slicePath(uploadedFile3.filePath) !== "jpg" && slicePath(uploadedFile3.filePath) !== "png") {
            return swal('Error', 'Unsuported file format for option C image file', 'error')
         }
      }


      if (!uploadedFile4 && !optionD) {
         return swal('Error', 'Please type option D  or upload an image of option D', 'error')
      }
      else {
         if (uploadedFile4 && slicePath(uploadedFile4.filePath) !== "jpg" && slicePath(uploadedFile4.filePath) !== "png") {
            return swal('Error', 'Unsuported file format for option D image file', 'error')
         }
      }

      if (!correctAnswer) {
         return swal('Error', 'Please select the correct option for this question', 'error')
      }

      axios.post(apiRoot + '/add', {
         question: questionText || uploadedFile.filePath,
         optionA: optionA || uploadedFile1.filePath,
         optionB: optionB || uploadedFile2.filePath,
         optionC: optionC || uploadedFile3.filePath,
         optionD: optionD || uploadedFile4.filePath,
         correctAnswer: correctAnswer,
         course: props.course
      }).then(res => {
         setUploadedFile('')
         setUploadedFile1('')
         setUploadedFile2('')
         setUploadedFile3('')
         setUploadedFile4('')
         setQuestion('')
         setOptionA('')
         setOptionB('')
         setOptionC('')
         setOptionD('')
         window.scrollTo(0, 0)

         swal(res.data.message, 'success', 'success')
      })
   }








   return (
      <div className="container-fluid" style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 50, backgroundColor: 'white' }}>
         <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: 30 }}>
            <div style={{ color: 'white', padding: 14, fontWeight: 'bold' }} className="bg-primary mb-4">
               COURSE: {course}
            </div>

            <div class="form-row">
               <div class="form-group col-md-6">
                  {
                     uploadedFile &&
                     <div>
                        <a href={uploadedFile ? uploadedFile.filePath : ''} target='_blank'>Check image
                           <img src={uploadedFile.filePath} style={{ width: 40, height: 40, marginLeft: 14 }} />
                        </a>
                     </div>
                  }
                  <label for="inputPassword4">{uploadedFile ? "Success, question image uploaded " : 'Choose image file for question'}</label>
                  <div class="custom-file">
                     <label class="custom-file-label" for="customFile">{uploadedFile ? uploadedFile.fileName : 'Choose image'}</label>
                     <input type="file" class="custom-file-input" id="customFile" onChange={handleUpload} />

                     <div className="progress mt-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadProgress}%`, backgroundColor: 'green' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{uploadProgress}%</div>
                     </div>

                  </div>
               </div>

               <div class="form-group col-md-6">
                  <label for="inputPassword4"> <span className="mr-4" style={{ color: 'rgba(0,0,0,1)', fontWeight: 'bold' }}>OR</span>Type question as text</label>
                  <input type="text" class="form-control" value={questionText} onChange={(e) => setQuestion(e.target.value)} id="inputPassword4" />
               </div>
            </div>
            <div class="form-row">
               <div class="form-group col-md-6">
                  {
                     uploadedFile1 &&
                     <div>
                        <a href={uploadedFile1 ? uploadedFile1.filePath : ''} target='_blank'>Check image
                           <img src={uploadedFile1.filePath} style={{ width: 40, height: 40, marginLeft: 14 }} />
                        </a>
                     </div>
                  }
                  <label for="inputPassword4">{uploadedFile1 ? "Success, option A image uploaded " : 'Choose image file for option A'}</label>
                  <div class="custom-file">
                     <label class="custom-file-label" for="customFile">{uploadedFile1 ? uploadedFile1.fileName : 'Choose image'}</label>
                     <input type="file" class="custom-file-input" id="customFile" onChange={handleUpload1} />


                     <div className="progress mt-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadProgress1}%`, backgroundColor: 'green' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{uploadProgress1}%</div>
                     </div>
                  </div>
               </div>

               <div class="form-group col-md-6">
                  <label for="inputPassword4"> <span className="mr-4" style={{ color: 'rgba(0,0,0,1)', fontWeight: 'bold' }}>OR</span>Type option A as text</label>
                  <input type="text" class="form-control" value={optionA} onChange={(e) => setOptionA(e.target.value)} id="inputPassword4" />
               </div>
            </div>

            <div class="form-row">
               <div class="form-group col-md-6">
                  {
                     uploadedFile2 &&
                     <div>
                        <a href={uploadedFile2 ? uploadedFile2.filePath : ''} target='_blank'>Check image
                           <img src={uploadedFile2.filePath} style={{ width: 40, height: 40, marginLeft: 14 }} />
                        </a>
                     </div>
                  }
                  <label for="inputPassword4">{uploadedFile2 ? "Success, option B image uploaded " : 'Choose image file for option B'}</label>
                  <div class="custom-file">
                     <label class="custom-file-label" for="customFile">{uploadedFile2 ? uploadedFile2.fileName : 'Choose image'}</label>
                     <input type="file" class="custom-file-input" id="customFile" onChange={handleUpload2} />
                     <div className="progress mt-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadProgress2}%`, backgroundColor: 'green' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{uploadProgress2}%</div>
                     </div>
                  </div>
               </div>

               <div class="form-group col-md-6">
                  <label for="inputPassword4"> <span className="mr-4" style={{ color: 'rgba(0,0,0,1)', fontWeight: 'bold' }}>OR</span>Type option B as text</label>
                  <input type="text" class="form-control" value={optionB} onChange={(e) => setOptionB(e.target.value)} id="inputPassword4" />
               </div>
            </div>

            <div class="form-row">
               <div class="form-group col-md-6">
                  {
                     uploadedFile3 &&
                     <div>
                        <a href={uploadedFile3 ? uploadedFile3.filePath : ''} target='_blank'>Check image
                           <img src={uploadedFile3.filePath} style={{ width: 40, height: 40, marginLeft: 14 }} />
                        </a>
                     </div>
                  }
                  <label for="inputPassword4">{uploadedFile3 ? "Success, option C image uploaded " : 'Choose image file for option C'}</label>
                  <div class="custom-file">
                     <label class="custom-file-label" for="customFile">{uploadedFile3 ? uploadedFile3.fileName : 'Choose image'}</label>
                     <input type="file" class="custom-file-input" id="customFile" onChange={handleUpload3} />

                     <div className="progress mt-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadProgress3}%`, backgroundColor: 'green' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{uploadProgress3}%`</div>
                     </div>
                  </div>
               </div>

               <div class="form-group col-md-6">
                  <label for="inputPassword4"> <span className="mr-4" style={{ color: 'rgba(0,0,0,1)', fontWeight: 'bold' }}>OR</span>Type option c as text</label>
                  <input type="text" class="form-control" value={optionC} onChange={(e) => setOptionC(e.target.value)} id="inputPassword4" />
               </div>
            </div>
            <div class="form-row">
               <div class="form-group col-md-6">
                  {
                     uploadedFile4 &&
                     <div>
                        <a href={uploadedFile4 ? uploadedFile4.filePath : ''} target='_blank'>Check image
                           <img src={uploadedFile4.filePath} style={{ width: 40, height: 40, marginLeft: 14 }} />
                        </a>
                     </div>
                  }
                  <label for="inputPassword4">{uploadedFile4 ? "Success, option D image uploaded " : 'Choose image file for option D'}</label>
                  <div class="custom-file">
                     <label class="custom-file-label" for="customFile">{uploadedFile4 ? uploadedFile4.fileName : 'Choose image'}</label>
                     <input type="file" class="custom-file-input" id="customFile" onChange={handleUpload4} />
                     <div className="progress mt-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadProgress4}%`, backgroundColor: 'green' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{uploadProgress4}%</div>
                     </div>
                  </div>
               </div>

               <div class="form-group col-md-6">
                  <label for="inputPassword4"> <span className="mr-4" style={{ color: 'rgba(0,0,0,1)', fontWeight: 'bold' }}>OR</span>Type option D as text</label>
                  <input type="text" class="form-control" value={optionD} onChange={(e) => setOptionD(e.target.value)} id="inputPassword4" />
               </div>
            </div>


            <div classNAme="form-group col-md-12">
               <label for="inputPassword4"> Select correct option</label>
               <select className="custom-select" onChange={(e) => setCorrectAnswer(e.target.value)}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
               </select>
            </div>


            <button type="submit" className="btn btn-primary my-4">Add question</button>
         </form>
      </div>
   )
}

export default QuestionUpload