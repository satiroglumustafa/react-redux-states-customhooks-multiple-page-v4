import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/utils";

const CategoryListItem = (props) => {
  const categorySlug = slugify(props.category?.slug);
  const productSlug = slugify(props.title);

  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <Card className="mb-4">
          <Link to={`/${categorySlug}/${productSlug}`}>
            <img src={props.images?.[0]} alt="" />
          </Link>
          <Card.Body>
            <Card.Title><Link to={`/${categorySlug}/${productSlug}`}>{props.title}</Link></Card.Title>
            <Card.Text><Link to={`/${categorySlug}/${productSlug}`}>{props.description}</Link></Card.Text>
            <Link
              to={`/${categorySlug}/${productSlug}`}
              state={{
                categoryName: props.category.name,
              }}
              className="btn btn-success w-100"
            >
              Detail
            </Link>
            {/* Dikkat  /$ koymasaydık relative path olurdu, yani biz bunu kategori sayfasında çalıştırğımız 
          için React router bunu relative olarak uygulardı ve url içine /categories/electronics/stylish-red-headphones bunu yzardı
          Ancak /$ koyarak absolute path olur, React router mevcut konumu hiç dikkate almaz,root'dan başlar
             
          */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CategoryListItem;
