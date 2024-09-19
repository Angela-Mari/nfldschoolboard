import './App.css'
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const candidates = {
    candidate1: {
        name: "Claudia Gonzalez-George",
        bio: "I’ve been in the field of education most of my adult life either teaching or supporting students.  As a first-generation American and proud parent of three, I believe in public education. I’m grateful for the opportunity I’ve had during my term on the school board to impact Northfield students at the policy and governance level, and hope to continue serving.",
        photo: '/assets/Claudia.jpg',
        fblink: "https://www.facebook.com/claudiaforschoolboard/",
        sbquestionlink: "https://drive.google.com/file/d/1LKrQPpVZ8FxV5Sdx4x3yTBAnyMgYXOm1/view?fbclid=IwY2xjawFV0DVleHRuA2FlbQIxMAABHdE3DQw9S2E2SnXeirGh_99H4i5BQGxC1v_YN4yuA7Tu5xWy9-JYqU3yOg_aem_ZiJFbfP-CIUdB2-UJPuz5g"
    },
    candidate2: {
      name: "Corey Butler",
      bio: "I'm the father of two students in the district, the husband of a townie, and the son of a school bus driver and custodian. I deeply care about the power of public schools and want to use my experience in life, work, and my first term on the school board to continue to serve our community and guide our remarkable district into the future.",
      photo: '/assets/corey.jpg',
      fblink: "https://www.facebook.com/CoreyforNorthfieldSchools",
      sbquestionlink:"https://drive.google.com/file/d/1dUTSmo3Rrph_P-oah1o-dimWGDnIEzlt/view?usp=sharingCorey"
  },
  candidate3: {
    name: "Maggie Epstein",
    bio: "As a parent, foster parent, and engaged member of the Northfield community, I have developed a deep commitment to our schools and a desire to serve on the school board. I have educational and professional experience in the field of education and believe that public schools are the key to a thriving democracy.",
    photo: '/assets/maggie.jpg',
    fblink: "https://www.facebook.com/maggieepsteinschoolboard",
    sbquestionlink:"https://drive.google.com/file/d/1ZYC597DXumuHLwXu2a3cyam0xrJxoOcs/view"
}

}


  return (
    <>
     <Navbar style={{backgroundColor:"#7A0019", justifyContent:"center"}}>
    <h1 style={{textAlign:"center"}}>United for Northfield</h1>
    </Navbar>
    
   
    


    <div style={{padding:"1rem"}}>
   
    <Accordion defaultActiveKey="0">    
      <Accordion.Item eventKey='0'>
        <Accordion.Header style={{textAlign:"center"}}><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/warranty.png" alt="warranty"/><b>Endorsed by the Northfield Education Association</b></Accordion.Header>
        <Accordion.Body>
          <p>
            NEA endorsed Claudia Gonzalez-George, Maggie Epstein, Corey Butler, and Amy Goerwitz based on their experience, interviews, and questionaires.
          </p>
          <Button href="https://www.facebook.com/northfieldeducationassociation/">Learn More</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    <Row>
      {
      Object.entries(candidates).map(([key, value]) => (
        <Card key ={key} name={value.name} bio={value.bio} photo={value.photo} fblink={value.fblink} sbquestionlink={value.sbquestionlink}></Card>
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
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://kymnradio.net/2024/09/14/meet-the-candidates-for-northfield-school-board-2/ ">KYMN election guide</a>
        </Row>
        <Row style={{paddingLeft:"1rem"}}>
        <a href="https://lwvnorthfieldmn.org/2024/08/05/event-9-21-24-candidate-forums/">League of Women Voters of Northfield Cannon Falls: Nonpartisan Candidate Forum</a>
        <p style={{paddingLeft:"1rem"}}>
          Date: September 21, 2024 <br/>
          Time: 1:00-2:00PM (for the Northfield School Board) <br/>
          Location: Viking Theater, Buntrock Commons, St. Olaf College (1521 Campus Dr)<br/>
          The forums will be recorded and available to <a href="https://www.stolaf.edu/multimedia/play/?e=4865">digitally stream</a> and will also be posted on the LWVNCF YouTube page and website in early October.

        </p>
        </Row>
        <Row style={{paddingLeft:"1rem"}}>
          Nfld News election guide (coming in October)
        </Row>
      </Col>


    </Row>
    
    </div>
    <footer style={{backgroundColor:"#7A0019", textAlign:"center", padding:".5rem"}}> 
      <p style={{color:"#FFFFFF"}}>Prepared and paid for by the candidates</p>
      <p style={{color:"#FFFFFF"}}>P.O. Box 13 <br /> Northfield, MN 55057</p>
      <p style={{color:"#FFCC33"}}> Designed by <a style={{color:"#FFCC33"}} href="https://angelageorge.com">Angela George</a> © 2024 </p>
    </footer>
    </>
  )
}

export default App
