#!/bin/bash
for file in *typ; do
    typst compile -f svg "$file"
done