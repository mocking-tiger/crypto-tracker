import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  return (
    <h1>
      Coin: {coinId}
      <a href="http://naver.com">hihihihi</a>
    </h1>
  );
}
