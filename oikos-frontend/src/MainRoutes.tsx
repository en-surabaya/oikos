import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { PeopleDetail } from "./pages/people/PeopleDetail";
import { PeoplePage } from "./pages/people/PeoplePage";

export const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="people/:id" element={<PeopleDetail />} />
        <Route path="people" element={<PeoplePage />} />
      </Route>
    </Routes>
  );
};
