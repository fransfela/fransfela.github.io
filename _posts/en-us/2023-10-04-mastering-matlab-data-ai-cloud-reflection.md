---
layout: post
title: "MATLAB Can Do That? Reflections from a Day with Data, AI, and Python Integration"
date: 2023-10-04
description: "A surprisingly productive Tuesday at Radisson Collection Royal Hotel learning how MATLAB has quietly become a polyglot powerhouse"
tags: [python-programming, r-programming, career-tips]
categories: [research]
thumbnail: assets/img/posts/matlab-event-2023.jpg
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/matlab-event-2023.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Mastering MATLAB event at Radisson Collection Royal Hotel, Copenhagen (October 3, 2023)
</div>

Yesterday, I spent nine hours at Radisson Collection Royal Hotel surrounded by MATLAB enthusiasts, free coffee, and the kind of catered lunch that makes you briefly forget you're at a tech event. The invitation came a few weeks prior: **Mastering MATLAB: Unleashing the Potential of Data Analysis, AI, and Application Development**. A mouthful of a title, but after years of alternating between Python, R, and occasionally begrudgingly opening MATLAB for signal processing tasks, I figured it was time to see what MathWorks has been up to.

Spoiler: MATLAB has quietly become more interesting than I gave it credit for.

---

## The Setup: Why I Almost Didn't Go

Let me be honest. When I first saw "MATLAB event" in my inbox, my instinct was to archive it. I'm a Python person. I live in Jupyter notebooks. My data pipelines are stitched together with pandas, NumPy, and an unhealthy reliance on list comprehensions. MATLAB, in my mind, was the tool I used during my master's thesis because the lab computers had licenses and the signal processing toolboxes were undeniably good. But daily driver? Not really.

But the agenda caught my eye. **MATLAB and Python integration**? That was new. Or at least, new to me. And **AI in MATLAB**? I was curious. Plus, free lunch at a Radisson. Copenhagen in October is cold enough that a warm meal indoors sounded appealing.

So I went.

---

## Morning: Low Code Data Analysis and the Python Plot Twist

The event kicked off at 9 AM sharp after a breakfast spread that included Danish pastries (because of course). The first session was on **Low Code Data Analysis**, which initially sounded like marketing jargon. But the demo was surprisingly slick. The presenter walked through a live analysis workflow using MATLAB's App Designer, dragging and dropping UI elements to build an interactive data exploration tool. No callbacks written manually. No widget hell. Just... click, configure, run.

I'll admit, it was elegant. For someone who's spent too many hours debugging Tkinter layouts or wrestling with Streamlit quirks, seeing a polished UI come together in minutes was kind of refreshing.

But the real headline came in the second session: **MATLAB and Python**.

---

## The Punchline: MATLAB Speaks Python Now (Actually)

Here's the thing I didn't know until yesterday: **MATLAB can now call Python directly from within its environment**. And I don't mean "export to CSV, run a Python script, import results back" workaround nonsense. I mean you can literally write Python code inside MATLAB, call Python libraries, and pass data between the two languages seamlessly.

The demo was wild. The presenter opened MATLAB, imported `numpy` and `pandas`, ran a Python-based machine learning model using `scikit-learn`, and visualized the results back in MATLAB's plotting engine. All in the same script. No friction. No janky inter-process communication. Just... integration.

Apparently, this has been a thing since [MATLAB R2022b officially expanded Python support](https://se.mathworks.com/help/matlab/python-language.html), but it flew completely under my radar. You can even call Python functions from any IDE (VSCode, PyCharm, whatever), which means you're not locked into MATLAB's desktop environment anymore.

I sat there thinking: *Wait, so I can use MATLAB's signal processing toolboxes AND Python's deep learning ecosystem without switching environments?*

Yeah. That's exactly what they're saying.

---

## Afternoon: Cloud MATLAB and Building Apps You Can Actually Share

Post-lunch (which, credit where it's due, was legitimately good), the afternoon sessions shifted toward **MATLAB in the Cloud** and **Building Interactive Applications**.

The cloud session was practical in a way I didn't expect. They demonstrated spinning up MATLAB Online, connecting to AWS/Azure resources, and running compute-heavy simulations without needing a beefy local machine. For someone who's struggled with institutional server access and licensing headaches, the idea of just... opening a browser and having MATLAB ready to go felt almost too simple.

But the session that resonated most was on **Building and Sharing Interactive Applications**. One of the demos showed a researcher who'd built a custom app for analyzing EEG data, packaged it as a standalone executable, and distributed it to clinicians who had zero MATLAB experience. The app ran independently. No license required for the end user. No "install these dependencies first" instructions.

I've tried doing this with Python (PyInstaller, cx_Freeze, etc.), and it's always a gamble. Will it work on their OS? Will some obscure DLL fail to bundle? With MATLAB Compiler, it seemed... weirdly painless.

---

## Why This Matters (For People Like Me)

Here's the thing. I'm not about to abandon Python. I'm too deep in that ecosystem. But what became clear yesterday is that **MATLAB is no longer trying to be a walled garden**. It's positioning itself as a polyglot tool that plays nicely with the rest of the data science stack.

For my work in perceptual audio evaluation, that's actually huge. I often need:
- **MATLAB's signal processing toolboxes** (they're still best-in-class for certain audio transforms)
- **Python's flexibility** (data wrangling, custom ML models, integration with web APIs)
- **R for statistics** (because let's be real, certain experimental design workflows are just easier in R)

If I can call Python from MATLAB, use MATLAB libraries from Python, and keep everything in one coherent workflow, that's not just convenient. That's a productivity unlock.

---

## The Bigger Picture: MATLAB's Identity Crisis (and How They're Solving It)

There's a broader story here about how technical tools evolve. For years, MATLAB's biggest criticism has been its proprietary nature. Expensive licenses. Closed ecosystem. "Why pay for MATLAB when Python is free?"

But what MathWorks seems to be doing is reframing the question. They're not saying "use MATLAB instead of Python." They're saying "use MATLAB alongside Python, R, C++, whatever you need." The integration isn't perfect yet (there are still data type conversion quirks, especially with nested structures), but the trajectory is clear.

And honestly? In a research environment where you're juggling multiple tools, institutional licenses, and collaborators with different preferences, having a tool that bridges ecosystems is valuable.

---

## My Takeaway: I'm Not Converting, But I'm Paying Attention

Walking out of the Radisson yesterday, I felt that rare mix of inspired and pragmatic. I'm not about to rewrite all my Python pipelines in MATLAB. But I'm also not ignoring it anymore.

The Python integration alone is worth exploring. If I can prototype an algorithm in Python, validate it with MATLAB's signal processing functions, and deploy it as a standalone app without dependency hell, that's a workflow I want to experiment with.

Plus, there's something satisfying about realizing that a tool you'd mentally filed under "legacy but occasionally useful" has quietly evolved into something more interesting.

---

## If You're a MATLAB Skeptic, Here's What You Should Know

1. **MATLAB and Python integration is real.** You can call Python libraries directly from MATLAB. [Check the docs here](https://se.mathworks.com/help/matlab/python-language.html).

2. **MATLAB Online exists.** No installation. Just a browser. It's not going to replace a local setup for heavy compute, but for quick prototyping or teaching, it's surprisingly capable.

3. **You can build standalone apps.** If you've ever tried distributing a Python script to non-technical users, you know the pain. MATLAB Compiler solves this in a way that actually works.

4. **It's still expensive.** Let's not pretend otherwise. Academic licenses help, but if you're freelance or at a small company, the cost is real. That said, if you're already in an environment with licenses, the integration capabilities make it more valuable than it used to be.

---

## Final Thought: Tools Are Just Tools (But Some Are Getting Better)

I used to think the Python vs. MATLAB debate was settled. Python won. Open source won. But the reality is messier and more interesting.

MATLAB isn't trying to win that debate anymore. It's trying to be the glue that lets you use the best tool for each part of your workflow without friction. And honestly? That's a smarter play than I expected.

So yeah. I went to a MATLAB event expecting a sales pitch and walked out with a renewed appreciation for a tool I'd written off. Not bad for a cold Tuesday in Copenhagen.

---

**P.S.** If you're doing signal processing, audio analysis, or any domain where MATLAB's toolboxes are strong but you want to stay in a Python-first workflow, seriously check out the [Python-MATLAB integration docs](https://se.mathworks.com/help/matlab/python-language.html). It's worth the 15 minutes to see if it fits your use case.

---

*Tags: #MATLAB #Python #DataScience #AudioProcessing #Copenhagen*
