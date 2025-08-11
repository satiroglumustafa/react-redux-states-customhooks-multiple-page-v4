import { Button, Card } from "react-bootstrap";
import Loading from "../Loading/Loading";
import React from "react";
import { slugify } from "../../utils/utils";
import { Link } from "react-router-dom";

const MostLikedProduct = React.memo((props) => {
  const categoryName = slugify(props.category?.name);
  const categoryTitle = slugify(props.title);
  return (
    <>
      <Card style={{ backgroundColor: "none" }}>
        <div className="card-img">
          {props.loading ? (
            <Loading />
          ) : (
            <Link to={`${categoryName}/${categoryTitle}`}>
              <Card.Img variant="top" src={props.images?.[0]} />
            </Link>
          )}
        </div>
        <Card.Body>
          <Card.Title>
            <Link to={`${categoryName}/${categoryTitle}`}>{props.title} </Link>
          </Card.Title>
          <Card.Text>
            <Link to={`${categoryName}/${categoryTitle}`}>
              {props.description}
            </Link>
          </Card.Text>
          <Button className="w-100" variant="success">
            Fiyatı : {props.price} TL
          </Button>
        </Card.Body>
      </Card>
    </>
  );
});

export default MostLikedProduct;
