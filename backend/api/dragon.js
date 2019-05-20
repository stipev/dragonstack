const { Router } = require("express");
const DragonTable = require("../app/dragon/table.js");
const DragonTraitTable = require("../app/dragonTrait/table.js");

const router = new Router();

router.get("/new", (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
    .then(dragonId => {
      dragon.dragonId = dragonId;
      dragon.traits.forEach(({ traitType, traitValue }) => {
        // const traitType = trait.traitType;
        // const traitValue = trait.traitValue;
        DragonTraitTable.storeDragonTrait({
          dragonId,
          traitType,
          traitValue
        })
          .then()
          .catch(error => console.error(error));
      });
      res.json({ dragon: dragon });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
