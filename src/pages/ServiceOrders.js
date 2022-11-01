import Card from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import Row from "../components/layout/Row";
import classes from "./ServiceOrders.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import { Fragment } from "react";


const transformData = (data) => {
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

   return records;
 }


const ServiceOrders = () => {
 // const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading,
    isError,
    transformedData: serviceOrders,
    sendRequest} = useHttp(transformData);

    
  const viewDetailsHandler = () => {
    sendRequest({url: "http://localhost:8080/service-orders"});
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
        {serviceOrders && (
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
