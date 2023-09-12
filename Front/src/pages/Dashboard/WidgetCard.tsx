import { useEffect, useState, useRef } from "react";
import "./Dashboard.scss";
// import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
const WidgetCard = ({ index }) => {
    const widget = true;
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const selectWidget = index; // Utilisez l'index comme valeur de selectWidget
  
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  useEffect(() => {
    let newChart = null; // Déclarez newChart en dehors de la portée du if

    if (widget) {
      // Créer un nouveau graphique lorsque le composant est monté
      const data = [
        {
            type:"doughnut",
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
                
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3], // Taille de chaque partie dans le diagramme
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Couleur de chaque partie dans le diagramme même ordre que la taille
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        {
            type:"bar",
            labels,
            datasets: [
                
                {
                    label: 'Dataset 1',
                    data: [100, 200, 300, 400, 500, 600, 700], // Données fictives pour Dataset 1
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: [700, 600, 500, 400, 300, 200, 100], // Données fictives pour Dataset 2
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
          },
          {
            type:"line",
            labels,
            datasets: [
              {
                fill: true,
                label: 'Dataset 1',
                data: [100, 200, 300, 400, 500, 600, 700],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
              {
                fill: true,
                label: 'Dataset 2',
                data: [700, 600, 500, 400, 300, 200, 100],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          },
           {
            type:"radar",
            labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
            datasets: [
              {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          {
            type:"chart",
            labels,
            datasets: [
              {
                type: 'line' as const,
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [100, 200, 300, 400, 500, 600, 700],
              },
              {
                type: 'bar' as const,
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [700, 600, 500, 400, 300, 200, 100],
                borderColor: 'white',
                borderWidth: 2,
              },
              {
                type: 'bar' as const,
                label: 'Dataset 3',
                backgroundColor: 'rgb(53, 162, 235)',
                data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
              },
            ],
          },
          {
            type:"line",
            labels,
            datasets: [
                {
                    fill: true,
                    label: 'Dataset 1',
                    data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                    fill: true,
                    label: 'Dataset 2',
                    data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        }
          
      ];
      
  
      const ctx = chartRef.current.getContext("2d");
  
      // Vérifier si un graphique existe déjà
      if (chartData) {
        // Détruire le graphique existant
        chartData.destroy();
      }
  
      // Créer un nouveau graphique
      newChart = new Chart(ctx, {
        type: data[selectWidget].type,
        data: data[selectWidget],
      });
  
      // Mettre à jour le state avec le nouveau graphique
      setChartData(newChart);
    }
  
    // Détruire le graphique lorsque le composant est démonté
    return () => {
      if (newChart) { // Utilisez newChart ici au lieu de chartData
        newChart.destroy();
      }
    };
  }, [widget]);
  
  return (
    <>
      <section className="widget--card__container">
        {!widget ? (
          <svg className="icon icon-plus">
            <use className="svg-icon" xlinkHref="#icon-plus"></use>
          </svg>
        ) : 
        <div>
          <canvas ref={chartRef} />
        </div>
        }
      </section>
    </>
  );
};

export default WidgetCard;
