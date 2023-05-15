import Stats from "./Stats";

export const ExpenseStatistics = ({ documents }) => (
  <div className="max-w-[1080px] my-8 md:my-16 p-5 xl:p-0 mx-auto">
    <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
      Expense Statistics
    </h3>
    {documents && <Stats documents={documents} />}
  </div>
);
