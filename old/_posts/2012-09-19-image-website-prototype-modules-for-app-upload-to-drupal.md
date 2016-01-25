---
title: Image website prototype modules for app upload to Drupal
layout: project
redirect_from: posts/image-website-prototype-modules-for-app-upload-to-drupal.html
permalink: projects/image-website-prototype-modules-for-app-upload-to-drupal
desc: Client-server communication
status: closed
mentors: <a href="http://fossasia.github.io/#hong_phuc">Hong Phuc</a>
student: Mr Zero
skill-level: medium
skills: mobile, web
links: <a href="http://www.google-melange.com/gsoc/project/details/google/gsoc2012/mrzero/5668600916475904">GSoC page</a>
category: Drupal
---
Client-server communication

In this project, two modules that enable additional functionalities in Drupal to offer photo uploads from mobile devices have been worked upon. Photos in database are managed in the way that a photo must belong to a node (album). When uploading photo, we have to specify which node this photo belong to. But from the user perspective, he only know that he want to upload photo to his account, knowing nothing about “which album”. So this module is use to help the mobile app tranfers the requirement from “to user” to “to album”. This module works as a resource for the Services module, providing a URL to get the list of a user in JSON form.
