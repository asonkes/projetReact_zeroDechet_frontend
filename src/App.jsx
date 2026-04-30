import { Header } from "./layout/components/Header";
import { Footer } from "./layout/components/Footer";
import { Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-full flex flex-col flex-1 mt-3-75">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
