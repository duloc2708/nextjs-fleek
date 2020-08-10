import { useEffect, useState } from "react";
import { string } from "prop-types";
import useInfura from "../shared/hooks/useInfura";
import LatestPrice from "../features/EthereumData/component";
import {
  ETHEREUM_ORACLE_ADDRESS,
  LINK_ORACLE_ADDRESS,
} from "../shared/abis/mainnet.oracle";
import Wrapper from "../shared/layout/component";
import {
  formatBigNumberFn,
  formatUnixTimestamp,
  getLatestTimestamp,
} from "../shared/utils/index";

const Index = ({ title = "NextJS IPFS Application" }) => {
  const { oracle } = useInfura({
    currentChain: process.env.INFURA_MAINNET,
    oracleAddress: ETHEREUM_ORACLE_ADDRESS,
  });

  const { oracle: linkOracle } = useInfura({
    currentChain: process.env.INFURA_MAINNET,
    oracleAddress: LINK_ORACLE_ADDRESS,
  });

  const [ethPriceData, setEthPriceData] = useState("");
  const [linkPriceData, setLinkPriceData] = useState("");

  const updateLink = () => {
    linkOracle.methods.latestAnswer().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      setLinkPriceData((x) => ({
        ...x,
        price: formatBigNumberFn(res),
      }));
    });
  };

  const updateData = () => {
    oracle.methods.latestAnswer().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      setEthPriceData((x) => ({
        ...x,
        price: formatBigNumberFn(res),
      }));
    });
  };

  useEffect(() => {
    getLatestTimestamp(linkOracle).then((res) => {
      setLinkPriceData((x) => ({
        ...x,
        lastUpdate: formatUnixTimestamp(res),
      }));
    });
  }, [linkPriceData.price]);

  useEffect(() => {
    getLatestTimestamp(oracle).then((res) => {
      setEthPriceData((x) => ({
        ...x,
        lastUpdate: formatUnixTimestamp(res),
      }));
    });
  }, [ethPriceData.price]);

  useEffect(() => {
    updateData();
    updateLink();
  }, []);
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <h2>Price Data</h2>
      <LatestPrice
        coin="ETH"
        lastUpdated={ethPriceData.lastUpdate}
        price={ethPriceData.price}
        onClick={updateData}
      />
      <LatestPrice
        coin="Link"
        lastUpdated={linkPriceData.lastUpdate}
        price={linkPriceData.price}
        onClick={updateLink}
      />
      <h2>About the application</h2>
      <h3>
        This application is using{" "}
        <a target="_blank" rel="noreferrer" href="https://chain.link">
          Chain.link
        </a>{" "}
        to fetch pricing data from decentralized oracles and it is hosted using
        IPFS.
      </h3>
      <h4>
        {" "}
        Learn more about Chainlink Price Feeds:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.chain.link/docs/using-chainlink-reference-contracts"
        >
          Chainlink Docs
        </a>
      </h4>
      <h4>
        {" "}
        Learn more about IPFS:{" "}
        <a target="_blank" rel="noreferrer" href="https://ipfs.io">
          IPFS.io
        </a>
      </h4>
    </Wrapper>
  );
};

Index.propTypes = {
  title: string,
};

export default Index;
