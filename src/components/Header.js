import React, { useState } from "react";
import { setStartDay } from "../redux/actions.js"
import { connect } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

function Header_({ setStartDay, months, startDay }) {
  
  
  const [show, setShow] = useState(false);

  return (
    <div className="headerMain">
      <NavLink to="/taskcreator">
        <button className="currMonthInput">Новая задача</button>
      </NavLink>
      <div className="currYear" style={{marginLeft:"20px"}}>{moment(startDay).clone().format("YYYY")}</div>
      <label className="currMonthLabel">
        <input
          type="button"
          value={moment(startDay).clone().format("MMMM")}
          name="currMonth"
          className="currMonthInput"
          onClick={() => setShow((prev) => !prev)}
        />
      </label>
      <div
        className="allMonths"
        style={{
          height: show ? "202px" : 0,
          border: show ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
          overflowY: "scroll",
        }}
      >
        {months.map((month) => (
          <label className="allMonthsLable" key={moment(month).clone().format("MMMM")}>
            <div className="choseTheMonth">{moment(month).clone().format("MMMM")}</div>
            <input
              type="radio"
              className="theMonthInputeCheckPoint"
              name="theMonthInput"
              value={month}
              onChange={(e) => setStartDay(e.target.value)}
              onClick={() => setShow((prev) => !prev)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    months: state.months,
    startDay: state.startDay
  };
};
const mapDispatchToProps = {
    setStartDay
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(Header_);