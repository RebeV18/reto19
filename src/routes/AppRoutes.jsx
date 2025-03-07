import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Loading } from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
      <Footer />
    </>
  );
};
