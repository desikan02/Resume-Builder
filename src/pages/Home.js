import React from 'react';
function Home() {
  const backgroundStyle = {
//backgroundImage: 'url("C:\\Users\\HARI\\proj\\Simple-User-Auth-Website-YouTube\\fr\\src\\images.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  };

  return (
    <div style={backgroundStyle}>
      <h2 className='text-3xl'>WELCOME TO RESUME CREATOR WEBSITE</h2>
     
    </div>
  );
}

export default Home;
