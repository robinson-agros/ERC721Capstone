var ERC721MintableComplete = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1, {gas: '2000000', from: account_one});
            await this.contract.mint(account_one, 2, {gas: '2000000', from: account_one});
            await this.contract.mint(account_one, 3, {gas: '2000000', from: account_one});
            await this.contract.mint(account_two, 4, {gas: '2000000', from: account_one});
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 4, "Invalid total supply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_one, {from: account_one});
            assert.equal(balance, "3", "account #1 balance should be 3");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenId = 1;
            let expectedURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/" + tokenId;
            let tokenURI = await this.contract.tokenURI(tokenId);
            assert.equal(tokenURI, expectedURI, "Invalid token URI returned.");
        })

        it('should transfer token from one owner to another', async function () { 
            let targetTokenId = 1;
            await this.contract.transferFrom(account_one, account_two, targetTokenId, { from: account_one });
            let newOwner = await this.contract.ownerOf(targetTokenId);

            assert.equal(account_two, newOwner, "Ownership didn't transfer.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let exceptionThrown = false;
            try{
                await this.contract.mint(account_two, 5, {from: account_two});
            }
            catch(err){
                exceptionThrown = true;
            }

            assert(exceptionThrown, "Mint operation isn't working correctly");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert(account_one, owner, "Invalid owner returned.");
        })

    });
});