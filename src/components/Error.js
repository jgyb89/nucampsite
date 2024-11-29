// Import the Col component from reactstrap
import { Col } from 'reactstrap';

// Define the Error component and destructure the errMsg prop
const Error = ({ errMsg }) => {
    return (
        // Render a Col component to structure the layout
        <Col>
            {/* Display the error message inside an h4 element */}
            <h4>{errMsg}</h4>
        </Col>
    );
};

// Export the component as the default export
export default Error;
