 
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ dataApiList }) => {
  return (
    <>
      {dataApiList.map((dataItem,index) => {
        return (

            <CategoryListItem {...dataItem} key={index} />
        );
      })}
    </>
  );
};

export default CategoryList;
