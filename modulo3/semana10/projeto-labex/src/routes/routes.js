import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import ListTripsPage from "../pages/public/ListTripsPage";
import ApplicationFormPage from "../pages/public/ApplicationFormPage";
import LoginPage from "../pages/private/LoginPage";
import AdminHomePage from "../pages/private/AdminHomePage";
import TripDetailsPage from "../pages/private/TripDetailsPage";
import CreateTripPage from "../pages/private/CreateTripPage";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/trips" element={<ListTripsPage />} />
        <Route exact path="/signUp" element={<ApplicationFormPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/admin/home" element={<AdminHomePage />} />
        <Route exact path="/admin/details" element={<TripDetailsPage />} />
        <Route exact path="/admin/create" element={<CreateTripPage />} />
      </Routes>
    </BrowserRouter>
  );
}
