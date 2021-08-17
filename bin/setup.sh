#/usr/bin/env bash

if [ -z "$ASSETS_FOLDER" ]; then
  echo "Assets package not specified"
  exit 1;
fi

mkdir -p build/fonts
wget -N $ASSETS_FOLDER/811202.zip
unzip -o 811202.zip -d build/fonts/
