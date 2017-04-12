#!/bin/bash
curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --data ''

  # in terminal,
  # ID=1  TOKEN=BAhJIiViYTM4NTU0ZTIxOGE4ZTQ2ZWU0YWZhNDdiMmY2MmVkZgY6BkVG--b0efad771cd2c35ad8fe6f4b06e11584bba143de sh scripts/game-update-delta.sh


  echo


  # #!/bin/bash
  # curl --include --request PATCH http://localhost:4741/games/$ID \
  #   --header "Authorization: Token token=$TOKEN" \
  #   --data ''
  #
  #
  #   echo
