import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo, useRef } from "react";
import ApiContext from "../../contexts/ApiContext";
import { slugify } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeModeSlice";
import { clearSearchTerm, setSearchTerm } from "../../redux/searchProductSlice";

const Header = () => {
  const { dataApi } = useContext(ApiContext);

  // redux
  const { themeModeParam, searchTermParam } = useSelector((state) => ({
    themeModeParam: state.themeMode.isDark,
    searchTermParam: state.searchProduct.searchTerm
  }));
  const dispatch = useDispatch();

  // switch redux
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    if (themeModeParam) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeModeParam]);
  // switch redux
 

  // redux

  const hoverElement = useRef();
  const searchHandler = (event) => {
    dispatch(setSearchTerm(event.target.value)); //search redux

    if (hoverElement.current) {
      if (event.target.value.trim()) {
        hoverElement.current.classList.add("active");
      } else {
        hoverElement.current.classList.remove("active");
      }
    }
  };

  const blurHandler = () => {
    hoverElement.current.classList.remove("active");
    setTimeout(()=>{
      dispatch(clearSearchTerm()); //search redux
    },100)
  };

  const filteredSearch = useMemo(() => {
    return dataApi.filter((product) =>
      product.title.toLowerCase().includes(searchTermParam.toLowerCase())
    );
  }, [dataApi, searchTermParam]);

  return (
    <>
      <header className="header py-3">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                <div className="menu">
                  <ul className="d-flex align-items-center gap-3">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="about">About</Link>
                    </li>
                    <li>
                      <Link to="categories">Categories</Link>
                    </li>
                  </ul>
                </div>
                <Form className="d-flex align-items-center gap-3">
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    className="search-control"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search Product"
                      value={searchTermParam}
                      onChange={searchHandler}
                      onBlur={blurHandler}
                    />
                    
                    <div className="search-area" ref={hoverElement}>
                      <ListGroup>
                        {filteredSearch.map((item) => {
                           
                          return (
                            <ListGroup.Item key={item.id}>
                              <Link
                                to={`${slugify(item.category.name)}/${slugify(
                                  item.title
                                )}`}
                              >
                                {item.title}
                              </Link>
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
                  </Form.Group>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={`${themeModeParam ? "Dark " : " Light"}  `}
                    onClick={handleToggleTheme}
                  />
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
