// THIS COMPONENT CONVERT ONLY ETH AND ERC20 AND THEN SEND TO ANY ETH ADDRESS
// TODO refactoring (Presentational and Container)
// TODO DRY

import React, { Component } from 'react'
import { ButtonGroup, Alert, Form,  Modal } from "react-bootstrap"
import { inject, observer } from 'mobx-react'
import { hexToNumberString, toWei, fromWei } from 'web3-utils'
import {
  ABISmartToken,
  ABIBancorNetwork,
  BancorNetwork
} from '../../../config'

import findByProps from '../../../service/findByProps'
import getWeb3ForRead from '../../../service/getWeb3ForRead'
import getPath from '../../../service/getPath'

import { Typeahead } from 'react-bootstrap-typeahead'
import DirectionInfo from './modules/DirectionInfo'
import FakeButton from '../../templates/FakeButton'
import SetMinReturn from './modules/SetMinReturn'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';

class TradeModal extends Component {
  constructor(props, context) {
   super(props, context)
    this.state = {
    to:undefined,
    from:undefined,
    directionAmount:0,
    connectorSymbol:'',
    reciveSymbol:'',
    amountReturn:0,
    ShowModal:false,
    officialSymbols:null,
    unofficialSymbols:null,
    bancorTokensStorageJson:null,
    bancorNetworkContract: null,
    selectToOficial:true,
    selectFromOficial:true,
    web3:null,
    receiverAddress: null,
    requireApprove:false,
    sendFrom:undefined,
    sendTo:undefined,
    userBalanceFrom:undefined
    }
  }

  // helper for setState
  change = e => {
    if(typeof this.state[e.target.name] === "boolean"){
      this.setState({
        [e.target.name]: !this.state[e.target.name]
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }


  componentDidUpdate(prevProps, prevState){
    // Update rate by onChange
    if(prevState.from !== this.state.from || prevState.to !== this.state.to || prevState.directionAmount !== this.state.directionAmount){
      if(this.state.directionAmount > 0){
       this.getRate()
       this.checkRequireApprove()
      }
    }

    // Update state with tokens data
    if (prevProps.MobXStorage.bancorTokensStorageJson !== this.state.bancorTokensStorageJson) {
      const officialSymbols = this.props.MobXStorage.officialSymbols
      const unofficialSymbols = this.props.MobXStorage.unofficialSymbols
      const bancorTokensStorageJson = this.props.MobXStorage.bancorTokensStorageJson
      this.setState({
        officialSymbols,
        unofficialSymbols,
        bancorTokensStorageJson
      })
    }
  }

  // View internal and extarnal rate
  getRate = async () => {
    if(this.state.from && this.state.to && this.state.directionAmount > 0){
    if(this.state.from !== this.state.to){
      const web3 = getWeb3ForRead(this.props.MobXStorage.web3)
      const bancorNetworkContract = new web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
      const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson)

      let amountReturn = await bancorNetworkContract.methods.getReturnByPath(
        path,
        toWei(this.state.directionAmount)
      ).call()

      if(amountReturn){
        amountReturn = Number(fromWei(hexToNumberString(amountReturn[0]._hex)))
      }else{
        amountReturn = 0
      }

      this.setState({
        reciveSymbol:this.state.to,
        amountReturn
      })
    }
  }
  }

  // in this case we need aprove for BNT but not need for ETH
  checkRequireApprove = () => {
    if(this.state.from === "ETH"){
      this.setState({ requireApprove: false})
    }else{
      this.setState({ requireApprove: true})
    }
  }


  // approve ERC20 standard
  approve = () => {
    if(this.state.from){
      const tokenInfoFrom = findByProps(this.state.bancorTokensStorageJson, "symbol", this.state.from)[0]
      const token = new this.props.MobXStorage.web3.eth.Contract(ABISmartToken, tokenInfoFrom.tokenAddress)
      token.methods.approve(
        BancorNetwork,
        this.props.MobXStorage.web3.utils.toWei(String(this.state.directionAmount))
      ).send({from: this.props.MobXStorage.accounts[0]})
    }
    else{
      console.log(this.state.to, this.state.from, this.state.directionAmount)
      alert('Not correct input data')
    }
  }

  // FOR ERC20 to ERC20
  claimAndConvertFor = () => {
    const web3 = this.props.MobXStorage.web3
    const bancorNetworkContract = new web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
    const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson)

    bancorNetworkContract.methods.claimAndConvertFor(path,
      toWei(this.state.directionAmount),
      this.props.MobXStorage.minReturn,
      this.state.receiverAddress
    ).send({from: this.props.MobXStorage.accounts[0]})
    this.closeModal()
  }

  // For ETH to ERC20
  convertFor = () => {
    const web3 = this.props.MobXStorage.web3
    const bancorNetworkContract = new web3.eth.Contract(ABIBancorNetwork, BancorNetwork)
    const path = getPath(this.state.from, this.state.to, this.state.bancorTokensStorageJson)
    const amount = web3.utils.toWei(String(this.state.directionAmount))

    bancorNetworkContract.methods.convertFor(path, amount, this.props.MobXStorage.minReturn, this.state.receiverAddress)
    .send({from: this.props.MobXStorage.accounts[0], value:amount })
    this.closeModal()
  }

  // trade ERC20 and ETH
  trade = () => {
  const web3 = this.props.MobXStorage.web3
  if(web3.utils.isAddress(this.state.receiverAddress)){
  if(this.state.to && this.state.from && this.state.directionAmount > 0){
    if(this.state.from === "ETH"){
      this.convertFor()
    }else{
      this.claimAndConvertFor()
    }
  }
  else{
    alert('Not correct input data')
  }
  }else{
    alert('Not correct reciever address')
  }
  }

  // reset states after close modal
  closeModal = () => this.setState({
    to:undefined,
    from:undefined,
    directionAmount:0,
    connectorSymbol:'',
    reciveSymbol:'',
    amountReturn:0,
    ShowModal:false,
    selectToOficial:true,
    selectFromOficial:true
  })



// TODO move this to a Presentational component
  render(){
    return(
    <React.Fragment>
    {
      this.props.MobXStorage.bancorTokensStorageJson
      ?
      (
        <Button variant="contained" color="primary" onClick={() => this.setState({ ShowModal: true })}>
        Send
        </Button>
      )
      :
      (<Chip label="loading data..." style={{marginBottom: '15px'}} variant="outlined" color="primary"/>)
    }

    <Modal
      size="lg"
      show={this.state.ShowModal}
      onHide={() => this.closeModal()}
      aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
      <small>Trade and send ETH or tokens</small>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {/*select from*/}
      <React.Fragment>
      {
        this.state.officialSymbols && this.state.unofficialSymbols
        ?
        (
          <React.Fragment>

          <FormControlLabel
              control={<Checkbox onChange={e => this.change(e)} name="selectFromOficial" color="primary" />}
              label="Show unofficial"
          />

          {
            this.state.selectFromOficial
            ?
            (
              <Typeahead
                  labelKey="fromOfficialTokens"
                  multiple={false}
                  id="officialTokens"
                  options={this.state.officialSymbols}
                  onChange={(s) => this.setState({from: s[0]})}
                  placeholder="Choose a symbol"
              />
            )
            :
            (
              <Typeahead
                  labelKey="fromUnofficialTokens"
                  multiple={false}
                  id="unofficialTokens"
                  options={this.state.unofficialSymbols}
                  onChange={(s) => this.setState({from: s[0]})}
                  placeholder="Choose a symbol"
              />
            )
          }
          </React.Fragment>
        )
        :
        (null)
      }
      </React.Fragment>

      <br/>

      {/*select to*/}
      <React.Fragment>
      {
        this.state.officialSymbols && this.state.unofficialSymbols
        ?
        (
          <React.Fragment>
          <FormControlLabel
              control={<Checkbox onChange={e => this.change(e)} name="selectToOficial" color="primary" />}
              label="Show unofficial"
          />

          {
            this.state.selectToOficial
            ?
            (
              <Typeahead
                  labelKey="toOfficialTokens"
                  multiple={false}
                  id="toOfficialTokens"
                  options={this.state.officialSymbols}
                  onChange={(s) => this.setState({to: s[0]})}
                  placeholder="Choose a symbol"
              />
            )
            :
            (
              <Typeahead
                  labelKey="toUnofficialTokens"
                  multiple={false}
                  id="toUnofficialTokens"
                  options={this.state.unofficialSymbols}
                  onChange={(s) => this.setState({to: s[0]})}
                  placeholder="Choose a symbol"
              />
            )
          }
          </React.Fragment>
        )
        :
        (<p>Loading data ...</p>)
      }
      </React.Fragment>

      <br/>
      <Form.Control name="directionAmount" placeholder="Enter token amount" onChange={e => this.change(e)} type="number" min="1"/>
      <br/>
      <Form.Control name="receiverAddress" placeholder="Enter receiver address" onChange={e => this.change(e)}/>
      <br/>
      {
        this.state.directionAmount > 0
        ?
        ( <div>
          <Alert variant="success">You will receive {this.state.amountReturn} {this.state.reciveSymbol}</Alert>
          <br/>
          {
            this.props.MobXStorage.web3
            ?
            (
              /*If connect to web3 */
              <ButtonGroup size="sm">
              {
                this.state.requireApprove
                ?
                (
                  <Button variant="contained" style={{marginRight: '10px'}} color="primary" onClick={() => this.approve()}>Approve</Button>
                )
                :
                (null)
              }
              <Button variant="contained" color="primary" onClick={() => this.trade()}>Trade</Button>
              </ButtonGroup>
            )
            :
            (
              /*If NO connect to web3 */
              <ButtonGroup size="sm">
              {
                this.state.requireApprove
                ?
                (
                  <FakeButton info="Please connect to web3" buttonName="Approve"/>
                )
                :
                (null)
              }
              <FakeButton info="Please connect to web3" buttonName="Trade"/>
              </ButtonGroup>
            )
          }
          </div>
        )
        :
        (null)
      }
      <br/>
      <SetMinReturn
      amountReturn={this.state.amountReturn}
      from={this.state.from}
      to={this.state.to}
      directionAmount={this.state.directionAmount}
      />
      <br/>
      <DirectionInfo
      from={this.state.from}
      to={this.state.to}
      directionAmount={this.state.directionAmount}
      bancorTokensStorageJson={this.state.bancorTokensStorageJson}
      web3={this.props.MobXStorage.web3}
      accounts={this.props.MobXStorage.accounts}
      useERC20AsSelectFrom={true}
      useERC20AsSelectTo={true}
      amountReturn={this.state.amountReturn}
      />
      </Modal.Body>
    </Modal>
    </React.Fragment>
    )
  }
}

export default inject('MobXStorage')(observer(TradeModal))
