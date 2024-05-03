import "./categories-list.styles.scss"
import CategoryItem from "../category-item/category-item.component";

const CategoriesList = ({ categories }) => (
    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => (
          <CategoryItem title={title} key ={id} imageUrl={imageUrl} />
        ))}
    </div>
)

export default CategoriesList;