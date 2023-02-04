#!/bin/sh

deno install --unstable --allow-all "$@" ./index.ts

# Check user's shell, it is not necesarry by any means, but it could be used for completions.
# user_shell=$(echo $SHELL)

# echo "Detected shell:" $user_shell

# if [ $user_shell = '/bin/bash' ]; then
  # echo '# For aniquote shell completions' >> ~/.bashrc
  # echo 'source <(aniquote completions bash)' >> ~/.bashrc
  # echo 'Written to ~/.bashrc' 
# elif [ $user_shell = '/bin/fish' ]; then
  # echo '# For aniquote shell completions' >> ~/.config/fish/config.fish
  # echo 'source <(aniquote completions fish | psub)' >> ~/.config/fish/config.fish
  # echo 'Written to ~/.config/fish/config.fish' 
# elif [ $user_shell = '/bin/zsh' ]; then
  # echo '# For aniquote shell completions' >> ~/.zshrc
  # echo 'source <(aniquote completions zsh)' >> ~/.zshrc
  # echo 'Written to ~/.zsh' 
# fi

