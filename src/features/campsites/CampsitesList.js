// Import required modules and components, including Error and Loading
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import Error from '../../components/Error'; // Import the Error component
import Loading from '../../components/Loading'; // Import the Loading component

const CampsitesList = () => {
    // Fetch campsites data using the useSelector hook
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    // Fetch loading state using an inline callback in useSelector
    const isLoading = useSelector((state) => state.campsites.isLoading); // Tracks whether data is still loading

    // Fetch error message state using an inline callback in useSelector
    const errMsg = useSelector((state) => state.campsites.errMsg); // Tracks error messages from fetch failure

    // Conditional rendering for loading state
    if (isLoading) {
        return (
            <Row>
                {/* Display the Loading component when data is being fetched */}
                <Loading />
            </Row>
        );
    }

    // Conditional rendering for error state
    if (errMsg) {
        return (
            <Row>
                {/* Display the Error component when there's an error message */}
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className='ms-auto'>
            {/* Map over the campsites array to render each campsite card */}
            {campsites.map((campsite) => (
                <Col 
                    md='5' 
                    className='m-4' 
                    key={campsite.id}
                >
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;
