import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import SaladMenu from "./SaladMenu";

const RecomandedMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuItem = data.filter((item) => item.category === "salad");
        setMenus(menuItem);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subheading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-6">
        
        {menus.map((menu) => (
          <SaladMenu key={menu._id} menu={menu}></SaladMenu>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-6 btn-success">
        view full menu
      </button>
    </div>
  );
};

export default RecomandedMenu;
