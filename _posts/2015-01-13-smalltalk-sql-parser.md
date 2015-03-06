---
title: Smalltalk SQL Parser & Evaluator
layout: project
redirect_from: smalltalk-sql-parser
permalink: projects/smalltalk-sql-parser
desc: Using PetitParser, take SQL and evaluate it in Smalltalk.
status: open
mentors: James Foster
skill-level: medium to advanced
skills: SQL, Smalltalk
---
Using PetitParser, take SQL and evaluate it in Smalltalk.

PetitParser is a framework to create text parsers. In this project we will use
a parser for SQL and translate SQL queries into requests for Smalltalk objects.
This will give a good overview of parsers, compilers, and of database query
optimization.

The project will use Pharo (http://pharo.org/), so if you aren't familiar with
Smalltalk you should start with the resources available at that site. To see the
code start with Pharo 3.0 and load PetitParser, PetitTests, and SQL-Evaluator from 
http://smalltalkhub.com/#!/~Moose/PetitParser/ (try to figure out how to do this
before asking for help to show that you have studied the materials about 
Monticello).

Once you have the code you can see that I’ve used Petit Parser 
(pharobooks.gforge.inria.fr/PharoByExampleTwo-Eng/latest/PetitParser.pdf) 
to create a SQL grammar. The project is to take that grammar and use the parser 
to build an expression evaluator. The initial version of the code has over 100
passing tests and the project will follow test-driven development to create 
coverage for as much of the SQL standard as possible (I’ve started with 
http://www.savage.net.au/SQL/sql-92.bnf.html). 

As mentor, I’d expect to interact using email and Skype on a regular basis, but would 
expect the student to demonstrate that he or she is spending time working through 
the available materials on his or her own time. If this project is selected by 
FOOSASIA to get funding by GSoC then I’d expect the student to spend substantially 
full-time on the project. For what Google is paying, I don’t view this as a 
part-time activity that can take place when one is working and/or going to school 
full-time as well (I’ve had that attempted before, and felt that the project did 
not get as much progress as it should have received). Also, for someone who starts 
without any background in Smalltalk and Pharo, I’d expect additional time to be 
put in to come up-to-speed on the language and development environment. I’m not 
comfortable taking Google’s money just to teach someone a new language; I expect 
there to be a significant contribution to an open source project.