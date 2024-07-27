import MenuItem from "../home/MenuItem";
import Cover from "../share/Cover";

const MenuCategory = ({item, title, img}) => {
    
    return (
        <div className="my-10">
             {title && <Cover img={img} title={title}></Cover>}
        
            <div className="grid grid-cols-2 mt-10 gap-10">
                {
                    item.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                    ></MenuItem>)
                }
            </div>
            </div>
    );
};

export default MenuCategory;