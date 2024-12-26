import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="m-4 overflow-hidden ">
          <img
            src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1735195568/c1cc799f-3f54-4d94-86ae-49115e71cd08.png"
            className=" "
          />
          {/* <img
            src="https://i.pinimg.com/736x/26/a6/bf/26a6bf5b167a360f2ef0dbed1f3773c0.jpg"
            className=" "
          /> */}
        </div>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-bankoffers-Z1-5instant-prepaid1.jpg"
          className="lg:h-34 w-full mx-auto grayscale"
        />
        <div className="flex justify-center my-4 overflow-hidden">
          {/* <div className="overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-151224-UHPHER-Z10-P2-SONATA-TITAN-UPTO30.jpg"
              className=""
              https://mercury.akamaized.net/i/34f2150fc4106df22f5ab31e43eac1ea_306087_0.jpg
              https://mercury.akamaized.net/i/e35fd5004d3ef58a7e511ca78677e4a3_306107_0.jpg
            />
          </div> */}
          {/* <div className="overflow-hidden">
            <img
              src="./images/femaleposter.avif"
              className="duration-500 transform hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="./images/jewelposter.avif"
              className="duration-500 transform hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="./images/shoesposter.avif"
              className="duration-500 transform hover:scale-105"
            /> */}
        </div>
        <p className="lg:text-3xl text-2xl py-4 text-gray-700 font-bold text-center">
          SHOP BY CATEGORY
        </p>
        <div className="flex justify-center  w-full gap-2 my-12 lg:justify-around ">
          <img src="./images/sale.png" className="w-20 lg:w-36" />
          <Link to="/shop/listing?category=men's clothing">
            {" "}
            <img src="./images/men.png" className="w-36 cursor-pointer" />
          </Link>
          <Link to="/shop/listing?category=women's clothing">
            <img src="./images/women.png" className="w-36 cursor-pointer" />
          </Link>
          <Link to="/shop/listing?category=electronics">
            <img
              src="./images/electronic.png"
              className="w-36 cursor-pointer"
            />
          </Link>
          <Link to="/shop/listing?category=jewelry">
            <img src="./images/jewellry.png" className="w-36 cursor-pointer" />
          </Link>
        </div>
        <img
          src="./images/Icons-2.webp"
          className="px-2 mx-auto mb-8 lg:h-32"
        />
      </div>
    </>
  );
};

export default Home;
