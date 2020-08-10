const LatestPrice = ({ coin = "", price = "" }) =>
  price !== "" && (
    <h4>
      Latest {coin} Price: ${price}
    </h4>
  );

export default LatestPrice;
