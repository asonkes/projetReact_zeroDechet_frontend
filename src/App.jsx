import { Header } from "./layout/components/Header";
import { Footer } from "./layout/components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-1 max-w-full mt-17">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
