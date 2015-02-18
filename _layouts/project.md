---
layout: index
---
{{ content }}
<hr/>
{% if page.skill-level %}
	<p>Skill level: <strong>{{ page.skill-level }}</strong></p>
{% endif %}
{% if page.skills %}
	<p>Useful skills: <strong>{{ page.skills }}</strong></p>
{% endif %}
{% if page.mentors %}
	<p>Mentors: <strong>{{ page.mentors }}</strong></p>
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
