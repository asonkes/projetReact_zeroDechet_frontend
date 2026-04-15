import { Header } from "./layout/components/Header";
import { Footer } from "./layout/components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-full flex flex-col flex-1 mt-17">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
