---
title: Project Ideas Page
layout: index
categories:
  - FOSSASIA
  - Smalltalk
  - sTeam
  - mobile-app
  - Valentina
  - OpenCoin
  - OpenWRT
  - sup
  - AYAB
  - loklak
  - FashionTec
  - Pike
  - Linux
---

Here is a list of Google Summer of Code project ideas?
If you have questions about GSoC please check the [FAQ](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2015/help_page). For project specific questions contact the respective mentors. Find out here [what should be in the proposal](gsoc-faq.html). Some mentors are available at certain times specifically for GSoC projects. **Martin Bähr** is available again after March 23rd. Please use email, preferably to the fossasia list, or make sure to cc other mentors. {% comment %} Saturdays from 2pm to 6pm Chinese time, that is 7am to 11am CET or 6am to 10am UTC. You can find him on freenode irc in the channel #fossasia. _(other times are possible, but don't expect an immideate answer)_{% endcomment %}

Find many of our projects on github for [FOSSASIA itself](http://github.com/fossasia/) and for our friends at [FashionTec](https://github.com/fashiontec/). If you have questions about these projects on github, submit an issue on the github issue trackers and tag it as a question.

## Table of Contents
<ul>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h3 class="project-category">{{ category }}</h3>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "open" %}
          <li>{% include post-detail.html %}</li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

* * *

{:.color-cyan}

## Smaller projects that you can work on as demonstration of your skills

<ul>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h3 class="project-category">{{ category }}</h3>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "prep" %}
          <li>{% include post-detail.html %}</li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

  {% for post in site.posts %}
    {% if post.status contains "dev" %}
* * *

{:.color-purple}
## Projects being currently worked on:
<ul>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h3 class="project-category">{{ category }}</h3>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "dev" %}
          <li>{% include post-detail.html %}</li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>
      {% break %}
    {% endif %}
  {% endfor %}

* * *
