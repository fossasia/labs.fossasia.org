---
title: FOSSASIA Labs - Archive
layout: index
categories:
  - Smalltalk
  - Linux
  - Phimpme
  - ExpEYES
  - OpenWRT
  - CryptoStick
  - mobile-app
  - Free Networks
  - Appshell
  - AYAB
  - Jekyll
  - Drupal
---
## [about our projects](index.html)

## [Our open projects or ideas](ideas.html)

* * *

{:.color-red}
## Our Closed Projects:

<div>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h2 class="project-category">{{ category }}</h2>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "closed" %}
          <span>{% include post-detail.html %}</span>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>
