#!/bin/bash

N=(1 5 10 20 50 100)

for n in "${N[@]}"
do
  k6 run -u="$n" -i="$n" load-test-triply.js
done
