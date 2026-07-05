import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/shared/Home";
import Jobs from "../pages/shared/Jobs";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EmployerDashboard from "../pages/employer/Dashboard";
import JobSeekerDashboard from "../pages/jobseeker/Dashboard";
import NotFound from "../pages/shared/NotFound";
import JobDetails from "../pages/shared/JobDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;