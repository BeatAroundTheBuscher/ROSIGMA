# generate listOrder depending on the order of found listOrder statements
# for example:
# awk -v startValue=1000 -f helpers/listorder.awk Ruleset/IG/weapons_IG.rul

BEGIN {
    FS = ":"
    # startValue = 0  # set with -v startValue=0
}

/listOrder/ {
    startValue += 10
    print $1 ": " startValue
}

!/listOrder/ {
    print
}