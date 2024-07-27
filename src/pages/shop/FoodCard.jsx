import TabsCategoryCard from "../../components/TabsCategoryCard";


const FoodCard = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {
                items.map(item => <TabsCategoryCard 
                key={item._id} 
                item={item}
                ></TabsCategoryCard>)
            }
        </div>
    );
};

export default FoodCard;