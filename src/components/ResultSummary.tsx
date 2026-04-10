import { data } from "data";

export default function ResultSummary() {
  return (
    <article className="sm:box-shadow-1 mb-20 flex flex-col justify-center gap-6 bg-white sm:flex-row sm:gap-0 sm:rounded-4xl">
      <section className="gradient-1 box-shadow-1 text-light-lavender grid place-content-center gap-6 rounded-b-4xl pt-6 pb-10 text-center sm:max-w-92 sm:shrink-0 sm:gap-7 sm:rounded-4xl sm:pt-9.5 sm:pb-13.75">
        <p className="sm:text-heading-m text-lg font-bold sm:mb-1.75">
          Your Result
        </p>
        <div className="gradient-2 mx-auto grid size-35 place-content-center rounded-full sm:size-40">
          <h1 className="sm:text-heading-xl text-[3.5rem] leading-[72px] font-extrabold text-white">
            76
          </h1>
          <p className="sm:text-body-bold text-base font-bold opacity-52">
            of 100
          </p>
        </div>
        <div className="mx-auto w-3/4 space-y-2">
          <h2 className="sm:text-heading-l text-2xl font-bold text-white">
            Great
          </h2>
          <p className="sm:text-body text-base font-medium sm:px-2">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>
      <section className="w-full space-y-6 px-8 sm:space-y-7 sm:px-10 sm:pt-9.5 sm:pb-11.5">
        <h2 className="text-dark-gray-blue sm:text-heading-m text-lg font-bold">
          Summary
        </h2>
        <ul className="grid gap-4 px-0.5 sm:px-0">
          {data.map((item) => (
            <li
              key={item.category}
              className={`flex items-center justify-between rounded-xl px-4 py-4.25 text-base ${item.color}`}
            >
              <div className="flex gap-3">
                <item.icon />
                <span className="sm:text-body font-medium">
                  {item.category}
                </span>
              </div>
              <p className="text-dark-gray-blue sm:text-body-bold space-x-2 font-bold">
                <span>{item.score}</span>
                <span className="opacity-50">/ 100</span>
              </p>
            </li>
          ))}
        </ul>
        <button className="bg-dark-gray-blue text-body-bold hover:gradient-1 w-full cursor-pointer rounded-full p-4 px-0.5 text-white transition-all duration-300 sm:mt-3.25">
          Continue
        </button>
      </section>
    </article>
  );
}
