import React from 'react'

function Navi() {
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/resume">Resume</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navi