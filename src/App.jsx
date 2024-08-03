import './App.css'
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

function App() {
  const candidates = {
    candidate1: {
        name: "Claudia Gonzalez-George",
        bio: "I’ve been in the field of education most of my adult life either teaching or supporting students.  As a first-generation American and proud parent of three, I believe in public education. I’m grateful for the opportunity I’ve had during my term on the school board to impact Northfield students at the policy and governance level, and hope to continue serving.",
        photo: '/assets/Claudia.jpg',
        fblink: "https://www.facebook.com/claudiaforschoolboard/"
    },
    candidate2: {
      name: "Corey Butler",
      bio: "I'm the father of two students in the district, the husband of a townie, and the son of a school bus driver and custodian. I deeply care about the power of public schools and want to use my experience in life, work, and my first term on the school board to continue to serve our community and guide our remarkable district into the future.",
      photo: '/assets/corey.jpg',
      fblink: "https://www.facebook.com/CoreyforNorthfieldSchools"
  },
  candidate3: {
    name: "Maggie Epstein",
    bio: "As a parent, foster parent, and engaged member of the Northfield community, I have developed a deep commitment to our schools and a desire to serve on the school board. I have educational and professional experience in the field of education and believe that public schools are the key to a thriving democracy.",
    photo: '/assets/maggie.jpg',
    fblink: "https://www.facebook.com/maggieepsteinschoolboard"
}

}


  return (
    <>
     <Navbar style={{backgroundColor:"#7A0019", justifyContent:"center"}}>
    <h1 style={{textAlign:"center"}}>United for Northfield</h1>
    </Navbar>
    <div style={{padding:"2rem"}}>
   
    <Row>    

    </Row>
    <Row>
      {
      Object.entries(candidates).map(([key, value]) => (
        <Card key ={key} name={value.name} bio={value.bio} photo={value.photo} fblink={value.fblink}></Card>
      ))}
    </Row>

    <Row>
      <Col xs={12} s={6} m={6} l={6} xl={6}>
     
      <Row style={{backgroundColor:"#FFCC33", padding:"1rem"}}>
      <h2>Why We Are Running</h2>
        <p>
          This November, voters will select four community members to serve on the Northfield School Board. In districts across the country, extremist groups have attempted to influence the makeup of school boards to achieve their radical goals — these goals do not reflect our community. 
        </p>
        <p>
          We have aligned our campaigns to preserve the excellent educational system in the Northfield School District. The three of us are committed to ensuring responsible, forward-thinking oversight of the district. We believe in allowing our exemplary administrators and staff to do what they do best: Prepare every student for lifelong success. Together, we are United for Northfield.
        </p>
        </Row>
      </Col>
      
      <Col xs={12} s={6} m={6} l={6} xl={6}>
        <h2 style={{paddingTop:"1rem"}}>Resources</h2>
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://pollfinder.sos.state.mn.us/Default.aspx">Where Do I Vote?</a>
        </Row>
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://mnmsba.org/wp-content/uploads/2021/08/RunningForSchoolBoard.pdf">What Does a Good School Board Member Do?</a>
        </Row>
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://northfieldschools.org/about/school-board/">What Does the Northfield School Board Do?</a>
        </Row>
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://northfieldschools.org/reimagine/">What Are We Doing About the High School?</a>
        </Row>
      </Col>


    </Row>
    
    </div>
    <footer style={{backgroundColor:"#7A0019", textAlign:"center", padding:".5rem"}}> <p style={{color:"#FFCC33"}}> Designed by <a style={{color:"#FFCC33"}} href="https://angelageorge.com">Angela George</a> © 2024 </p></footer>
    </>
  )
}

export default App
