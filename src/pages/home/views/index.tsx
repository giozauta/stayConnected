//import { lazy } from "react";

import Leaderboard from "../components/leaderboard/leaderboard";
import Questions from "../components/questions/questions";

//const LazyCardSection = lazy(() => import("../card-list/card/card"));

const HomeView = () => {
  return (
    <>
      <div className="flex gap-10">
        <Questions width={"w-3/4"} />
        <Leaderboard />
      </div>
    </>
  );
};

export default HomeView;
