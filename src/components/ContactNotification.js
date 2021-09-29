import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function ContactNotification() {
  return (
    <section
      className="lg:p-12 flex items-center justify-center"
      id="contact-us"
    >
      <div className="flex items-center justify-center bg-blue-600 lg:rounded-lg p-5 px-12 flex-col lg:flex-row max-w-screen-xl w-full">
        <div className="lg:w-1/2 w-full">
          <div className="py-12">
            <h1 className="font-bold tracking-wide text-4xl text-white mb-3">
              Interested in our branch?
            </h1>
            <p className="font-bold text-gray-800 text-xl">Leave a quote.</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full flex items-end justify-end">
            <Link href="mailto:ieee@ycet.ac.in" passHref>
              <a className="bg-blue-800 px-5 py-2 rounded-md text-gray-50 text-xl hover:bg-blue-900 flex items-center justify-center">
                <span className="mr-4">
                  <FaEnvelope />
                </span>
                <span>Write to Us</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
