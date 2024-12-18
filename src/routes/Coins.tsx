import styled from "styled-components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const ThemeButton = styled.button`
  background-color: whitesmoke;
  color: ${(props) => props.theme.accentColor};
  position: absolute;
  top: 33%;
  right: 0;
`;

// 스타일드 컴포넌트 영역 끝

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins, {
    staleTime: 1000 * 60 * 60,
  });

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>가상화폐 트래커</title>
        </Helmet>
        <Header>
          <Title>코인 목록</Title>
          <ThemeButton onClick={() => {}}>theme</ThemeButton>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                    alt="coin-image"
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </HelmetProvider>
  );
}
