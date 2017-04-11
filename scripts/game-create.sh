#!/bin/bash
curl "http://localhost:4741/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": ""
  }
}'

echo

#
# {
#   "game": {
#     "id": 3,
#     "cells": ["","","","","","","","",""],
#     "over": false,
#     "player_x": {
#       "id": 1,
#       "email": "and@and.com"
#     },
#     "player_o": null
#   }
# }
