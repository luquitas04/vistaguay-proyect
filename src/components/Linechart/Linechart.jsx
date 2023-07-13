import "./linechart.css"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const beneficios = [0,56,20,36,80,40,30,-20,25,30,12,60];
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ]

const miData = {
  labels: meses,
  datasets: [
    {
      label:"Beneficios",
      data: beneficios,
      tension: 0,
      fill: true,
      borderColor: "rgb(255,99,132)",
      backgroundColor: "rgba(255,99,132,0.5)",
      pointRadius: 5,
      pointBorderColor : "rgb(255,99,132)",
      pointBackgroundColor : "rgb(255,99,132)",
    },
  ],
};

const misOptions = {
  responsive: true,
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

export const LineChart = () => {
  return <Line data={miData} options={misOptions} />
}
