import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export const ManageExpenses = ({ error, documents, user }) => (
  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-[1080px] my-8 md:my-16 p-5 xl:p-0 mx-auto">
    <div className="order-2 md:order-1 md:pr-8">
      <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
        Expense List
      </h3>
      {error && <p>{error}</p>}
      {documents && <ExpenseList documents={documents} />}
    </div>
    <div className="order-1 md:order-2 mb-8 md:pl-8">
      <ExpenseForm uid={user.uid} />
    </div>
  </div>
);
