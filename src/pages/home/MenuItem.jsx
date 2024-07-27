
const MenuItem = ({menu}) => {
    const {name, recipe, image,price} = menu;
    return (
        <div className="flex gap-6">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="text-xl">{name}</h2>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;