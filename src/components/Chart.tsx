import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "../atom";
import { useRecoilValue } from "recoil";

interface IHistory {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

const Chart = () => {
  const { coinId } = useParams();
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistory[]>(
    ["coinHistory", coinId],
    () => fetchCoinHistory(coinId)
  );
  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <ApexChart
        type="line"
        series={[
          {
            name: "Price",
            data: data?.map((price) => Number(price?.close)) as number[],
          },
        ]}
        options={{
          theme: {
            mode: isDark ? "dark" : "light",
          },
          colors: ["#fdcb6e"],
          chart: {
            toolbar: {
              show: false,
            },
            height: 300,
            width: 500,
            background: "transparent",
          },
          grid: {
            show: false,
          },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          markers: {
            size: 6,
            strokeWidth: 3,
            strokeOpacity: 0,
            colors: ["#fdcb6e"],
            strokeColors: ["#000"],
          },
          tooltip: {
            style: {
              fontFamily: "HBIOS-SYS, sans-serif",
              fontSize: "14px",
            },
            x: {
              show: false,
            },
            y: {
              formatter: (value) => {
                return value > 2
                  ? `$${value.toLocaleString()}`
                  : `$${value.toFixed(4)}`;
              },
            },
            onDatasetHover: { highlightDataSeries: true },
          },
          xaxis: {
            type: "datetime",
            labels: {
              datetimeFormatter: { day: "MMM dd" },
              style: {
                fontFamily: "HBIOS-SYS, sans-serif",
                fontSize: "14px",
              },
            },
            categories: data?.map((price) =>
              new Date(price.time_close * 1000).toISOString()
            ),
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              style: {
                fontFamily: "HBIOS-SYS, sans-serif",
                fontSize: "14px",
              },
              formatter: (value) => {
                return value > 2
                  ? `$${value.toLocaleString()}`
                  : `$${value.toFixed(4)}`;
              },
            },
            axisBorder: {
              show: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
