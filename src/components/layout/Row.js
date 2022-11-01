const Row = (props) => {

    return <div className={`row ${props.className}`}>
        <div className="col-md-12">{props.children}</div>
    </div>
}

export default Row;