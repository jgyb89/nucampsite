// Import required modules and components, including Error and Loading
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from '../features/comments/CommentsList';
import SubHeader from "../components/SubHeader";
import Error from '../components/Error'; // Import Error component
import Loading from '../components/Loading'; // Import Loading component

const CampsiteDetailPage = () => {
    // Get the campsiteId from URL parameters
    const { campsiteId } = useParams();

    // Select the campsite by ID using useSelector
    const campsite = useSelector(selectCampsiteById(campsiteId));

    // Fetch loading state using an inline callback in useSelector
    const isLoading = useSelector((state) => state.campsites.isLoading);

    // Fetch error message state using an inline callback in useSelector
    const errMsg = useSelector((state) => state.campsites.errMsg);

    // Initialize the content variable to null
    let content = null;

    // Conditionally render Loading, Error, or the campsite and comments details
    if (isLoading) {
        content = <Loading />; // Render the Loading component if data is still being fetched
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />; // Render the Error component if there's an error
    } else {
        // Render campsite and comments details when data is successfully loaded
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }

    return (
        <Container>
            {/* Conditionally render the SubHeader only if the campsite exists */}
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            {/* Render the content variable, which contains conditional JSX */}
            <Row>{content}</Row>
        </Container>
    );
};

export default CampsiteDetailPage;
