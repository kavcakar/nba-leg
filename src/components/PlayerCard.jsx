import CardContainer from "./CardContainer"
import Card from 'react-bootstrap/Card';
const PlayerCard = ({name, img, statistics}) => {
    return(
    <Card>
    <Card.Img variant ="top" src={img}/>
        <Card.Footer>
        <Card.Title>Card Link</Card.Title>
        </Card.Footer>
    </Card>
         
    )
}

export default PlayerCard