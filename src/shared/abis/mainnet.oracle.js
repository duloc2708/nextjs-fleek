const CHAINLINK_ORACLE_ABI = [
  {
    constant: true,
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const DEFAULT_AGGREGATOR_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "roundId", type: "uint256" }],
    name: "getAnswer",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "roundId", type: "uint256" }],
    name: "getTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

const ETHEREUM_ORACLE_ADDRESS = "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F";
const LINK_ORACLE_ADDRESS = "0x32dbd3214aC75223e27e575C53944307914F7a90";

export {
  DEFAULT_AGGREGATOR_ABI,
  ETHEREUM_ORACLE_ADDRESS,
  CHAINLINK_ORACLE_ABI,
  LINK_ORACLE_ADDRESS,
};
