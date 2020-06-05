---
date: '2020-06-05 11:00:00 GMT-3'
image: '/files/2020/06/git_logo.png'
layout: post
nickname: 'dotfiles-git'
published: true
title: 'Manage your dotfiles with Git'
excerpt: "What is commonly referred to as dotfiles are all those small plain text files that contain your softwares' configuration. Most of the time they reside in your $HOME directory but are hidden as they are prefixed with a dot, hence their name. For some apps, you can find them as well in the $HOME/.config directory."
---

{% capture note1 %}
The following is a copy of the text originally written by Sébastien 'sogal' Poher and published at [news.opensuse.org](https://news.opensuse.org/2020/03/27/Manage-dotfiles-with-Git/). I just added a note of mine.
{% endcapture %}

{% include note.html text=note1 %}

{% include image.html src='/files/2020/06/git_logo.png' %}

## Dot what ???

What is commonly referred to as *dotfiles* are all those small plain text files that contain your softwares' configuration. Most of the time they reside in your `$HOME` directory but are hidden as they are prefixed with a dot, hence their name. For some apps, you can find them as well in the `$HOME/.config` directory.

When it comes to managing them (i.e keep track of the changes, moving them around between different workstations, backing them up,...), there are different solutions:

* the good old USB stick
* rsyncing them
* syncing them in the "cloud"
* copying them in a central folder and symlinking them to where they are supposed to be found

In this article, we will focus on how to manage them in an efficient and simple way with [Git](https://git-scm.com/).

## Git comes to rescue

In this example, we will use `$HOME/Dotfiles` as the Git repository, but feel free to change it to your needs.

First of all, we will initialize this repository

    git init --bare $HOME/Dotfiles

Then, as all the `git` commands that we will use will refer to this repository, it is advised to create an alias, such as:

    alias dotfiles='/usr/bin/git --git-dir=$HOME/Dotfiles --work-tree=$HOME'

You can add this line to your $SHELL configuration file (`$HOME/.bashrc` if you use [Bash](https://www.gnu.org/software/bash/) or `$HOME/.zshrc` if you use [zsh](https://www.zsh.org/)).

Next, we will configure Git so it will not show all the untracked files. This is required as we use the entire `$HOME` as work tree.

    dotfiles config --local status.showUntrackedFiles no

At that point, you should be able to check the state of this repository:

    dotfiles status

Then you can add your configuration files and commit as you wish. For example, let's add our `.bashrc` :

    dotfiles add .bashrc
    dotfiles commit -m "Added .bashrc"

Now just add a remote repository (your self-hosted Git or a public one) and push your changes to it:

    dotfiles remote add origin git@yourgit.example.com/dotfiles.git
    dotfiles push

{% capture note2 %}
Online services such as [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/) and [GitLab](https://gitlab.com/) allow you to create private repositories. Unless you really want to share your dotfiles with other people, I recommend you to create a private repository, so that only you have access to your personal files.
{% endcapture %}

{% include note.html text=note2 %}

## Setup a new machine

Now that you have it all set, let's configure a new system with the dotfiles you have in your repository.

First, clone locally your online repository:

    git clone --bare git@yourgit.example.com/dotfiles.git $HOME/Dotfiles

Again, you have to defined the same alias as before:

    alias dotfiles='/usr/bin/git --git-dir=$HOME/Dotfiles --work-tree=$HOME'

Remember to put it in your $SHELL configuration file.
Now, just apply the changes from the repository you have just cloned to your system:

    dotfiles checkout

If some of the files already exist, you will get an error. This will probably happen with files created by default during the openSUSE installation and user account creation, such as the `$HOME/.bashrc` file, no worries, just rename or delete them.

Now, each time you change your configuration files tracked by Git, remember to commit and push your changes.

## Sources

The following articles where used as sources of this article. Thanks a lot to their authors:
* [Easily manage your dotfiles with git](https://lord.re/en/posts/62-dotfiles-home-git/)
* [How to make your Dotfile management a painless affair](https://www.freecodecamp.org/news/dive-into-dotfiles-part-2-6321b4a73608/)
* [How to manage your dotfiles with git](https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b)

{% capture note3 %}
The sources above were cited by the author of the original text:

- [Manage your dotfiles with Git - openSUSE News](https://news.opensuse.org/2020/03/27/Manage-dotfiles-with-Git/)

Thank you, Sébastien 'sogal' Poher, for the great tip!
{% endcapture %}

{% include note.html text=note3 %}
