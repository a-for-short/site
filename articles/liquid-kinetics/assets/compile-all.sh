#!/bin/bash
for file in typ/*.typ; do
    typst compile -f svg "$file"
done