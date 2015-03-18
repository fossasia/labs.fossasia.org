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

<ul>
  {% for category in page.categories %}
    {% for post in site.posts %}
      {% if forloop.first %}
        <h3 class="project-category">{{ category }}</h3>
      {% endif %}
      {% if post.category == category %}
        {% if post.status contains "closed" %}
          <li>{% include post-detail.html %}</li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>
