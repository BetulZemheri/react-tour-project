import './App.css';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import {GiCommercialAirplane } from "react-icons/gi";
import { FaUserAlt, FaPhoneAlt, FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
  <div id='turlar'> 
     <Nav className="navlar justify-content-center fixed-top" activeKey="/home">
      <h4 style={{color:"#345573", paddingTop:"13px",fontSize:"25px", marginRight:"350px", fontFamily:"Cursive"}}>Ya Evde Yoksan <GiCommercialAirplane style={{fontSize:"20px"}} /> </h4>
        <Nav.Item>
          <Nav.Link className='navlink' style={{color:"#345573", paddingTop:"13px",fontSize:"20px"}} href="#about">Hakkımızda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navlink' style={{color:"#345573", paddingTop:"13px",fontSize:"20px"}} href='#turlar'>Turlar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navlink' style={{color:"#345573", paddingTop:"13px",fontSize:"20px"}} href='#contact'>Iletişim</Nav.Link>
        </Nav.Item>
      </Nav>
      <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto2.jpg"
          alt="First slide"
          style={{height:"640px"}}
        />
        <Carousel.Caption>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto1.jpg"
          alt="Second slide"
          style={{height:"640px"}}
        />

        <Carousel.Caption>
        {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto3.jpg"
          alt="Third slide"
          style={{height:"640px"}}
        />

        <Carousel.Caption>
        {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto4.jpg"
          alt="Third slide"
          style={{height:"640px"}}
        />

        <Carousel.Caption>
        {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto5.jpg"
          alt="Third slide"
          style={{height:"640px"}}
        />

        <Carousel.Caption>
        {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/foto6.jpg"
          alt="Third slide"
          style={{height:"640px"}}
        />

        <Carousel.Caption>
        {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section id="about" className='container'>
              <h1 className="text-center display-6 p-2" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573"}}>Hakkımızda</h1>
              <div className="row justify-content-center align-item-center text-center g-3">
                  <div className="col-md-6">
                      <p style={{marginTop:"60px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Itaque maxime, dolore sit totam culpa iusto dolores ea aut? Ratione ipsam ipsum omnis sunt ab aspernatur voluptatem consequuntur?
                       Libero repellendus laborum animi adipisci mollitia aliquid nostrum quas velit modi exercitationem, facilis quia odio explicabo unde perferendis distinctio debitis tempora dignissimos eos, maiores, neque facere. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione ipsam ipsum omnis sunt ab aspernatur voluptatem consequuntur? </p>
                  </div>
                  <div className="col">
                      <img src="../img/foto7.jpg" width="70%" style={{marginTop:"30px", borderRadius:"40px"}}/>
                  </div>
              </div>
    </section>




    <div>
       <div>
            <h1 className="text-center" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573", marginBottom:"15px"}}>Yurtdışı Gezileri</h1>
          </div>
          <p className='text-center' style={{marginBottom:"40px", fontWeight:"600"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque maxime, dolore sit totam culpa iusto dolores ea aut? <br /> Ratione ipsam ipsum omnis sunt ab aspernatu</p>


      <section className='section'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* <div className="text-center mb-5">
                <h3 className="mb-3" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573"}}>Popular Tour Places
                </h3>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4", marginBottom:"30px"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur1.jpg" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}} >New York</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur2.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Filipinler</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur3.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Bali</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur4.jpg" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>İtalya</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur5.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Paris</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur6.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Venedik</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur7.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Hindistan</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/tur8.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Kuzey Işıkları</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <h1 className="text-center display-6 p-2" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573", marginBottom:"15px"}}>Yurtiçi Gezileri</h1>
      <p className='text-center' style={{marginBottom:"40px", fontWeight:"600"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque maxime, dolore sit totam culpa iusto dolores ea aut? <br /> Ratione ipsam ipsum omnis sunt ab aspernatu</p>



      <section className='section'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* <div className="text-center mb-5">
                <h3 className="mb-3" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573"}}>Popular Tour Places
                </h3>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4", marginBottom:"30px"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/ytur1.jpg" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}} >GAP Gezisi</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/ytur2.jpg" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Pamukkale</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/ytur3.jpg" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>İstanbul</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#F2EDE4"}}>
                <div className="card-body text-center p-4">
                <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/ytur4.png" alt="" style={{width:"260px", height:"190px", borderRadius:"20px"}} />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none" style={{fontSize:"30px"}}>Kapadokya</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className='detay' style={{marginTop:"15px", height:"35px", width:"60px", borderRadius:"10px"}}>Detay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

         











      <div className='text-center' id='contact'>
        <h1 className="text-center display-6 p-2" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:"#345573",marginBottom:"30px"}}>İletişim</h1>
        <h5 className='text-center' style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginBottom:"30px"}}>En yeni tur programları hakkında bilgi almak ister misiniz? <br /> Formumuzu doldurun, biz sizi arayalım…</h5>
        <div>
          <input className='contact' type="text" style={{width:"370px", height:"45px", marginTop:"10px"}} required placeholder='Adınız..'/>
        </div>
        <div>
          <input className='contact' type="phone" style={{width:"370px", height:"45px", marginTop:"25px"}} required placeholder='Telefon Numaranız..'/>
        </div>
        <div>
          <input className='contact' type="phone" style={{width:"370px", height:"45px", marginTop:"25px"}} required placeholder='Mail Adresiniz..'/>
        </div>
        <div id="submit">
          <input type="submit" value="Gönder" id="button"/>
        </div>
      </div>






      {/* <footer className='footer'>
        <div>
            <h4 style={{color:"#345573",fontSize:"30px",paddingLeft:"200px",fontFamily:"Cursive", paddingTop:"60px"}}>Ya Evde Yoksan <GiCommercialAirplane style={{fontSize:"20px"}} /> </h4>
        </div>
        <br /> <br />
        <p className='text-center' style={{fontSize:"0.9rem"}}>FS Team Copyright &copy; 2020</p>
      </footer> */}
    
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60">
              <div className="row">
                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2" id='logo'>
                  <h4 style={{fontFamily:"Cursive", color:"#345573"}}>Ya Evde Yoksan <GiCommercialAirplane/> </h4>
                  <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                    <li>info@yaevdeyoksan.com</li>
                    <li className="list-inline-item">
                      <a style={{color:"#345573", fontSize:"25px", cursor:"pointer"}}> <FaFacebookSquare/> </a>
                    </li>
                    <li className="list-inline-item">
                    <a style={{color:"#345573", fontSize:"25px", cursor:"pointer"}}> <FaInstagram/> </a>
                    </li>
                    <li className="list-inline-item">
                    <a style={{color:"#345573", fontSize:"25px", cursor:"pointer"}}> <FaTwitter/> </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0" id='sirket'>
                  <h5 className="footer-head" style={{color:"#345573"}}>Şirket</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <a className="text-decoration-none" style={{color:"black", cursor:"pointer"}}>~Hakkımızda</a>
                    </li>
                    <li>
                    <a className="text-decoration-none" style={{color:"black", cursor:"pointer"}}>~İletişim</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head" style={{color:"#345573"}}>Adres</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li><a className='text-decoration-none' style={{color:"black", cursor:"pointer"}}> <MdLocationOn/> Lorem caddesi ipsum sokak No: 23/8 <br /> Kızılay/ ANKARA </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
       <div>
          <p className="mb-0 text-center">FS Team Copyright &copy; 2020</p>
       </div>
    </footer>
        
    
        
  </div>
  );
}

export default App;
