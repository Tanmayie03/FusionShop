const Home = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="m-4 overflow-hidden ">
          <img
            src="./images/diwali.jpg"
            className="w-full duration-500 transform hover:scale-105 lg:h-[450px] "
          />
        </div>
        <img src="./images/coupon.webp" className="lg:h-34 w-[70%] mx-auto " />
        <div className="flex justify-center my-4 overflow-hidden">
          <div className="overflow-hidden">
            <img
              src="./images/maleposter.avif"
              className="duration-500 transform hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
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
            />
          </div>
        </div>
        <img src="./images/Last2days.avif" className="px-2 mx-auto" />

        <div className="flex justify-center w-full gap-2 my-12 lg:justify-around ">
          <img src="./images/sale01.webp" className="w-20 lg:w-36" />

          <img src="./images/men.avif" className="w-36" />

          <img src="./images/female.avif" className="w-36" />

          <img src="./images/electronics.avif" className="w-36" />

          <img src="./images/jewelcircle.avif" className="w-36" />
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
