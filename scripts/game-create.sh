#!/bin/bash
curl --include --request POST http://localhost:4741/games \
  --header "Authorization: Token token=$TOKEN" \
  --data ''


  echo

# in terminal,
# $ ID=17 TOKEN=BAhJIiU2ZTU2MDk0ODdlNjk1YzBiYzZhMmZhMGY2ZTBiMzliNwY6BkVG--ec9df4e4b86d4fa7d2a860257dbeaa0d01d57aa0 sh scripts/game-create.sh
# but be sure to sign up/sign in and use that token to create a new game for that new user

  # #!/bin/bash
  # curl --include --request GET http://localhost:4741/games/$ID \
  #   --header "Authorization: Token token=$TOKEN" \
  #   --data ''
  #
  #   echo

  #!/bin/bash



  # 1: POST, make a new game using player x token
  # curl --include --request POST http://localhost:4741/games \
  #   --header "Authorization: Token token=BAhJIiVjYTUwNDkwMGQ5NWRlMGNlMWVjOWVjZjdhZmIzYmEyMwY6BkVG--35d8e6fc70686b4b9cae8f3aa3dd530285a59455" \
  #   --data ''

# now a new game with id 1 has been created with userid 16 (email: yo) as player x

# 2: GET, gets info about game id 1. Game has been created, player x exists but player o not yet.
  # curl --include --request GET http://localhost:4741/games/1 \
  #   --header "Authorization: Token token=BAhJIiVjYTUwNDkwMGQ5NWRlMGNlMWVjOWVjZjdhZmIzYmEyMwY6BkVG--35d8e6fc70686b4b9cae8f3aa3dd530285a59455" \
  #   --data ''
  #
  #
  #   echo
