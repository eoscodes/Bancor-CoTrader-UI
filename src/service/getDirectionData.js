import findByProps from './findByProps'

import { BancorETH } from '../config'

// parse direction addresses, tokeninfo object, isRelatedDirection info by symbol
const getDirectionData = (from, to, bancorTokensStorageJson, useERC20AsSelectFrom = true, useERC20AsSelectTo = true) => {
  // parse by token or smart token (dependse of user input)
  const objPropsFrom = useERC20AsSelectFrom ? "symbol" : "smartTokenSymbol"
  const objPropsTo = useERC20AsSelectTo ? "symbol" : "smartTokenSymbol"

  const tokenInfoFrom = findByProps(bancorTokensStorageJson, objPropsFrom, from)[0]
  const tokenInfoTo = findByProps(bancorTokensStorageJson, objPropsTo, to)[0]

  // For ETH case
  const tokenFrom = from === "ETH" ? BancorETH : tokenInfoFrom.tokenAddress
  const tokenTo = to === "ETH" ? BancorETH : tokenInfoTo.tokenAddress

  // Derection addresses
  const sendFrom = useERC20AsSelectFrom ? tokenFrom : tokenInfoFrom.smartTokenAddress
  const sendTo = useERC20AsSelectTo ? tokenTo : tokenInfoTo.smartTokenAddress

  // // detect prop for case if app use smart token
  const fromProp = objPropsFrom === 'symbol' ? 'tokenAddress' : 'smartTokenAddress'
  const toProp = objPropsTo === 'symbol' ? 'tokenAddress' : 'smartTokenAddress'

  // for case COT/COTBNT
  let isRelatedDirection
  if(to === "ETH" || from === "ETH"){
    isRelatedDirection = false
  }
  else if(tokenInfoFrom[fromProp] === tokenTo || tokenInfoTo[toProp] === tokenFrom){
    isRelatedDirection = true
  }
  else{
    isRelatedDirection = false
  }

  return {
    objPropsFrom,
    objPropsTo,
    tokenInfoFrom,
    tokenInfoTo,
    sendFrom,
    sendTo,
    isRelatedDirection
  }
}

export default getDirectionData
