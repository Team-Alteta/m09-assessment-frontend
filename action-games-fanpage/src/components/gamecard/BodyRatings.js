import Card from 'react-bootstrap/Card';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
function BodyRatings({ userRating, userCount, criticRating, criticCount}) {

    return (
        <Card.Body>
            <div className="row">
                <div className="col-6">
                    <CircularProgressbarWithChildren value={Math.round(userRating)}>
                        <div style={{ fontSize: 50, marginTop: -5 }}>
                            <strong>{Math.round(userRating)}</strong><br/>
                        </div>
                        <strong>User Rating</strong>
                        <div style={{ fontSize: 14, marginTop: -5 }}>
                            <span>{userCount} votes</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>

                <div className="col-6">
                    <CircularProgressbarWithChildren value={Math.round(criticRating)}>
                        <div style={{ fontSize: 50, marginTop: -5 }}>
                            <strong>{criticRating ? Math.round(criticRating) : "NA"}</strong><br/>
                        </div>
                        <strong>Critic Rating</strong>
                        <div style={{ fontSize: 14, marginTop: -5 }}>
                            <span>{criticCount ? criticCount : 0} votes</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </Card.Body>
    );

}

function getRatingColor(rating) {
    if (rating >= 0 && rating <= 39) {
        return "bg-danger";
    } else if (rating >= 40 && rating <= 69) {
        return "bg-warning";
    } else {
        return "bg-success";
    }
}

export default BodyRatings;
