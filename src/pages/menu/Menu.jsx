import { Helmet } from "react-helmet-async";
import Cover from "../share/Cover";
import img from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import imgDessert from "../../assets/menu/dessert-bg.jpeg"
import imgPizza from "../../assets/menu/pizza-bg.jpg"
import imgSalad from "../../assets/menu/salad-bg.jpg"
import imgSoup from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menus] = useMenu();
  const offered = menus.filter(item => item.category === 'offered');
  const dessert = menus.filter(item => item.category === 'dessert');
  const pizza = menus.filter(item => item.category === 'pizza');
  const salad = menus.filter(item => item.category === 'salad');
  const soup = menus.filter(item => item.category === 'soup');

  return (
    <div>
      <Helmet>
        <title>Bistro boss || menu</title>
      </Helmet>
      <Cover img={img} title="our menu"></Cover>
      <MenuCategory item={offered}></MenuCategory>
      <MenuCategory title="Dessert" img={imgDessert} item={dessert}></MenuCategory>
      <MenuCategory title="pizza" img={imgPizza} item={pizza}></MenuCategory>
      <MenuCategory title="salad" img={imgSalad} item={salad}></MenuCategory>
      <MenuCategory title="soup" img={imgSoup} item={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
