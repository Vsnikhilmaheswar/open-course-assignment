import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
 <Helmet>
        <title>Home - React Helmet</title>
        <meta name="description" content="This is a sample page demonstrating React Helmet." />
      </Helmet>
      <h1>hello This Home Page</h1>
      <Link to={'/NextPage'} className='btn btn-warning mt-3'>Click here to next page   </Link>  
    </div>
  )
}

export default Home