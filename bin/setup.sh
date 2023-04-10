#/usr/bin/env bash

if [ -z "$WEBFONTS" ]; then
  echo "Assets package not specified"
  exit 1;
fi

curl $WEBFONTS \
  -L -H "CF-Access-Client-Id: ${R2_CLIENT}" \
  -H "CF-Access-Client-Secret: ${R2_SECRET}" \
  -o webfonts.zip

mkdir -p build/fonts
unzip -o webfonts.zip -d build/fonts/
