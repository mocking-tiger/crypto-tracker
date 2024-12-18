import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

export default function Chart({ coinId }: ChartProps) {
  const RECENT_14DAYS = -14;
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 5000,
    // }
  );
  const extractedData =
    data?.map((price) => price.close).slice(RECENT_14DAYS) ?? [];
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: extractedData ?? [],
            },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              categories: data
                ?.slice(RECENT_14DAYS)
                .map((price) =>
                  new Date(Number(price.time_close) * 1000)
                    .toUTCString()
                    .slice(0, 16)
                ),
            },
            yaxis: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
