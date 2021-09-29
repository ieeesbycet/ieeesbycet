import React, { Children } from "react";
import NextLink from "next/link";
import Img from "next/image";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="px-8 py-4">
        <div className="flex items-center justify-between p-3 lg:flex-row flex-col">
          <div>
            <div className="flex items-center justify-center">
              <Img src="/logo-transparent.png" height="70" width="70" />
              <div className="ml-3 text-blue-900">
                <h1 className="font-black text-4xl">IEEE</h1>
                <h1 className="font-bold  text-xl">YCET SB</h1>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:py-0">
            {["About", "Execom Committee", "Contact Us"].map((link) => {
              const link_url = `/#${link
                .replace(" ", "-")
                .toLocaleLowerCase()}`;
              return (
                <Link href={link_url} key={link_url}>
                  {link}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <a className="text-blue-600 lg:mx-6 ml-4 hover:underline font-medium text-3sm">
        {children}
      </a>
    </NextLink>
  );
}
