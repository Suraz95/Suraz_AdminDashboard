import React ,{useEffect} from "react";
import { defaults } from "chart.js/auto";
import { Line, Doughnut, Bar, Pie, Radar, PolarArea } from "react-chartjs-2";
import "./App.css";

import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        fontSize: 18,
        color: "#ffffff", 
      },
    },
    elements: {
      line: {
        borderColor: "#ffffff", // Set line color to white for Line chart
      },
    },
  };

  return (
    <div className="admin">
      <div className="side">
        <div className="elements" data-aos="slide-right">
          <h1>IT Solutions</h1>
          <br />
          <hr className="hrr" />
          <ul>
            <li className="ad">Admin</li>
            <li>Employees</li>
            <li>Salaries</li>
          </ul>
        </div>
      </div>
      <div className="dash">
        <div className="item1 card" data-aos="slide-up">
          <Doughnut
            data={{
              labels: ["Product A", "Product B", "Product C"],
              datasets: [
                {
                  label: "Sales",
                  data: [300, 200, 150],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Product Sales",
                },
              },
            }}
          />
        </div>
        <div className="item2 card" data-aos="slide-down">
          <Bar
            data={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  label: "Sales",
                  data: [150, 200, 250],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Monthly Sales",
                },
              },
            }}
          />
        </div>
        <div className="item3 card" data-aos="slide-left">
          <PolarArea
            data={{
              labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
              datasets: [
                {
                  label: "Task Distribution",
                  data: [20, 30, 15, 25, 10],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                  ],
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Task Distribution",
                },
              },
            }}
          />
        </div>
        <div className="item4 card" data-aos="zoom-in">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 500, 400, 600],
                  borderColor: "#FF6384", // Set line color for Revenue dataset
                },
                {
                  label: "Loss",
                  data: [100, 50, 300, 250, 150],
                  borderColor: "#36A2EB", // Set line color for Loss dataset
                },
                {
                  label: "Profit",
                  data: [10, 70, 30, 200, 10],
                  borderColor: "#FFCE56", // Set line color for Profit dataset
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Revenue and Profit/Loss",
                },
              },
              elements: {
                line: {
                  ...chartOptions.elements.line,
                  tension: 0.4, // Set the line tension here
                },
              },
            }}
          />
        </div>
        <div className="item5 card" data-aos="slide-right">
          <Pie
            data={{
              labels: ["Region A", "Region B", "Region C"],
              datasets: [
                {
                  label: "Sales",
                  data: [100, 250, 200],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Regional Sales",
                },
              },
            }}
          />
        </div>
        <div className="item6 card radar" data-aos="slide-up">
          <Radar
            data={{
              labels: [
                "Design",
                "Development",
                "Marketing",
                "Sales",
                "Support",
              ],
              datasets: [
                {
                  label: "Team Skills",
                  data: [80, 75, 90, 85, 70],
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  pointBackgroundColor: "rgba(255, 99, 132, 1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255, 99, 132, 1)",
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  text: "Team Skills",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
