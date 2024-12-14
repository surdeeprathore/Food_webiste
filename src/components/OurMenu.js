import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import  ".././Styles/HomeStyle.css";

import Layout from './Layout';

function OurMenu() {
  return (
    <>
<Layout>
    <section className= "OurMenu">
        <Container>
        <Row>
                <Col>
              
                   <div className="card1" id = "ourmenu"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkvAjN87wln-bObRDL_PxZvkBZfyN8ZsBYA&s" alt="" />
            
                   <h6>Ultimate con <i class="bi bi-heart"></i></h6>
                   <p>House patty,cheddar cheese,bacon onion,mustard</p>
                   <h6>$99.32</h6>
                   <i class="bi bi-bag">Add to card</i>
                   </div>
                </Col>
                <Col>
                   <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4w87q8zEolQp4KdSofx4GrtrjSBlLdKjzQ&s" alt="" />


                   <h6>Mystic Medley <i class="bi bi-heart"></i></h6>
                   <p> Spicy jalapeño poppers with a cheesy twis</p>
                   <h6>$79.32</h6>
                   <i class="bi bi-bag">Add to card</i>
                   </div>
                </Col>
                <Col>
                   <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOoI4wD4C4RVGD21GUZsILB3Xnv5_zd_93w&s" alt="" />
                   <h6>Smoky Sliders<i class="bi bi-heart"></i></h6>
                   <p>Mini sliders with a smoky BBQ glaze and pickled onions.</p>
                   <h6>$59.20</h6>
                   <i class="bi bi-bag">Add to card</i>
                   </div>
                </Col>
                <Col>
                   <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RuebhZ-aFnFLoC1FvexTJaZ6n1BXeaP2Bw&s" alt="" />
                   <h6>Gourmet <i class="bi bi-heart"></i></h6>
                   <p>Mushrooms stuffed with a blend of cheeses, herbs, and nuts.</p>
                   <h6>$98.25</h6>
                   <i class="bi bi-bag">Add to card</i>
                  
                   </div>
                </Col>
            </Row>
            
            <Row>
            <Col>
              
              <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLhkteKemQxHjaA9pO3ykSgiINKCmIQnkkQ&s" alt="" />
              
              <h6>Banh Tacos<i class="bi bi-heart"></i></h6>
              <p> Mexican tacos with pickled vegetables and spicy mayo</p>
              <h6>$91.2</h6>
              <i class="bi bi-bag">Add to card</i>
              </div>
           </Col>
           <Col>
              <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h81YrxSMon_NzvShVFiSXl3zo0P_rpj4g&s" alt="" />
              <h6>Maple Glazed<i class="bi bi-heart"></i></h6>
              <p>Roasted Brussels sprouts with a maple glaze and crispy bacon</p>
              <h6>$100.2</h6>
              <i class="bi bi-bag">Add to card</i>
              </div>
           </Col>
           <Col>
              <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVjxFUrcRF0DTUh7Vzt2Qdc82jaWMgTpQgA&s" alt="" />
              <h6>Pihio-Crusted<i class="bi bi-heart"></i></h6>
              <p>Rack of lamb with a pistachio crust, served with a rosemary mint sauce</p>
              <h6>$49.32</h6>
              <i class="bi bi-bag">Add to card</i>
              </div>
           </Col>
           <Col>
              <div className="card1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLWqJSaQhkyDDgX_PzCmxconNEGG2lSXoXQ&s" alt="" />
              <h6>Vide Ribeye<i class="bi bi-heart"></i></h6>
              <p>beye steak cooked sous-vide to perfection, served with a red wine</p>
              <h6>$79.25</h6>
              <i class="bi bi-bag">Add to card</i>
             
              </div>
           </Col>
            </Row>
        </Container>
    </section>

    </Layout>
    </>
  )
}

export default OurMenu
