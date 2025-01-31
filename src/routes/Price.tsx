import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PriceData } from "./Coin";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  li {
    font-size: 24px;
  }
`;

export default function Price() {
  const { coinId } = useParams();
  const { data } = useQuery<PriceData>(["tickers", coinId]);
  const {
    quotes: { USD },
  } = data as PriceData;
  const changes = [
    { label: "30분 전에 비해", value: USD?.percent_change_30m },
    { label: "1시간 전에 비해", value: USD?.percent_change_1h },
    { label: "6시간 전에 비해", value: USD?.percent_change_6h },
    { label: "12시간 전에 비해", value: USD?.percent_change_12h },
    { label: "1일 전에 비해", value: USD?.percent_change_24h },
    { label: "7일 전에 비해", value: USD?.percent_change_7d },
    { label: "30일 전에 비해", value: USD?.percent_change_30d },
    { label: "1년 전에 비해", value: USD?.percent_change_1y },
  ];

  return (
    <div>
      <Ul>
        {changes.map(({ label, value }, index) => (
          <li key={index}>
            {label}{" "}
            <span style={{ color: value > 0 ? "red" : "blue" }}>{value}%</span>
          </li>
        ))}
      </Ul>
    </div>
  );
}
