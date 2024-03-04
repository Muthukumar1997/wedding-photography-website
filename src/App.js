
import React,{ useEffect,useState } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './logo.jpeg';
import babyshower from './babyshower.jpeg';
import birthday from './birthday.jpeg';
import hands from './hands.jpeg';
import wedding from './wedding.jpeg';
import overwhelming from './overwhelming.jpeg';
import './App.css';

function App() {
  useEffect(() => {
    // Start the carousel sliding
    const intervalId = setInterval(() => {
      document.querySelector('.carousel-control-next').click();
    }, 3000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [])
  
  const [selectedPage, setSelectedPage] = useState(null);

  // Function to handle page selection
  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };
  
  return (
    <div className="container-fluid  ">
      
      <div className='row   sticky-top  bg'>
      <div className='col' >
      <nav className=" navbar  navbar-expand-xl mx-0 px-0  ">
        <div className="container-fluid">
        <a className="navbar-brand logo" href="#">

      <img src={logo} alt="" width="75" height="75"/></a>
      <h5 className='fontone mt-3 ms-2'><b>Studio M4</b>  <div>
      <small className='text-dark me-5 fs d-flex justify-content-center'>"YOUR MEMORIES OUR PASSION"</small></div></h5>
      
    
    
  
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navigation" >
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navright navbar-collapse" id="navigation">
                <ul className="navbar-nav m-auto text-center">
                <li className="nav-item">
              <a className={`hover text nav-link ${selectedPage === 'home' ? 'selected' : ''}`} href="#home" onClick={() => handlePageSelect('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`hover text nav-link ${selectedPage === 'services' ? 'selected' : ''}`} href="#services" onClick={() => handlePageSelect('services')}>Services</a>
            </li>
            <li className="nav-item">
              <a className={`hover text nav-link ${selectedPage === 'portfolio' ? 'selected' : ''}`} href="#portfolio" onClick={() => handlePageSelect('portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={`hover text nav-link ${selectedPage === 'about' ? 'selected' : ''}`} href="#about" onClick={() => handlePageSelect('about')}>About</a>
            </li>
                    
            <li className="nav-item">
              <a className={`hover text nav-link ${selectedPage === 'contact' ? 'selected' : ''}`} href="#contact" onClick={() => handlePageSelect('contact')}>Contact</a>
            </li>
                </ul>
                <div className=" ms-3 d-flex">
                  <a  href="https://www.instagram.com/_studio_m4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <img className='mt-1 me-1 insta' src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-ggh8x3cn.png" alt="insta"></img></a>
          <a href="https://www.facebook.com/profile.php?id=100091212650109">
          <img className='mt-1 ms-1 insta' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="insta"></img>
          </a>
     </div>
            </div>
        </div>
    </nav>

      </div>
      </div>
      <div className='container  mt-4' id="home">
     
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block courouselwidth  courouselheight rounded-4"
          src={wedding}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Wedding Moments</h1>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block courouselwidth  courouselheight rounded-4"
          src={overwhelming}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>overwhelming Happiness</h1>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block courouselwidth courouselheight rounded-4 "
          src={hands}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Long hands together</h1>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block courouselwidth courouselheight rounded-4  "
          src={babyshower}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Babyshower</h1>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block courouselwidth courouselheight rounded-4 "
          src={birthday}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Birthday celebration</h1>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
   </div>
  
   
  <div className=" container  mt-5 d-flex  justify-content-center" id="services" ><h1 className='fonttwo text-dark'>Services</h1></div>
  
  <div className='container'>
  <div className=' row '>
    <div className='col-3'></div>
    <div className='col-5 d-flex mt-5 justify-content-center cardservice'>
   
  <ul className="two-column-list   ms-3 text-dark">
    <li>Wedding & Event Photgraphy</li>
  <li>Pre & Post Wedding Shoot</li>
  <li>Cinematic Films & Candid Photgraphy</li>
  </ul>
  <ul className="two-column-list  ms-5 text-dark ">
   
<li>Modeling Portfolio</li>
  <li>Maternity & Baby Shoots</li>
  <li>Dronography</li>
</ul>
</div>
<div className='col-4'></div>
</div>
   </div>
  {/* <ul className="two-column-list ms-5 text-dark">
    <li>Wedding & Event Photgraphy</li>
  <li>Pre & Post Wedding Shoot</li>
  <li>Cinematic Films & Candid Photgraphy</li>
  </ul>
  <ul className="two-column-list ms-3 text-dark ">
   
<li>Modeling Portfolio</li>
  <li>Maternity & Baby Shoots</li>
  <li>Dronography</li>
</ul> */}



  <div className="container d-flex justify-content-center" id="portfolio" ><h1 className='fonttwo text-dark'>Portfolio</h1></div>
  
  <div className='row  mt-5 mt-2'>
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className="  col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />


  </div>
  <div className='row mt-2'>
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className=" col-12  col-sm-4 rounded-4" src={birthday} alt="Second slide" />

  </div>
  <div className='row mt-2'>
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className=" col-12 col-sm-4 rounded-4" src={birthday} alt="Second slide" />
  <img className="col-12 col-sm-4   rounded-4" src={birthday} alt="Second slide" />

  </div>
  
  <div className="container d-flex justify-content-center " id="about"><h1 className='fonttwo text-dark'>About Us</h1></div> 
  <div className='container cardabout'>

   <p className='text-dark paragraph mt-2'> 
   "We have been immersed in the field of photography for many years, accumulating extensive experience in handling various types of events. At 'Studio M4' Photography, every moment is captured with passion and creativity. Whether it's the joyous celebration of a wedding or the excitement of a birthday party, we specialize in a range of services to meet your every photography need.
   </p>
   <br></br>
   
   
   <p className='text-dark pt-0 paragraph '> 
   From breathtaking wedding and event photography to stunning pre and post-wedding shoots, cinematic films, and candid photography, we are here to make your special moments last a lifetime. With expertise in dronography, modeling portfolios, and maternity and baby shoots, we ensure that every milestone is beautifully preserved. Let us turn your memories into timeless treasures. Explore our portfolio and discover the magic we can create together."
   </p>
   
  
   </div>

   <div className="container d-flex justify-content-center " id="contact"><h1 className='fonttwo text-dark'>Contact Us</h1></div> 
   <div className='container cardcontact'>
   <div className='d-flex mt-2   justify-content-center'>
   <img src={logo}  className='mt-3' alt="" width="250" height="250"/>  
   </div>
   <h3 className='text-dark fontone d-flex justify-content-center'>Studio M4</h3>
   <h6 className='text-dark fs1  d-flex justify-content-center'>"YOUR MEMORIES OUR PASSION"</h6>
   
    <p className='text-dark mt-5 d-flex justify-content-center'>Follow Us</p>
    <div className='text-dark d-flex justify-content-center'>
          
      <a  className='me-1' href="https://www.instagram.com/_studio_m4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <img className='mt-1 me-1 insta' src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-ggh8x3cn.png" alt="insta"></img></a>
          <a className=' ms-1' href="https://www.facebook.com/profile.php?id=100091212650109">
          <img className='mt-1 ms-1 insta' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="insta"></img>
          </a>
      </div>
      <div>
      <p className='mt-3 text-dark d-flex justify-content-center' >+91 98940 16164 | studiom4.3130@gmail.com</p>
      </div>
      <div>
      <p className='mt-3 text-dark d-flex justify-content-center' >No.07, Pappammal Kovil Street, Muthialpet, Puducherry-605 003.</p>
      </div>
      <div className='d-flex justify-content-center'>
      <a className='mt-3 text-dark bg-warning map text-center' href='https://www.google.com/maps/search/No:+07,+Pappammal+Koil+Street,+Muthialpet,+Puducherry+-+605+003/@12.0016095,79.7868077,11.91z?hl=en&entry=ttu' >Visit Us</a>
      </div>
      </div>
      <div className='row mt-5 '>
      <div className='col p-0' >
      <div className=' footer d-flex mt-3 justify-content-center align-items-center'>
        <p className='mt-3 text-light '>
      ©Copyright. All Right Reserved by 'Studio M4'
      </p>

      </div>
      </div>
      </div>

     
  

  
 
      
    
    </div>
  );
}

export default App;
