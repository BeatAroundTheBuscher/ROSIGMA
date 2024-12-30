#!/bin/bash
# shellcheck disable=SC2002,SC2312
# get new personal light entries

# run in the ROSIGMA folder
# bash helpers/get_new_pl_entries.sh

## get all armor types

# OXCE_40k
# assumes that the OXCE_40k mod is installed in mods/OXCE_40k
find ../OXCE_40k/Ruleset/ -name '*.rul' -exec yq e '.armors[] | "  - type: " + .type' {} \; | grep -v null | sort -u | sed 's/^.*type: //' | tee allArmorTypes_40k.rul
# ROSIGMA
find Ruleset/ -name '*.rul' -exec yq e '.armors[] | "  - type: " + .type' {} \; | grep -v null | sort -u | sed 's/^.*type: //' | tee allArmorTypes_ROSIGMA.rul

# merge both yq results into one
cat allArmorTypes_40k.rul allArmorTypes_ROSIGMA.rul | sort -u > allArmorTypes.rul

# get current list in the mod
cat Ruleset/ALLFACTIONS/personal_light.rul | grep type | sort -u | sed 's/^.*type: //' | sed 's/.\s#.*$//' | tee currentPersonalLight.rul

# get new entries and append 
diff allArmorTypes.rul currentPersonalLight.rul | grep "< " | sed 's/< /  - type: /' >> Ruleset/ALLFACTIONS/personal_light.rul

# remove temporary files
rm allArmorTypes_40k.rul allArmorTypes_ROSIGMA.rul allArmorTypes.rul currentPersonalLight.rul