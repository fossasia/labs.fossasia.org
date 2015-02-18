---
layout: index
---
{{ content }}
<hr/>
{% if page.skill-level %}
	<p><strong>Skill level: </strong>{{ page.skill-level }}</p>
{% endif %}
{% if page.skills %}
	<p><strong>Useful skills: </strong>{{ page.skills }}</p>
{% endif %}
{% if page.mentors %}
	<p><strong>Mentors: </strong>{{ page.mentors }}</p>
{% endif %}
{% if page.student %}
	<p><strong>Student: </strong>{{ page.student }}</p>
{% endif %}
{% if page.links %}
	<p><strong>Links: </strong>{{ page.links }}</p>
{% endif %}


{% if page.status %}
		<p>Status: <strong>
		{% if page.status contains "open" %}
			Open
		{% endif %}
		{% if page.status contains "dev" %}
			In development
		{% endif %}
		{% if page.status contains "closed" %}
			Closed
		{% endif %}
		</strong></p>
{% endif %}
