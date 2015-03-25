---
title: CJK Internationalisation of Text Processing
layout: project
permalink: posts/cjk-internationalisation-text-processing.html
desc: Web development, Application Coding, UI Design
status: open
mentors: tbc
skill-level: Medium
skills: Command Line, Internationalization, UTF8 Standardization, Linux, Latex
category: Language Tools
---

CJK Internationalisation of Text Processing
CJK stands for "Chinese, Japanese, Korean". The goal of the FFII project for Internationalisation of Text Processing is to embed Asian text into texts document using the Latin alphabet. There is also CJK version version available as a LaTeX 2e macro package release which enables the use of CJK scripts (Chinese/Japanese/Korean) in various encodings, written by Werner Lemberg. With Mule (multilingual Emacs) you can write texts in multiple languages. This editor is especially designed to handle the various encodings and character sets of Asian scripts such as Big 5 and GB for Chinese, JIS for Japanese, etc. Even more, you can use multiple CJK character sets simultaneously which enables e.g. Chinese users to write simplified (jiˇantˇız`ı 简体字) and traditional Chinese characters (f ́antˇız`ı 繁體字) at the same time. An article about the CJK package can be found in [TUGBoat](http://tug.org/TUGboat/Articles/tb18-3/cjkintro600.pdf).
* License: GNU General Public License.
* Mentor: Hartmut Pilch
* Code: http://cjk.ffii.org/cjk-4.8.3.tar.gz
* Website: http://cjk.ffii.org
* Mailing List: http://lists.ffii.org/mailman/listinfo/cjk

Tasks:
* Implement new commands for typical use. See the example file `CJKfntef.tex'  
* Implement support of Emacs version above 23  
* Implement support for Khmer and Vietnamese for UTF-8 encoding, making emacs
