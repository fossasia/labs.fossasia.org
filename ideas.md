---
title: FOSSASIA Labs
layout: index
---
## [about our projects](index.html)

* * *

## Looking for Google Summer of Code Projects?

See the list below. If you have questions about GSoC please check the [FAQ](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2015/help_page).
For project specific questions contact the respective mentors.

Find out here [what should be in the proposal](gsoc-faq.html).

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

{:.color-cyan}

## Smaller projects that you can work on as demonstration of your skills

<ul>
  {% for post in site.posts %}
    {% if post.status contains "prep" %}
      <li>
        {% include post-detail.html %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

  {% for post in site.posts %}
    {% if post.status contains "dev" %}
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
      {% break %}
    {% endif %}
  {% endfor %}

* * *
