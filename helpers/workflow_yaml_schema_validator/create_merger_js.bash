#!/bin/bash
# shellcheck disable=SC2164,SC2312

cd ./vscode-ruleset/schemas/oxce-merge
find . -name "*.json" | sed 's/\.\///' | \
awk 'BEGIN { print "const jsonMerger = require(\"json-merger\");\nconst fs = require(\"fs\");\n\n"} \
{ print "var result = jsonMerger.mergeFiles([\"" $0 "\", \"../oxc/" $0 "\"]);\n\
fs.writeFileSync(\"" $0 "\", JSON.stringify(result, null, 2));\n" } ' > merger.js

# Entries that refer to files that don't exist in OXC were removed by hand