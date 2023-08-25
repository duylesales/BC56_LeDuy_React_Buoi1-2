import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";

export default class Ass_Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
