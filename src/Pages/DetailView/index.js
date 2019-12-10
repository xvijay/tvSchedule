import React from "react";
import "./style.css";

const detailView = props => {
  console.log(props);
  let id = props.match.params.id;
  console.log(id);
  let data = props.data.find(i => Number(i.id) === Number(id));
  console.log(props.data.find(i => i.id == 1760877));
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="row detailCard">
            <div
              className="col-4 col-xs-6"
              style={{
                height: "300px",
                padding: "unset",
                background: `url(${data.show.image.medium})`
              }}></div>
            <div className="col-8 col-xs-6">
              <div className="row">
                <div
                  className="col-12"
                  style={{ fontSize: "2rem", fontWeight: "900" }}>
                  {data.name}
                </div>
                <div className="col-3 col-s-6" style={{ padding: "unset" }}>
                  <span className="cssPill">Season {data.season}</span>
                </div>
                <div className="col-3 col-s-6" style={{ padding: "unset" }}>
                  <span className="cssPill">{data.show.status}</span>
                </div>
                <div className="col-3 col-s-6" style={{ padding: "unset" }}>
                  <span className="cssPill">{data.show.type}</span>
                </div>
                <div className="col-3 col-s-6" style={{ padding: "unset" }}>
                  <span className="cssPill">{data.show.language}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailView;
