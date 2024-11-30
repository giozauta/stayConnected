//import { lazy } from "react";

import Search from "../components/search/search";
import Leaderboard from "../components/leaderboard/leaderboard";
import Questions from "../components/questions/questions";

//const LazyCardSection = lazy(() => import("../card-list/card/card"));

const HomeView = () => {
  return (

    <>
      <div className="flex gap-10">
        <div className="w-3/5">
          <Search />
          <Questions width={"w-full"} />
        </div>
        <Leaderboard />
      </div>
    </>
  );
};

export default HomeView;
