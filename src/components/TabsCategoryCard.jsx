
const TabsCategoryCard = ({item}) => {
  const {name, recipe, image,price} = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="bg-slate-800 px-3 absolute top-0 right-0 text-white">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default TabsCategoryCard;
