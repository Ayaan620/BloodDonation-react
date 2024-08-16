import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the Blood Donation Camp</h1>
        <p className="lead">Your donation can save lives. Join us and make a difference!</p>
        <hr className="my-4" />
        <p>Register today to be a part of this life-saving event.</p>
        <a className="btn btn-primary btn-lg" href="/registration" role="button">Register Now</a>
      </div>
    </div>
  );
}

export default Home;