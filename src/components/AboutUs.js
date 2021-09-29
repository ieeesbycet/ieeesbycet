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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consectetur gravida massa, vitae ornare ex faucibus
              at. Maecenas ultrices, diam nec sagittis sollicitudin, velit
              lectus fermentum tellus, sit amet maximus enim magna eget eros.
              Morbi interdum vestibulum urna at aliquam. Fusce sed urna quis sem
              vestibulum varius. Morbi egestas ultrices fringilla. In
              condimentum gravida lobortis. Donec non sem orci. Pellentesque id
              leo nec odio ultricies scelerisque. Ut vitae molestie ligula.
              Etiam a nisl orci. Donec vehicula vehicula sagittis. Nulla
              ultrices viverra tincidunt. Donec sagittis sodales tellus nec
              aliquet. Aliquam nec tincidunt metus. Maecenas semper metus sit
              amet quam ornare euismod. Aenean non justo mollis, aliquet dui id,
              dignissim nibh.
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
