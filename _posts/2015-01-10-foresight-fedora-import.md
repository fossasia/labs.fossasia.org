---
title: Redesign and improve the process of importing Fedora packages into Foresight Linux
permalink: projects/foresight-fedora-import
redirect_from: posts/foresight-fedora-import.html
layout: project
desc: Linux Distribution Management
status: open
mentors: <a href="http://fossasia.github.io/#embee"> Martin Bähr</a>, Bretts
skill-level: medium
skills: python
category: Linux
---
Linux Distribution Management


Redesign and improve the process of importing Fedora packages into Foresight Linux


Foresight Linux is a distribution based on the conary package manager.
conary provides an extensive toolset to build and maintain packages.

Recently Foresight made an attempt to rebase itself on top of fedora.
Unfortunately Foresights Repository servers could not keep up with the amount
of fedora packages and updates.

In this project you will redesign the package import process to be based around
a dependency tree that drops less important packages in favor of critical ones
so that not all, but at least the more important packages of fedora are
imported.

One complete set of 65000 fedora packages has been imported. You will be able
to use conary tools to generate a dependency graph. Using this graph you will
sort the fedora packages according to importance and update the import scripts
to import packages in that order.

