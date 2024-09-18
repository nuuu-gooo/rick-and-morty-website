import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoaderComp } from "./assets/LoaderComp/LoaderComp";
import "./App.css";
import GlobalLayout from "./Layouts/Global";

function App() {
  const HomePage = lazy(() => import("./Pages/Home"));
  const SingleCharacterPage = lazy(() => import("./Pages/SingleCharacter"));
  const EpsidoesPage = lazy(() => import("./Pages/EpisodesPage"));
  const DynamicEpisodePage = lazy(
    () => import("./Pages/EpisodesPage/DynamicEpisode")
  );

  const LocationsComp = lazy(() => import("./Pages/Locations"));

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <LoaderComp />
        </div>
      }
    >
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/singleCharacter/:singleCharacterId"
            element={<SingleCharacterPage />}
          />
          <Route path="/allEpisodesPage" element={<EpsidoesPage />} />
          <Route
            path="/allEpisodesPage/:episodeId"
            element={<DynamicEpisodePage />}
          />
          <Route path="/allLocationsPage" element={<LocationsComp />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
