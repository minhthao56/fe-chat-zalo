import React, { useEffect } from "react";
import "./Home.scss";
import { Hometitle, HomeImage } from "../../components";
import { registerPush } from "../../helpers/registerPush";

export default function Home() {
  useEffect(() => {
    registerPush();
  }, []);
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
