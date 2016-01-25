---
layout: index
---
{{ content }}
<table class="project-details">
	<tr>
		<td>Mentors</td>
		<td>{{ page.mentors }}</td>
	</tr>
	{% if page.skill-level %}
	<tr>
	  <td>Skill Level</td>
	  <td>{{ page.skill-level }}</td>
	</tr>
	{% endif %}
	{% if page.skills %}
	<tr>
	  <td>Skills</td>
	  <td>{{ page.skills }}</td>
	</tr>
	{% endif %}
	{% if page.student %}
	<tr>
	  <td>Student</td>
	  <td>{{ page.student }}</td>
	</tr>
	{% endif %}
	{% if page.links %}
	<tr>
	  <td>Links</td>
	  <td>{{ page.links }}</td>
	</tr>
	{% endif %}
</table>
{% if page.status %}
	<p><strong>Status: </strong>
	{% if page.status contains "open" %}
		Open
	{% endif %}
	{% if page.status contains "dev" %}
		In development
	{% endif %}
	{% if page.status contains "closed" %}
		Closed
	{% endif %}
	</p>
{% endif %}