import React from "react";
import Img from "next/image";

export default class ExecomCommittee extends React.Component {
  state = {
    members: [],
  };
  async componentDidMount() {
    const response = await fetch("/data.json");
    const members = await response.json();
    this.setState({ members });
  }
  render() {
    return (
      <section
        className="lg:p-12 bg-gray-200 flex items-center justify-center"
        id="execom-committee"
      >
        <div className="max-w-screen-xl">
          <div className="py-12 flex items-center justify-center font-black tracking-wide">
            <h1 className="text-4xl px-2 text-center">
              Execom Committee Members
            </h1>
          </div>
          <div className="flex items-center justify-left flex-wrap">
            {this.state.members.map((data) => {
              return <Member data={data} key={data.filename} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

function Member({ data }) {
  const size = 170;
  return (
    <div className="lg:w-1/5 w-1/2">
      <div className="flex items-center justify-center flex-col lg:py-6 py-12 text-center">
        <div className="py-1">
          <Img
            src={`/members/execom_members/${data.filename}`}
            height={size}
            width={size}
            className="shadow-md border rounded-full"
            alt=""
          />
        </div>
        <div className="text-xl font-bold mt-1">{data.name}</div>
        <div className="py-1 font-medium text-gray-600">{data.position}</div>
      </div>
    </div>
  );
}

