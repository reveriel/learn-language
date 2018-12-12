#!/bin/bash

# variable. use local
# local vairable's scope, the function

function var1() {
    local v1=0
    if [ 1 ]; then
        local v1=2
    fi

    echo $v1
    # two v1 are the same variable.
    # v1 will be 2.

    if [ 1 ]; then
        v1=3
        # this is the same as local v1
    fi

    echo $v1
    # get 3
}

echo $v1

var1

