import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-7/5 text-center space-y-5">
              <h1 className="w-2/3 text-4xl font-bold">I love these technologies</h1>
              <p className="text-center">
              Software development enables the automation of repetitive and time-consuming tasks.This reduces human error,increases efficiency, and saves businesses both time and money.
               In the real world,this is evident in manufacturing processes, and even in household appliances that simplify our daily routines.
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}
            
            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                C/C++
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML5
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
               CSS3
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
              Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MySql
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
