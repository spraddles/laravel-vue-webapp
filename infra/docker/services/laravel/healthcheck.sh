#!/bin/sh
code=$(curl --write-out '%{http_code}' --silent --output /dev/null http://localhost:8000)

echo "response code: $code"

if [ "$code" == "200" ]
then
  echo "success"
  exit 0;
else
  echo "error"
  exit 1;
fi