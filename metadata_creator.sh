#! /bin/bash
set -x # Enable command tracing to show executed commands
cat metadata_template.yml | sed "s/version: \"/version: \"$1 - /"
