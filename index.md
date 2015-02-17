---
title: FOSSASIA Labs
layout: index
---
## [about our projects](about.html)

* * *

## Looking for Google Summer of Code Projects?

See the list below. If you have questions about GSoC please check the [FAQ](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2015/help_page).
For project specific questions contact the respective mentors.

## Mentor Office Hours

Some mentors are available at certain times specifically for GSoC projects:

*   **Martin Bähr**: saturdays from 2pm to 6pm chinese time, that is 7am to 11am CET or 6am to 10am UTC. You can find him on freenode irc in the channel #fossasia. _(other times are possible, but don't expect an immideate answer)_

* * *

## Our Projects:

Find more projects on github for [FOSSASIA itself](http://github.com/fossasia/) and for our friends at [FashionTec](https://github.com/fashiontec/).
If you have questions about these projects on github, submit an issue on the github
issue trackers and tag it as a question.

{:.color-green}
## Current open projects or project ideas:

<ul>
  {% for post in site.posts %}
    {% if post.status contains "open" %}
      <li>
        {% include post-detail.html %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

* * *

{:.color-purple}
## Projects being currently worked on:
<ul>
  {% for post in site.posts %}
    {% if post.status contains "dev" %}
      <li>
        {% include post-detail.html %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

* * *

{:.color-red}
## Closed projects or projects ideas:
<ul>
  {% for post in site.posts %}
    {% if post.status contains "close" %}
      <li>
        {% include post-detail.html %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

* * *