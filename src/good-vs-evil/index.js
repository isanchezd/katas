const EVIL_WIN = `Evil eradicates all trace of Good`;
const GOOD_WIN = `Good triumphs over Evil`;
const NO_VICTORY = `No victor on this battle field`;

const GOOD_ARMY_POINTS = {
  hobbits: 1,
  men: 2,
  elves: 3,
  dwarves: 3,
  eagles: 4,
  wizards: 10,
};

const EVIL_ARMY_POINTS = {
  orcs: 1,
  men: 2,
  wargs: 2,
  goblins: 2,
  urukHai: 3,
  trolls: 5,
  wizards: 10,
};

const getNumberOfTroops = (army) => army.split(" ").map(Number);

function getArmyPoints(army, armyPoints) {
  return army.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + currentValue * armyPoints[currentIndex],
    0
  );
}

function resolveBattle(goodPoints, evilPoints) {
  const prefix = "Battle Result: ";

  if (goodPoints > evilPoints) return prefix + GOOD_WIN;

  if (evilPoints > goodPoints) return prefix + EVIL_WIN;

  return prefix + NO_VICTORY;
}

function goodVsEvil(good, evil) {
  const goodArmyPoints = Object.values(GOOD_ARMY_POINTS);
  const evilArmyPoints = Object.values(EVIL_ARMY_POINTS);

  const goodPoints = getArmyPoints(getNumberOfTroops(good), goodArmyPoints);
  const evilPoints = getArmyPoints(getNumberOfTroops(evil), evilArmyPoints);

  return resolveBattle(goodPoints, evilPoints);
}

module.exports = goodVsEvil;
