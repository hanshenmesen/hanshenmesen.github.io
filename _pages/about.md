---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a Ph.D. student in a joint program between the School of Advanced Interdisciplinary Sciences and the Academy of Mathematics and Systems Science, Chinese Academy of Sciences. I am majoring in Computer Science and Technology. Prior to this, I received my Bachelor's degree from the Central University of Finance and Economics.

My research interests focus on **Large Language Models**, **Multi-Agent Systems**, and **Misinformation Detection**.

# 🔥 News
- *2025.11*: &nbsp;🎉🎉 One paper titled "Beyond Detection: Exploring Evidence-based Multi-Agent Debate for Misinformation Intervention and Persuasion" has been accepted by **AAAI AISI 2026 (Oral)**!
- *2025.9*: &nbsp;🎉🎉 One paper titled "Debate-to-Detect: Reformulating Misinformation Detection as a Real-World Debate with Large Language Models" has been accepted by **EMNLP 2025**.
- *2025.9*: &nbsp;🎉🎉 One paper titled "DocPolicyKG: A Lightweight LLM-Based Framework for Knowledge Graph Construction from Chinese Policy Documents" has been accepted by **CIKM 2025**.
- 
# 📝 Latest Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026 (Oral)</div><img src='images/aaai2026.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Beyond Detection: Exploring Evidence-based Multi-Agent Debate for Misinformation Intervention and Persuasion](https://arxiv.org/abs/2511.07267)

Chen Han, Yijia Ma, Jin Tan, Wenzhen Zheng, Xijin Tang

- Proposed an Evidence-based Multi-Agent Debate (ED2D) framework to address LLM hallucinations by introducing an Evidence Function Call for retrieving external knowledge (Wikipedia).
- Demonstrated that ED2D not only detects misinformation but also serves as a persuasive system to correct user misconceptions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/emnlp2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Debate-to-Detect: Reformulating Misinformation Detection as a Real-World Debate with Large Language Models](https://aclanthology.org/2025.emnlp-main.764/)

Chen Han, Wenzhen Zheng, Xijin Tang

- Reformulated misinformation detection as a multi-agent debate task, simulating real-world fact-checking processes to enhance reasoning interpretability and transparency.
- Outperformed existing baselines on two mainstream fake news datasets.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2025</div><img src='images/cikm2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DocPolicyKG: A Lightweight LLM-Based Framework for Knowledge Graph Construction from Chinese Policy Documents](https://dl.acm.org/doi/10.1145/3746252.3760904)

Chen Han, Yuanyuan Li, Xijin Tang

- Fine-tuned DeepSeek-R1-7B locally using LoRA and Few-shot learning to construct the first government investment promotion knowledge graph.
- Implemented a Graph-RAG architecture using Neo4J and Milvus for parallel retrieval to enable high-quality intelligent policy Q&A.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KSS 2025</div><img src='images/kss2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[An Agent-Based Simulation Framework for Misinformation Susceptibility Test with LLMs: Insights from Psychological Factors](https://doi.org/10.1007/978-981-95-4990-0_25)

Chen Han, Xijin Tang

- Constructed an Agent Profile set incorporating demographic and psychological factors to simulate group susceptibility to misinformation.
- Proposed a low-cost simulation framework to replace human experiments, validated using EMB interpretability modeling.
</div>
</div>

**Other Publications:**

- **[JBEF 2023]** (SSCI, Q1) **The impact of the disclosure characteristics of the application material on the successful listing of companies on China's Science and Technology Innovation Board**.

# 🎖 Honors and Awards
- *2025* CAS BYD Scholarship (中国科学院大学比亚迪奖学金)
- *2025* CAST Ph.D. Student Special Plan (中国科协青年科技人才培育工程博士生专项计划)
- *2023* Outstanding Graduate of Central University of Finance and Economics
- *2022* National Undergraduate Innovation and Entrepreneurship Training Program (Excellent Conclusion)
- *2021* First Prize, Mathematical Contest in Modeling (MCM/ICM)

# 📖 Educations
- *2023.09 - 2028.02 (Expected)*, Ph.D. in Computer Science, **Chinese Academy of Sciences (CAS)**, Beijing.
- *2019.09 - 2023.06*, **Central University of Finance and Economics (CUFE)**, Beijing.

# 💻 Internships
- *2025.10 - 2025.11*, **Ant Group**, Beijing.
  - Position: LLM Algorithm Intern (Post-training & Evaluation).
- *2022.07 - 2023.05*, **Source Code Capital**, Beijing.
  - Position: Algorithm Intern.
