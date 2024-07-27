import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "./MenuItem";

const OurMenu = () => {
    const [menus, setMenus ] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const menuItem = data.filter(item => item.category === 'popular');
            setMenus(menuItem);
        })
    },[])
    return (
        <section className="my-20">
            <SectionTitle
            subheading="Check it out"
            heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menus.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default OurMenu;