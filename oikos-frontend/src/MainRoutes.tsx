import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { LifeGroupDetail } from "./pages/lifegroup/LifeGroupDetail";
import { LifeGroupDetailMembers } from "./pages/lifegroup/LifeGroupDetailMembers";
import { LifeGroupPage } from "./pages/lifegroup/LifeGroupPage";
import { MainLayout } from "./pages/MainLayout";
import { PeopleDetail } from "./pages/people/PeopleDetail";
import { PeoplePage } from "./pages/people/PeoplePage";

export const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="people/:id" element={<PeopleDetail />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="lifegroup/:id" element={<LifeGroupDetail />} />
        <Route
          path="lifegroup/:id/members"
          element={<LifeGroupDetailMembers />}
        />
        <Route path="lifegroup" element={<LifeGroupPage />} />
      </Route>
    </Routes>
  );
};
