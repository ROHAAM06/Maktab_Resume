import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import data from "../data.json";
import "./AboutSection.css";
import Fullpage from "../components/Fullpage";
import DownImg from "../components/DownImg.js";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <Fullpage className="second" background={this.props.background}>
          <h3 style={{ color: this.props.color }}>{data.sections[0].title}</h3>
          <div className="paragraph" style={{ color: this.props.color }}>
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>

        <Element name="Skills" className="element" />
      </div>
    );
  }
}

export default AboutSection;
