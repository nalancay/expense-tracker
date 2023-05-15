import { Fragment, useEffect, useState } from "react";
// hooks
import { useFirestore } from "hooks/useFirestore";

// modules
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

//utils
import { categories } from "utils/constants";

const ExpenseForm = ({ uid }) => {
  const DEFAULT_CATEGORY = categories[0];
  const myCollection = "expenses";
  const [name, setName] = useState("");
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [amount, setAmount] = useState("");

  const { addDocument, state } = useFirestore(myCollection);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      category,
      amount,
    });
  };

  useEffect(() => {
    if (state.success) {
      setName("");
      setCategory(DEFAULT_CATEGORY);
      setAmount("");
    }
  }, [state.success]);

  return (
    <>
      <h3 className="text-[#1f9751] mb-5 font-bold text-2xl xl:text-3xl">
        Add Expenses
      </h3>
      <form className="p-5 mb-5 bg-[#1f9751] shadow-md" onSubmit={handleSubmit}>
        <label className="mt-0 mx-auto mb-5 block text-white">
          <span>Name: </span>
          <input
            type="text"
            className="block w-full p-3 mt-2 text-black"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="mt-0 mx-auto mb-5 block text-white">
          <span>Category: </span>
          <Listbox value={category} onChange={setCategory}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-pointer bg-white py-3 pl-3 pr-10 text-left">
                <span className="block truncate text-black">
                  {category.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1">
                  {categories.map((category, categoryIdx) => (
                    <Listbox.Option
                      key={categoryIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-[#d5fadd] text-[#1f9751]" : "text-black"
                        }`
                      }
                      value={category}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-semibold" : "font-light"
                            }`}
                          >
                            {category.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1f9751]">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </label>
        <label className="mt-0 mx-auto mb-5 block text-white">
          <span>Amount ($): </span>
          <input
            type="number"
            className="block w-full p-3 mt-2 text-black"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className="text-white font-bold border-2 border-white py-2 px-3 bg-transparent cursor-pointer block w-full hover:bg-white hover:text-[#1f9751] transition-all duration-200">
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
