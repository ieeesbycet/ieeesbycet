import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import Img from "next/image";

export default function Header() {
  return (
    <section>
      <div className="p-12 flex items-center justify-center">
        <div className="w-full relative max-w-screen-xl w-auto flex items-center justify-center flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <img
              src="/header-bg.jpeg"
              className="w-full h-auto rounded-lg shadow-xl"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center justify-center bg-white bg-opacity-80 h-full w-full lg:py-0 py-6">
              <div className="lg:px-8 h-full flex items-start justify-between flex-col">
                <h1 className="font-black lg:text-6xl text-3xl">
                  Always with tomorrow, forever and ever.
                </h1>
                <Link href="#about" passHref>
                  <a className="px-4 py-2 bg-blue-800 font-bold mt-11 text-3xl text-white tracking-wide flex items-center justify-center shadow-lg hover:bg-blue-900">
                    <span>Explore!</span>
                    <span className="ml-2">
                      <FaAngleDoubleRight />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
