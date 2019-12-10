import React from "react";
import { Link } from "react-router-dom";

class ShowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel: [] };
  }

  componentDidMount() {
    this.setState({ channel: this.props.channel, filter: this.props.channel });
  }

  searchTerm = event => {
    this.dataSource = [...this.state.filter];
    let searchInput = event.target.value.toLowerCase();
    console.log(searchInput);
    let tableData = this.dataSource.filter(item => {
      return (
        String(item)
          .toLowerCase()
          .toString()
          .search(searchInput) !== -1
      );
    });

    if (searchInput == "") {
      tableData = this.dataSource;
    }
    if (tableData.length > 0) {
      this.setState({ channel: tableData });
    } else {
      this.setState({ channel: [] });
    }
    console.log(tableData);
  };
  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <main className="et-main">
          <section style={{ height: "80vh" }}>
            <div className="row">
              <div className="col-12" style={{ textAlign: "center" }}>
                <h1>Channel List</h1>
              </div>
            </div>
            <input
              style={{ width: "20%", marginLeft: "2%" }}
              type="text"
              className="searchBar"
              placeholder="Search..."
              onKeyUp={this.searchTerm}
            />
            <div className="container">
              <div className="row">
                {this.state.channel.map(i => {
                  return (
                    <div className="col-3 col-s-6 col-xs-12" key={i}>
                      <Link to={`/channel/${i}`}>
                        <div className="card">
                          <div className="card-body">
                            <div className="icon  icon-shape icon-shape-primary rounded-circle mb-4">
                              <img
                                src="//tvscheduleindia.com/img/TVSi_logo.png"
                                height="30px"
                                width="30px"></img>
                            </div>
                            <div className="">{i}</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/* <div className="row">
                        <div className="col-12">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                            item => {
                              return (
                                <div className="col-4 col-s-6 col-xs-12">
                                  <div
                                    className="card"
                                    style={{
                                      width: "90%",
                                      height: "150px"
                                    }}></div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div> */}
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ShowList;
