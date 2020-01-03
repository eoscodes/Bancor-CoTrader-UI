// export const API_endpoint = "http://localhost:9003"
export const API_endpoint = "https://api-bancor.cotrader.com"
export const StableSymbol = "USDB(USDB)"
export const BancorGasLimit = "0x607a5C47978e2Eb6d59C6C6f51bc0bF411f4b85a"

// MAINNET
export const ETHBNT = "0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533"
export const BancorRegistryMAIN = "0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4"
export const BNTToken = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
export const USDBToken = "0x309627af60f0926daa6041b8279484312f2bf060"
export const USDBBNTToken = "0xd1146B08e8104EeDBa44a73B7bda1d102c6ceDC9"
export const BancorRegistryAddress = "0xf6E2D7F616B67E46D708e4410746E9AAb3a4C518"
export const BancorNetwork = "0x0e936B11c2e7b601055e58c7E32417187aF4de4a"
export const BancorETH = "0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315"
export const EtherscanLink = "https://etherscan.io/"
export const ConvertersRegistryList = "0x7bdb720af9c0da53744aa007984031ceca528ad0"
export const gasPrice = 2000000000 // 2 gwei low gas price by default
export const netId = 1


export const BancorRegistryABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adminOnly",
				"type": "bool"
			}
		],
		"name": "restrictRegistryUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_smartTokens",
				"type": "address[]"
			}
		],
		"name": "getConvertersBySmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isConvertibleToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getConvertibleTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "prevRegistry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getConvertibleTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "addConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isConvertibleTokenSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLiquidityPoolCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLiquidityPools",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_reserveTokens",
				"type": "address[]"
			},
			{
				"name": "_reserveRatios",
				"type": "uint256[]"
			}
		],
		"name": "getLiquidityPoolByReserveConfig",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getConvertibleToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "isConverterValid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "removeConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			}
		],
		"name": "getConvertibleTokenSmartTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getLiquidityPool",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "restoreRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "adminOnly",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getConvertibleTokenSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSmartTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isLiquidityPool",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			}
		],
		"name": "getConvertibleTokenSmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_registry",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "SmartTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "SmartTokenRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_liquidityPool",
				"type": "address"
			}
		],
		"name": "LiquidityPoolAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_liquidityPool",
				"type": "address"
			}
		],
		"name": "LiquidityPoolRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "ConvertibleTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "ConvertibleTokenRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	}
]

export const ConvertersRegistryListABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "addConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "converters",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllConverters",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalConverters",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ABISmartToken = [
	{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_token","type":"address"}],"name":"NewSmartToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

export const ABIConverter = [
	{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bancorX","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allowRegistryUpdate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"converterType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawFromToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_FACTORY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"prevRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_FORMULA","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_FEATURES","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_NETWORK","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_GAS_PRICE_LIMIT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxConversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionsEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionWhitelist","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserveTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserves","outputs":[{"name":"virtualBalance","type":"uint256"},{"name":"ratio","type":"uint32"},{"name":"isVirtualBalanceEnabled","type":"bool"},{"name":"isSaleEnabled","type":"bool"},{"name":"isSet","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bancorX","type":"address"}],"name":"setBancorX","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newManager","type":"address"}],"name":"transferManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NON_STANDARD_TOKEN_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_registry","type":"address"},{"name":"_maxConversionFee","type":"uint32"},{"name":"_reserveToken","type":"address"},{"name":"_reserveRatio","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_fromToken","type":"address"},{"indexed":true,"name":"_toToken","type":"address"},{"indexed":true,"name":"_trader","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_return","type":"uint256"},{"indexed":false,"name":"_conversionFee","type":"int256"}],"name":"Conversion","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_connectorToken","type":"address"},{"indexed":false,"name":"_tokenSupply","type":"uint256"},{"indexed":false,"name":"_connectorBalance","type":"uint256"},{"indexed":false,"name":"_connectorWeight","type":"uint32"}],"name":"PriceDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevFee","type":"uint32"},{"indexed":false,"name":"_newFee","type":"uint32"}],"name":"ConversionFeeUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_conversionsEnabled","type":"bool"}],"name":"ConversionsEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enabled","type":"bool"}],"name":"VirtualBalancesEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevManager","type":"address"},{"indexed":true,"name":"_newManager","type":"address"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[],"name":"updateRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"restoreRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableRegistryUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_whitelist","type":"address"}],"name":"setConversionWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableConversions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_conversionFee","type":"uint32"}],"name":"setConversionFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_magnitude","type":"uint8"}],"name":"getFinalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_ratio","type":"uint32"}],"name":"addReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateReserveVirtualBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_scaleFactor","type":"uint16"}],"name":"enableVirtualBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableReserveSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"}],"name":"getReserveBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_depositAmount","type":"uint256"}],"name":"getPurchaseReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getSaleReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromReserveToken","type":"address"},{"name":"_toReserveToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getCrossReserveReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convertInternal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convert2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"quickConvert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"quickConvertPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_minReturn","type":"uint256"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"}],"name":"completeXConversion2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"fund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"liquidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"change","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"quickConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"quickConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_minReturn","type":"uint256"},{"name":"_conversionId","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"completeXConversion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"connectors","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint32"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"connectorTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"connectorTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_weight","type":"uint32"},{"name":"","type":"bool"}],"name":"addConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"","type":"uint32"},{"name":"","type":"bool"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableConnectorSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"}],"name":"getConnectorBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromConnectorToken","type":"address"},{"name":"_toConnectorToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getCrossConnectorReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

export const ABIBancorNetwork = [
	{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_FACTORY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAffiliateFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_FORMULA","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"etherTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_FEATURES","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"conversionHashes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_NETWORK","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_GAS_PRICE_LIMIT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NON_STANDARD_TOKEN_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[{"name":"_maxAffiliateFee","type":"uint256"}],"name":"setMaxAffiliateFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signerAddress","type":"address"}],"name":"setSignerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_register","type":"bool"}],"name":"registerEtherToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convertFor2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convertForPrioritized4","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"xConvert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"xConvertPrioritized3","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"getReturnByPath","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"claimAndConvertFor2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"claimAndConvert2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"claimAndConvert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"}],"name":"convertFor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"}],"name":"claimAndConvertFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"}],"name":"xConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"}],"name":"xConvertPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"xConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_customVal","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized3","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_block","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]

export const ERC20Bytes32ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "bytes32"
			},
			{
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ABIBancorGasPriceLimit = [
	{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_gasPrice","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"setGasPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"validateGasPrice","outputs":[],"payable":false,"stateMutability":"view","type":"function"}]


export const BYTECODESmartToken = "60c0604052600360808190527f302e33000000000000000000000000000000000000000000000000000000000060a09081526200004091600891906200015a565b506009805460ff191660011790553480156200005b57600080fd5b5060405162000f1a38038062000f1a833981016040908152815160208301519183015160008054600160a060020a03191633178155918401805190949390930192909184918491849181108015620000b4575060008351115b1515620000c057600080fd5b8351620000d59060029060208701906200015a565b508251620000eb9060039060208601906200015a565b506004805460ff191660ff939093169290921790915560058190553360009081526006602090815260409182902092909255805130815290517ff4cd1f8571e8d9c97ffcb81558807ab73f9803d54de5da6a0420593c82a4a9f09450908190039091019150a1505050620001ff565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019d57805160ff1916838001178555620001cd565b82800160010185558215620001cd579182015b82811115620001cd578251825591602001919060010190620001b0565b50620001db929150620001df565b5090565b620001fc91905b80821115620001db5760008155600101620001e6565b90565b610d0b806200020f6000396000f3006080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b3146101955780631608f18f146101cd57806318160ddd146101e957806323b872dd14610210578063313ce5671461023a57806354fd4d50146102655780635e35359e1461027a57806370a08231146102a457806379ba5097146102c5578063867904b4146102da5780638da5cb5b146102fe57806395d89b411461032f578063a24835d114610344578063a9059cbb14610368578063bef97c871461038c578063d4ee1d90146103a1578063dd62ed3e146103b6578063f2fde38b146103dd575b600080fd5b34801561011757600080fd5b506101206103fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a0360043516602435610489565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101e76004351515610542565b005b3480156101f557600080fd5b506101fe61056b565b60408051918252519081900360200190f35b34801561021c57600080fd5b506101b9600160a060020a0360043581169060243516604435610571565b34801561024657600080fd5b5061024f61059f565b6040805160ff9092168252519081900360200190f35b34801561027157600080fd5b506101206105a8565b34801561028657600080fd5b506101e7600160a060020a0360043581169060243516604435610603565b3480156102b057600080fd5b506101fe600160a060020a03600435166106f9565b3480156102d157600080fd5b506101e761070b565b3480156102e657600080fd5b506101e7600160a060020a0360043516602435610793565b34801561030a57600080fd5b5061031361089c565b60408051600160a060020a039092168252519081900360200190f35b34801561033b57600080fd5b506101206108ab565b34801561035057600080fd5b506101e7600160a060020a0360043516602435610906565b34801561037457600080fd5b506101b9600160a060020a03600435166024356109ef565b34801561039857600080fd5b506101b9610a1b565b3480156103ad57600080fd5b50610313610a24565b3480156103c257600080fd5b506101fe600160a060020a0360043581169060243516610a33565b3480156103e957600080fd5b506101e7600160a060020a0360043516610a50565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b505050505081565b600082600160a060020a03811615156104a157600080fd5b8215806104cf5750336000908152600760209081526040808320600160a060020a0388168452909152902054155b15156104da57600080fd5b336000818152600760209081526040808320600160a060020a03891680855290835292819020879055805187815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600054600160a060020a0316331461055957600080fd5b6009805460ff19169115919091179055565b60055481565b60095460009060ff16151561058257fe5b61058d848484610ab1565b151561059557fe5b5060019392505050565b60045460ff1681565b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b600054600160a060020a0316331461061a57600080fd5b82600160a060020a038116151561063057600080fd5b82600160a060020a038116151561064657600080fd5b83600160a060020a03811630141561065d57600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156106d957600080fd5b505af11580156106ed573d6000803e3d6000fd5b50505050505050505050565b60066020526000908152604090205481565b600154600160a060020a0316331461072257600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031633146107aa57600080fd5b81600160a060020a03811615156107c057600080fd5b82600160a060020a0381163014156107d757600080fd5b6005546107ea908463ffffffff610bda16565b600555600160a060020a038416600090815260066020526040902054610816908463ffffffff610bda16565b600160a060020a03851660009081526006602090815260409182902092909255805185815290517f9386c90217c323f58030f9dadcbc938f807a940f4ff41cd4cead9562f5da7dc3929181900390910190a1604080518481529051600160a060020a038616913091600080516020610cc08339815191529181900360200190a350505050565b600054600160a060020a031681565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b33600160a060020a03831614806109275750600054600160a060020a031633145b151561093257600080fd5b600160a060020a03821660009081526006602052604090205461095b908263ffffffff610bf316565b600160a060020a038316600090815260066020526040902055600554610987908263ffffffff610bf316565b6005556040805182815290513091600160a060020a03851691600080516020610cc08339815191529181900360200190a36040805182815290517f9a1b418bc061a5d80270261562e6986a35d995f8051145f277be16103abd34539181900360200190a15050565b60095460009060ff161515610a0057fe5b610a0a8383610c08565b1515610a1257fe5b50600192915050565b60095460ff1681565b600154600160a060020a031681565b600760209081526000928352604080842090915290825290205481565b600054600160a060020a03163314610a6757600080fd5b600054600160a060020a0382811691161415610a8257600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600083600160a060020a0381161515610ac957600080fd5b83600160a060020a0381161515610adf57600080fd5b600160a060020a0386166000908152600760209081526040808320338452909152902054610b13908563ffffffff610bf316565b600160a060020a038716600081815260076020908152604080832033845282528083209490945591815260069091522054610b54908563ffffffff610bf316565b600160a060020a038088166000908152600660205260408082209390935590871681522054610b89908563ffffffff610bda16565b600160a060020a0380871660008181526006602090815260409182902094909455805188815290519193928a1692600080516020610cc083398151915292918290030190a350600195945050505050565b600082820183811015610bec57600080fd5b9392505050565b600081831015610c0257600080fd5b50900390565b600082600160a060020a0381161515610c2057600080fd5b33600090815260066020526040902054610c40908463ffffffff610bf316565b3360009081526006602052604080822092909255600160a060020a03861681522054610c72908463ffffffff610bda16565b600160a060020a038516600081815260066020908152604091829020939093558051868152905191923392600080516020610cc08339815191529281900390910190a350600193925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820e2b44f22fac7c8bffb06cd95daaa80707ee4bd11f30c9b888e7f38263bc86cde0029"


export const BYTECODEConverter = "6005805460a060020a61ffff0219167414000000000000000000000000000000000000000017905560c0604052600660808190527f62616e636f72000000000000000000000000000000000000000000000000000060a09081526200006691908162000574565b506007805460ff19166001179055600c80546001606860020a0319166c01000000000000000000000000179055348015620000a057600080fd5b5060405160a08062005c278339810160409081528151602083015191830151606084015160809094015160008054600160a060020a03191633178155929491928580600160a060020a0381161515620000f857600080fd5b5060028054600160a060020a03928316600160a060020a03199182161790915560048054909116331790558590811615156200013357600080fd5b8460008163ffffffff1610158015620001555750620f424063ffffffff821611155b15156200016157600080fd5b60088054600160a060020a031916600160a060020a03898116918217928390556007805461010060a860020a03191661010090930292909217909155604080517fbb34534c0000000000000000000000000000000000000000000000000000000081527f436f6e747261637446656174757265730000000000000000000000000000000060048201529051929091169163bb34534c916024808201926020929091908290030181600087803b1580156200021a57600080fd5b505af11580156200022f573d6000803e3d6000fd5b505050506040513d60208110156200024657600080fd5b50519250600160a060020a03831615620002dd57604080517f2c7077c000000000000000000000000000000000000000000000000000000000815260016004820181905260248201529051600160a060020a03851691632c7077c091604480830192600092919082900301818387803b158015620002c357600080fd5b505af1158015620002d8573d6000803e3d6000fd5b505050505b600c805467ffffffff00000000191664010000000063ffffffff891602179055600160a060020a03851615620003225762000322858564010000000062000330810204565b505050505050505062000619565b600054600160a060020a031633146200034857600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b158015620003a857600080fd5b505af1158015620003bd573d6000803e3d6000fd5b505050506040513d6020811015620003d457600080fd5b5051600160a060020a03161415620003eb57600080fd5b81600160a060020a03811615156200040257600080fd5b82600160a060020a0381163014156200041a57600080fd5b8260008163ffffffff161180156200043b5750620f424063ffffffff821611155b15156200044757600080fd5b600254600160a060020a038681169116148015906200048c5750600160a060020a0385166000908152600b60205260409020600101546601000000000000900460ff16155b8015620004ab5750600c54620f424063ffffffff918216860190911611155b1515620004b757600080fd5b505050600160a060020a03919091166000818152600b60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff000000000000191691909117909155600a805492830181559093527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018054600160a060020a031916909317909255600c805492831692821690930116179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005b757805160ff1916838001178555620005e7565b82800160010185558215620005e7579182015b82811115620005e7578251825591602001919060010190620005ca565b50620005f5929150620005f9565b5090565b6200061691905b80821115620005f5576000815560010162000600565b90565b6155fe80620006296000396000f30060806040526004361061036b5763ffffffff60e060020a6000350416630c87355e81146103705780630ca78923146103975780630e53aae9146103cb5780631120a7761461042057806315226b541461045157806319b64015146104725780631d000b611461048a5780631e1401f81461049f57806320d7d367146104e257806321e6b53d1461050b578063227425641461052c578063228d28201461059457806325f9bfef146105ae5780632a2e2f0c146105c35780632cc1cd65146105f057806338a5e0161461068d5780633aa0145a146106a25780633e8ff43f146106c05780633f4d2fc21461074a578063415f12401461077957806341a5b33d1461079157806342906029146107bb578063481c6a75146107d057806349d10b64146107e55780634af80f0e146107fa578063500573511461081b57806354fd4d5014610890578063579cd3ca146108bc5780635a46f06c146108ea5780635e35359e146108ff5780635e5144eb1461092957806361cd756e14610956578063677c08121461096b5780636a49d2c4146109875780636d7bd3fc146109b15780636ebf36c0146109c657806371f52bf3146109fe57806372b44b2c14610a1357806375892cf114610a3757806379ba509714610a645780637b10399914610a7957806383315b6e14610a8e5780638da5cb5b14610aa35780638e3047e014610ab85780639232494e14610ae25780639249993a14610af757806392d1abb714610b0c578063935e2ae114610b2157806394c275ad14610b455780639b99a8e214610b5a5780639e56855314610b6f578063a2c4c33614610b95578063a6a11c7114610bb9578063b3a426d514610bdf578063b4a176d314610c80578063bf75455814610c95578063c45d3d9214610caa578063c4a8598e14610cbf578063c8c2fe6c14610cd4578063ca1d209d14610ce9578063cc97b38f14610d01578063cf73266a14610d16578063d031370b14610d40578063d4ee1d9014610d58578063d55ec69714610d6d578063d66bd52414610d82578063d895951214610da3578063d924f0c314610dc4578063e4dd22f614610de5578063e4edf85214610e48578063ecbca55d14610e69578063f0843ba914610e87578063f2fde38b14610ed8578063f5286b9c14610ef9578063fa1c594e14610f0e578063fc0c546a14610f28578063fe417fa514610f3d575b600080fd5b34801561037c57600080fd5b50610385610f61565b60408051918252519081900360200190f35b3480156103a357600080fd5b506103c9600160a060020a036004351663ffffffff602435166044351515606435610f73565b005b3480156103d757600080fd5b506103ec600160a060020a0360043516610f83565b6040805195865263ffffffff9094166020860152911515848401521515606084015215156080830152519081900360a00190f35b34801561042c57600080fd5b50610435610fd5565b60408051600160a060020a039092168252519081900360200190f35b34801561045d57600080fd5b50610385600160a060020a0360043516610fe4565b34801561047e57600080fd5b506104356004356110d2565b34801561049657600080fd5b506103856110fe565b3480156104ab57600080fd5b506104c9600160a060020a0360043581169060243516604435611122565b6040805192835260208301919091528051918290030190f35b3480156104ee57600080fd5b506104f761119f565b604080519115158252519081900360200190f35b34801561051757600080fd5b506103c9600160a060020a03600435166111a8565b6040805160206004803580820135838102808601850190965280855261038595369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a0013561126c565b3480156105a057600080fd5b506103c96004351515611295565b3480156105ba57600080fd5b50610385611354565b3480156105cf57600080fd5b50610385600160a060020a0360043581169060243516604435606435611378565b3480156105fc57600080fd5b5060408051602060048035808201358381028086018501909652808552610385953695939460249493850192918291850190849080828437505060408051818801358901803560208181028481018201909552818452989b8a359b8a8c01359b919a909950606090910197509295509082019350918291850190849080828437509497506118609650505050505050565b34801561069957600080fd5b506103c9611d5f565b3480156106ae57600080fd5b5061038560043560ff60243516611e15565b3480156106cc57600080fd5b506106d5611e73565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561070f5781810151838201526020016106f7565b50505050905090810190601f16801561073c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561075657600080fd5b506103c9600160a060020a036004351663ffffffff602435166044351515611f01565b34801561078557600080fd5b506103c9600435611f10565b34801561079d57600080fd5b506103c9600160a060020a0360043581169060243516604435612195565b3480156107c757600080fd5b50610435612236565b3480156107dc57600080fd5b50610435612245565b3480156107f157600080fd5b506103c9612254565b34801561080657600080fd5b506103c9600160a060020a036004351661239c565b34801561082757600080fd5b506040805160206004803580820135838102808601850190965280855261038595369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a001356123ed565b34801561089c57600080fd5b506108a5612407565b6040805161ffff9092168252519081900360200190f35b3480156108c857600080fd5b506108d1612429565b6040805163ffffffff9092168252519081900360200190f35b3480156108f657600080fd5b50610385612441565b34801561090b57600080fd5b506103c9600160a060020a0360043581169060243516604435612465565b34801561093557600080fd5b50610385600160a060020a03600435811690602435166044356064356125e6565b34801561096257600080fd5b506104356125fd565b34801561097757600080fd5b506103c961ffff60043516612611565b34801561099357600080fd5b506103c9600160a060020a036004351663ffffffff6024351661285d565b3480156109bd57600080fd5b50610385612a95565b3480156109d257600080fd5b50610385600160a060020a0360043581169060243581169060443590606435906084351660a435612aa7565b348015610a0a57600080fd5b506108a5612b4d565b348015610a1f57600080fd5b506104c9600160a060020a0360043516602435612b5c565b348015610a4357600080fd5b50610385600160a060020a0360043581169060243516604435606435612eb0565b348015610a7057600080fd5b506103c9612ec1565b348015610a8557600080fd5b50610435612f3c565b348015610a9a57600080fd5b50610385612f4b565b348015610aaf57600080fd5b50610435612f6f565b348015610ac457600080fd5b506104c9600160a060020a0360043581169060243516604435612f7e565b348015610aee57600080fd5b50610385612f8c565b348015610b0357600080fd5b50610385612f9e565b348015610b1857600080fd5b50610385612fc2565b348015610b2d57600080fd5b506103c9600160a060020a0360043516602435612fc7565b348015610b5157600080fd5b506108d16130f0565b348015610b6657600080fd5b506108a5613104565b348015610b7b57600080fd5b506103c9600160a060020a0360043516602435151561310a565b348015610ba157600080fd5b506104c9600160a060020a0360043516602435613114565b348015610bc557600080fd5b506103c9600160a060020a03600435166024351515613435565b60408051602060048035808201358381028086018501909652808552610385953695939460249493850192918291850190849080828437505060408051818801358901803560208181028481018201909552818452989b8a359b8a8c01359b919a9099506060909101975092955090820193509182918501908490808284375094975050508335600160a060020a03169450505060209091013590506134bd565b348015610c8c57600080fd5b506103c9613807565b348015610ca157600080fd5b506104f7613860565b348015610cb657600080fd5b50610435613879565b348015610ccb57600080fd5b50610385613888565b348015610ce057600080fd5b506103c96138ac565b348015610cf557600080fd5b506103c9600435613929565b348015610d0d57600080fd5b50610385613bf0565b348015610d2257600080fd5b506104c9600160a060020a0360043581169060243516604435613c14565b348015610d4c57600080fd5b50610435600435613ed3565b348015610d6457600080fd5b50610435613efb565b348015610d7957600080fd5b506103c9613f0a565b348015610d8e57600080fd5b506103ec600160a060020a0360043516614055565b348015610daf57600080fd5b50610385600160a060020a036004351661409b565b348015610dd057600080fd5b506103c9600160a060020a03600435166140ac565b604080516020600480358082013583810280860185019096528085526103859536959394602494938501929182918501908490808284375094975050843595505050602083013592600160a060020a0360408201351692506060013590506140e5565b348015610e5457600080fd5b506103c9600160a060020a036004351661410b565b348015610e7557600080fd5b506103c963ffffffff60043516614176565b604080516020600480358082013583810280860185019096528085526103859536959394602494938501929182918501908490808284375094975050843595505050602090920135915061425b9050565b348015610ee457600080fd5b506103c9600160a060020a036004351661426b565b348015610f0557600080fd5b506103856142bf565b348015610f1a57600080fd5b506103c960043515156142e3565b348015610f3457600080fd5b50610435614323565b348015610f4957600080fd5b506103c9600160a060020a0360043516602435614332565b60008051602061559383398151915281565b610f7d8482612fc7565b50505050565b600160a060020a03166000908152600b602052604090208054600190910154909163ffffffff82169160ff64010000000082048116926501000000000083048216926601000000000000900490911690565b600354600160a060020a031681565b600160a060020a0381166000908152600b6020526040812060010154819083906601000000000000900460ff16151561101c57600080fd5b600160a060020a0384166000908152600b602052604090206001810154909250640100000000900460ff166110c7576040805160e060020a6370a082310281523060048201529051600160a060020a038616916370a082319160248083019260209291908290030181600087803b15801561109657600080fd5b505af11580156110aa573d6000803e3d6000fd5b505050506040513d60208110156110c057600080fd5b50516110ca565b81545b949350505050565b6000600a828154811015156110e357fe5b600091825260209091200154600160a060020a031692915050565b7f424e54546f6b656e00000000000000000000000000000000000000000000000081565b600080600160a060020a03858116908516141561113e57600080fd5b600254600160a060020a03858116911614156111675761115e8584613114565b91509150611197565b600254600160a060020a03868116911614156111875761115e8484612b5c565b611192858585613c14565b915091505b935093915050565b60075460ff1681565b600054600160a060020a031633146111bf57600080fd5b6008546040805160e260020a632ecd14d302815260008051602061559383398151915260048201529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b15801561121c57600080fd5b505af1158015611230573d6000803e3d6000fd5b505050506040513d602081101561124657600080fd5b5051905033600160a060020a0382161461125f57600080fd5b6112688261442b565b5050565b60006112898888886112818b8a8a8a8a6144c4565b6000806134bd565b98975050505050505050565b600054600160a060020a03163314806112b85750600454600160a060020a031633145b15156112c357600080fd5b600c5460ff6c01000000000000000000000000909104161515811515141561135157600c80546c01000000000000000000000000831581026cff000000000000000000000000199092169190911791829055604080519190920460ff161515815290517fb8e670608a57255ce4f35952b324cba70211a4200a91ce81d26e06d488c1f66b9181900360200190a15b50565b7f436f6e747261637452656769737472790000000000000000000000000000000081565b6008546040805160e260020a632ecd14d302815260008051602061557383398151915260048201529051600092839283928392839283928392600160a060020a03169163bb34534c91602480830192602092919082900301818787803b1580156113e157600080fd5b505af11580156113f5573d6000803e3d6000fd5b505050506040513d602081101561140b57600080fd5b5051905033600160a060020a0382161461142457600080fd5b600c546c01000000000000000000000000900460ff16151561144557600080fd5b876000811161145357600080fd5b600160a060020a038c8116908c16141561146c57600080fd5b600254600160a060020a038c8116911614156114945761148d8c8b8b6145b3565b9750611851565b600254600160a060020a038d8116911614156114b55761148d8b8b8b6147fb565b6114c08c8c8c613c14565b909750955086158015906114d45750888710155b15156114df57600080fd5b600160a060020a038c166000908152600b602052604090206001810154909550640100000000900460ff1615611524578454611521908b63ffffffff614bec16565b85555b600160a060020a038b166000908152600b602052604090206001810154909450640100000000900460ff1615611569578354611566908863ffffffff614c0916565b84555b6115728b610fe4565b925082871061157d57fe5b6115898c33308d614c1e565b6115948b3389614fad565b6115a18c8c8c8a8a615323565b8b600160a060020a03166000805160206155b3833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561160d57600080fd5b505af1158015611621573d6000803e3d6000fd5b505050506040513d602081101561163757600080fd5b81019080805190602001909291905050508e600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156116a357600080fd5b505af11580156116b7573d6000803e3d6000fd5b505050506040513d60208110156116cd57600080fd5b5051600189015460408051938452602084019290925263ffffffff1682820152519081900360600190a28a600160a060020a03166000805160206155b3833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561176357600080fd5b505af1158015611777573d6000803e3d6000fd5b505050506040513d602081101561178d57600080fd5b81019080805190602001909291905050508d600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156117f957600080fd5b505af115801561180d573d6000803e3d6000fd5b505050506040513d602081101561182357600080fd5b5051600188015460408051938452602084019290925263ffffffff1682820152519081900360600190a28697505b50505050505050949350505050565b60008060008084516000148061188d57508585600081518110151561188157fe5b90602001906020020151145b151561189857600080fd5b6008546040805160e260020a632ecd14d30281527f42616e636f72580000000000000000000000000000000000000000000000000060048201529051600160a060020a039092169163bb34534c916024808201926020929091908290030181600087803b15801561190857600080fd5b505af115801561191c573d6000803e3d6000fd5b505050506040513d602081101561193257600080fd5b50516008546040805160e260020a632ecd14d302815260008051602061557383398151915260048201529051929550600160a060020a039091169163bb34534c916024808201926020929091908290030181600087803b15801561199557600080fd5b505af11580156119a9573d6000803e3d6000fd5b505050506040513d60208110156119bf57600080fd5b50516008546040805160e260020a632ecd14d30281527f424e54546f6b656e00000000000000000000000000000000000000000000000060048201529051929450600160a060020a039091169163bb34534c916024808201926020929091908290030181600087803b158015611a3457600080fd5b505af1158015611a48573d6000803e3d6000fd5b505050506040513d6020811015611a5e57600080fd5b50518851600160a060020a039091169089906000908110611a7b57fe5b60209081029091010151600160a060020a031614611a9857600080fd5b604080517faafd6b76000000000000000000000000000000000000000000000000000000008152600481018890523360248201529051600160a060020a0385169163aafd6b769160448083019260209291908290030181600087803b158015611b0057600080fd5b505af1158015611b14573d6000803e3d6000fd5b505050506040513d6020811015611b2a57600080fd5b50516002546040805160e060020a63a24835d1028152336004820152602481018490529051929350600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b158015611b8557600080fd5b505af1158015611b99573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a03878116600483015260248201879052915191909216935063867904b49250604480830192600092919082900301818387803b158015611bf557600080fd5b505af1158015611c09573d6000803e3d6000fd5b5050505081600160a060020a0316634de006cb89838a338a6000806040518863ffffffff1660e060020a028152600401808060200188815260200187815260200186600160a060020a0316600160a060020a031681526020018060200185600160a060020a0316600160a060020a0316815260200184815260200183810383528a818151815260200191508051906020019060200280838360005b83811015611cbc578181015183820152602001611ca4565b50505050905001838103825286818151815260200191508051906020019060200280838360005b83811015611cfb578181015183820152602001611ce3565b505050509050019950505050505050505050602060405180830381600087803b158015611d2757600080fd5b505af1158015611d3b573d6000803e3d6000fd5b505050506040513d6020811015611d5157600080fd5b505198975050505050505050565b600054600160a060020a03163314611d7657600080fd5b600254604080517f18160ddd0000000000000000000000000000000000000000000000000000000081529051600092600160a060020a0316916318160ddd91600480830192602092919082900301818787803b158015611dd557600080fd5b505af1158015611de9573d6000803e3d6000fd5b505050506040513d6020811015611dff57600080fd5b505111611e0b57600080fd5b611e136153a6565b565b600c54600090611e6c9060ff8416620f424081810a67ffffffffffffffff90811693611e6093899363ffffffff680100000000000000009093048316900383160a9091169061542416565b9063ffffffff61545216565b9392505050565b6006805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015611ef95780601f10611ece57610100808354040283529160200191611ef9565b820191906000526020600020905b815481529060010190602001808311611edc57829003601f168201915b505050505081565b611f0b838361285d565b505050565b600c546000908190819081908190819063ffffffff16620f424014611f3457600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611f8757600080fd5b505af1158015611f9b573d6000803e3d6000fd5b505050506040513d6020811015611fb157600080fd5b50516002546040805160e060020a63a24835d1028152336004820152602481018b90529051929850600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b15801561200c57600080fd5b505af1158015612020573d6000803e3d6000fd5b50505050600091505b600a5461ffff8316101561218c57600a805461ffff841690811061204957fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b1580156120a657600080fd5b505af11580156120ba573d6000803e3d6000fd5b505050506040513d60208110156120d057600080fd5b505193506120e886611e60898763ffffffff61542416565b600160a060020a0386166000908152600b6020526040902060018101549194509150640100000000900460ff161561212f57805461212c908463ffffffff614c0916565b81555b61213a853385614fad565b6001810154604080518989038152858703602082015263ffffffff9092168282015251600160a060020a038716916000805160206155b3833981519152919081900360600190a2600190910190612029565b50505050505050565b600054600160a060020a031633146121ac57600080fd5b600254604080517f5e35359e000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015285811660248301526044820185905291519190921691635e35359e91606480830192600092919082900301818387803b15801561222257600080fd5b505af115801561218c573d6000803e3d6000fd5b600554600160a060020a031681565b600454600160a060020a031681565b60075460009060ff16806122725750600054600160a060020a031633145b151561227d57600080fd5b6008546040805160e260020a632ecd14d30281527f436f6e747261637452656769737472790000000000000000000000000000000060048201529051600160a060020a039092169163bb34534c916024808201926020929091908290030181600087803b1580156122ed57600080fd5b505af1158015612301573d6000803e3d6000fd5b505050506040513d602081101561231757600080fd5b5051600854909150600160a060020a038083169116148015906123425750600160a060020a03811615155b151561234d57600080fd5b600880546007805474ffffffffffffffffffffffffffffffffffffffff001916610100600160a060020a038085169190910291909117909155600160a060020a03199091169216919091179055565b600054600160a060020a031633146123b357600080fd5b80600160a060020a0381163014156123ca57600080fd5b5060098054600160a060020a031916600160a060020a0392909216919091179055565b60006112898888886124028a8a8a8a8a6144c4565b611860565b60055474010000000000000000000000000000000000000000900461ffff1681565b600c5468010000000000000000900463ffffffff1681565b7f42616e636f72436f6e766572746572466163746f72790000000000000000000081565b6008546040805160e260020a632ecd14d302815260008051602061559383398151915260048201529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b1580156124c257600080fd5b505af11580156124d6573d6000803e3d6000fd5b505050506040513d60208110156124ec57600080fd5b5051600160a060020a0385166000908152600b60205260409020600101549091506601000000000000900460ff1615806125b85750600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b15801561258057600080fd5b505af1158015612594573d6000803e3d6000fd5b505050506040513d60208110156125aa57600080fd5b5051600160a060020a031614155b806125d05750600054600160a060020a038281169116145b15156125db57600080fd5b610f7d848484615475565b60006125f485858585611378565b95945050505050565b6007546101009004600160a060020a031681565b60008054819081908190600160a060020a0316331461262f57600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b15801561268e57600080fd5b505af11580156126a2573d6000803e3d6000fd5b505050506040513d60208110156126b857600080fd5b5051600160a060020a0316146126cd57600080fd5b60648561ffff16101580156126e857506103e88561ffff1611155b15156126f357600080fd5b8461ffff16606414159350600091505b600a5461ffff8316101561282157600a805461ffff841690811061272357fe5b600091825260208083209190910154600160a060020a0316808352600b909152604090912060018101805464ff00000000191664010000000088151502179055909350905083612774576000612814565b6128146064611e608761ffff1686600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156127dc57600080fd5b505af11580156127f0573d6000803e3d6000fd5b505050506040513d602081101561280657600080fd5b50519063ffffffff61542416565b8155600190910190612703565b60408051851515815290517f64622fbd54039f76d87a876ecaea9bdb6b9b493d7a35ca38ae82b53dcddbe2e49181900360200190a15050505050565b600054600160a060020a0316331461287457600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b1580156128d357600080fd5b505af11580156128e7573d6000803e3d6000fd5b505050506040513d60208110156128fd57600080fd5b5051600160a060020a0316141561291357600080fd5b81600160a060020a038116151561292957600080fd5b82600160a060020a03811630141561294057600080fd5b8260008163ffffffff161180156129605750620f424063ffffffff821611155b151561296b57600080fd5b600254600160a060020a038681169116148015906129af5750600160a060020a0385166000908152600b60205260409020600101546601000000000000900460ff16155b80156129cd5750600c54620f424063ffffffff918216860190911611155b15156129d857600080fd5b505050600160a060020a03919091166000818152600b60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff000000000000191691909117909155600a805492830181559093527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018054600160a060020a031916909317909255600c805492831692821690930116179055565b60008051602061555383398151915281565b6040805160038082526080820190925260009160609190602082018380388339505060025482519293508a92600160a060020a039091169150899084906000908110612aef57fe5b906020019060200201846001815181101515612b0757fe5b906020019060200201856002815181101515612b1f57fe5b600160a060020a039485166020918202909201015292821690925291909116905261128981878787876140e5565b6000612b57613104565b905090565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612bc557600080fd5b505af1158015612bd9573d6000803e3d6000fd5b505050506040513d6020811015612bef57600080fd5b5051600160a060020a031614612c0457600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff161515612c3a57600080fd5b600160a060020a03808c166000908152600b6020908152604080832060025482517f18160ddd0000000000000000000000000000000000000000000000000000000081529251919c50909416936318160ddd93600480840194938390030190829087803b158015612caa57600080fd5b505af1158015612cbe573d6000803e3d6000fd5b505050506040513d6020811015612cd457600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b158015612d2557600080fd5b505af1158015612d39573d6000803e3d6000fd5b505050506040513d6020811015612d4f57600080fd5b50516008546040805160e260020a632ecd14d302815260008051602061555383398151915260048201529051929750600160a060020a039091169163bb34534c916024808201926020929091908290030181600087803b158015612db257600080fd5b505af1158015612dc6573d6000803e3d6000fd5b505050506040513d6020811015612ddc57600080fd5b50516001880154604080517f49f9b0f7000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916349f9b0f7916084808201926020929091908290030181600087803b158015612e6357600080fd5b505af1158015612e77573d6000803e3d6000fd5b505050506040513d6020811015612e8d57600080fd5b50519250612e9c836001611e15565b9b928c90039a509198505050505050505050565b60006125f485858585600080612aa7565b600154600160a060020a03163314612ed857600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a36001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600854600160a060020a031681565b7f436f6e747261637446656174757265730000000000000000000000000000000081565b600054600160a060020a031681565b600080611192858585613c14565b60008051602061557383398151915281565b7f42616e636f7247617350726963654c696d69740000000000000000000000000081565b600181565b60008054600160a060020a03163314612fdf57600080fd5b6008546040805160e260020a632ecd14d302815260008051602061559383398151915260048201529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b15801561303c57600080fd5b505af1158015613050573d6000803e3d6000fd5b505050506040513d602081101561306657600080fd5b5051905033600160a060020a0382161461307f57600080fd5b600160a060020a0384166000908152600b602052604090206001015484906601000000000000900460ff1615156130b557600080fd5b505050600160a060020a03919091166000908152600b6020526040902060018101805464ff0000000019168315156401000000000217905555565b600c54640100000000900463ffffffff1681565b600a5490565b6112688282613435565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561317d57600080fd5b505af1158015613191573d6000803e3d6000fd5b505050506040513d60208110156131a757600080fd5b5051600160a060020a0316146131bc57600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff1615156131f257600080fd5b600160a060020a038b166000908152600b60205260409020600181015490975065010000000000900460ff16151561322957600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561327c57600080fd5b505af1158015613290573d6000803e3d6000fd5b505050506040513d60208110156132a657600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b1580156132f757600080fd5b505af115801561330b573d6000803e3d6000fd5b505050506040513d602081101561332157600080fd5b50516008546040805160e260020a632ecd14d302815260008051602061555383398151915260048201529051929750600160a060020a039091169163bb34534c916024808201926020929091908290030181600087803b15801561338457600080fd5b505af1158015613398573d6000803e3d6000fd5b505050506040513d60208110156133ae57600080fd5b50516001880154604080517f29a00e7c000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916329a00e7c916084808201926020929091908290030181600087803b158015612e6357600080fd5b600054600160a060020a0316331461344c57600080fd5b600160a060020a0382166000908152600b602052604090206001015482906601000000000000900460ff16151561348257600080fd5b50600160a060020a03919091166000908152600b60205260409020600101805465ff0000000000191691156501000000000002919091179055565b6000808451600014806134e75750868560008151811015156134db57fe5b90602001906020020151145b15156134f257600080fd5b6008546040805160e260020a632ecd14d302815260008051602061557383398151915260048201529051600160a060020a039092169163bb34534c916024808201926020929091908290030181600087803b15801561355057600080fd5b505af1158015613564573d6000803e3d6000fd5b505050506040513d602081101561357a57600080fd5b505190503415156136c3576002548851600160a060020a0390911690899060009081106135a357fe5b90602001906020020151600160a060020a0316141561369f576002546040805160e060020a63a24835d1028152336004820152602481018a90529051600160a060020a039092169163a24835d19160448082019260009290919082900301818387803b15801561361257600080fd5b505af1158015613626573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a038681166004830152602482018d9052915191909216935063867904b49250604480830192600092919082900301818387803b15801561368257600080fd5b505af1158015613696573d6000803e3d6000fd5b505050506136c3565b6136c38860008151811015156136b157fe5b9060200190602002015133838a614c1e565b80600160a060020a0316634de006cb348a8a8a338b8b8b6040518963ffffffff1660e060020a028152600401808060200188815260200187815260200186600160a060020a0316600160a060020a031681526020018060200185600160a060020a0316600160a060020a0316815260200184815260200183810383528a818151815260200191508051906020019060200280838360005b8381101561377257818101518382015260200161375a565b50505050905001838103825286818151815260200191508051906020019060200280838360005b838110156137b1578181015183820152602001613799565b5050505090500199505050505050505050506020604051808303818588803b1580156137dc57600080fd5b505af11580156137f0573d6000803e3d6000fd5b50505050506040513d6020811015611d5157600080fd5b600054600160a060020a031633148061382a5750600454600160a060020a031633145b151561383557600080fd5b6007805460088054600160a060020a031916600160a060020a0361010084041617905560ff19169055565b600c546c01000000000000000000000000900460ff1681565b600954600160a060020a031681565b7f42616e636f72580000000000000000000000000000000000000000000000000081565b600554600160a060020a031633146138c357600080fd5b600554600454604051600160a060020a0392831692909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c1973290600090a36005805460048054600160a060020a0319908116600160a060020a03841617909155169055565b600c546000908190819081908190819063ffffffff16620f42401461394d57600080fd5b600c546c01000000000000000000000000900460ff16151561396e57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156139c157600080fd5b505af11580156139d5573d6000803e3d6000fd5b505050506040513d60208110156139eb57600080fd5b50519550600091505b600a5461ffff83161015613b7957600a805461ffff8416908110613a1457fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b158015613a7157600080fd5b505af1158015613a85573d6000803e3d6000fd5b505050506040513d6020811015613a9b57600080fd5b50519350613ad46001613ac888611e6083613abc8d8b63ffffffff61542416565b9063ffffffff614c0916565b9063ffffffff614bec16565b600160a060020a0386166000908152600b6020526040902060018101549194509150640100000000900460ff1615613b1b578054613b18908463ffffffff614bec16565b81555b613b2785333086614c1e565b600181015460408051888a018152868601602082015263ffffffff9092168282015251600160a060020a038716916000805160206155b3833981519152919081900360600190a26001909101906139f4565b6002546040805160e260020a63219e412d028152336004820152602481018a90529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b158015613bcf57600080fd5b505af1158015613be3573d6000803e3d6000fd5b5050505050505050505050565b7f42616e636f72585570677261646572000000000000000000000000000000000081565b600080600080600080600030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613c7c57600080fd5b505af1158015613c90573d6000803e3d6000fd5b505050506040513d6020811015613ca657600080fd5b5051600160a060020a031614613cbb57600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff161515613cf157600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff161515613d2757600080fd5b600160a060020a038c81166000908152600b6020526040808220928e16825290206001820154919850965065010000000000900460ff161515613d6957600080fd5b6008546040805160e260020a632ecd14d302815260008051602061555383398151915260048201529051600160a060020a039092169163bb34534c916024808201926020929091908290030181600087803b158015613dc757600080fd5b505af1158015613ddb573d6000803e3d6000fd5b505050506040513d6020811015613df157600080fd5b50519450600160a060020a0385166379c1b450613e0d8e610fe4565b60018a015463ffffffff16613e218f610fe4565b60018b01546040805163ffffffff87811660e060020a028252600482019690965293851660248501526044840192909252929092166064820152608481018e9052905160a48083019260209291908290030181600087803b158015613e8557600080fd5b505af1158015613e99573d6000803e3d6000fd5b505050506040513d6020811015613eaf57600080fd5b50519350613ebe846002611e15565b9c938d90039b50929950505050505050505050565b600a805482908110613ee157fe5b600091825260209091200154600160a060020a0316905081565b600154600160a060020a031681565b60008054600160a060020a03163314613f2257600080fd5b6008546040805160e260020a632ecd14d302815260008051602061559383398151915260048201529051600160a060020a039092169163bb34534c916024808201926020929091908290030181600087803b158015613f8057600080fd5b505af1158015613f94573d6000803e3d6000fd5b505050506040513d6020811015613faa57600080fd5b50519050613fb78161426b565b600554604080517f90f58c960000000000000000000000000000000000000000000000000000000081527401000000000000000000000000000000000000000090920461ffff16600483015251600160a060020a038316916390f58c9691602480830192600092919082900301818387803b15801561403557600080fd5b505af1158015614049573d6000803e3d6000fd5b50505050611351612ec1565b600b602052600090815260409020805460019091015463ffffffff81169060ff640100000000820481169165010000000000810482169166010000000000009091041685565b60006140a682610fe4565b92915050565b600054600160a060020a031633146140c357600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b60006141018686866140fa85808080806144c4565b87876134bd565b9695505050505050565b600054600160a060020a031633148061412e5750600454600160a060020a031633145b151561413957600080fd5b600454600160a060020a038281169116141561415457600080fd5b60058054600160a060020a031916600160a060020a0392909216919091179055565b600054600160a060020a03163314806141995750600454600160a060020a031633145b15156141a457600080fd5b60008163ffffffff16101580156141cf5750600c5463ffffffff640100000000909104811690821611155b15156141da57600080fd5b600c546040805163ffffffff6801000000000000000090930483168152918316602083015280517f81cd2ffb37dd237c0e4e2a3de5265fcf9deb43d3e7801e80db9f1ccfba7ee6009281900390910190a1600c805463ffffffff90921668010000000000000000026bffffffff000000000000000019909216919091179055565b60006110ca8484846000806140e5565b600054600160a060020a0316331461428257600080fd5b600054600160a060020a038281169116141561429d57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b7f4e6f6e5374616e64617264546f6b656e5265676973747279000000000000000081565b600054600160a060020a03163314806143065750600454600160a060020a031633145b151561431157600080fd5b6007805460ff19169115919091179055565b600254600160a060020a031681565b600354600160a060020a0316331461434957600080fd5b6002546040805160e060020a63a24835d1028152600160a060020a038581166004830152602482018590529151919092169163a24835d191604480830192600092919082900301818387803b1580156143a157600080fd5b505af11580156143b5573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a03909216935063867904b4925060448082019260009290919082900301818387803b15801561440f57600080fd5b505af1158015614423573d6000803e3d6000fd5b505050505050565b600054600160a060020a0316331461444257600080fd5b600254604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151919092169163f2fde38b91602480830192600092919082900301818387803b1580156144a957600080fd5b505af11580156144bd573d6000803e3d6000fd5b5050505050565b60608060ff85161580156144d6575083155b80156144e0575082155b156144fb5760408051600081526020810190915291506145a9565b60408051600580825260c08201909252906020820160a0803883390190505090508681600081518110151561452c57fe5b60209081029091010152805186908290600190811061454757fe5b60209081029091010152805160ff8616908290600290811061456557fe5b60209081029091010152805184908290600390811061458057fe5b60209081029091010152805183908290600490811061459b57fe5b602090810290910101529050805b5095945050505050565b6000806000806145c38787613114565b909350915082158015906145d75750848310155b15156145e257600080fd5b50600160a060020a0386166000908152600b602052604090206001810154640100000000900460ff1615614625578054614622908763ffffffff614bec16565b81555b61463187333089614c1e565b6002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b15801561468757600080fd5b505af115801561469b573d6000803e3d6000fd5b50506002546146b99250899150600160a060020a0316888686615323565b86600160a060020a03166000805160206155b3833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561472557600080fd5b505af1158015614739573d6000803e3d6000fd5b505050506040513d602081101561474f57600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038c16916370a082319160248083019260209291908290030181600087803b15801561479c57600080fd5b505af11580156147b0573d6000803e3d6000fd5b505050506040513d60208110156147c657600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a2509095945050505050565b6002546040805160e060020a6370a08231028152336004820152905160009283928392839283928392600160a060020a03909216916370a082319160248082019260209290919082900301818787803b15801561485757600080fd5b505af115801561486b573d6000803e3d6000fd5b505050506040513d602081101561488157600080fd5b505188111561488f57600080fd5b6148998989612b5c565b909550935084158015906148ad5750868510155b15156148b857600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561490b57600080fd5b505af115801561491f573d6000803e3d6000fd5b505050506040513d602081101561493557600080fd5b50516040805160e060020a6370a082310281523060048201529051919450600160a060020a038b16916370a08231916024808201926020929091908290030181600087803b15801561498657600080fd5b505af115801561499a573d6000803e3d6000fd5b505050506040513d60208110156149b057600080fd5b50519150818510806149cb575081851480156149cb57508288145b15156149d357fe5b50600160a060020a0388166000908152600b602052604090206001810154640100000000900460ff1615614a16578054614a13908663ffffffff614c0916565b81555b6002546040805160e060020a63a24835d1028152336004820152602481018b90529051600160a060020a039092169163a24835d19160448082019260009290919082900301818387803b158015614a6c57600080fd5b505af1158015614a80573d6000803e3d6000fd5b50505050614a8f893387614fad565b600254614aa890600160a060020a03168a8a8888615323565b88600160a060020a03166000805160206155b3833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015614b1457600080fd5b505af1158015614b28573d6000803e3d6000fd5b505050506040513d6020811015614b3e57600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038e16916370a082319160248083019260209291908290030181600087803b158015614b8b57600080fd5b505af1158015614b9f573d6000803e3d6000fd5b505050506040513d6020811015614bb557600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a25092979650505050505050565b600082820183811015614bfe57600080fd5b8091505b5092915050565b600081831015614c1857600080fd5b50900390565b6008546040805160e260020a632ecd14d30281527f4e6f6e5374616e64617264546f6b656e526567697374727900000000000000006004820152905160009283928392600160a060020a039092169163bb34534c9160248082019260209290919082900301818787803b158015614c9457600080fd5b505af1158015614ca8573d6000803e3d6000fd5b505050506040513d6020811015614cbe57600080fd5b5051604080517faeea10bd000000000000000000000000000000000000000000000000000000008152600160a060020a038a8116600483015291519295509085169163aeea10bd916024808201926020929091908290030181600087803b158015614d2857600080fd5b505af1158015614d3c573d6000803e3d6000fd5b505050506040513d6020811015614d5257600080fd5b505115614f055786600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015614db457600080fd5b505af1158015614dc8573d6000803e3d6000fd5b505050506040513d6020811015614dde57600080fd5b5051604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0389811660048301528881166024830152604482018890529151929450908916916323b872dd9160648082019260009290919082900301818387803b158015614e5657600080fd5b505af1158015614e6a573d6000803e3d6000fd5b5050505086600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015614ec957600080fd5b505af1158015614edd573d6000803e3d6000fd5b505050506040513d6020811015614ef357600080fd5b50519050818111614f0057fe5b61218c565b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301528781166024830152604482018790529151918916916323b872dd916064808201926020929091908290030181600087803b158015614f7957600080fd5b505af1158015614f8d573d6000803e3d6000fd5b505050506040513d6020811015614fa357600080fd5b5051151561218c57fe5b6008546040805160e260020a632ecd14d30281527f4e6f6e5374616e64617264546f6b656e526567697374727900000000000000006004820152905160009283928392600160a060020a039092169163bb34534c9160248082019260209290919082900301818787803b15801561502357600080fd5b505af1158015615037573d6000803e3d6000fd5b505050506040513d602081101561504d57600080fd5b5051604080517faeea10bd000000000000000000000000000000000000000000000000000000008152600160a060020a03898116600483015291519295509085169163aeea10bd916024808201926020929091908290030181600087803b1580156150b757600080fd5b505af11580156150cb573d6000803e3d6000fd5b505050506040513d60208110156150e157600080fd5b50511561528c5785600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561514357600080fd5b505af1158015615157573d6000803e3d6000fd5b505050506040513d602081101561516d57600080fd5b5051604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301526024820188905291519294509088169163a9059cbb9160448082019260009290919082900301818387803b1580156151dd57600080fd5b505af11580156151f1573d6000803e3d6000fd5b5050505085600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561525057600080fd5b505af1158015615264573d6000803e3d6000fd5b505050506040513d602081101561527a57600080fd5b5051905081811161528757fe5b614423565b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156152ef57600080fd5b505af1158015615303573d6000803e3d6000fd5b505050506040513d602081101561531957600080fd5b5051151561442357fe5b7f8000000000000000000000000000000000000000000000000000000000000000811061534c57fe5b604080518481526020810184905280820183905290513391600160a060020a0387811692908916917f276856b36cbc45526a0ba64f44611557a2a8b68662c5388e9fe6d72e86e1c8cb919081900360600190a45050505050565b600054600160a060020a031633146153bd57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561541057600080fd5b505af1158015610f7d573d6000803e3d6000fd5b6000808315156154375760009150614c02565b5082820282848281151561544757fe5b0414614bfe57600080fd5b60008080831161546157600080fd5b828481151561546c57fe5b04949350505050565b600054600160a060020a0316331461548c57600080fd5b82600160a060020a03811615156154a257600080fd5b82600160a060020a03811615156154b857600080fd5b83600160a060020a0381163014156154cf57600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561553257600080fd5b505af1158015615546573d6000803e3d6000fd5b50505050505050505050560042616e636f72466f726d756c610000000000000000000000000000000000000042616e636f724e6574776f726b0000000000000000000000000000000000000042616e636f72436f6e76657274657255706772616465720000000000000000008a6a7f53b3c8fa1dc4b83e3f1be668c1b251ff8d44cdcb83eb3acec3fec6a788a165627a7a72305820a1d5240c498906975038de9bdb52dacf0a95be608af2600ce15c20774b5be07a0029"
