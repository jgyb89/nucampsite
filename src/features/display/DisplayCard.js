import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardTitle>{description}</CardTitle>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;