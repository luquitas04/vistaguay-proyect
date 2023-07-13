import './piechart.css'
import { Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

const beneficios = [10,56,80];
const meses = ["Enero","Febrero","Marzo"]

const miData = {
  labels: meses,
  datasets: [
    {
      label:"Beneficios",
      data: beneficios,
      backgroundColor: [
        "rgba(255,1,132,0.5)",
        "rgba(244,0,10,0.5)",
        "rgba(120,99,132,0.5)",
      ],
      borderColor: [
        "rgba(255,1,132,0.5)",
        "rgba(244,0,10,0.5)",
        "rgba(120,99,132,0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const misOptions = {
  responsive: true,
  animation: false,
  plugins: {
    title: {
      display: true,
      text: 'Gráfico de Beneficios'
    }
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Meses'
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Beneficios'
      }
    }
  }
};
  
export const Piechart = () => {
  return <Pie data={miData} options={misOptions} />
}
