// Import the Col component from reactstrap
import { Col } from 'reactstrap';

// Define the Loading component with no parameters
const Loading = () => {
    return (
        // Render a Col component to structure the loading spinner and message
        <Col>
            {/* Render a Font Awesome spinner icon */}
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
            {/* Display a loading message below the spinner */}
            <p>Loading...</p>
        </Col>
    );
};

// Export the component as the default export
export default Loading;
