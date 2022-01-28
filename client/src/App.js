import React, { Component } from "react";
import ERC721Mintable from "./contracts/SolnSquareVerifier.json";
import getWeb3 from "./getWeb3";

import "./App.css";

let proof = {
  "proof": {
    "a": [
      "0x12c5b7da0d901703d6a95e082d46b1083286fa9c3cc531f2769ee295da004a53",
      "0x0e9a8bdcf7e16bb96cb80f9b7a0f05df8bec01d2b159483c731a78d7eeb8ed7c"
    ],
    "b": [
      [
        "0x004ade16d4585353520b5f53d4c9527c192502bbac7622ac1378d9ad404c9f9a",
        "0x00270dfd9404b38c7a461d6cbc861a135caa833c19a1a6028f79ff37dd0cb265"
      ],
      [
        "0x10e388ac7d74be90b0939bd357d6b532c6b312cff370593e6e9229fbd055708b",
        "0x2fc887a25368d3cb1fdf6b3b50e6ada6eac56c1fb6d08ca3ddd7ed67b8a764ec"
      ]
    ],
    "c": [
      "0x2b630eeb13662275cf2731e2271b5caa463d28bc77ce812cc1207004a4d66cb4",
      "0x12833eeb542d7ce7e5990e3c39cd33287fdf89afece0396e2122a9f7362c74fe"
    ]
  }  
}

class App extends Component {
  state = { tokenID: 0, witness:0, tokenURI: "", web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ERC721Mintable.networks[networkId];
      console.log(deployedNetwork.address);
      const instance = new web3.eth.Contract(
        ERC721Mintable.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    console.log(accounts);
  };

  onChangeID(event){
    this.setState({tokenID:event.target.value});
  }

  onChangeWitness(event){
    this.setState({witness:parseInt(event.target.value)});
  }

  registerToken = async(event) =>{
    const inputs = [this.state.witness, 1];
    const { accounts, contract } = this.state;
    console.log(this.state.tokenID);
    console.log(proof.proof);
    console.log(contract.methods);
    await contract.methods.mintToken(accounts[0], this.state.tokenID, proof.proof, inputs, proof.proof.a, proof.proof.b, proof.proof.c).send({from: accounts[0]});
    console.log("Contract Called")
  }


  fetchURI = async(event) =>{
    const { accounts, contract } = this.state;
    let uri = await contract.methods.tokenURI(this.state.tokenID).call({from:accounts[0]});
    this.setState({tokenURI:uri});
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div className="container">
          <h1>Demo for Minter</h1>
          <hr></hr>
          <p>Proof of Concept for ERC721 Token Minter</p>
        </div>
        <div className="ftc-harvest">
          <h2>ERC721 Token Creation</h2>
          <div className="form-group">                          
            <label>Register Property ID</label>
              <input type="number" placeholder="Token ID" onChange={this.onChangeID.bind(this)} ></input>
              <input type="number" placeholder="Witness" onChange={this.onChangeWitness.bind(this)} ></input>              
              <div>
                <button onClick={this.registerToken.bind(this)} >Register Token</button>
                <button onClick={this.fetchURI.bind(this)}>Fetch TOKEN URI</button>                
              </div>  
            <label>{"Here goes the URI = "+this.state.tokenURI}</label>                        
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
