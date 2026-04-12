import { ResultSummary } from "components";

export default function App() {
  return (
    <div className="bg-pale-blue relative grid min-h-dvh w-full grid-cols-1 grid-rows-[1fr_auto] sm:place-content-center">
      <main className="mx-auto mt-9 w-full max-w-184 place-self-center">
        <ResultSummary />
      </main>
      <footer className="text-dark-gray-blue mt-auto w-full pb-4 text-center text-sm font-light">
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
