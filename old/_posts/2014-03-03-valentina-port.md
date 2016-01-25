---
title: Port Valentina to different platforms, build packages and refactor code
layout: project
permalink: posts/valentina-port.html
desc: Open Design Projects, Garments, Knitting
status: open
mentors: to be announced
skill-level: Medium
skills: C++, Qt , Windows exe build, MacOSX, Linux packaging
category: FashionTec
---
Open Design Projects, Garments, Knitting


Port Valentina to different platforms, build packages and refactor code

Currently the installation process of Valentina is only semi-automatic on Linux and Windows. For MacOSX there is no port yet available. The goal of this project is to automate the build process for the major operating systems. Create a standard workflow for Windows .exe builds, create a MacOSX port and provide packages for the major Linux distributions. The challenge of this project is to work with a number of projects and partners. For example, it is possible to create .deb packages for Debian. In order to get the package accepted in the Debian repository, it is necessary to get approval of established Debian developers who verify that the package build was done according to best practices. Similar procedures are required for other distributions. The second part of this project is to refactor code and replace deprecated code including if constructions with switch. Please see below.

Many if constructions replace with switch.

Methods:

```
VDomDocument::ParsePointElement

VDomDocument::ParseSplineElement

VDomDocument::ParseArcElement

VDomDocument::ParseToolsElement
```

For example:

```
QStringList arcs;
arcs << VToolArc::ToolType << VNodeArc::ToolType;

switch(arcs.indexOf(type)){
case 0:
// parse arc tag
break;

case 1;
// parse node arc tag
break;

default:
// print warning
break;
}
```

Project: [https://bitbucket.org/dismine/valentina/overview](https://bitbucket.org/dismine/valentina/overview)

Mailing List: [https://groups.google.com/forum/#!forum/valentina-project-list](https://groups.google.com/forum/#!forum/valentina-project-list)
