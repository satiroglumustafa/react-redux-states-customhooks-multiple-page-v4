import { data, useLocation, useParams } from "react-router-dom";
import "./Detail.css";
import { Breadcrumb, Col } from "react-bootstrap";
import { useContext } from "react";
import { slugify } from "../../utils/utils";
import ApiContext from "../../contexts/ApiContext";
import Loading from "../../components/Loading/Loading";

const Detail = () => {
  const location = useLocation();
  const categoryName = location.state?.categoryName;  //useLocation kullanarak category isminini breadCrumba yazdık
  const {category,title} = useParams(); //  useParams  kullanarak url'den  category ve title çektik 
  
  //////////////////

 const { dataApi } = useContext(ApiContext);

 
  const matchedItem = dataApi.find(
    (item) => slugify(item.category.name) === category && slugify(item.title) === title
  );


  if (!matchedItem)
  {
    return (
      <Loading/>
    );
  }

  return (
    <>
      <Col xs={12}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item >
            {categoryName}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{title.replace(/-/g, " ").toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="category-detail">
          <h2>{matchedItem.title}</h2>
          <img src={matchedItem.images?.[0]} alt="" />
          <p>{matchedItem.description}</p>
        </div>
      </Col>
    </>
  );
};

export default Detail;
