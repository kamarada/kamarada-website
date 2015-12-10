#!/bin/bash
SOURCE="kamarada-website"
TARGET="kamarada.github.io"

git add --all .
git stash
LAST_COMMIT_HASH=`git rev-parse HEAD`
bundle exec jekyll build
cd "../$TARGET"
git pull
git rm -rf *
touch .nojekyll
cp -r ../$SOURCE/_site/* .
git add --all .
git commit -m "Publishing website (see commit $LAST_COMMIT_HASH from $SOURCE)"
git push
cd "../$SOURCE"
git stash pop
