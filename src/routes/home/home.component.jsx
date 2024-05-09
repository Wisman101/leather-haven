import CategoriesList from "../../components/categories-list/categories-list.component";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ]
  return (
    <CategoriesList categories={ categories } />
  );
}

export default Home;
