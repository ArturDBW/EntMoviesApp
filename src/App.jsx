import Navigation from "./components/Navigation";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <main className="main">
        <h1>Main </h1>
      </main>
    </div>
  );
}
