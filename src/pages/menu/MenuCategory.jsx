import { Link } from "react-router-dom";
import MenuItem from "../home/MenuItem";
import Cover from "../share/Cover";

const MenuCategory = ({ item, title, img }) => {
  return (
    <div className="my-10">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-2 mt-10 gap-10">
        {item.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
      <Link to={`/ourShop/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-6 btn-success">
          order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
