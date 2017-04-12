#!/bin/bash
curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --data ''

  # in terminal,
  # $ ID=1 TOKEN=BAhJIiViN2Q5MmFhOWMyZjE0MzcyYzE3YzczODM4ZTMwNGIwYgY6BkVG--9ced37c6df0475283dc4f19cb758c07fb04848f3 sh scripts/game-update.sh


  echo


  # #!/bin/bash
  # curl --include --request PATCH http://localhost:4741/games/$ID \
  #   --header "Authorization: Token token=$TOKEN" \
  #   --data ''
  #
  #
  #   echo
