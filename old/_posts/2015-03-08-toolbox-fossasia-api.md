---
title: Extend toolbox for FOSSASIA (and Freifunk) API
layout: project
permalink: posts/toolbox-fossasia-api.html
desc: Web development, Application Coding, UI Design, Statistics, Visualization
status: open
mentors: Andreas Bräu
skill-level: Medium
skills: HTML, CSS, Javascript, Python, PHP, RSS, ICS
category: Community Tools
---
Web development, Application Coding, UI Design, Statistics, Visualization

FOSSASIA API is set of tools to gather information about Open Source Communities. All data should be hosted and maintained by the communities itself.

As of now we have a lot of tools we can work with:

* the Common Map, displaying the location and contact information of communities
* a feed aggregator, to aggregate all rss feeds
* a calendar collector as wordpress plugin
* display lifetime events of all communities

Goal of this project is to extend the toolbox, create new tools or enhance existing ones. Possible parts could be:

* Enhancements
	* community map: show latest news and events of communities on a map
	* filters: filter map by geolocation to receive news, events and other community related information only within a selected view
	* use the Metacommunity field to group communities, e.g. international organizations with local groups
* Extensions
	* extend FOSSASIA API specs to provide information about services (e.g. web service, mail servers, etc), see api.freifunk.net for inspiration
	* create a web service to get parts of API files, based on geo or content filters
	* build an overview about API files and validate them
* Visualization:
	* a framework to easily building charts of API data
	* Euler charts to display by countries, metacommunities, cities
	* Pie-Chart: how to contact communities (Facebook, Jabber, IRC, usw..)
	* list of services and their status
