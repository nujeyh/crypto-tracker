import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

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
            data: data?.map((price) => Number(price.close)) as number[],
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            toolbar: {
              show: false,
            },
            height: 500,
            width: 500,
          },
          grid: {
            show: false,
          },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          markers: {
            size: 3,
          },
        }}
      />
    </div>
  );
};

export default Chart;
