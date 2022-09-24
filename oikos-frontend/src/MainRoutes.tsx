import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const MainRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};
