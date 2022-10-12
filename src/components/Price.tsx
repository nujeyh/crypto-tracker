import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Price = () => {
  const {
    state: {
      priceData: {
        quotes: { USD },
      },
    },
  } = useLocation();
  const percentChanges = [
    [USD.percent_change_15m, "15 Minutes"],
    [USD.percent_change_30m, "30 Minutes"],
    [USD.percent_change_1h, "1 Hours"],
    [USD.percent_change_6h, "6 Hours"],
    [USD.percent_change_12h, "12 Hours"],
    [USD.percent_change_24h, "24 Hours"],
    [USD.percent_change_7d, "7 Days"],
    [USD.percent_change_30d, "30 Days"],
    [USD.percent_change_1y, "1 Year"],
  ];

  console.log(USD);
  return (
    <Container>
      {percentChanges.map((percent) => {
        return (
          <Block>
            <div>{percent[1]}</div>
            <Percentage isUp={percent[0] > 0 ? 1 : percent[0] === 0 ? 0 : -1}>
              {percent[0]}%
            </Percentage>
          </Block>
        );
      })}
    </Container>
  );
};
const Container = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  margin-top: 20px;
`;
const Block = styled.li`
  background-color: ${(props) => props.theme.backgroundSubColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 15px 20px;
  text-align: center;
`;
const Percentage = styled.div<{ isUp: number }>`
  margin-top: 5px;
  color: ${(props) =>
    props.isUp === 1 ? "crimson" : props.isUp === -1 ? "royalblue" : "inherit"};
`;

export default Price;
