export const ListOrStatsButton = ({ toggleState, setToggleState }) => (
  <img
    src={toggleState ? "assets/list.svg" : "assets/stats.svg"}
    alt=""
    className="fixed bottom-5 right-5 w-12 md:w-14 lg:w-16 cursor-pointer hover:scale-110 transition-all duration-200"
    onClick={() => setToggleState((prev) => !prev)}
  />
);
