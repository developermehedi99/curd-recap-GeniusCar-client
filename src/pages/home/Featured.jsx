import imgFea from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured bg-black my-20 bg-fixed">
      <SectionTitle
        subheading="Check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="md:flex gap-6 justify-center items-center bg-slate-500 bg-opacity-50 text-white">
        <div>
          <img src={imgFea} alt="" />
        </div>
        <div>
          <h2>March 20, 2020</h2>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quasi eveniet enim voluptatem, esse rerum iure officiis perferendis
            sapiente facilis vitae minus provident vel qui voluptates aliquam,
            non odio numquam quo voluptatum aspernatur iste. Quo dolores autem
            commodi cumque molestias!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-3 btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;