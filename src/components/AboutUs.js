import Link from "next/link";
import Img from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="flex items-center justify-center" id="about">
      <div className="w-full p-12 flex items-center justify-center lg:flex-row flex-col flex-wrap  max-w-screen-xl">
        <div className="lg:w-1/2 w-full h-full lg:text-right text-justify">
          <div className="lg:pr-5">
            <h1 className="font-black text-5xl italics">About Us</h1>
            <p className="text-gray-700 text-lg py-12">
              The IEEE Student Branch at “Younus College of Engineering and
              Technology” has led engineering students to success, and the YCET
              will continue to grow in strength over the next few years, with
              plans to hold technical and social events for the enrichment of
              college students. The events we have planned will be open to all
              engineering students. We intend to make students more involved in
              technological foundations for the betterment of society and the
              students&apos; futures. Our Student Branch intends to provide soft
              skill training for technical benifits.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block w-full h-full">
          <div className="heading sticky top-0">
            <div className="lg:pl-5 rounded-lg overflow-hidden relative">
              <Link href="https://goo.gl/maps/c1H9wPFj1pCTxqpz5" passHref>
                <div className="transition duration-150 ease-in-out top-0 bottom-0 backdrop-filter hover:backdrop-blur-lg right-0 left-5 rounded-lg bg-black opacity-0 hover:opacity-60 absolute flex items-center justify-center text-white text-3xl flex-col cursor-pointer">
                  <div className="text-7xl mb-12">
                    <FaLocationArrow />
                  </div>
                  <div className="">View on Map</div>
                </div>
              </Link>
              <img
                src="/ycet-on-map.png"
                className="w-full h-full border shadow-xl rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
