// import React, { useContext } from 'react';
// // import { Container, Row, Col, Image, Card } from 'react-bootstrap';
// import { Data } from '../../context/DataProvider';


// const Abouts = () => {
//   const context = useContext(Data);
//   return (
//     <div>
//     <div>Count:{context.count}</div>

// {/* 
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <Card>
//             <Card.Body>
//               <Card.Title>About Us</Card.Title>
//               <Card.Text>
//                 Welcome to our company! We are dedicated to providing the best services in the industry. Our team is composed of experienced professionals who are passionate about what they do. We strive to exceed our clients' expectations and deliver exceptional results.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md={6}>
//           <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUENscPbGJ-VPONgBqOeyAJ0X5GrmzFdzeAg&s" rounded fluid />
//         </Col>
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Our Mission</Card.Title>
//               <Card.Text>
//                 Our mission is to make a positive impact on the world through our services. We believe in innovation, integrity, and excellence. Our goal is to build long-lasting relationships with our clients and partners.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Our Team</Card.Title>
//               <Card.Text>
//                 Our team consists of talented individuals from diverse backgrounds. Each member brings unique skills and perspectives, making us a strong and dynamic team. We work collaboratively to achieve our common goals and support each other's growth.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container> */}


//     </div>
//   )
// }

// export default Abouts


import React, {useContext} from 'react'
import { Data } from '../../context/DataProvider';


const Abouts = () => {
   const context = useContext(Data); 
   return (
    
     <div>Count:{context.count}</div>
  )
}

export default Abouts