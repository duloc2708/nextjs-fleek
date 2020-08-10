import { useEffect, useState } from "react";
import { string } from "prop-types";
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
      setLinkPriceData(new BigNumber(res).shiftedBy(-8).toFixed(2));
    });
  };

  const updateData = () => {
    oracle.methods.latestAnswer().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      setPriceData(new BigNumber(res).shiftedBy(-8).toFixed(2));
    });
  };

  useEffect(() => {
    updateData();
    updateLink();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Using{" "}
        <a target="_blank" href="https://chain.link">
          Chain.link
        </a>{" "}
        for pricing data below.
      </p>
      <p>
        {" "}
        Learn more about Chainlink Price Feeds:{" "}
        <a
          target="_blank"
          href="https://docs.chain.link/docs/using-chainlink-reference-contracts"
        >
          Chainlink Docs
        </a>
      </p>
      <p>
        {" "}
        Learn more about IPFS:{" "}
        <a target="_blank" href="https://ipfs.io">
          IPFS.io
        </a>
      </p>
      <LatestPrice coin="ETH" price={priceData} />
      <button onClick={updateData}>Update Price</button>
      <LatestPrice coin="Link" price={linkPriceData} />
      <button onClick={updateLink}>Update LINK Price</button>
    </div>
  );
};

Index.propTypes = {
  title: string,
};

export default Index;
