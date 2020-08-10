const LatestPrice = ({ coin = "", price = "", lastUpdated = "", onClick }) =>
  price !== "" && (
    <div>
      <h4>
        Latest {coin} Price: ${price}
      </h4>
      <p>Price Last Changed at: {lastUpdated}</p>
      <button onClick={onClick}>Check for Price Update</button>
    </div>
  );

export default LatestPrice;
