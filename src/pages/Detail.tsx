import { useParams } from "react-router-dom";

const Detail = () => {
  const { coinId } = useParams();

  return <div>{coinId}</div>;
};

export default Detail;
