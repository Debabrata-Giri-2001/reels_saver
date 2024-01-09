import React from 'react'

const DonloadPage = (props) => {
  const {state} = props;
console.log("GET DATA",state);
  return (
    <div 
    className='bg-[url("https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg")]  w-full h-screen bg-cover bg-center'
    >
      <h1>Donload Page</h1>
    </div>
  )
}

export default DonloadPage
