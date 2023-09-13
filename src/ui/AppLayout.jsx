import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function AppLayout() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
