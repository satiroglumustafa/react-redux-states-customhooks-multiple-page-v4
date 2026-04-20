import { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Category.css";
import ApiContext from "../../contexts/ApiContext";
import CategoryList from "../../components/ApiListComponents/CategoryList";
import Loading from "../../components/Loading/Loading";

const Category = () => {
  const location = useLocation();
  const { loading, dataApi, internetControl } = useContext(ApiContext);
  
  const categoryFilter = location.state?.categoryFilter;
  
  const filteredData = categoryFilter 
    ? dataApi.filter(item => item.category.name === categoryFilter)
    : dataApi;

  if (!internetControl) {
    return <p>İnternete bağlı değil. Bu yüzden veri çekilemedi</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return <CategoryList dataApiList={filteredData} />;
};

export default Category;
