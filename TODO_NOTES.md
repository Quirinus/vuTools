- map: link arrows to armies, and size signs also
- map: https://static.visual-utopia.com/terrain8.js could be used to check for city sizes before planting them, but I won't do that it since it's a premium feature.
- forum: replies might be broken when the number indicates a post not on the last page.
- forum: in threads, add quote button/link on self posts?
- allow sorting towns in dropdown lists and production. (has to use memory storage)
- add an "always use max slaves to build" option. (has to use memory storage)
- change VU Tools.user.js --> vuTools.user.js, and in the script meta as well, and in the update link
- building: 1/6 and 5/6 split button
- building/training: when you click on max, clear all the rest
- building: #maxuseslaves commas
- building: hide only 0 buildings, except 0 & 1 GT. show the rest.
- building/training: add "Total troops/buildings:" to the left of "Total training/building (gold) cost:"
- building: turn slave table into a form. slave number into an input. another input for adding/removing slaves (submits both main and this input), and for entering the amount of slaves to release (produce a prompt before releasing, saying the possible outcome). ?
- training: maybe add total number of troops close to total gold for all tiers, or total op/dp/mu done and in training
- training: maybe add option to split units between one and mus: "Split remaining population between training unit tx and MU." (only available when you can train all peasants)
- map: make army names partially transparent? (they're over the arrows)
- map: mark your army if it's prepping. make all prepping borders be 1px instead of 2, but still red.
- map, private version: https://addons.mozilla.org/en-us/firefox/addon/check4change/ for monitoring armies and stuff that can change, and bind it to a sound alarm
- map: give alert or info about big (moving or not) armies
- army: add input military sci level. then calculate the army mop/mdp. if military sci not entered, show raw numbers.
- map: army: make the army size indicators link to the army as well. like the XXXX
- add a refresh page (whole page, not just a frame) button just right to the clock. http://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
- link all of the frames variables, etc. (probably would require working in the main, and accesing the frames by something like frame[i].prop...)
- recolor minimap accoring to relations. add armies. will have to wait until all frames are linked. ^^^^
- when creating an army/city, add a note that 1 and 2 letter words are removed, and any extra space is turned to one space, and the result is trimmed on both sides
- build page: add number of resource jobs in some of the titles, eg. prod% 
- build page: remove the extensions from towns with no resource_jobs, and fix the title
- build page: reconstruct productivity, so the current%/total% is all wrapped up in the span, so all is red, and all has the same title. then the titles includes unfilled jobs (+plus up/down/stable) and peasants + slaves working numbers. and add numberWithCommas to numbers.
- build page: indicate that productivity depends on resources jobs, not total jobs, filled with peasants and slaves. but tax depends on total jobs filled by peasants.
- every popup window: add underdotted to every element that has a title
- replace .replace(/[^0-9]+/g, '') with a new method called .stripNonNum(optional delimiter), where if delimiter != undefined then get all numbers and return them as a delimited string
- map: fix cities breaking click-drag scrolling.
- map: click on waypoint opens waypoints
- map: add city name to title
- map: make the border of tier 3 fast armies thicker, or red, or make that army stand out somehow
- map: z-order of self army vs other armies, vs army names, vs city names... also, see what the march button does in terms of js to put armies on top of others (for non-orcs)
- map: when hovering over a city, show line of sight distance according to city size (does this matter?), gt. use the intern function to draw the fog of war limit, or use a circle. terrain?
- map: when hovering over an army, show line of sight distance. use the intern function to draw the fog of war limit, or use a circle. terrain?
- map: when selecting move destination of an army, make it clickable anywhere (on top of other armies). z-order collision?
- map: untangle stacked armies: when an army is chosen from the dropdown menu: calculate all armies in range (or find function in game js). make a button that either: cycles trough the armies and makes the current one's z-order higher, and other armies default. OR make it pop out a div with clones of all those armies' inside (except don't clone ID). also put them above your own. in case you moved over allied armies and can't click on them.
- hide/remove some waypoints (from kd page list and from map)
- add extra X or some other sign like for armies of the last size, or two rows, one with 3X and the other with 2X
- wut, opens when you click on the KD button: http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=Battle%20Reports&replies=42
- when you reply it scrolls to the top of the page... make it scroll to the bottom
-  in production window, calculate the max amount of walls, and use the current amount to show %walls (or %increased prep time)
-  in production window, add col for training, new army, and add links to defense in the empty defense cells
-  fix right borders in production window
-  in production window, from Prod.	Pop.	Empl. and land, calculate the approx number of jobs and home and workers (pezzie+slave) and other buildings
-  in production window, rename Total Income to Net Income and Gold Income to Total Income
-  in production window, move land col to the first place after city names, remove light color from it, recolor the rest of the table with alternate colors, make the 4 tds of the gold total rows at the bot have colspan="2"
-  in market, remember the resource tab open when switching between buy/sell
-  market - add max buy/sell price when it's empty; also add native prices for each when empty; try to figure out native prices when not empty
-  market - allow entering an amount and then the multiplier(floored) for easier selling
-  market - allow using size suffixes: 10M or 10m = 1000000, 100k
-  market - add automatic , adding on numbers
-  market - allow inserting , and . as thousands separators
-  in training window, add max button, and costs next to input boxes
-  in kingdom window, maybe make the forum link open the forum inside the window, not in a new tab; same when the kd button is flashing in the menu
-  kd list window: hide kds that have 0%. some code is already included and commented out in this script
-  kd: add link to your kd, take it from kd list window. you can compare stuff to other kds there.
-  science window: add explanation what each one does, and how much %. add commas to the resources listed at the top of the page
-  science window: add a confirmation dialog when clicking the button.
-  science window: add the amount of missing resources
-  science window: add estimated cost of all sciences, when you hover over one, if you would upgrade it.
-  build window: add 1:5 button next to the 3 production buildings, and a max button next to all
-  add option to always auto-use slaves to build if available, store as variable (if option turned on, and no or not enough  slaves globally and/or locally, add a confirmation/info window where you can cancel the build)
-  build window: always show: homes, 3 productions, walls and any other building that passes 10%
-  build window: add train shortcut
-  train window: add build shortcut
-  prompts on various things: http://visual-utopia.com/forum.asp?f=Suggestions+and+Improvements&t=YESNO%20prompt%20on%20mobile&page=1
-  on kd page kd list: hide 0% kds. hide worlds other than your own. add checkboxes to show/hide both. world could be detectable from the function scrollToFlag(world, x, y):
-       frame = window.opener.parent.map
-       else frame = parent.parent.map
-  when changing the city/army from a dropdown box in a window, change it in the global menu, and vice-versa
-  add build, train and defense buttons on the build/train/defense windows of city pages
-  similar links as ^above for armies
-  army window: lots of useful info in the script at the bottom
-  production window: add check for red productivity % text
-  training window: in the training timeline table, hide 0s, center numbers and time headers, right align unit names, fix light/dark rows/columns with overlapping opacities?
-  training: title explaining mobilization and mouse pointer when you hover over (xx mobilized) and (xx/yy days)
-  training: add unit abilites descriptions; ranged troops can defend vs catapults; last tier unit specialty; gaia; nazguls; mages;
-  training: add base training times for comparison (with no milisci, arms or mobilization; don't forget to count in base orc bonus):

DONE:
- SEEMS NOT! forum rul replies: check if reply_number is mod50, so indicates the last page, or can be on previous pages as well; since &replies= doesn't redirect to other pages, I guess it's so
- forum: hitting quote moves you to reply textarea
- training: maybe: change train time shown when mobilization is on - make it (red mobilize time/(normal color nonmobilze time)
- turn on land size, productivity, employement, morale and maybe defense in production
- in production window, separate total tax and total gold from mines, then show them combined under it
- split tax and mine gold income
- add: navigation to the top and breadcrumbs to the bottom in the subforums
- forum: if you paste a table, it adds breadcrumbs after the first row (or before the last, dunno), as well as normally at the end of all posts.


      //formula for max buildings buildable ==> (c_num_buildable+total_buildings_in_construction)/total_buildings ~= 2.04
     
        

        /*if (c_build_space_left > c_num_buildable)
        {
            if (((c_num_buildable+1)*c_build_cost_gold < g_gold) && ((c_num_buildable+1)*c_build_cost_tree < g_tree) && ((c_num_buildable+1)*c_build_cost_stone < g_stone))
            {
                //alert('Got enough resources to build all.\nBuildable: ' + c_num_buildable.toString() + ', Total Buildings: ' + total_buildings.toString() + ', Total Capacity: ' + max_buildings_capacity.toString() + '\n' + (Math.round(parseFloat(100*(c_num_buildable+total_buildings_in_construction)/total_buildings) * 100) / 100).toString() + '% buildable/buildings.\n  ' + (Math.round(parseFloat(100*c_num_buildable/max_buildings_capacity) * 100) / 100).toString() + '% buildable/max_capacity.');
            }
            else
            {
                //alert('Not enough resources to build all.\nBuildable: ' + c_num_buildable.toString() + ', Total Buildings: ' + total_buildings.toString() + ', Total Capacity: ' + max_buildings_capacity.toString() + '\n' + (Math.round(parseFloat(100*(c_num_buildable+total_buildings_in_construction)/total_buildings) * 100) / 100).toString() + '% buildable/buildings.\n' + (Math.round(parseFloat(100*c_num_buildable/max_buildings_capacity) * 100) / 100).toString() + '% buildable/max_capacity.');
            }
        }
        else
        {
            //alert('Can build all.\nBuildable: ' + c_num_buildable.toString() + ', Total Buildings: ' + total_buildings.toString() + ', Total Capacity: ' + max_buildings_capacity.toString() + '\n' + (Math.round(parseFloat(100*(c_num_buildable+total_buildings_in_construction)/total_buildings) * 100) / 100).toString() + '% buildable/buildings.\n' + (Math.round(parseFloat(100*c_num_buildable/max_buildings_capacity) * 100) / 100).toString() + '% buildable/max_capacity.');
        }*/
        

     building tree/stone cost = gold cost/4 = wall stone cost/8
        1 slave works as 1 peasant, but doesn't pay taxes and doesn't spend food
        1 peasant pays 1 gold in taxes, it increases in bigger cities, he also eats 0.25 food
        it takes 10 slaves to speed up the building of 1 building, so the formula is by floor((slaves/10)*build_time/2), I think.
        
         fix defense: 4,198 men + 3 armies. --> remove trailing dot .
         81647 vs 83104,744525547445255474452554745 *2.74; from my biggest army, the coefficient is 2,7889258555133079847908745247148, gives correct total army upkeep (not sure if single units are rounded)
        

    <div title="Halfling city owned by Mr. Ruthless The Tall of Childrens Playground: 27539 buildings." onclick="pop('cityInfoE.asp?cityID=493328')" style="position: absolute; top:3848; left: 3524;" class="citynames">The PalaceHalfling city owned by Mr. Ruthless The Tall of Childrens Playground: 27539 buildings.</div>

- cities code: maybe instead of using loops:
             /*for (j = 0; j < kds_friendly.length ; j++)
                {
                    if (title.indexOf(kds_friendly[j]) !== -1)
                    {*/
   use:
              if (kds_friendly.indexOf(kd_name) !== -1)
              {
   have to think which is more reliable probably the second one by far, but the second one is definitely faster and more elegant; if you do this, turn ci_user_kds on again




/*
training time(tier) = ceil((base(tier)+milisci)*orc*arms*mobilize)

tier = [0, 1, 2, 3, 4]
base = [30, 40, 50, 60, 72]
milisci = 0, 1, 2, 3,...
orc = 1/2
arms = between 1 and 1/2
mobilize = 1/2 (optional for humans, for randomly about 4% training losses)
*/
-  replies: http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=AdviceFAQ&replies=68#reply_post, goes to page 2, 19th post is the reply, does not scroll when opening





http://static.visual-utopia.com/
http://static.visual-utopia.com/images/
http://static.visual-utopia.com/images/dragon.gif
https://static.visual-utopia.com/main.js
https://static.visual-utopia.com/menu.js
https://static.visual-utopia.com/pop.js
https://static.visual-utopia.com/pngfix.js
https://static.visual-utopia.com/build.js
https://static.visual-utopia.com/zoom.js
https://static.visual-utopia.com/terrain8.js -- contains terrain boundaries. can be used to check for army movement or city placement.
https://static.visual-utopia.com/fow.js
https://static.visual-utopia.com/minimap.js
https://static.visual-utopia.com/style.css?v=3
http://static.visual-utopia.com/
http://static.visual-utopia.com/images/
http://static.visual-utopia.com/images/dragon.gif



       /*
        http://visual-utopia.com/forum.asp?f=Guides+and+Articles&t=Attacking&page=1
        The army size is shown on the map. Level 3 troops (knights, riders, etc) and special units counts as two soldiers. <------

        Scout = 1-7 soldiers
        Section = 8-11 soldiers
        Platoon = 12-50 soldiers
        Company = 51-299 soldiers
        Battalion = 300-1499 soldiers
        Regiment = 1500-3999 soldiers
        Brigade = 4000-9999 soldiers
        Division = 10,000-19,999 soldiers
        Corps = 20,000-89,999 soldiers
        Army = 90,000-199,999 soldiers
        Group of armies = 200,000-999,999 soldiers or a merge
        Horde = More then one million soldiers.
        */
        
        /*
        Military science descriptions:
        lv0 - Sticks and Leather armor
        lv1 - Tree weapons and weak armor
        lv2 - Steel weapons and armor
        lv3 - Steel weapons and strong armor
        lv4 - Enhanced weapons and handmade dwarven armor
        >=lv5 - Magic weapons and mithril armor
        */
        
        /*        
		OP    DP    OP/DP   % Success Chance
		1     99    0.01    0%
		2     98    0.02    0%
		3     97    0.03    0%
		4     96    0.04    0%
		5     95    0.05    0%
		6     94    0.06    0%
		7     93    0.08    0%
		8     92    0.09    0%
		9     91    0.1     0%
		10    90    0.11    0%
		11    89    0.12    0%
		12    88    0.14    0%
		13    87    0.15    0%
		14    86    0.16    0%
		15    85    0.18    0%
		16    84    0.19    0%
		17    83    0.2     0%
		18    82    0.22    0%
		19    81    0.23    0%
		20    80    0.25    0%
		21    79    0.27    0%
		22    78    0.28    0%
		23    77    0.3     0%
		24    76    0.32    0%
		25    75    0.33    0%
		26    74    0.35    1%
		27    73    0.37    1%
		28    72    0.39    1%
		29    71    0.41    1%
		30    70    0.43    1%
		31    69    0.45    2%
		32    68    0.47    2%
		33    67    0.49    3%
		34    66    0.52    4%
		35    65    0.54    4%
		36    64    0.56    5%
		37    63    0.59    7%
		38    62    0.61    8%
		39    61    0.64    10%
		40    60    0.67    12%
		41    59    0.69    14%
		42    58    0.72    17%
		43    57    0.75    20%
		44    56    0.79    23%
		45    55    0.82    27%
		46    54    0.85    31%
		47    53    0.89    35%
		48    52    0.92    40%
		49    51    0.96    45%
		50    50    1       50%
		51    49    1.04    55%
		52    48    1.08    60%
		53    47    1.13    65%
		54    46    1.17    69%
		55    45    1.22    73%
		56    44    1.27    77%
		57    43    1.33    80%
		58    42    1.38    83%
		59    41    1.44    86%
		60    40    1.5     88%
		61    39    1.56    90%
		62    38    1.63    92%
		63    37    1.7     93%
		64    36    1.78    95%
		65    35    1.86    96%
		66    34    1.94    96%
		67    33    2.03    97%
		68    32    2.13    98%
		69    31    2.23    98%
		70    30    2.33    99%
		71    29    2.45    99%
		72    28    2.57    99%
		73    27    2.7     99%
		74    26    2.85    99%
		75    25    3       100%
		76    24    3.17    100%
		77    23    3.35    100%
		78    22    3.55    100%
		79    21    3.76    100%
		80    20    4       100%
		81    19    4.26    100%
		82    18    4.56    100%
		83    17    4.88    100%
		84    16    5.25    100%
		85    15    5.67    100%
		86    14    6.14    100%
		87    13    6.69    100%
		88    12    7.33    100%
		89    11    8.09    100%
		90    10    9       100%
		91    9    10.11    100%
		92    8    11.5     100%
		93    7    13.29    100%
		94    6    15.67    100%
		95    5    19       100%
		96    4    24       100%
		97    3    32.33    100%
		98    2    49       100%
		99    1    99       100%
        
        approx formula:
        
        General model:
		  f(x) = 100/(exp((a-x)/b)+c)
		Coefficients (with 95% confidence bounds):
		  a =       1.013  (1.003, 1.022)
		  b =      0.1817  (0.1734, 0.1899)
		  c =       1.025  (1.015, 1.035)

		Goodness of fit:
		  SSE: 253.7
		  R-square: 0.9976
		  Adjusted R-square: 0.9975
		  RMSE: 2.074
  
  
		f(x) = 100/(exp((1.013-x)/0.1817)+1.025)
        
		*/
        
        /*
        http://visual-utopia.com/forum.asp?f=Guides+and+Articles&t=The%20Units%20Guide&page=1
        prep time formula?:
        take % chance
        look at corresponding op/dp quotient 
        divide by current prep time 
        multiply by total prep time 
        take product 
        look at corresponding % chance
        */
        
        find total prep time formula. maybe involves: number of units on your side or op, building size of the city, number of walls (find out the % they increase). might also invovle number of enemy units or dp
        find how % success changes with prep time, for attacks and for siege
        
        merging an army to a prepping army halves the already prepped time (probably floored); I think it doesn't depend on the size of the merger vs mergee
        
        unit gold upkeep = Number of troops * 2,74 ?
        human sped up training gives ~4% less troops in total
        1 xp = random 1-2% bonus op/dp, roughly 1.5%
        % morale ~= % op/dp



       intUserKingdomID <-- user's kd id
        
        army info from strArmies:
        1536928#Hai Binh Laden#1367#1876#Mr. Quirinus IV#1##5768#3#10# of Childrens Playground#90599#0#87142#0#0
        Army ID#  Army Name   #    #    #  Ruler name   # ##KDID# #  # of Kingdom Name        #usrID# #total troops+1#?#?
        1535372#Zzzzzombies   #2006#2351#Mr. Quirinus IV#1##5768##5# of Childrens Playground#90599#0#744#0#0
        
        gives info only about users that have visible armies
        also, broken, need to fix unique function to give keys
	
I found out something interesting while examining some VU code to help with my userscript. There's a lot of info stored in the source code, info on you in general, and on all the visible cities and armies.

You can check *exactly* how many units an army has or GTs a city has without an EITS , and you can tell if it's filled with only tier 3 units or not (and has the movement bonus), just by looking at the source code of the map frame.

______________________________________

Right click the map scrollbar.
Choose frame source code.
(or open up view-source:http://visual-utopia.com/main.asp )
Ctrl+F the army name
Find the & before it (unless it's the first army in the list, then find '), and the & after it
Copy everything in between somewhere else so you can examine it
Examine it for the info you need:
______________________________________

Pattern:
Army ID # Army Name # x # y # Ruler name # Race ## KD ID # Direction # Size # of Kingdom Name # User ID # Preping # Total Troops+1 # Tier3 # Frozen &
   0    #     1     # 2 # 3 #     4      #   5  ##   7   #     8     #   9  #       10        #   11    #    12   #       13       #  14   #   15

Explanation:
x = x map coordinate: from -2500 to 2500 (4x2500x2500 = world size)
y = y map coordinate: from -2500 to 2500 (4x2500x2500 = world size)
Race = number
Missing column between two ##? aotd? dragon? some status?
Direction = empy (shows up as ##) means not moving, 3 north-west, 2 north, 1 north-east, 0 east, -1 south-east, -2 south, -3 south-west, -4 or 4 west, 5 not moving
Size = 1 means o, 2 oo, 3 ooo, 4 I, II, III, 7 X, XX, XXX, 10 XXXX , XXXX, XXXXX, 13 XXXXX
Tier3 = tier 3 units only in the army, yes/no? moves faster if yes (1)
Frozen = frozen for that many ticks
Total Troops+1 = should be obvious, but listed it again because I wanted to stress it

Example, I want to see the army "Prep":
1537074 #Prep#-1425#1828#Prince Pure The Caring#6##5540#-4#6# of Zeon#90244#0#1954#0#6

It has 1953 troops, and since it doesn't have the movement speed bonus, it contains some troops that aren't tier 3, so it isn't an only tier 3 army.
______________________________________

It's similar with cities:
City ID # City Name # Size # cRace # x # y # Ruler Name # Race # Tag # KD ID # Gates # of Kingdom Name # LoS GT # User ID # Buildings
        
Size = city pic size number
cRace = city pic "race": hum/orc
Tag = usually missing, so it shows up as empty ##
Gates = gates none (empty, shows up as ##), open 0, closed 1
LoS GT = extra line of sight from GuardTowers (max 1000). GuardTowers = LoSGT*2 (can be off by 1 due to rounding). Since LoS is limited to 1000, you can't know exactly how many more GTs there are after 2000.

		case '1': return 'Human';
		case '1': return 'Human';
		case '2': return 'Elf';
		case '3': return 'Orc';
		case '4': return 'Dwarf';
		case '5': return 'Troll';
		case '6': return 'Halfling';
		
From what I can see in the code, arma makes all army sizes move equally (scout speed = horde speed).

Armies of pure tier3 troops still have a slight bonus over others though, but not as much as before.