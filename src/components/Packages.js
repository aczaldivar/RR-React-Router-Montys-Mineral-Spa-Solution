import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Packages(props) {
   
    return (       
        <Container>
            <Container className="packages">
                <h1>Our Packages</h1>
            </Container>
            <Card className= "packages">
                <Card.Body className ="packagesHeader" >
                    <Card.Text style= {{color:"black", fontsize: "18px"}}>
                        Take a look at some of our packages!
                    </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        {props.packages.map((eachPackage,i)=>
                        <ListGroup.Item key ={i}>{eachPackage}</ListGroup.Item>)}
                    </ListGroup>
                
            </Card>
        </Container>

    )
}