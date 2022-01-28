// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps

    
// Test verification with incorrect proof

var Verifier = artifacts.require('Verifier');

contract('Verifier', accounts => {
    
    let PROOF = require('./proof');    

    describe('test square verifier - zokrates', function () {
        beforeEach(async function () {
            this.contract = await Verifier.new({ from: accounts[0], gas: 4700000 });
        })

        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        it('Test verification with correct proof', async function () {
            const proof = PROOF.proof;
            const inputs = PROOF.inputs;            
            let isCorrect = await this.contract.verifyTx(proof, inputs, {from: accounts[0]});

            assert.equal(true, isCorrect, "Invalid proof result");
        })

        // Test verification with incorrect proof
        it('Test verification with incorrect proof', async function () {
            const proof = PROOF.proof;
            const inputs = PROOF.inputs;
            let isCorrect = await this.contract.verifyTx(proof, [5,6], {from: accounts[0]});

            assert.equal(false, isCorrect, "Invalid proof result");
        })

    });
})