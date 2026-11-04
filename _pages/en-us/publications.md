---
page_id: publications
layout: page
permalink: /publications/
title: Research
description: My research journey started in Acoustics with my bachelor's thesis on Mathematical Modeling of Acoustic Emission for Water Pipeline Leakage Detection, while simultaneously working as a research assistant specializing in building acoustics and physics. This foundation evolved during my master's studies at Institut Teknologi Bandung, where I delved into audio-visual perception, VR technology, and immersive multimedia. Today, my research centers on perceptual multimedia evaluation for next-generation AV communication devices, integrating expertise in experimental design optimization, predictive modeling, statistical machine learning, perceptual metrics, and composite model building. Here are selected highlights from my scientific contributions.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<h2 id="projects" class="mt-5">{% if site.active_lang == 'id-id' %}Proyek{% else %}Projects{% endif %}</h2>
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
