import React from "react";

const HelperFunction = {
  formatDate: function(date = "") {
    if (date) {
      var today = new Date(Number(date));
    } else {
      var today = new Date();
    }
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return `${dd}/${mm}/${yyyy}`;
  },

  addTime: function(time, minToAdd = 0) {
    let split = time.split(":");
    let inMinute = split[0] * 60 + parseFloat(split[1]);
    let endTime = inMinute + parseFloat(minToAdd);
    return endTime;
  },
  getHourFromMin: function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rHours = Math.floor(hours);
    var minutes = (hours - rHours) * 60;
    var rMinutes = Math.round(minutes);
    return rHours + ":" + rMinutes;
  }
};

export default HelperFunction;
