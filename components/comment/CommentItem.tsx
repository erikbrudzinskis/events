export default function CommentItem (props) {
    const {email, comment, time} = props;

    return (
        <>
            <div className="d-flex flex-row p-3">
                <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40"
                     className="rounded-circle me-3" />
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <span className="me-2">{email}</span>
                            <small className="c-badge">Top Comment</small>
                        </div>
                        <small>{time}</small>
                    </div>
                    <p className="text-justify comment-text mb-0">{comment}</p>
                </div>
            </div>
        </>
    )
}
