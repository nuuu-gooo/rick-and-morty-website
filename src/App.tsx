import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoaderComp } from "./assets/LoaderComp/LoaderComp";
import GlobalLayout from "./Layouts/Global";
import { EnterCharacterPage } from "./Pages/EnterCharacterPage/EnterCharacterPage";
import "./App.css";

function App() {
  const HomePage = lazy(() => import("./Pages/Home"));
  const SingleCharacterPage = lazy(() => import("./Pages/SingleCharacter"));
  const EpsidoesPage = lazy(() => import("./Pages/EpisodesPage"));
  const DynamicLocation = lazy(
    () => import("./Pages/Locations/DynamicLocation")
  );
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

          <Route
            path="/enterCharacter/:enterCharacterId"
            element={<EnterCharacterPage />}
          />

          <Route path="/allEpisodesPage" element={<EpsidoesPage />} />

          <Route
            path="/allEpisodesPage/:episodeId"
            element={<DynamicEpisodePage />}
          />
          <Route path="/allLocationsPage" element={<LocationsComp />} />
          <Route
            path="/allLocations/:singleLocationId"
            element={<DynamicLocation />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
