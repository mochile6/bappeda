import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";
import axios from "axios";

import { connect } from "react-redux";
import { RESOURCE_NAME } from "../utils/constant";
import { getAllData as _getAllData } from "../store/actions/resources";
import { getResources } from "../store/selector/resources";
import { getToken } from "../utils/cookieUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function Grafik() {
  const token = getToken();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState(options);

  const chartRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get("http://localhost:3000/api/anggarans", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [grafikTransaksi, setGrafikTransaksi] = useState({
    grafikTransaksi: [
      {
        bidangurusan: "",
        jumlah: "",
      },
    ],
  });
  const fetchGrafikTransaksi = async () => {
    await axios.get("http://localhost:3000/api/anggarans").then((response) => {
      setGrafikTransaksi(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchGrafikTransaksi();
  }, []);
  const labels = _.map(
    grafikTransaksi.grafikTransaksi,
    (item) => item.bulan + " " + item.year
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Grafik Transaksi",
        data: _.map(
          grafikTransaksi.grafikTransaksi,
          (transaksi) => transaksi.total_harga
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(grafikTransaksi);
  return <Line options={options} data={data} />;
}
