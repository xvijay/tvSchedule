import React from "react";

const header = props => {
  return (
    <section className="et-hero-tabs" ref={props.nav}>
      <h1 style={{ marginBottom: "1%" }}>
        <img src="/image/television.png" style={{ height: "60px" }}></img> US TV
        Schedule
      </h1>
      <h6 style={{ margin: "unset" }}>One Stop Destination for TV Schedule</h6>
      <button className="headerButton" onClick={props.scrollFunction}>
        Browse List
      </button>
    </section>
  );
};

export default header;
