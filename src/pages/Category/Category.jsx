import { useContext } from "react";
import "./Category.css";
import ApiContext from "../../contexts/ApiContext";
import CategoryList from "../../components/ApiListComponents/CategoryList";
import Loading from "../../components/Loading/Loading";

const Category = () => {
  const { loading, dataApi, internetControl } = useContext(ApiContext);

  if (!internetControl) {
    return <p>İnternete bağlı değil. Bu yüzden veri çekilemedi</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return <CategoryList dataApiList={dataApi} />;
};

export default Category;
