// merger.js
// put it in vscode-ruleset/schemas/oxce-merge
// run with: node merger.js

const jsonMerger = require("json-merger");
const fs = require("fs");

var result = jsonMerger.mergeFiles(["StatString.json", "../oxc/StatString.json"]);
fs.writeFileSync("StatString.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleManufacture.json", "../oxc/RuleManufacture.json"]);
fs.writeFileSync("RuleManufacture.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleCraftWeapon.json", "../oxc/RuleCraftWeapon.json"]);
fs.writeFileSync("RuleCraftWeapon.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleBaseFacility.json", "../oxc/RuleBaseFacility.json"]);
fs.writeFileSync("RuleBaseFacility.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["MapScript.json", "../oxc/MapScript.json"]);
fs.writeFileSync("MapScript.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleVideo.json", "../oxc/RuleVideo.json"]);
fs.writeFileSync("RuleVideo.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["SoundDefinition.json", "../oxc/SoundDefinition.json"]);
fs.writeFileSync("SoundDefinition.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleMissionScript.json", "../oxc/RuleMissionScript.json"]);
fs.writeFileSync("RuleMissionScript.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleCommendations.json", "../oxc/RuleCommendations.json"]);
fs.writeFileSync("RuleCommendations.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["ruleset.json", "../oxc/ruleset.json"]);
fs.writeFileSync("ruleset.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleRegion.json", "../oxc/RuleRegion.json"]);
fs.writeFileSync("RuleRegion.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleItem.json", "../oxc/RuleItem.json"]);
fs.writeFileSync("RuleItem.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["Unit.json", "../oxc/Unit.json"]);
fs.writeFileSync("Unit.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleInterface.json", "../oxc/RuleInterface.json"]);
fs.writeFileSync("RuleInterface.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["MapBlock.json", "../oxc/MapBlock.json"]);
fs.writeFileSync("MapBlock.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleCountry.json", "../oxc/RuleCountry.json"]);
fs.writeFileSync("RuleCountry.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleAlienMission.json", "../oxc/RuleAlienMission.json"]);
fs.writeFileSync("RuleAlienMission.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["ArticleDefinition.json", "../oxc/ArticleDefinition.json"]);
fs.writeFileSync("ArticleDefinition.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["AlienDeployment.json", "../oxc/AlienDeployment.json"]);
fs.writeFileSync("AlienDeployment.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["Texture.json", "../oxc/Texture.json"]);
fs.writeFileSync("Texture.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleSoldier.json", "../oxc/RuleSoldier.json"]);
fs.writeFileSync("RuleSoldier.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleTerrain.json", "../oxc/RuleTerrain.json"]);
fs.writeFileSync("RuleTerrain.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["ExtraSprites.json", "../oxc/ExtraSprites.json"]);
fs.writeFileSync("ExtraSprites.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["AlienRace.json", "../oxc/AlienRace.json"]);
fs.writeFileSync("AlienRace.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["Armor.json", "../oxc/Armor.json"]);
fs.writeFileSync("Armor.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleResearch.json", "../oxc/RuleResearch.json"]);
fs.writeFileSync("RuleResearch.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["UfoTrajectory.json", "../oxc/UfoTrajectory.json"]);
fs.writeFileSync("UfoTrajectory.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleMusic.json", "../oxc/RuleMusic.json"]);
fs.writeFileSync("RuleMusic.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleInventory.json", "../oxc/RuleInventory.json"]);
fs.writeFileSync("RuleInventory.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleUfo.json", "../oxc/RuleUfo.json"]);
fs.writeFileSync("RuleUfo.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["UnitStats.json", "../oxc/UnitStats.json"]);
fs.writeFileSync("UnitStats.json", JSON.stringify(result, null, 2));

var result = jsonMerger.mergeFiles(["RuleCraft.json", "../oxc/RuleCraft.json"]);
fs.writeFileSync("RuleCraft.json", JSON.stringify(result, null, 2));

