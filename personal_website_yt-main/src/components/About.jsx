import { useState } from "react";
import bannerImage from "../assets/Usha.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Frontend Developer & Backend Developer",
    desc1: `A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with.A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.
     When you visit a website, the design elements you see were created by a front-end developer.Front-end developers create user interfaces (UI).
    `,
    desc2: ` Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. 
    Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="Usha Ravasaheb Hipparkar"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
