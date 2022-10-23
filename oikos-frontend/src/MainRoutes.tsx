import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { PeoplePage } from "./pages/PeoplePage";

export const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PeoplePage />} />
      </Route>
    </Routes>
  );
};
