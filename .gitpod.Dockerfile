FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN sudo apt update && sudo apt upgrade -y && \
    npm install --global yarn pnpm @teambit/bvm && \
    # ensure path is avaiable
    export PATH=$PATH:$HOME/bin && \
    echo 'export PATH=$PATH:$HOME/bin >> ~/.bashrc'
    bvm install && \
    bit config set analytics_reporting false && \
    bit config set error_reporting false && \
    bit config set no_warnings true && \
    bit init --harmony && \
    bit import