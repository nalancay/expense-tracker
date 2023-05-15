import { useState } from "react";

// components
import { ExpenseStatistics } from "components/ExpenseStatistics";
import { ListOrStatsButton } from "components/ListOrStatsButton";

// hooks
import { useCollection } from "hooks/useCollection";
import { useAuthContext } from "hooks/useAuthContext";
import { ManageExpenses } from "components/ManageExpenses";

const Home = () => {
  const [toggleState, setToggleState] = useState(false);
  const { user } = useAuthContext();

  const myCollection = "expenses";
  const myQuery = ["uid", "==", user.uid];
  const myOrder = ["createdAt", "desc"];
  const { documents, error } = useCollection({
    myCollection,
    myQuery,
    myOrder,
  });

  return (
    <>
      {toggleState ? (
        <ExpenseStatistics documents={documents} />
      ) : (
        <ManageExpenses error={error} documents={documents} user={user} />
      )}
      <ListOrStatsButton
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
    </>
  );
};

export default Home;
