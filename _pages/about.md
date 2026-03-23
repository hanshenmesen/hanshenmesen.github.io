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

I am currently a Ph.D. student in a joint program between the School of Advanced Interdisciplinary Sciences and the Academy of Mathematics and Systems Science, Chinese Academy of Sciences, majoring in Computer Science and Technology. I am expected to graduate in 2028. My research interests focus on **Large Language Models**, **Multi-Agent Systems**, **Misinformation Detection**, and **Knowledge Graph**.

Outside of research, I am also a Top 500 Tank player in Overwatch :D

# 🔥 News
- *2025.11*: One paper titled "Beyond Detection: Exploring Evidence-based Multi-Agent Debate for Misinformation Intervention and Persuasion" has been accepted by **AAAI AISI 2026 (Oral)**. [First-time Oral Link, 50:00](https://us06web.zoom.us/rec/play/ZT5Rbv1Ukqpj7sXRaiPn5NTVX6tLmG21fMk8PtWyygZf-XkQXwh-5QBGFRe6C0trU0Io4tgEZTtB0nln.jTQ2pKF0K6BehzXp?eagerLoadZvaPages=&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&startTime=1769222052000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2F4J0Ftl5Mq9vFLTCmFFAeThHP6-qq0CIV5du9_CMEmisJ0-0nV_660MRWbfi-uY4Z.a-vxfm1krWONJB_S%3FstartTime%3D1769222052000)
- *2025.9*: One paper titled "Debate-to-Detect: Reformulating Misinformation Detection as a Real-World Debate with Large Language Models" has been accepted by **EMNLP 2025 (Main)**.
- *2025.9*: One paper titled "DocPolicyKG: A Lightweight LLM-Based Framework for Knowledge Graph Construction from Chinese Policy Documents" has been accepted by **CIKM 2025**.
- 
# 📝 Latest Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026 (Oral)</div><img src='images/aaai2026.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Beyond Detection: Exploring Evidence-based Multi-Agent Debate for Misinformation Intervention and Persuasion](https://arxiv.org/abs/2511.07267)

**Chen Han**, Yijia Ma, Jin Tan, Wenzhen Zheng, Xijin Tang

- Proposed an Evidence-based Multi-Agent Debate (ED2D) framework to address LLM hallucinations by introducing an Evidence Function Call for retrieving external knowledge (Wikipedia).
- Demonstrated that ED2D not only detects misinformation but also serves as a persuasive system to correct user misconceptions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/emnlp2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Debate-to-Detect: Reformulating Misinformation Detection as a Real-World Debate with Large Language Models](https://aclanthology.org/2025.emnlp-main.764/)

**Chen Han**, Wenzhen Zheng, Xijin Tang

- Reformulated misinformation detection as a multi-agent debate task, simulating real-world fact-checking processes to enhance reasoning interpretability and transparency.
- Outperformed existing baselines on two mainstream fake news datasets.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2025</div><img src='images/cikm2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DocPolicyKG: A Lightweight LLM-Based Framework for Knowledge Graph Construction from Chinese Policy Documents](https://dl.acm.org/doi/10.1145/3746252.3760904)

**Chen Han**, Yuanyuan Li, Xijin Tang

- Fine-tuned DeepSeek-R1-7B locally using LoRA and Few-shot learning to construct the first government investment promotion knowledge graph.
- Implemented a Graph-RAG architecture using Neo4J and Milvus for parallel retrieval to enable high-quality intelligent policy Q&A.
</div>
</div>

# 🎖 Honors and Awards
- ***2026* 入选小红书ACE顶尖实习生人才计划**
- ***2025* 中国科学院大学比亚迪奖学金**
- ***2025* 入选中国科协青年科技人才培育工程博士生专项计划**
- *2024* Merit Student and Outstanding Student Leader, UCAS（中国科学院大学三好学生、优秀学生干部）
- *2023* Outstanding Graduate and Outstanding Undergraduate Thesis, CUFE (中央财经大学优秀毕业生、优秀毕业论文)
- *2022* National Undergraduate Innovation and Entrepreneurship Training Program（国家级大学生创新创业训练项目优秀结项）
- *2022* Second Prize, MathorCup University Mathematical Modeling Challenge（MathorCup高校数学建模挑战赛大数据竞赛二等奖）
- *2021* First Prize, Mathematical Contest in Modeling (MCM/ICM) （美国大学生数学建模竞赛一等奖）
- *2020–2023* 中央财经大学三好学生 

# 📖 Educations
- *2025.02 – 2028.02*, Ph.D., School of Advanced Interdisciplinary Sciences, University of Chinese Academy of Sciences (Advisor: [Xijin Tang](https://people.ucas.ac.cn/~xjtang))

- *2023.09 – 2025.02*, M.S., Academy of Mathematics and Systems Science, Chinese Academy of Sciences (Advisor: [Xijin Tang](https://people.ucas.ac.cn/~xjtang))

- *2019.09 – 2023.06*, B.S., Central University of Finance and Economics (Advisor: [Lu Wei](https://mse.cufe.edu.cn/info/1017/4580.htm))



# 💻 Internships
- *2026.03 - Present*, **小红书ACE顶尖实习生（Xiaohongshu ACE Top Intern）**, Beijing.  Position: Data Engineer Agent R&D
- *2025.10 - 2025.11*, **蚂蚁集团（Ant Group）**, Beijing.  Position: LLM Algorithm Intern (Post-training & Evaluation).
- *2022.07 - 2023.05*, **源码资本（Source Code Capital**）, Beijing.  Position: Algorithm Intern.

# 📚 All My Publications

### 2026
**Han, C.**, Ma, Y., Tan, J., & Tang, X. (2026). Beyond detection: Exploring evidence-based multi-agent debate for misinformation intervention and persuasion. *Proceedings of the AAAI Conference on Artificial Intelligence* (AAAI 2026 Oral).


### 2025
**Han, C.**, & Tang, X. (2025). An agent-based simulation framework for misinformation susceptibility test with LLMs: Insights from psychological factors. In *Knowledge and Systems Sciences* (pp. 289–302). Springer, Singapore. https://doi.org/10.1007/978-981-95-4990-0_25

**Han, C.**, Zheng, W., & Tang, X. (2025). Debate-to-detect: Reformulating misinformation detection as a real-world debate with large language models. In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing* (pp. 15114–15129). Association for Computational Linguistics. https://doi.org/10.18653/v1/2025.emnlp-main.764

**Han, C.**, Li, Y., & Tang, X. (2025). DocPolicyKG: A lightweight LLM-based framework for knowledge graph construction from Chinese policy documents. In *Proceedings of the 34th ACM International Conference on Information and Knowledge Management* (pp. 4753–4757). https://doi.org/10.1145/3746252.3760904

**韩晨**, 唐锡晋. ACM TechNews中虚假信息报道发展进程研究—基于科技新闻的文本挖掘分析. 系统科学与数学, 2025. https://doi.org/10.12341/jssms250173 (**Han, C.**, & Tang, X. (2025). Research on the development of disinformation reports in ACM TechNews: A text mining analysis based on technology news. *Journal of Systems Science and Mathematical Sciences*.)


### Before 2023
**Han, C.**, Wu, C., & Wei, L. (2023). The impact of the disclosure characteristics of the application material on the successful listing of companies on China’s Science and Technology Innovation Board. *Journal of Behavioral and Experimental Finance*, *37*, 100733.

Chen, N., **Han, C.**, & Wei, L. (2023). The impact of subjective and objective inconsistencies in scientific and technological innovation attributes on the listing of enterprises on the Science and Technology Innovation Board. *Procedia Computer Science*, *221*, 493–500.

Wei, L., Deng, Y., Huang, J., **Han, C.**, & Jing, Z. (2022). Identification and analysis of financial technology risk factors based on textual risk disclosures. *Journal of Theoretical and Applied Electronic Commerce Research*, *17*(2), 590–612.

Wei, L., **Han, C.**, & Yao, Y. (2022). The bias analysis of oil and gas companies’ credit ratings based on textual risk disclosures. *Energies*, *15*(7), 2390.

**Han, C.**, Liang, D., Huang, J., & Wei, L. (2022). The impact of disclosure characteristics of the registration statement for Science and Technology Innovation Board on the IPO underpricing. *Procedia Computer Science*, *199*, 238–245.
