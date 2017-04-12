#!/bin/bash
curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

# player x pressed top left corner

  # in terminal,
# $ ID=1 (yo) TOKEN=BAhJIiViYTM4NTU0ZTIxOGE4ZTQ2ZWU0YWZhNDdiMmY2MmVkZgY6BkVG--b0efad771cd2c35ad8fe6f4b06e11584bba143de sh scripts/game-update-delta.sh

# Made it so that player x pressed top left corner! {"game":{"id":1,"cells":["x","","","","","","","",""],"over":false,"player_x":{"id":16,"email":"yo"},"player_o":{"id":18,"email":"taguchi"}}}


  echo
