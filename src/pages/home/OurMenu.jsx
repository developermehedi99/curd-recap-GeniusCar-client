import SectionTitle from "../../components/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
    const [menus] = useMenu();
    const popular = menus.filter(item => item.category === 'popular');
    
    return (
        <section className="my-20">
            <SectionTitle
            subheading="Check it out"
            heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-6 btn-success">
            view full menu
          </button>
        </section>
    );
};

export default OurMenu;