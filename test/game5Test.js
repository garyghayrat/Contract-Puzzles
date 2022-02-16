const { assert } = require("chai");
// const { ethers } = require("ethers");
// const { ethers } = require("ethers");
// const { ethers } = require("ethers");
// const Game5 = require('../artifacts/contracts/Game5.sol/Game5.json');

describe("Game5", function() {
  it("should be a winner", async function() {
    let Game = await ethers.getContractFactory("Game5");
    let game = await Game.deploy();
    await game.deployed();

    // good luck
    let smaller = false;

    let wallet;
    // const contractInst = new ethers.Contract(game.address, Game5.abi, wallet);
    while(smaller == false) {

    wallet = new ethers.Wallet.createRandom();
    
    const addr = await wallet.address;



      if(addr < parseInt("0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf", 16)) {
        smaller = true;
      }
    }

    // console.log(Game5);
    console.log("wallet is " , wallet);

    // await wallet.sendTransaction(game.win());
    const signer = new ethers.Wallet(wallet.privateKey, ethers.provider);

    // console.log(await ethers.getDefaultProvider);
    // const contractInst = new ethers.Contract(game.address, Game5.abi, wallet);


    const signer0 = ethers.provider.getSigner(0);
    await signer0.sendTransaction({
      value: ethers.utils.parseEther('1'),
      to: wallet.address
    })
    // await contractInst.win();
    await game.connect(signer).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
