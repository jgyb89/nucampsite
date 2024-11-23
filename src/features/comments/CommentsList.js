import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm'
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const Comments = useSelector(selectCommentsByCampsiteId(campsiteId));

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