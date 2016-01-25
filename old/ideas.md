---
title: Project Ideas Page
layout: index
categories:
  - Community Tools
  - FashionTec
  - Local Networks
  - Language Tools
  - Smalltalk
  - sTeam
  - OpenCoin
  - sup
  - Linux
  - Science Lab 
---

Here is a list of Google Summer of Code project ideas. If you have questions about GSoC please check the [FAQ](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2015/help_page). Find out [what should be in the proposal](gsoc-faq.html) here. Find many of our projects of [FOSSASIA itself](http://github.com/fossasia/) on github and for our friends at [FashionTec](https://github.com/fashiontec/). If you have questions about these projects on github, submit an issue on the github issue trackers and tag it as a question.

The following are some of the factors FOSSASIA will consider in selecting and ranking proposed projects:

* Relevance of student project: (1) to FOSSASIA and (2) to our goal of offering tools for positive social change
* Projects that benefit specifically Asian users
* A project/tool that is used by FOSSASIA directly or by one of our partners
* Strength of student proposal and background
* Support of mentors and partner org of FOSSASIA's goals

<div class="project-contents">
  <h2>Ideas</h2>
  {% for category in page.categories %}
    <a href="#{{ category }}">{{ category }}</a>
    <div class="category-contents">
      {% for post in site.posts %}
        {% if post.category == category %}
          {% if post.status == "open" or post.status == "prep" %}
            <a href="#{{ post.title }}">{{ post.title }}</a>
            <br>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
    <br>
  {% endfor %}
</div>

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h1 id="{{ category }}" class="project-category">{{ category }}</h1>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "open" %}
          <span>{% include post-detail.html %}</span>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>

* * *

## Smaller projects that you can work on as demonstration of your skills

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h1 id="{{ category }}" class="project-category">{{ category }}</h1>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "prep" %}
          <span>{% include post-detail.html %}</span>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>

  {% for post in site.posts %}
    {% if post.status contains "dev" %}
* * *

## Projects being currently worked on:

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h1 id="{{ category }}" class="project-category">{{ category }}</h1>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "dev" %}
          <span>{% include post-detail.html %}</span>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>
      {% break %}
    {% endif %}
  {% endfor %}

* * *
