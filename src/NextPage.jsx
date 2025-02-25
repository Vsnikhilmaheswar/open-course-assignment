import React from 'react'
import { Helmet } from "react-helmet-async";
function NextPage() {
  return (
    <>   
     <Helmet>
            <title>Next Page- React Helmet</title>
            <meta name="description" content="This is a sample page demonstrating React Helmet." />
            
          </Helmet>
     <div>NextPage</div></>

  )
}

export default NextPage