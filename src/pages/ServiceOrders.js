import Card from "../components/ui/Card";
import { useState, Fragment } from "react";
import DataTable from "../components/ui/DataTable";
import Row from "../components/layout/Row";
import classes from "./ServiceOrders.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ServiceOrders = () => {
 // const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [serviceOrders, setServiceOrders] = useState([]);


  const fetchServiceOrders = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch("http://localhost:8080/service-orders");
    const data = await response.json();

    console.log(data);
    const records = [];

    for (let index in data) {
      records.push({
        id: data[index].id,
        address: data[index].address.address,
        city: data[index].address.city,
        state: data[index].address.state,
        zip: data[index].address.zip,
      });
    }
    setServiceOrders(records);
    setIsLoading(false);
    setIsLoaded(true);
    
    
  };

  const viewDetailsHandler = () => {
   // setShowDetails(true);
    fetchServiceOrders().catch(error => {
      setIsError(true);
      setIsLoading(false);
    });
  };

  const navigateHandler = () => {
    dispatch({ type: "reset" });
    navigate("/new-service-order");
  };

  return (
    <Fragment>
      <Row>
        <Card onViewDetails={viewDetailsHandler} />
      </Row>
      <Row className={classes.dataTable}>
        {isLoading && <p style={{textAlign: "center"}}>Loading..</p>}
        {isError && <p style={{textAlign: "center"}}>Something went wrong!</p>}
        {isLoaded && (
          <Fragment>
            <button
              onClick={navigateHandler}
              className="btn btn-primary no-radius"
              style={{ marginBottom: "20px" }}
            >
              New Request
            </button>
            <DataTable rows={serviceOrders}/>
          </Fragment>
        )}
      </Row>
    </Fragment>
  );
};

export default ServiceOrders;
