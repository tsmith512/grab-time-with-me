#/usr/bin/env bash

if [ -z "$ASSETS_FOLDER" ]; then
  echo "Assets package not specified"
  exit 1;
fi

mkdir -p build/fonts
wget -N $ASSETS_FOLDER/835137.zip
unzip -o 835137.zip -d build/fonts/
