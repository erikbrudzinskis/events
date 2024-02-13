import {useRef} from "react";

export default function CommentNew (props) {
    const emailInputRef = useRef(null);
    const commentInputRef = useRef(null);
    const {eventId} = props;

    function submitComment(event) {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const comment = commentInputRef.current.value;
        const reqBody = {
            email: email,
            comment: comment,
            time: new Date()
        }

        fetch('/api/comment/' + eventId, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <>
            <form onSubmit={submitComment}>
                <div className="ps-3 form-color">
                    <h6 className="pt-1 mb-0">Add Your Comment</h6>
                </div>
                <div className="d-flex flex-row align-items-center p-3 pb-1 form-color">
                    <input type="text" className="form-control" placeholder="Enter your email..." ref={emailInputRef}/>
                </div>
                <div className="d-flex flex-row align-items-center p-3 pt-0 form-color">
                    <textarea className="form-control" placeholder="Enter your comment..." style={{height: "6rem"}} ref={commentInputRef}/>
                </div>
                <div className="d-flex flex-row flex-row-reverse p-3 pt-0 form-color">
                    <button className="btn btn-success" style={{width: "8rem"}} >Submit</button>
                </div>
            </form>
        </>
    )
}
