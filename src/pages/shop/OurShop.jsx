import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../share/Cover";
import imgShop from "../../assets/shop/banner2.jpg"
import useMenu from "../../hooks/useMenu";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menus] = useMenu();
    const drinks = menus.filter(item => item.category === 'drinks');
    const dessert = menus.filter(item => item.category === 'dessert');
    const pizza = menus.filter(item => item.category === 'pizza');
    const salad = menus.filter(item => item.category === 'salad');
    const soup = menus.filter(item => item.category === 'soup');

    return (
        <>
        <Helmet>
        <title>Bistro boss || shop</title>
      </Helmet>
        <Cover img={imgShop} title="Our Shop"></Cover>
        
        <Tabs className="mt-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <FoodCard items={salad}></FoodCard>
        </TabPanel>
        <TabPanel>
         <FoodCard items={pizza}></FoodCard>
        </TabPanel>
        <TabPanel><FoodCard items={drinks}></FoodCard></TabPanel>
        <TabPanel><FoodCard items={soup}></FoodCard></TabPanel>
        <TabPanel><FoodCard items={dessert}></FoodCard></TabPanel>
      </Tabs>
      </>
    );
};

export default OurShop;