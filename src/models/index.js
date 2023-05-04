const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");
const Badge = require("./Badge.js");

Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);

Trainer.belongsToMany(Badge, { through: "TrainerBadges" });
Badge.belongsToMany(Trainer, { through: "TrainerBadges" });

module.exports = {
  Pokemon,
  Trainer,
  Badge,
};
