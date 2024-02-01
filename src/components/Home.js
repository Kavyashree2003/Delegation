import React from 'react'
import Button from 'react-bootstrap/Button';
import "../App.css";

function Home() {
  return (
    <>
    <div className='container home' style={{marginTop:"10vh"}}>
      <div className='content__left'>
      <h1 className='content__heading'>Manage Your Tasks with ease</h1>
      <h3 className='content__sub_head'>"Task Mastery Made Simple: Your Life, Your Tasks, Our App!"</h3>
      <br />
      <Button variant="primary"><a href="/register">Register</a></Button>
      </div>
      <div className="content__right">
        <img src="../images/home.png" alt="home-img" />
      </div>
    </div>
    <div className='container home' style={{marginTop:"10vh"}}>
    <div className='content__left'>
    <Button variant="primary"><a href="/managerpage">Manager Page</a></Button>
    </div>
    </div>
    </>
  )
}

export default Home;