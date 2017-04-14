#!/bin/bash
curl --include --request POST http://localhost:4741/games \
  --header "Authorization: Token token=$TOKEN" \
  --data ''


  echo
