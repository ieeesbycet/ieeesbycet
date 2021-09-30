import { FaCopyright, FaHeart } from "react-icons/fa";
import links from "./data/footer-links.json";
import Img from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 p-3 lg:p-12 flex items-center justify-center flex-col">
      <div className="flex items-start justify-center max-w-screen-xl lg:flex-row flex-col">
        {links.map(({ name, links }) => {
          return (
            <div className="lg:w-1/3 w-full" key={"link-section" + name}>
              <div className="flex items-start justify-center flex-col">
                <h1 className="uppercase text-xl font-bold text-gray-600 py-4">
                  {name}
                </h1>
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.link + link.name}>
                        <a
                          href={link.link}
                          className="text-gray-900 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t my-12 w-full"></div>
      <div className="flex items-center justify-between max-w-screen-xl w-full lg:flex-row flex-col">
        <div className="lg:w-1/3 w-full flex items-center lg:justify-start justify-center py-3">
          <img
            src="/IEEE-Logo.png"
            layout="fill"
            alt=""
            style={{ height: 60 }}
          />
        </div>
        <div className="flex lg:w-1/3 w-full items-center justify-center py-3">
          Made with &nbsp;
          <i className="text-red-600">
            <FaHeart />
          </i>{" "}
          &nbsp; at YCET
        </div>
        <div className="font-bold flex lg:w-1/3 w-full items-center lg:justify-end justify-center py-3">
          <FaCopyright /> &nbsp;2021 IEEE YCET SB. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
