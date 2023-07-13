import "./barchart.css"
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const beneficios = [0,56,20,36,80,40,30,-20,25,30,12,60];
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ]

const miData = {
  labels: meses,
  datasets: [
    {
      label:"Beneficios",
      data: beneficios,
      backgroundColor: "rgba(255,99,132,0.5)",
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

export const Barchart = () => {
  return <Bar data={miData} options={misOptions} />
}
