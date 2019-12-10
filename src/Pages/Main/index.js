import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import ScheduleCard from "../ChannelList";
import ShowList from "../ShowList";
import DetailView from "../DetailView";
class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], channel: [] };
  }

  componentDidMount() {
    // let thisSTATE = this.state.data;

    axios
      .get("https://api.tvmaze.com/schedule?country=US")
      .then(res => {
        let channelName = [];
        res.data.map(item =>
          item.show.network ? channelName.push(item.show.network.name) : null
        );
        this.setState({ channel: [...new Set(channelName)], data: res.data });
      })
      .catch(function(error) {
        // handle error
      })
      .finally(function() {
        // thisSTATE = data;
      });
  }

  render() {
    return (
      <Switch>
        {this.state.channel.length > 0 ? (
          <Route
            exact
            path="/"
            render={props => (
              <ShowList {...props} channel={this.state.channel} />
            )}></Route>
        ) : (
          "Loading"
        )}
        {this.state.data.length > 0 ? (
          <Route
            path="/channel/:name"
            render={props => (
              <ScheduleCard {...props} data={this.state.data} />
            )}></Route>
        ) : (
          "Loading...."
        )}
        {this.state.data.length > 0 ? (
          <Route
            path="/detail/:id"
            render={props => (
              <DetailView {...props} data={this.state.data}></DetailView>
            )}></Route>
        ) : (
          "Loading..."
        )}
      </Switch>
    );
  }
}

export default MainComponent;
