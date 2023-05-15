// modules
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = ({ documents }) => {
  const getAmount = (category) => {
    return documents
      .filter((document) => document.category.name === category)
      .reduce((acc, cur) => acc + Number(cur.amount), 0);
  };

  const shoppingAmount = getAmount("Shopping");
  const mealAmount = getAmount("Meal");
  const groceryAmount = getAmount("Grocery");
  const recreationAmount = getAmount("Recreation");
  const utilityAmount = getAmount("Utility");
  const othersAmount = getAmount("Others");
  const totalAmount =
    shoppingAmount +
    mealAmount +
    groceryAmount +
    recreationAmount +
    utilityAmount +
    othersAmount;

  const data = {
    labels: ["Shopping", "Meal", "Grocery", "Recreation", "Utility", "Others"],
    datasets: [
      {
        label: " $",
        data: [
          shoppingAmount,
          mealAmount,
          groceryAmount,
          recreationAmount,
          utilityAmount,
          othersAmount,
        ],
        backgroundColor: [
          "#0095D7",
          "#9A57C0",
          "#00C9C8",
          "#ED4849",
          "#C66D00",
          "#3B4A3F",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] place-items-center gap-8">
      <div className="h-full w-full grid place-items-center">
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: true, text: `Total Spent: $${totalAmount}` },
            },
          }}
        />
      </div>
      <div className="h-full w-full grid place-items-center">
        <Doughnut
          data={data}
          options={{
            responsive: true,
            plugins: { legend: { position: "left" } },
          }}
        />
      </div>
    </div>
  );
};

export default Stats;
