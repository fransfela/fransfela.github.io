---
layout: page
title: Zettelkasten
permalink: /zettelkasten/
description: A living archive of interconnected ideas. Notes that evolve, connect, and compound over time
nav: true
nav_order: 4
---

The German word **Zettelkasten** translates to "slip box," but it's really a philosophy about how knowledge grows.

In the 20th century, sociologist Niklas Luhmann filled wooden boxes with thousands of index cards, each containing a single idea. But here's the magic: every card was linked to others through a simple numbering system. Over decades, these connections compounded into a vast web of thought that produced 70 books and 400+ scholarly articles.

I've adapted this system for the digital age. Instead of index cards, I maintain living notes. Documents that evolve as I learn, research, and encounter new insights. Topics connect. Ideas compound. Understanding deepens.

This is my Zettelkasten: a growing archive of interconnected thoughts on sound, perception, data, and the messy process of making sense of it all.

---

## 📚 Living Books

Comprehensive, book-length guides that grow over time. These are deep dives into topics I'm actively researching and refining.

{% assign books = site.posts | where_exp: "post", "post.tags contains 'living-book'" | sort: "date" | reverse %}
{% if books.size > 0 %}
  {% for post in books %}
- **[{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.description | strip_html | truncate: 150 }}  
  <small style="color: var(--global-text-color-light);">Last updated: {{ post.date | date: "%B %d, %Y" }}</small>
  {% endfor %}
{% else %}
<p style="color: var(--global-text-color-light); font-style: italic;">No living books yet. Coming soon.</p>
{% endif %}

---

## 📝 Living Notes

Shorter, focused notes on specific topics. Quick references, frameworks, and insights that I refine as I learn more.

{% assign notes = site.posts | where_exp: "post", "post.tags contains 'living-note'" | sort: "date" | reverse %}
{% if notes.size > 0 %}
  {% for post in notes %}
- **[{{ post.title }}]({{ post.url | relative_url }})**  
  {{ post.description | strip_html | truncate: 150 }}  
  <small style="color: var(--global-text-color-light);">Last updated: {{ post.date | date: "%B %d, %Y" }}</small>
  {% endfor %}
{% else %}
<p style="color: var(--global-text-color-light); font-style: italic;">No living notes yet. Coming soon.</p>
{% endif %}

---

<p style="text-align: center; color: var(--global-text-color-light); font-size: 0.9rem; margin-top: 4rem; font-style: italic;">
  These documents are never "finished." They evolve as my understanding deepens, connections emerge, and new insights arrive.
</p>
