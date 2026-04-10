import { ResultSummary } from "components";

export default function App() {
  return (
    <div className="bg-pale-blue relative grid h-dvh w-full grid-cols-1 place-content-center px-6.75">
      <main className="mx-auto w-full max-w-184">
        <ResultSummary />
      </main>
      <footer className="text-preset-2 text-dark-gray-blue absolute bottom-4 w-full text-center font-light">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </div>
  );
}
