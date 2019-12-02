---
date: '2019-12-02 20:00:00 GMT-3'
layout: post
published: true
title: 'Git Pro Tip: merge and diff made easier with GUI tools Meld and Atom'
image: '/files/2019/11/git-mergetool-meld-en.png'
nickname: 'git-meld'
---

Here is a tip for developers using [Git]: have you ever had a hard time [merging][merge] branches? Did you know that there are GUI tools to resolve conflicts? They can make your job a lot easier. Today we are going to take a look at two of them: the [Atom] text editor and the [Meld] diff and merge tool.

<!--more-->

## Merging and resolving conflicts

Before going to the tip itself, to make sure that everyone is on the same page, let's see how commonly [**git merge**][git-merge] is used, conflicts happen and are solved.

Imagine that you and a coworker are working on a development project and the team use a Git repository to store the source code. In addition to the `master` branch, each developer has their own branch (e.g. `antonio` and `john`). While you are developing a feature, you commit to your branch. When you are finished, you merge your branch into the `master` branch.

Imagine also that you and your colleague are working in parallel on the same file, editing the same part of the file (or even the same lines), but your colleague merged his `john` branch into the `master` branch before you. When you try to merge your branch, Git accuses a file conflict:

{% include image.html src="/files/2019/11/git-merge-conflict-en.png" %}

I'll give you an example that happened to me in real life once, while merging upstream changes to a fork:

```
$ git checkout master1
$ git merge upstream1
Auto-merging publish.sh
Auto-merging libs/popper.js/1.16.0/umd/popper.js
...
Auto-merging _layouts/post.html
Auto-merging _layouts/default.html
Auto-merging _includes/sidebar.html
Auto-merging _includes/head.html
CONFLICT (content): Merge conflict in _includes/head.html
Auto-merging _includes/footer.html
CONFLICT (content): Merge conflict in _includes/footer.html
Automatic merge failed; fix conflicts and then commit the result.
```

```
$ git status
On branch master1
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:

	modified:   _includes/adsense.html
	modified:   _includes/sidebar.html
...
	new file:   libs/popper.js/1.16.0/umd/popper.min.js.map
	modified:   publish.sh

Unmerged paths:
  (use "git add/rm <file>..." as appropriate to mark resolution)

	both modified:   _includes/footer.html
	both modified:   _includes/head.html
	deleted by us:   _posts/2015-08-25-welcome-to-jekyll.markdown
	both modified:   assets/css/main.css
```

In case of a merge conflict, you need to manually edit the conflicting files, comparing the changes you and your colleague made and deciding on the final version of the files, and then run [**git commit**][git-commit] to finalize the merge commit.

## Resolving conflicts with Atom

If you don't know it already, [Atom] is a text editor made by [GitHub], by developers and for developers. In its default configuration, it's already featureful and quite smart, but you can add features to it by packages. Atom resembles [Sublime Text][sublimetext], but Atom is [free software][free-sw] (in terms of both liberty and price).

To install Atom on either [Linux Kamarada][kamarada] or [openSUSE], download and install the RPM package from its official website:

- [https://atom.io/](https://atom.io/)

When you open a conflicting file with Atom, it allows you to easily choose between one or the other version of the conflicting lines by simply clicking the **Use me** button for the desired one:

{% include image.html src="/files/2019/11/atom.png" %}

Note that you don't need to be binary: you can choose one of the versions and edit it to achieve an in-between version. What matters is what ends up in the file when you save it.

## Resolving conflicts with Meld

[Meld] is a visual diff and merge tool targeted at developers. It helps you compare files and folders in two or three ways and supports many popular version control systems, including Git.

To install Meld on either Linux Kamarada or openSUSE, run:

```
# zypper in meld
```

You can use Meld standalone by opening the app and selecting the files or folders you want to compare, but I won't go into detail about its basic usage, because our goal here is to see how to use Meld integrated with Git.

To resolve merge conflicts using Meld, run [**git mergetool**][git-mergetool]:

```
$ git mergetool

This message is displayed because 'merge.tool' is not configured.
See 'git mergetool --tool-help' or 'git help config' for more details.
'git mergetool' will now attempt to use one of the following tools:
meld opendiff kdiff3 tkdiff xxdiff tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc codecompare emerge vimdiff
Merging:
_includes/footer.html
_includes/head.html
_posts/2015-08-25-welcome-to-jekyll.markdown
assets/css/main.css

Normal merge conflict for '_includes/footer.html':
  {local}: modified file
  {remote}: modified file
Hit return to start merge resolution tool (meld):
```

The **git mergetool** command fires up an appropriate visual merge tool and walks you through the conflicts. It displays that long message on the first run because we have not yet set up a merge tool. Note that it supports several tools, including Meld, which is the first on the list and is also the one it suggests using. Hit **Enter** to start Meld.

Meld opens the conflicting file in three ways: by the left, the previous version in the current branch (in this example, the `master1` branch); in the middle, the merged version (this is the one which is going to be commited); and by the right, the version in the branch being merged (`upstream1`):

{% include image.html src="/files/2019/11/git-mergetool-meld-en.png" %}

You can use the arrows next to the lines to copy code snippets from one version to the other.

Note that, as Atom, Meld does not impose you take binary decisions: you can simply place the cursor in the middle view and start typing. The final version of the merged file will be anything which is in the middle view, it does not matter if the content came from the left view, the right view, or was typed by hand.

When you are finished resolving the conflict, click **Save**.

To set up Git to always use Meld to resolve conflicts without asking which tool to use, run the following commands:

```
$ git config --global merge.tool meld
$ git config --global mergetool.prompt false
```

With that done, that long message will no longer appear when you run **git mergetool**: Git will indicate which file you are merging and will already open Meld (you won't need to hit **Enter**).

Besides resolving merge conflicts, Meld can be used to compare revisions of files controlled by Git.

## Comparing file revisions

To compare revisions of the same file (i.e. to show the changes between a file in one branch and that same file in another branch, or changes made to a file between two commits), you can use the [**git diff**][git-diff] command:

```
$ git checkout master1
$ git diff upstream1 -- _includes/footer.html
```

In this example, we want to know what changed in the `_includes/footer.html` file from the named branch (`upstream1`) to the current branch (`master1`):

{% include image.html src="/files/2019/11/git-diff-en.png" %}

Maybe using Meld this comparison is going to be shown in a more interesting way. Let's see.

## Comparing file revisions with Meld

Imagine kind of a mix between **git diff** and **git mergetool**. That's the [**git difftool**][git-difftool] command:

```
$ git difftool upstream1 -- _includes/footer.html
```

Similarly, on the first use it alerts it has not been set up yet and asks if you want to start Meld:

```
This message is displayed because 'diff.tool' is not configured.
See 'git difftool --tool-help' or 'git help config' for more details.
'git difftool' will now attempt to use one of the following tools:
meld opendiff kdiff3 tkdiff xxdiff kompare gvimdiff diffuse diffmerge ecmerge p4merge araxis bc codecompare emerge vimdiff

Viewing (1/1): '_includes/footer.html'
Launch 'meld' [Y/n]?
```

Hit **Enter** to start Meld. This time, it does a two-way comparison: by the left is displayed the revision in the named branch (in this example, the `upstream1` branch), and by the right is displayed the revision in the current branch (`master1`):

{% include image.html src="/files/2019/11/git-difftool-meld-en.png" %}

Setting up **git difftool** to always use Meld without asking is also similar:

```
$ git config --global diff.tool meld
$ git config --global difftool.prompt false
```

## References

- [Git - Basic Branching and Merging][merge]
- [Compare files with these graphical diff tools in Fedora - Fedora Magazine][fedoramagazine]
- [Setting up and using Meld as your git difftool and mergetool - Stack Overflow][stackoverflow]

[git]:              https://git-scm.com/
[merge]:            https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
[atom]:             https://atom.io/
[meld]:             https://meldmerge.org/
[git-merge]:        https://git-scm.com/docs/git-merge
[git-commit]:       https://git-scm.com/docs/git-commit
[github]:           https://github.com/
[sublimetext]:      https://www.sublimetext.com/
[free-sw]:          https://www.gnu.org/philosophy/free-sw.html
[kamarada]:         {% post_url en/2019-09-13-first-beta-release-of-the-kamarada-linux-distribution %}
[opensuse]:         https://www.opensuse.org/
[git-mergetool]:    https://git-scm.com/docs/git-mergetool
[git-diff]:         https://git-scm.com/docs/git-diff
[git-difftool]:     https://git-scm.com/docs/git-difftool
[fedoramagazine]:   https://fedoramagazine.org/compare-files-with-these-graphical-diff-tools-in-fedora/
[stackoverflow]:    https://stackoverflow.com/a/39925108/1657502
