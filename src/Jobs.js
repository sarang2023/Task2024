import axios from "axios";
import { useState } from "react";

function Jobs()
{
  const [newbox,setNewbox]=useState(false)
  const [jobApplicationChecked, setJobApplicationChecked] = useState(false);
const[position,setPosition]=useState()
const [company,setCompany]=useState()
const[pipeline,setPipeline]=useState()
const[location,setLocation]=useState()
const [contract,setContract]=useState()
const[min,setMin]=useState()
const[max,setMax]=useState()
const[currency,setCurrency]=useState()
const [frequency,setFrequency]=useState()
const [skill,setSkill]=useState()
const[round1,setRound1]=useState()
const[round2,setRound2]=useState()
const[round3,setRound3]=useState()
const[final,setFinal]=useState()

  const handleSaveAndNext = (e) => {
    
    axios.post('http://127.0.0.1:2000/data',{
      position,company,pipeline,location,contract,min,max,currency,frequency
    })
    setJobApplicationChecked(true);


    e.preventDefault()
  }
  const openNewBox=()=>
  {
    setNewbox(true)
  }
  const jobapplication=()=>
  {
   axios.post('http://127.0.0.1:2000/application',{
    skill
   })
  }
  
  const submit=()=>
  {
    axios.post('http://127.0.0.1:2000/interview',{
      round1,round2,round3,final

    })
  }
 
    return(<>
<div class="container bg">
  <div class="row align-items-start">
    <div class="col bg1 rounded-2 m-1">
     
    <div class="d-flex flex-row ">
  <div class="p-2"><button type="button" class="btn btns fs">Your Organization
  <br/><b>Skill genic</b>
</button></div>
  <div class="p-2"><div class="input-group">
  <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div></div>
  <div class="p-2 ms-auto fs-5 d"><i class="bi bi-bell  m-1"></i><i class="bi bi-person-square"></i></div>
 
</div>
    </div>
    
   
  </div>




  <div className="container-fluid">


  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="">
      <div class="card-body">
        <h3 class="card-title">Active Jobs</h3>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="">
      
      <div class="d-flex flex-row mb-3 justify-content-end">
  <div class="p-2 border border-dark d-flex align-items-center rounded-2 m-1 bg1">
    <div class="form-check form-switch ">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label fw-bold" for="flexSwitchCheckDefault">Active</label>
</div>


</div>
 
  <div class="p-2"><button class="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Create Job</button>
</div>
</div>
    </div>
  </div>
</div>






{/* //modal one */}
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-5">
      <div class="modal-header">
        <h1 class="modal-title fs-1" id="exampleModalToggleLabel">Create a Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    

      <div class="container text-center bg rounded-5 ">
  <div class="row align-items-start">
    
  
    <div class="col">


    <button class="btn btn-light p-3 m-4 border border-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><i class="fa-solid fa-clipboard-list font text-primary"></i><h4 class="text-primary">Post Job with AI</h4></button>
    
    </div>
  </div>
</div>

      </div>
    
    </div>
  </div>
</div>


{/* modal2 */}

<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-1" id="exampleModalToggleLabel2">Create a Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="d-flex flex-row justify-content-center">
  <div class="p-2">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label fw-semibold" for="inlineCheckbox1">Job Application</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label fw-semibold" for="inlineCheckbox2">Job Description</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label fw-semibold" for="inlineCheckbox2">Interview Process</label>
</div>

</div>
  
</div>
<div class="container ">
  <div class="row align-items-start">
    <div class="col bg rounded-5">
    <div class="d-flex p-3 fs-5">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</div>
    </div>
    
   
  </div>



  <form class="row g-3 mt-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label fw-bold">Position Name</label>
    <input type="text" class="form-control" id="inputEmail4"placeholder="Software Engineer"onChange={(e)=>setPosition(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label fw-bold">Company Name</label>
    <select id="inputState" class="form-select"onChange={(e)=>setCompany(e.target.value)}>
      <option selected>Choose...</option>
      <option value="company1">Company1</option>
      <option value="company2">Company2</option>
      <option value="company3">Company3</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label fw-bold">Job Pipeline</label>
    <select id="inputState" class="form-select"onChange={(e)=>setPipeline(e.target.value)}>
      <option selected>Default job pipeline</option>
      <option value="pipeline1">Pipeline 1</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label fw-bold">Add Location</label>
    <select id="inputState" class="form-select"onChange={(e)=>setLocation(e.target.value)}>
      <option selected value="Indore">Indore</option>
      <option value="Bhopal">Bhopal</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label fw-bold">Contract Details</label>
    <select id="inputState" class="form-select"onChange={(e)=>setContract(e.target.value)}>
      <option selected value="Full-Time">Full-Time</option>
      <option value="Part-Time">Part-Time</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label fw-bold">Add Minimum Salary</label>
    <input type="text" class="form-control" id="inputEmail4"placeholder="10000"onChange={(e)=>setMin(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label fw-bold">Add Maximum Salary</label>
    <input type="text" class="form-control" id="inputEmail4"placeholder="15000"onChange={(e)=>setMax(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label fw-bold">Currency</label>
    <input type="text" class="form-control" id="inputEmail4"placeholder="US Dollar"onChange={(e)=>setCurrency(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label fw-bold">Select Frequency</label>
    <select id="inputState" class="form-select"onChange={(e)=>setFrequency(e.target.value)}>
      <option selected value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
  </div>
  
  
 
  
  
  
  
 
</form>
</div>
      </div>
      

      <div class="container text-center">
  
 
  <div class="row">
    <div class="col-md-6 offset-md-3 mb-3"><button class="btn btn-dark" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={handleSaveAndNext}>Save & Next</button></div>
  </div>
</div>
    </div>
  </div>
</div>


{/* modal 3 */}


<div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-1" id="exampleModalToggleLabel3">Create a Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="d-flex flex-row justify-content-center">
  <div class="p-2">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" checked={jobApplicationChecked}  />
  <label class="form-check-label fw-bold" for="inlineCheckbox1">Job Application</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label fw-bold" for="inlineCheckbox2">Job Description</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label fw-bold" for="inlineCheckbox2">Interview Process</label>
</div>

</div>
  
</div>
<div class="container ">
  <div class="row align-items-start">
    <div class="col bg rounded-5">
    <div class="d-flex p-3 fs-5">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</div>
    </div>
    
   
  </div>
  </div>
  <div class="d-flex flex-column mb-3">
  <div class="p-2 d-flex flex-row ">
  <div class="p-2"><p class="fs-6 fw-bold">Skill Required</p></div>
  <div class=""><button type="button" class="btn btn-primary color">Suggest with AI</button>
</div>
    
</div>
  <div class=""><input class="form-control form-control-lg bg2" type="text" placeholder="Software Engineer" aria-label=".form-control-lg example"onChange={(e)=>setSkill(e.target.value)}/>
</div>
 
</div>
<div class="d-flex flex-column">
  <div class="p-2 d-flex flex-row ">
  <div class="p-2"><p class="fs-6 fw-bold">Intern's Responsibilities</p></div>
  <div class=""><button type="button" class="btn btn-primary color">Edit with AI</button>
</div>
    
</div>
  
 
</div>

<div class="col bg2 rounded-1 pb-2">
    <div class="d-flex p-3 fs-6">Selected Intern's day-to-day responsibilities include.</div>
    <ul class="list-unstyled">
 
 
    <ol className="">
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ol>
  
</ul>
    </div>

      </div>

      <div class="row mt-5">
    <div class="d-flex justify-content-center mb-3"><button class="btn btn-dark" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal"onClick={jobapplication}>Save & Next</button></div>
  </div>
      
    </div>
  </div>
</div>


{/* modal4 */}

<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-1" id="exampleModalToggleLabel3">Create a Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="d-flex flex-row justify-content-center">
  <div class="p-2">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"checked={jobApplicationChecked}/>
  <label class="form-check-label fw-bold" for="inlineCheckbox1">Job Application</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"checked={jobApplicationChecked}/>
  <label class="form-check-label fw-bold" for="inlineCheckbox2">Job Description</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label fw-bold" for="inlineCheckbox2">Interview Process</label>
</div>

</div>
  
</div>
<div class="container ">
  <div class="row align-items-start">
    <div class="col bg rounded-5">
    <div class="d-flex p-3 fs-5">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</div>
    </div>
    
   
  </div>
  </div>
 
<div class="d-flex flex-row mb-3 justify-content-center">
  <div class="p-2">
  <div class="d-flex flex-column mb-3">
  <div class="p-2"><button type="button" class="btn border border-dark fs-6">Round 1</button></div>
  <div class="p-2"><button type="button" class="btn border border-dark fs-6">Round 2</button></div>
  <div class="p-2"><button type="button" class="btn border border-dark fs-6">Round 3</button></div>
  <div class="p-1"><button type="button" class="btn border border-dark fs-6">Final Round</button></div>
  <div class="p-1"><button type="button" class="btn border border-dark fs-6 btn-dark">Add Round</button>
</div>

</div>
  </div>
  <div class="p-2"><div class="d-flex flex-column mb-3">
  <div class="p-2"> 
  <select class="form-select form-select-lg mb-1 border border-primary fs-6 text-primary" aria-label="Large select example"onChange={(e)=>setRound1(e.target.value)}>
  <option selected value="Skill Assessment">Skill Assessment</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>
  <div class="">
    <select class="form-select form-select-lg mb-2 border border-primary fs-6 text-primary" aria-label="Large select example"onChange={(e)=>setRound2(e.target.value)}>
  <option selected value="Technical Interview">Technical Interview</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>
  <div class="">
    <select class="form-select form-select-lg mb-2 border border-primary fs-6 text-primary" aria-label="Large select example"onChange={(e)=>setRound3(e.target.value)}>
  <option selected value="AI Based Video">AI Based Video</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>
  <div class=""><select class="form-select form-select-lg mb-3 border border-primary fs-6 text-primary" aria-label="Large select example"onChange={(e)=>setFinal(e.target.value)}>
  <option selected value="Offline-Online Interview">Offline-Online Interview</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>
</div></div>
 
</div>



</div>
<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">
      <div class="d-flex flex-column mb-3">
  <div class="p-2 d-flex flex-row ">
  <div class=""><p class="fs-6 fw-bold">Kindly Check the Skills</p></div>
  
    
</div>
  <div class=""><input class="form-control form-control-lg bg2" type="text" placeholder="SEO & SEM" aria-label=".form-control-lg example"/>
</div>
 
</div>
      </div>
    </div>
    <div class="col-6">
      <div class="p-3"><div class="d-flex flex-column mb-3">
  <div class="p-2 d-flex flex-row ">
  <div class=""><p class="fs-6 fw-bold">Any Platform or Qualification</p></div>
  
    
</div>
  <div class=""><input class="form-control form-control-lg bg2" type="text" placeholder="Yes" aria-label=".form-control-lg example"/>
</div>
 
</div></div>
    </div>
    <div class="col-6">
      <div class="p-3">
        <div class="d-flex flex-column ">
  <div class="p-2 d-flex flex-row c">
  <div class="p-2"><p class="fs-6 fw-bold">Finalise Questioner</p></div>
  <div class=""><button type="button" class="btn btn-primary color">Edit with AI</button>
</div>
    
</div>
  
 
</div>

<div class="col bg2 rounded-1 pb-2 cc">
    <div class=" p-3 fs-6">Selected Intern's day-to-day responsibilities include.</div>
    <ul class="list-unstyled">
 
 
    <ol className="">
      <li></li>
      <li></li>
      <li></li>
    </ol>
  
</ul>
    </div>
    </div>
    </div>
    <div class="col-6">
      <div class="">
        <div class="p-3">
          <div class="d-flex flex-column">
  <div class="p-2 d-flex flex-row c">
  <div class="p-2"><p class="fs-6 fw-bold">Share Availability</p></div>
  <div class=""><button type="button" class="btn btn-primary color">Edit with AI</button>
</div>
    
</div>
  
 
</div>

<div class="col bg2 rounded-1 pb-2 cc">
    <div class=" p-3 fs-6">Selected Intern's day-to-day responsibilities include.</div>
    <ul class="list-unstyled">
 
 
    <ol className="">
      <li></li>
      <li></li>
      <li></li>
    </ol>
  
</ul>
    </div>
    </div></div>
    </div>
  </div>
</div>
      

      <div class="row mt-5">
    <div class="d-flex justify-content-center mb-3"><button class="btn btn-dark" data-bs-dismiss="modal"onClick={submit}>Submit</button></div>
  </div>
    </div>
  </div>
</div>

  </div>








<div className="cont">




<div class="row row-cols-1 row-cols-md-3 g-1">

  
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://shorturl.at/xDIOZ" class="img-fluid rounded-circle" alt="..."/></div>
  
  <div class="p-2 "><button type="button" class="btn btn-light"onClick={openNewBox}><i class="bi bi-three-dots-vertical"></i></button>

  </div>
 
</div>
{newbox &&(
  <div className="box shadow p-1 mb-5 bg-body-tertiary rounded">
 <h6>View Job</h6>
 <h6>Edit</h6>
 <h6>Application Manager</h6>
 <h6>Share & Promote</h6>
 <h6>New Hires</h6>
 <h6>close Job</h6>

</div>
)}
        <h6 class="card-title">Senior Product Designer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://www.pngall.com/wp-content/uploads/5/Python-PNG-Image.png" class="img-fluid rounded-circle"style={{"width":"30px"}} alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Python Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://banner2.cleanpng.com/20180805/iot/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-%C3%96mer-5b6766ab2d98b8.1809687115335031471868.jpg" class="img-fluid rounded-circle" style={{"width":"60px"}}alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Java Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
</div>







<div class="row row-cols-1 row-cols-md-3 g-1">
  
  

  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://shorturl.at/xDIOZ" class="img-fluid rounded-circle" alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Senior Product Designer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://www.pngall.com/wp-content/uploads/5/Python-PNG-Image.png" class="img-fluid rounded-circle"style={{"width":"30px"}} alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Python Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://shorturl.at/jsvL2" class="img-fluid rounded-circle" alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">React Js Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  
 
</div>
<div class="row row-cols-1 row-cols-md-3 g-1">
  
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://shorturl.at/xDIOZ" class="img-fluid rounded-circle" alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Senior Product Designer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>

  
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://www.pngall.com/wp-content/uploads/5/Python-PNG-Image.png" class="img-fluid rounded-circle"style={{"width":"30px"}} alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">Python Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
     
      <div class="card-body">
      <div class="d-flex mb-3">
  <div class="me-auto p-2"><img src="https://shorturl.at/jsvL2" class="img-fluid rounded-circle" alt="..."/></div>
  
  <div class="p-2"><button type="button" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></button></div>
</div>
        <h6 class="card-title">React Js Developer</h6>
        <p class="card-text"><i class="bi bi-geo-alt-fill"></i>Indore,Mp,India</p>
        <p class="card-text"><i class="bi bi-cash"></i>10,000-15,000</p>
        <p class="card-text"><i class="bi bi-briefcase-fill"></i>2 Years Experience</p>
        <div class="d-grid d-md-block">
  <button class="btn btn-primary btns1 m-1" type="button">14 Application</button>
  <button class="btn btn-primary btns1  bg-danger bg-gradient" type="button">12 In Process</button>
  <button class="btn btn-primary btns1 m-1 bg-success bg-gradient" type="button">16 Hired</button>
</div>
      </div>
    </div>
  </div>
  
 
</div>
</div>

</div>
    </>)
}
export default Jobs;