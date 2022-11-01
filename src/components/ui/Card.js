import Row from "../layout/Row";

const Card = (props) => {
    return (<Row>
        <div className="card" style={{width: '18rem'}}>
            {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
                <div className="card-body">
                    <h5 className="card-title">Pending Records</h5>
                    <p className="card-text">10 records are waiting for your action!</p>
                    <a onClick={props.onViewDetails} className="btn btn-primary">View Details</a>
                </div>
        </div>
    </Row>)
}

export default Card;