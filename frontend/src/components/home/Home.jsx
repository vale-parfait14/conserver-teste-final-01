import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>
                Oragnize your  <br /> work and life , finally.
            </h1>
            <p>
                Become focuced ,Organied , and calm with  <br />
                todo the world's #1 task manager app.
            </p>
            <button  class="home-btn p-2" href>
                <a href="http://localhost:3000/todo " >make Todo</a>
            </button>
        </div>
    </div>
  )
}

export default Home