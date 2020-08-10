import { useEffect } from "react";
import Web3 from "web3";
import {
  CHAINLINK_ORACLE_ABI,
  ETHEREUM_ORACLE_ADDRESS,
  DEFAULT_AGGREGATOR_ABI,
} from "../abis/mainnet.oracle";

const initializeOracle = ({
  currentChain = process.env.INFURA_MAINNET,
  oracleAddress = ETHEREUM_ORACLE_ADDRESS,
  aggregatorAbi = DEFAULT_AGGREGATOR_ABI,
}) => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`${currentChain}${process.env.infuraID}`)
  );

  const oracle = new web3.eth.Contract(aggregatorAbi, oracleAddress);
  const getLatestTimestamp = () => {
    oracle.methods.latestTimestamp().call({}, (error, res) => {
      if (error != null) {
        console.log(error);
        return;
      }
      console.log("Latest timestamp for price was:", res);
      return res;
    });
  };
  return {
    oracle,
    getLatestTimestamp,
  };
};

export default initializeOracle;
