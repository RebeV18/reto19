import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Loading } from "../components/Loading";
import Formulario from "../components/Formulario";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
