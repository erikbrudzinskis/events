import CommentNew from "@/components/comment/CommentNew";
import CommentItem from "@/components/comment/CommentItem";
import {useEffect, useState} from "react";

export default function CommentList(props) {
    const [comments, setComments] = useState([]);
    const [commentVisibility, setCommentVisibility] = useState(false);
    const {eventId} = props;

    useEffect(() => {
        getComments();
    }, [commentVisibility])

    function getComments() {
        fetch('/api/comment/' + eventId, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setComments(data.comments))
    }

    function toggleCommentVisibility() {
        setCommentVisibility(!commentVisibility);
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <button className="btn btn-primary" style={{width: "12rem"}} onClick={toggleCommentVisibility}>{commentVisibility ? 'Hide' : 'Show'} Comments</button>
                        <div className={commentVisibility ? 'card visible' : 'card invisible'}>
                            <div className="p-3">
                                <h5>Comments</h5>
                            </div>

                            <CommentNew
                                getComments={getComments}
                                eventId = {eventId}
                            />

                            <div className="mt-2">
                                {comments ? comments.map(item => (
                                    <CommentItem
                                        key={item.time}
                                        email={item.email}
                                        comment={item.comment}
                                        time={item.time}
                                    />
                                )) : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
