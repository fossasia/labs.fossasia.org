---
title: FOSSASIA Labs - Archive
layout: index
---
## [about our projects](index.html)

## [Our open projects or ideas](ideas.html)

* * *

{:.color-red}
## Our Closed Projects:

<ul>
  {% for post in site.posts %}
    {% if post.status contains "close" %}
      <li>
        {% include post-detail.html %}
      </li>
    {% endif %}
  {% endfor %}
</ul>
