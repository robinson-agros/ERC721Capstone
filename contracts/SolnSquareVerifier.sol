pragma solidity >=0.8;

import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

contract SquareVerifier is Verifier {}
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

contract SolnSquareVerifier is ERC721Mintable, Verifier{
    SquareVerifier public verifier;
    
    constructor(address verifierAddress) ERC721Mintable() {
        verifier = SquareVerifier(verifierAddress);
    }

    struct Solution {
        uint256 index;
        address addr;
    }

    Solution[] solutions;

    mapping (bytes32 => address) public uniqueSolutions;

    event solutionAdded(uint index, address addr);

    function getVerifierKey
                        (
                            uint[2] memory a,
                            uint[2][2] memory b, 
                            uint[2] memory c, 
                            uint[2] memory input
                        )
                        pure
                        public
                        returns(bytes32) 
    {
        return keccak256(abi.encodePacked(a, b, c, input));
    }

    function addSolution(uint index, address addr, bytes32 key) public {
        Solution memory sol =  Solution({
            index: index,
            addr: addr
        });
        solutions.push(sol);
        uniqueSolutions[key] = addr;
        emit solutionAdded(index, addr);
    }

    function mintToken(address to, uint256 tokenId, Proof memory proof, uint[2] memory input, uint[2] memory a, uint[2][2] memory b, uint[2] memory c) public{
        require(verifier.verifyTx(proof, input), "Incorrect Solution");
        addSolution(tokenId, to, getVerifierKey(a, b, c, input));
        super.mint(to, tokenId);
    }
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

// TODO define a solutions struct that can hold an index & an address

// TODO define an array of the above struct

// TODO define a mapping to store unique solutions submitted

// TODO Create an event to emit when a solution is added

// TODO Create a function to add the solutions to the array and emit the event



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

  


























