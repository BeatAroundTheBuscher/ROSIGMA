#! /bin/bash
# shellcheck disable=SC2002,SC2086,SC2250,SC2312
set -x  # Enable command tracing to show executed commands
git_id=$(echo $1 | cut -b 1-7)
cat metadata_template.yml | sed "s/version: \"/version: \"$git_id - /"
