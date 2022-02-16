const { assert } = require("chai");

describe("Game4", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    await game.deployed();

    // nested mappings are rough :}
    const signer = ethers.provider.getSigner(0);
    const addr = await signer.getAddress(); 
    await game.write(addr);

    await game.win(addr);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
