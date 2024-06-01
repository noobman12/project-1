import { Header } from "./Head";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className='' style={{ backgroundColor: "white" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
