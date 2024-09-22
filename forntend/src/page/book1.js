import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book1(){
    const signout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location ='/sign-in'
      }
      const addMyshelf = (evt) => {
        evt.preventDefault();
        //const data = new FormData(evt.currentTarget);
        window.location = "/myshelf"
      }

    return(
        <div class="container text-center">
        <Navbar class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
          <Navbar.Brand href="/home">
            <Image src="https://e7.pngegg.com/pngimages/342/861/png-clipart-book-book.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top"></Image>
            Hongsamood
          </Navbar.Brand>
          <div className='collapse navbar-collapse'>
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
              <a class="nav-link" href="/myshelf">My Shelf</a>
              <button class="btn btn-outline-success" variant="contained" onClick={signout}>Logout</button>
            </div>
          </div>
        </Navbar>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">        
                  <h1 class="fw-light">ตัวเลือกการใช้บริการ</h1>
                  <hr/>           
              </div>
            </div>
        
            <div class="col-lg-6 col-md-8 mx-auto"> 
              <div class="container text-center">
                <div class ="g-3"></div>
                    <Card style={{width: '60rm'}}>
                      <Card.Body>
                      <Row>
                        <Col>
                          <Card style={{width: '60rm'}}>
                             <Card.Img variant="top" src= 'https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-cartoon-hand-drawn-logistics-logo-png-image_4235227.png' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> จัดส่งของ </Card.Title>
                            <Card.Text> บริการจัดส่งของ โดยรับฝากของ </Card.Text>
                            <hr/>
                            <Card.Link>
                      
                              <a class="btn btn-primary" href="/book1" role="button">ใช้บริการ</a>
                            </Card.Link>
                        </Col>
                        
                      </Row>
                      </Card.Body>
                      
                    </Card>

                    <Card style={{width: '60rm'}}>
                      <Card.Body>
                      <Row>
                        <Col>
                          <Card style={{width: '60rm'}}>
                             <Card.Img variant="top" src= 'https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> ปลดล็อคตู้ </Card.Title>
                            <Card.Text> บริการปลดล็อคตู้ โดย key ที่ได้หลังจากการจอง </Card.Text>
                            <hr/>
                            <Card.Link>
                            <a class="btn btn-primary" href="/book1" role="button">ใช้บริการ</a>
                            </Card.Link>
                        </Col>
                        
                      </Row>
                      </Card.Body>
                      
                    </Card>
  
                    <Card style={{width: '60rm'}}>
                      <Card.Body>
                      <Row>
                        <Col>
                          <Card style={{width: '60rm'}}>
                             <Card.Img variant="top" src= 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-cartoon-tote-bag-png-image_4468040.jpg' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> จองตู้เก็บของ </Card.Title>
                            <Card.Text> บริการเช่า locker สำหรับฝากของ สามารถเลือกขนาดและเวลา </Card.Text>
                            <hr/>
                            <Card.Link>
                            <a class="btn btn-primary" href="/book1" role="button">ใช้บริการ</a>
                            </Card.Link>
                        </Col>
                        
                      </Row>
                      </Card.Body>
                    </Card>
  
  
      
              </div>
            </div>
        </section>
        </div>
    );
}
export default Book1;