# vuTools <sub><sup>(v0.25)</sup></sub>
A userscript to improve various user interface bits of the Visual Utopia browser game.

![Shows different relation colors, army/city race & owner, additional army tooltip info](https://raw.githubusercontent.com/Quirinus/vuTools/master/vuTools_screenshot.png "Relation colors, army/city race & owner, additional army tooltip info")

### Features
######Map:
- all armies and cities have **[race]short_player_name** under them (the ones on armies are clickable)
- armies display number of troops when you hover over them
- armies display if they have only tier 3 troops and movement bonus if you hover over them
- cities display the number of guardtowers up to 2,000 when you hover over them
- cities display if the gates are none/open or closed when you hover over them
- city and army (ruler) names colored according to kd relations:
 - self, own kd, friendly kd, neutral no kd, neutral kd, enemy kd
- army size indicators, movement direction arrow and army path are white
- all names (except waypoints) have an an outline around them for easier spotting
- clicking on the army size indicators or army ruler name opens up the army window

######Build window:
- added Tax% to the top; mouseover to see numbers
- added Pop%, with peasant and army pop%; mouseover them
- Prod% expanded with: real total prod., peasant and slave productivity; mouseover to see numbers
- shows optimal slaves number suggestion
- the optimal amount of slaves to add/remove is automatically entered in the prompt
- shows all buildings when they are > 0, except Guardtowers, which need > 1
- added total building costs, for each building, under it
- added total gold costs to building all different buildings to top and bottom
- added Max buttons next to each building type (turns to Clear when max buildable number is in the input box)
- added 1:5 button next to the 3 resource buildings (splits buildings 1:5 = home:job)
- added 1:6 button for halflings and dwarves, similar to above
- input box now doesn't allow you to enter more than max amount of buildable units
- added another build button to the top
- added thousand separator commas almost everywhere
- everything that is underdotted has mouseover titles that give additional info

######Training window:
- added total training costs, for each tier of unit, under it
- added total gold costs to train all tier units to top and bottom
- added Max buttons next to each tier unit (turns to Clear when max trainable number is in the input box)
- input box now doesn't allow you to enter more than max amount of trainable units
- added another train button to the top
- added thousand separator commas almost everywhere
- for Human players; Mobilization:
 - added training times and warnings
 - changed button title to be more clear
 
######Army window:
- if army is stationed in city, city name links to city training window
- added city names to the dropdown, and alphabetically ordered (armies in cities shown first)
- shows raw unit op/dp/mp (if elf, select magic science for archmages)
- shows army raw op/dp/mu
- calculate mod op/dp by choosing military science level (if elf, magic too, for archmages)
- shows own city op/dp/mu if the army is in it
- added commas to numbers

######Forum:
- breadcrumbs on the bottom
- page list on the top
- last page/post link after thread names
- bottom button
- jumps to relevant post when opening via blinking kd button
- quote function

######Market:
- buy: cost input
- buy: max button
- buy: doesn't allow entering more than max
- sell: max button

######Production window:
- added columns: morale%, productivity%, employement%, population%, land
(and total land), defense (troops+clickable # of armies and troops)
- added total tax income and total (mines) gold income

######Kingdom window:
- added list other kds button under players list
- kd forum button now opens forum in the same window
- small style/position changes

######Kingdoms power list window:
- added a return to kd button on the top
- small style/position changes

######Menu:
- train/build/new army/defense/gates: navigation menu to each other
- changed order of Build and Train
- changed order of Merge and New City

######General:
- automatically checks for updates
- new army/city warns that all 1 & 2 letter words will be removed, as well as extra spaces and non-alphabetical characters