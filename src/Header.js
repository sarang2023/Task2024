import { Link } from "react-router-dom";

function Header()
{
 
    return(<>
    <div className="col-sm-3 bg-dark">

    <div class="col ">
    <nav class="nav flex-column  h ">
      <div className="lists">





      <div class="d-flex flex-row mb-3 fs-2 ">
  <div class="p-2 "> <i class="bi bi-nut text-light"></i></div>
  <div class="p-2 fw-bold text-light">Logo</div>

</div>
     

<div className="scrollable_nav">

<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-house text-light"></i></div>
  <div class="p-2 fw-bold text-light">Home</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-message text-light"></i></div>
  <div class="p-2 fw-bold text-light">Chat</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-chart-line text-light"></i></div>
  <div class="p-2 fw-bold text-light">Activities</div>

</div>
</a>
<p class="text-uppercase mt-1 fs-5 fw-semibold text-secondary mx-4">recruitment</p>
  </li>
  <li class="nav-item">
    <Link to="jobs" class="nav-link active" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-briefcase text-light"></i></div>
  <div class="p-2 fw-bold text-light">Jobs</div>

</div></Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-sharp fa-solid fa-people-arrows text-light"></i></div>
  <div class="p-2 fw-bold text-light">Interviews</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-tag text-light"></i></div>
  <div class="p-2 fw-bold text-light">New Hires</div>

</div></a>
<p class="text-uppercase mt-1 fs-5 fw-semibold text-secondary mx-4">organization</p>

  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-building text-light"></i></div>
  <div class="p-2 fw-bold text-light">Company Profile</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-people-group text-light"></i></div>
  <div class="p-2 fw-bold text-light">Community</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-sharp fa-solid fa-people-group text-light"></i></div>
  <div class="p-2 fw-bold text-light">Team</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-business-time text-light"></i></div>
  <div class="p-2 fw-bold text-light">HR Tool Box</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-chart-simple text-light"></i></div>
  <div class="p-2 fw-bold text-light">Reports</div>

</div></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">
    <div class="d-flex flex-row fs-5 ">
  <div class="p-2 "> <i class="fa-solid fa-gear text-light"></i></div>
  <div class="p-2 fw-bold text-light">Settings</div>

</div></a>
  </li>
  

</ul>
</div>
      
  
  
        </div>
        
</nav>
    </div>








    
    </div>
    </>)
}
export default Header;