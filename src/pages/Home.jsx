import config from "../config.json";
import SocialLink from "../components/SocialLinks/SocialLink";

function Home() {
  const pages = [
    {
      name: "Papers",
      link: "/paper",
    },
    {
      name: "Courses",
      link: "",
    },
    {
      name: "Papers",
      link: "",
    },
    {
      name: "Design",
      link: "",
    },
    {
      name: "Tags",
      link: "",
    },
    {
      name: "Archive",
      link: "",
    },
  ];

  return (
    <div className="h-screen flex ">
      <div className=" md:max-w-[800px] max-w-[375px] md:m-auto lg:px-0 px-5 2x my-10">
        <div className="flex l md:flex-row flex-col md:gap-10 gap-5 md:items-end items-start">
          <div className=" w-[260px] h-[260px] rounded-full flex justify-center items-center border-2  border-black">
            <img
              className="w-60 h-60 rounded-full drop-shadow-2xl "
              draggable="false"
              src={config.profile_img}
              alt={config.name}
            />
          </div>
          <div className="md:w-[60%] w-full">
            <h1 className="text-5xl font-bold">{config.name}</h1>
            <p className="text-xl py-1 font-medium">
              Front end Developer | React | MERN stack
            </p>
            <SocialLink />
          </div>
        </div>
        <p className="text-lg py-3 font-medium">{config.description}</p>

        <div className="flex gap-3 flex-wrap pt-2 pb-10">
          {pages.map((page, i) => {
            return (
              <a
                href={page.link}
                className="py-2 px-3 shadow-2xl rounded-lg bg-[#D6D6D6] hover:b"
                key={i}
                title={page.name}
              >
                {page.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
