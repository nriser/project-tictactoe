#!/bin/bash
curl --include --request GET http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --data ''


  echo


# In terminal, used user yo $ID=1 TOKEN=BAhJIiViYTM4NTU0ZTIxOGE4ZTQ2ZWU0YWZhNDdiMmY2MmVkZgY6BkVG--b0efad771cd2c35ad8fe6f4b06e11584bba143de sh scripts/game-get-game.sh

# Retrieved single game (id=1) associated with user {"game":{"id":1,"cells":["x","","","","","","","",""],"over":false,"player_x":{"id":16,"email":"yo"},"player_o":{"id":18,"email":"taguchi"}}}
