import React from "react";
import "./Home.scss";
import { Hometitle, HomeImage } from "../../components";

export default function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <Hometitle />
      </div>
      <div>
        <HomeImage />
      </div>
    </div>
  );
}
