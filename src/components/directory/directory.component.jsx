import "./directory.styles.scss"
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => (
    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => (
          <DirectoryItem title={title} key ={id} imageUrl={imageUrl} />
        ))}
    </div>
)

export default Directory;