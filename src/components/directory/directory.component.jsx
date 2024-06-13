import "./directory.styles.scss"
import DirectoryItem from "../directory-item/directory-item.component";


const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&w=300",
    "route": 'shop/hats',
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300",
    "route": 'shop/jackets'
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300",
    "route": 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
    "route": 'shop/womens'
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=300",
    "route": 'shop/mens'
  }
];

const Directory = () => (
  <div className="categories-container">
    {categories.map(({title, id, imageUrl, route}) => (
        <DirectoryItem title={title} key ={id} imageUrl={imageUrl} route={route} />
      ))}
  </div>
)

export default Directory;