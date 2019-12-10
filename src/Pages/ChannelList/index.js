import React from "react";
import { Link } from "react-router-dom";

import HelperFunction from "../../Components/Helper";

import "./style.css";

const ScheduleCard = props => {
  console.log(props);
  let channelName = props.match.params.name;
  let filterList = props.data.filter(i =>
    i.show.network ? i.show.network.name === channelName : false
  );
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="fixedHeight">
              <table className="table" id="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Show Start</th>
                    <th>Show End</th>
                    <th>Show Description</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Link to={`/detail/${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.airtime}</td>
                        <td>
                          {HelperFunction.getHourFromMin(
                            HelperFunction.addTime(item.airtime, item.runtime)
                          )}
                        </td>
                        <td>
                          <span>
                            <div
                              dangerouslySetInnerHTML={{ __html: item.summary }}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleCard;
