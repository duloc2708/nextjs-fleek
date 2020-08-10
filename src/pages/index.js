import { useEffect, useState } from "react";
import useInfura from "../shared/hooks/useInfura";
import LatestPrice from "../features/EthereumData/component";
import BigNumber from "bignumber.js";
import {
  ETHEREUM_ORACLE_ADDRESS,
  LINK_ORACLE_ADDRESS,
} from "../shared/abis/ropsten.oracle";

const Index = ({ title = "NextJS IPFS Application" }) => {
  const { oracle } = useInfura({
    currentChain: process.env.INFURA_ROPSTEN,
    oracleAddress: ETHEREUM_ORACLE_ADDRESS,
  });

  const { oracle: linkOracle } = useInfura({
    currentChain: process.env.INFURA_ROPSTEN,
    oracleAddress: LINK_ORACLE_ADDRESS,
  });

  const [priceData, setPriceData] = useState("");
  const [linkPriceData, setLinkPriceData] = useState("");

  const updateLink = () => {
    linkOracle.methods.latestAnswer().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      console.log("Latest price was:", res);
      setLinkPriceData(new BigNumber(res).shiftedBy(-8).toFixed(2));
    });
  };

  const updateData = () => {
    oracle.methods.latestAnswer().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      console.log("Latest price was:", res);
      setPriceData(new BigNumber(res).shiftedBy(-8).toFixed(2));
    });
  };

  console.log({ oracle });
  useEffect(() => {
    updateData();
    updateLink();
  }, []);
  console.log({ priceData });
  return (
    <div>
      <h2>{title}</h2>
      <LatestPrice coin="ETH" price={priceData} />
      <button onClick={updateData}>Update Price</button>
      <LatestPrice coin="Link" price={linkPriceData} />
      <button onClick={updateLink}>Update LINK Price</button>
    </div>
  );
};

export default Index;
