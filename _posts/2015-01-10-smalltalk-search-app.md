---
title: Create a smalltalk application for offline text search
layout: project
redirect_from: posts/smalltalk-search-app.html
permalink: projects/smalltalk-search-app
desc: Smalltalk Application Development
status: open
mentors: <a href="http://fossasia.github.io/#embee"> Martin Bähr</a>, <a href="http://seandenigris.com">Sean P. DeNigris</a>
skills: user interface design, smalltalk
skill-level: Medium
category: Smalltalk
---
Smalltalk Application Development


Create a smalltalk application for offline text search


This application is to enable the user to research a set of books or texts,
like an encyclopedia, or some other topical book collection.

The users of this application want to be able to search phrases and read the
documents listed in the search-results using a simple, distraction free
interface

    The application should only search in documents in a FileSystem object
      inside pharo.
    The interface should offer a box to enter the search text, or browse the
      list of included documents.
    Search results should display the name of the name of the document and the
      line/or paragraph where the search text was found in the file
    Each document has one or more categories
    Browse and search should be able to filter on these categories
    The Application is to be distributed with content, so
      a tool should enable to repackage the app with new content,
      or alternatively, an online update system for new content should be provided.
    The application should handle multiple languages, and support
      crossreferencing the same document in another language.

    A simple method you can use for adding new books and documents to the
      program's library.
    Although symbols (+ "" etc) can be used to narrow a search good
       results can be found by justing using key words.
    The search results show the sentence(s) containing key words
       highlighted and you can change the highlighting (dark light different
       colours) to suit your eyes.
    The "bookshelf" of the books and documents to be searched can be
       organized in various ways according to the preference of the individual 
    Before starting a search you can choose which part of the library to
       search, e.g. the whole library, just a category
    The individual can correct typos by opening the library book/document
       and making the correction
    Search results show clearly the author, book/document title, page
       number.
    You can change the size and style of font.
    You can select "Create Compilation" so all the quotes you choose
       will be come part of a compilation that you name.
    You can save/print the search as a report

This application should be developed on the pharo smalltalk platform. Documents
should be stored within the application.

It is expected that you spends the first week learning smalltalk before working
on the application.

Resources: 

  [Pharo]( http://pharo.org/ ) (download, documentation)

  [FullTextSearch]( http://smalltalkhub.com/#!/~BenjA/FullTextSearch ) a search
    library built for pharo

  [StSearch]( http://www.squeaksource.com/StSearch/ ) is another search library in
    smalltalk that may be useful. it is unknown if it works in pharo or if it
    works at all, so you need to test it. in any case it may help you write your own.
    Reports by the developers: 
    [ZhXi 2011]( http://askoh.com/misc/stsearch/FYP_Report_ZheXi.pdf ),
    [ZhengWei 2012]( http://askoh.com/misc/stsearch/FYP_Report_ZhengWei.pdf )

