import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm'
import { selectCommentsByCampsiteId } from './commentsSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
    const Comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading); // Get loading status from state
    const errMsg = useSelector((state) => state.comments.errMsg); // Get error message from state

    if (isLoading) {
        return <Loading />;
    }

    // Conditional rendering for error state
    if (errMsg) {
        return  <Error errMsg={errMsg} />;
    }


    if (Comments && Comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {Comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}

                <CommentForm campsiteId={campsiteId} />

            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;