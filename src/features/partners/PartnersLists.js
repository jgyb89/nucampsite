// Importing necessary components and hooks
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import Loading from "../ui/Loading"; // Importing the Loading component
import Error from "../ui/Error"; // Importing the Error component

const PartnersList = () => {
    // Selecting state data for partners and their loading/error status
    const partners = useSelector(selectAllPartners); // Get the partners array from state
    const isLoading = useSelector((state) => state.partners.isLoading); // Get loading status from state
    const errMsg = useSelector((state) => state.partners.errMsg); // Get error message from state

    // Conditionally render components based on loading and error states
    return isLoading ? (
        <Loading /> // Show Loading component if data is loading
    ) : errMsg ? (
        <Error errMsg={errMsg} /> // Show Error component if there is an error
    ) : (
        <Col className="mt-4">
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className="d-flex mb-5" key={partner.id}>
                            <Partner partner={partner} /> {/* Render each partner */}
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
};

export default PartnersList;
