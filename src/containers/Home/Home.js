import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./Home.scss";
import { Hometitle, HomeImage } from "../../components";
import { registerPush } from "../../helpers/registerPush";
import { ListConversation, HeaderMain } from "../../components";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  useEffect(() => {
    registerPush();
  }, []);
  return (
    <div className="home">
      {isMobile ? (
        <>
          <HeaderMain type={2} detailRoom={{}} title="List conversations" />
          <ListConversation />
        </>
      ) : (
        <>
          <div className="home__title">
            <Hometitle />
          </div>
          <div>
            <HomeImage />
          </div>
        </>
      )}
    </div>
  );
}
