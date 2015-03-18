---
title: Project Ideas Page
layout: index
categories:
  - Community Tools
  - FashionTec
  - Local Networks
  - Smalltalk
  - sTeam
  - mobile-app
  - OpenCoin
  - sup
  - Linux
---

Here is a list of Google Summer of Code project ideas. If you have questions about GSoC please check the [FAQ](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2015/help_page). For project specific questions contact the respective mentors. Find out here [what should be in the proposal](gsoc-faq.html). Some mentors are available at certain times specifically for GSoC projects. **Martin Bähr** is available again after March 23rd. Please use email, preferably to the fossasia list, or make sure to cc other mentors. {% comment %} Saturdays from 2pm to 6pm Chinese time, that is 7am to 11am CET or 6am to 10am UTC. You can find him on freenode irc in the channel #fossasia. _(other times are possible, but don't expect an immideate answer)_{% endcomment %}

Find many of our projects on github for [FOSSASIA itself](http://github.com/fossasia/) and for our friends at [FashionTec](https://github.com/fashiontec/). If you have questions about these projects on github, submit an issue on the github issue trackers and tag it as a question.

<div class="project-contents">
  <h2>Ideas</h2>
  <ul>
    {% for category in page.categories %}
    <li>
      <a href="#{{ category }}">{{ category }}</a>
    </li>
    {% endfor %}
  </ul>
</div>

## Ideas


<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h2 id="{{ category }}" class="project-category">{{ category }}</h2>
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

{:.color-cyan}
## Smaller projects that you can work on as demonstration of your skills

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h2 id="{{ category }}" class="project-category">{{ category }}</h2>
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

{:.color-purple}
## Projects being currently worked on:

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h2 id="{{ category }}" class="project-category">{{ category }}</h2>
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
