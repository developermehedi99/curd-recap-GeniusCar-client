import imgbisto from "../../assets/home/chef-service.jpg";

const BistoImgText = () => {
  return (
    <div className="my-20">
      <div className="relative text-center">
        <img src={imgbisto} alt="" />
        <div className="text-center justify-center items-center m-20 bg-white p-10 absolute top-1/4 rounded-md">
          <h1 className="text-3xl font-bold">Bistro Boss</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistoImgText;