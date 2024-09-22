import React, {useEffect}  from 'react';
import {Row,Navbar,Image} from 'react-bootstrap';
import './styles.css';
import Content from './content'
//const books = require('./books.js');

/*const bookallElements = books.map( (books, index) => {
  return <Content key= {index} book = {books}/>;

})*/

export default function Album() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch("http://localhost:5000/authen", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token
            },
        })
            .then((response) => response.json())
            .then((data) => {
            if(data.status === 'allow'){
                //alert('Authon success')
            }else{
                alert('Authon failed')
                localStorage.removeItem('token')
                window.location ='/sign-in'
            }
        })
        .catch((error) => {
        console.error("Error:", error);
        });
    }, [])
    
  const signout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token')
    window.location ='/sign-in'
  }

  // const bookElements = books.map((book, index) => {
  //     return <Content key={index} book = {books} />;
  // })

  return (
    <div>
      <div class="container text-center">
      <Navbar class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <Navbar.Brand href="/home">
          <Image src="https://w7.pngwing.com/pngs/193/270/png-transparent-changing-room-locker-computer-icons-lockers-angle-furniture-text-thumbnail.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top"></Image>
          Smart locker
        </Navbar.Brand>
        <div className='collapse navbar-collapse'>
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
            <a class="nav-link" href="/myshelf">My Status</a>
            <button class="btn btn-outline-success" variant="contained"onClick={signout}>Logout</button>
            
          </div>
        </div>
      </Navbar>
      <div class="head">
         <div class="row"  id="home">
           <div class="col">
              <h1 >Smart locker </h1>
              <h1 >บริการรับฝากสิ่งของและจัดส่ง</h1><br>
              </br>
              
              <a class="btn btn-primary" href="/book1" role="button">ใช้บริการ</a>
             <h1 >โครงงานภาควิศวกรรมคอมพิวเตอร์ </h1>
             
            </div>
         </div>
      </div>
      
      <div class="row"  >
                <div class="card">
                    
                    <div class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p></p>
                      </blockquote>
                    </div>
                </div>
              </div>
              </div> 
              <div class="container text-center" id="bowrow">         
                  
               
                                        
              </div>
  <section class="blog">
  <div class="container">
    <div class="blog-title">
      
    </div>
      <div class="blog-con">
        <div class="blog-item"> 
          <img src ="https://www.pngfind.com/pngs/m/90-902164_safety-icon-png-icon-for-protect-transparent-png.png" alt=""></img>
          <p>ความปลอดภัยสูง</p>
        </div>

        <div class="blog-item"> 
          <img src ="https://e7.pngegg.com/pngimages/106/718/png-clipart-pin-pin.png" alt=""></img>
          <p>สามารถจัดส่งสิ่งของ</p>
        </div>

        <div class="blog-item"> 
          <img src ="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-lock-icon-image_1130364.jpg" alt=""></img>
          <p>ความปลอดภัยสูง</p>
        </div>

        <div class="blog-item"> 
          <img src ="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-lock-icon-image_1130364.jpg" alt=""></img>
          <p>ความปลอดภัยสูง</p>
        </div>

        
      
      </div>
  
  </div>
</section>
    </div>
);
}
// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
