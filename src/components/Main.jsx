import React from 'react'


function Main({heading, para, btn, pic }) {
  return (
    <div>
        <div class="card" style={{width: "50rem", margin: "50px auto"}}>
  <img src={pic} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title" style={{textAlign: "center"}}>{heading}</h5>
        <p className="card-text">{para}</p>
    <a href="/" className="btn btn-dark">{btn}</a>
  </div>
</div>
    </div>
  )
}

export default Main