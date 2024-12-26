export const Navbar = () => {
  return (
    <header className="z-50 w-full flex flex-row justify-around  absolute text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-lg">
      <div className="w-full flex flex-row max-w-[1400px] p-5 m-auto">
        <a className="w-full " href={"/"}>
          {" "}
          <div className="w-full flex flex-row gap-5 items-center">
            <picture className="w-5 h-5 bg-white flex ">
              <img
                src={
                  "https://avatars.githubusercontent.com/u/123605744?s=48&v=4"
                }
                width={24}
                height={24}
                alt=""
              ></img>
            </picture>
            <h3> Native-Twin </h3>
          </div>{" "}
        </a>
        <nav className="w-full ">
          <ul className="flex flex-row gap-4 items-center justify-end">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/documentation">Docs</a>
            </li>
            <li>
              <a href={"https://github.com/react-universal/native-twin"}></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
