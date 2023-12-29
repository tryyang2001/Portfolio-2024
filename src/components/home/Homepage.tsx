import { Image } from "@nextui-org/react";
import { Button, Link, Spacer } from "@nextui-org/react";
import Icons from "../common/Icons";

const Homepage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-7 xl:gap-8 lg:gap-2">
      {/* Left Profile Panel */}
      <div className="flex items-center justify-center relative col-span-3">
        <div className="shape-1 bg-clr-secondary hidden lg:block" />
        <Image
          src="profile_picture.jpg"
          alt="Profile Image"
          className="h-auto w-52 md:w-72 lg:w-80 object-cover lg:ml-12 xl:ml-48 rounded-3xl shadow-2xl flex"
        />
      </div>

      {/* Right Self Introduction */}
      <div className="flex flex-col justify-center text-lg xl:mr-56 lg:mr-12 col-span-4">
        <h1 className="text-3xl lg:text-5xl font-semibold p-3 text-center">
          Hi, I&apos;m <span className="text-clr-secondary">Tan Rui Yang</span>.
          <p className="text-xl lg:text-2xl mt-4">
            A Passionate Final Year{" "}
            <span className="text-clr-secondary">Computer Engineering</span>{" "}
            Undergraduate.
          </p>
        </h1>
        <div className="text-justify p-3 pt-7 text-lg font-medium leading-8">
          Welcome to my portfolio site! My name is{" "}
          <span className="text-clr-secondary">Tan Rui Yang</span>, currently a
          final year computer engineering undergraduate at{" "}
          <span className="text-clr-nus font-semibold">NUS</span>.
          <Spacer y={2} />
          <div>
            I&apos;m excited to embark on a journey as a software engineer,
            drawing from my experiences in web and API development. Feel free to
            explore my portfolio for a deeper insight into my skills and
            background!
          </div>
        </div>
        <div className="flex justify-end my-4 lg:mt-8">
          <Button
            as={Link}
            href="/about"
            className="mx-2 bg-cyan-500 text-clr-white font-medium"
          >
            Know more <Icons.ArrowRight />
          </Button>
          <Button
            className="mx-2 bg-clr-secondary text-clr-white font-medium"
            as={Link}
            href="https://drive.google.com/file/d/1wanGfOQJ1g48wF_NHP605LgSwqPvzLDu/view?usp=sharing"
            target="_blank"
          >
            Download CV <Icons.ArrowDownToLine />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
