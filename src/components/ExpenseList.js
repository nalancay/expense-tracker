// img
//import Trash from "assets/trash.svg";
// hooks
import { useFirestore } from "hooks/useFirestore";

const ExpenseList = ({ documents }) => {
  const { deleteDocument } = useFirestore();

  return (
    <ul>
      {documents.map((document) => (
        <li
          key={document.id}
          className="my-8 first:mt-0 mx-auto shadow-md p-4 md:p-5 pl-12 md:pl-16 flex items-center relative overflow-hidden"
        >
          <span
            className={`${document.category.bg} absolute top-0 left-0 text-white h-full grid place-items-center p-2 md:p-3`}
          >
            <img src={document.category.img} alt="" className="w-6" />
          </span>
          <p className="text-lg font-light">{document.name}</p>
          <p className="text-xl ml-auto font-semibold">${document.amount}</p>
          <img
            src="assets/trash.svg"
            alt=""
            className="ml-4 md:ml-8 h-6 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200"
            onClick={() => deleteDocument("expenses", document.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
