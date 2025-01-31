import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

export default function Router() {
  return (
    // v5 까지의 방식 Switch가 Router로 대체되면서 순차적으로 읽는게 아닌 일치하는 url만 식별.
    // <BrowserRouter>
    //   <Switch>
    //     <Route path={"/:coinId"}>
    //       <Coin />
    //     </Route>
    //     <Route path={"/"}>
    //       <Coins />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        {/* v6이상에서 outlet을 활용해서 네스티드 라우팅 하는법 */}
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
