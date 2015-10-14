// ==UserScript==
// @name         vuTools
// @version      0.22
// @author       Ivan Jelenić (Quirinus)
// @description  A userscript to improve various user interface bits of the Visual Utopia browser game.
// @homepage     https://github.com/Quirinus/
// @namespace    https://github.com/Quirinus/
// @downloadURL  https://raw.githubusercontent.com/Quirinus/vuTools/master/vuTools.user.js
// @updateURL    https://raw.githubusercontent.com/Quirinus/vuTools/master/vuTools.meta.js
// @supportURL   https://github.com/Quirinus/vuTools/issues
// @icon         http://visual-utopia.com/favicon.ico
// @match        http://visual-utopia.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==

//update url: https://raw.githubusercontent.com/Quirinus/vuTools/master/vuTools.user.js

$(document).ready(function ()
{
    
    var url = window.location.href;
    
    /*$(function () {
        $('<script>')
        .attr('type', 'text/javascript')
        .text(' $.fn.ready(function(){var b=$(".nonselectable"),c=$(".selectable");b.on("dragstart, selectstart",function(a){a.preventDefault()});c.on("dragstart, selectstart",function(a){a.stopPropagation()});b.find("*").andSelf().attr("unselectable","on");c.find("*").andSelf().removeAttr("unselectable")});')
        .appendTo('head');
    });
    
    $(function () {
        $('<style>')
        .attr('type', 'text/css')
        .text('.nonselectable{\
              cursor: default;\
              border: 0;\
              color: inherit;\
              background-color: inherit;\
              font:inherit;\
              pointer-events: none;\
              -webkit-touch-callout: none;\
              -webkit-user-select: none;\
              -khtml-user-drag:none;\
              -khtml-user-select: none;\
              -moz-user-select: -moz-none;\
              -moz-user-select: none;\
              -ms-user-select: none;\
              -o-user-select: none;\
              user-select: none;}\
               ')
        .appendTo('head');
    });*/
    
    $(function () {
        $('<style>')
        .attr('type', 'text/css')
        .text('.underdotted { cursor: pointer; border-bottom: 1px dotted white; }')
        .appendTo('head');
    });
    
    //http://stackoverflow.com/a/2901298
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    $(function () { //a clone for the page, not this script
        $('<script>')
        .attr('type', 'text/javascript')
        .text("function numberWithCommasx(x) { return x.toString().replace(/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g, '$&,'); }; ")
        .appendTo('head');
    });
    $(function () { //a clone for the page, not this script
        $('<script>')
        .attr('type', 'text/javascript')
        .text("function sum_training_gold_cost() \
        { \
            var sum = \
                parseInt((document.getElementById('t1_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('t2_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('t3_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('t4_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('t5_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                document.getElementById('total_training_costs').innerHTML = numberWithCommasx(sum); \
                document.getElementById('total_training_costs2').innerHTML = numberWithCommasx(sum); \
        }")
        .appendTo('head');
    });
    
    $(function () { //a clone for the page, not this script
        $('<script>')
        .attr('type', 'text/javascript')
        .text("function sum_building_gold_cost() \
        { \
            var sum = \
                parseInt((document.getElementById('b_1_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('b_2_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('b_3_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('b_4_total_cost').innerHTML).replace(/[^0-9]+/g, '')) + \
                parseInt((document.getElementById('b_5_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                parseInt((document.getElementById('b_6_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                parseInt((document.getElementById('b_7_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                parseInt((document.getElementById('b_8_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                parseInt((document.getElementById('b_9_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                parseInt((document.getElementById('b_wall_total_cost').innerHTML).replace(/[^0-9]+/g, '')); \
                document.getElementById('total_building_costs').innerHTML = numberWithCommasx(sum); \
                document.getElementById('total_building_costs2').innerHTML = numberWithCommasx(sum); \
         }")
        .appendTo('head');
    });
    
    $(function () { //a clone for the page, not this script
        $('<script>')
        .attr('type', 'text/javascript')
        .text("function addSlaves(slaves, cityID, cityName) { \
                amount = prompt('How many slaves do you want to transfer to ' + cityName + ' ?\\n(Use minus to remove slaves)', slaves); \
                if(amount) go('addSlaves.asp?cityID=' + cityID + '&amount=' + amount); }")
        .appendTo('head');
    });
            
        
    /*function numberWithCommas_unselectable(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "<span class='nonselectable'>,</span>");
    }*/
    
    var text_info = '';
    
    if (url.indexOf('main.asp') != -1)
    {
        var citynames = $.makeArray($('.citynames'));
        var city_len = citynames.length;
        var title = '';
        var city_name = '';
        var city_name_span = '';
        var city_ID = -1;
        var city_gts = -1;
        var race = '';
        var ruler_name = '';
        var ruler_name_space_pos = -1;
        var ruler_name_style = '';
        var kd_name = '';
        var name_separator_pos1 = -1;
        var name_separator_pos2 = -1;
        var name_separator_pos3 = -1;
        var name_separator_pos4 = -1;
        var name_separator_pos5 = -1;
        var titles_trim = ['Mr. ', 'Sir ' , 'Lord ', 'Duke ' , 'Prince ', 'Ms. ', 'Lady ', 'Duchess ', 'Princess '];
        var titles_len = titles_trim.length;
        
        var kd_own = ['Childrens Playground'];
        var kds_friendly = ['The Jester Empire'];
        var kds_neutral_nokd = ['', 'The Native People', '*No Kingdom*']; 
        var kds_neutral = ['Mad and Dangerous', 'The Visual Utopia Empire'];
        var kds_enemy = ['The Collective', 'Zeon'];
        //var kds_relations = [kd_own, kds_friendly, kds_enemy];
        var color_own = '#B679F0'; //plum, lightgray, thistle, #B9F2FF, #B679F0
        var color_ownkd = 'chartreuse'; //lime, chartreuse, lightgray
        var color_friendly = 'lightgray'; //#9DE0BA, #99FF99, lime
        var color_neutral_nokd = 'yellow'; //yellow, darkkhaki
        var color_neutral = 'gold'; //yellow, darkkhaki
        var color_enemy = '#FF716E'; //crimson, tomato
        //var colors_relations = [color_ownkd, color_friendly, color_enemy];
        
        var kd_found = false;

        var armies = $.makeArray($('.armyclick'));
        var army_len = armies.length;
        var army_onclick = '';
        var army_name = '';
        var army_ID = -1;
        var army_ruler_name = '';
        var army_ruler_name_short = '';
        var army_size = '';
        var army_race = '';
        var army_race_short = '';
        var army_kd = '';
        var army_troops = -1;
        var army_t3 = '';
        var army_margin = '';
        var army_left = '';
        var army_top = '';
        var army_name_span = '';
        var army_name_width = '';
        var army_color = '';
        var army_size_index = -1;
        var army_size_signs = ['o', 'oo', 'ooo', 'I', 'I I', 'I I I', 'x',  'xx', 'xxx', 'xxxx', 'xxxxx', 'xxxxx+']; //▮
        var army_size_names = ['scout', 'section', 'platoon', 'company', 'battalion', 'regiment', 'brigade',  'division', 'corps', 'army', 'army group', 'horde'];
        var army_size_numbers = ['(1-5)', '(8-12)', '(20-50)', '(100-300)', '(500-1500)', '(2000-4000)', '(around 5000)',  '(10,000-20,000)', '(around 50,000)', '(100,000-200,000)', '(around 500,000)', 'of more then one million soldiers']; //around 500,000 --> (200,000-1,000,000)
        //var army_size_real_numbers = ['(1-5)', '(8-12)', '(20-50)', '(100-300)', '(500-1500)', '(2000-4000)', '(Around 5000)',  '(10,000-20,000)', '(Around 50,000)', '(100,000-200,000)', '(200,000-1,000,000)', 'More then one million soldiers.'];
        
        //here you can access variables under $('script:eq(2)), since they're already loaded

        //strArmies
        //gives info about users that have visible armies:
        //Army ID # Army Name # x # y # Ruler name # r ## KDID # md # as # of Kingdom Name # usrID # a # total troops+1 # m # s
        //1537074 #Prep#-1425#1828#Prince Pure The Caring#6##5540#-4#6# of Zeon#90244#0#1954#0#6
        
        //x position = from -2500 to 2500 (4x2500x2500 = world size)
        //y position = from -2500 to 2500 (4x2500x2500 = world size)
        //r = race
        //missing column between two ##? spells? frozen? aotd? losing troops due to something (morale, -gold, -food)? something to do with injured troops? something with xp? dragon?
        //md = moving direction (the arrow shows it): 3 north-west, 2 north, 1 north-east, 0 east, -1 south-east, -2 south, -3 south-west, -4 or 4 west
        //as = army size (like the army_sizes array above, 0 o, oo, ooo, 3 I, II, III, 6 X, XX, XXX, XXXX , 10 XXXX, XXXXX, XXXXX)
        //a = prepping on a town (maybe siege, but don't think so)
        //m = tier 3 units only in the army, moves faster
        //s = spells/status. frozen = 6. losing troops due to something (morale, -gold, -food)? something to do with injured troops? something with xp? dragon?
        
        var armies_info = strArmies.split('&');
        armies_info.pop();
        var armies_info_len = armies_info.length;
        var army_info = '';
        
        var ai_users = [];
        //var ai_userIDs = [];
        var ai_user_kds = [];
        //var ai_user_kdIDs = [];
        var ai_armyIDs = [];
        var ai_troops = [];
        var ai_t3 = [];
        
        for (i = 0; i < armies_info_len; i++)
        {
            army_info = armies_info[i].split('#');
            ai_armyIDs[i] = army_info[0];
            ai_users[i] = army_info[4];
            //ai_userIDs[i] = army_info[11];
            ai_troops[i] = numberWithCommas(parseInt(army_info[13])-1) + ' troops';
            if (ai_troops[i] == '1 troops')
                ai_troops[i] = '1 soldier';
            ai_t3[i] = (army_info[14] == '0') ? '' : '\nOnly tier 3 troops - movement bonus.';
            if (army_info[10] === '')
            {
                ai_user_kds[i] = '';
            }
            else
            {
                ai_user_kds[i] = army_info[10].substr(4);
            }
            //ai_user_kdIDs[i] = army_info[7];
        }
        var armyID_check_index = -1;
        
        
        //armies
        $('div[style*="arrow"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)'); //css('z-index', '2'); // and add image map with coordinates from img, rotated for each
        $('img[src*="armysize"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)').css('z-index', '2');
        $('img[src*="reddot"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)');
        
        for (i = 0; i < army_len; i++)
        {
            title = $(armies[i]).attr('title');
            army_onclick = $(armies[i]).attr('onclick');
            army_ID = army_onclick.replace("pop('armyInfoE.asp?armyID=", '').replace("')", '');
            name_separator_pos1 = title.indexOf(': ');
            name_separator_pos2 = title.substring(name_separator_pos1 + ': '.length).indexOf(' ');
            name_separator_pos3 = title.substring(name_separator_pos2  + ' '.length).indexOf(' ');
            name_separator_pos4 = title.indexOf(' controlled by ');

            army_name = title.substring(0, name_separator_pos1);
            army_race = title.substring(name_separator_pos1 + ': '.length, name_separator_pos1 + ': '.length + name_separator_pos2);
            army_size = title.substring(title.indexOf(army_race) + army_race.length, name_separator_pos4).trim();
            army_race_short = '[' + army_race.substr(0,2) + ']';
            
            name_separator_pos5 = title.substring(name_separator_pos4 + ' controlled by '.length).indexOf(' of ');

            if (name_separator_pos5 !== -1)
            {
                armyID_check_index = ai_armyIDs.indexOf(army_ID);
                if (armyID_check_index !== -1)
                {
                    army_ruler_name = ai_users[armyID_check_index];
                    army_kd = ai_user_kds[armyID_check_index];
                    army_troops = ai_troops[armyID_check_index];
                    army_t3 = ai_t3[armyID_check_index];
                }
                else
                {
                    //error,try to do it with the classic method that may fail in complicated cases and give wrong user/kd name cutoffs
                    army_ruler_name = title.substring(name_separator_pos4 + ' controlled by '.length, name_separator_pos4 + ' controlled by '.length + name_separator_pos5);
                    army_kd = title.substring(title.indexOf(army_ruler_name) + army_ruler_name.length + ' of '.length);
                    army_troops = ' ERROR fetching troop number';
                    army_t3 = '\nERROR fetching tier 3';
                }

            }
            else
            {
                armyID_check_index = ai_armyIDs.indexOf(army_ID);
                if (armyID_check_index !== -1)
                {
                    army_ruler_name = ai_users[armyID_check_index];
                    army_kd = ''; //army_kd = ai_user_kds[armyID_check_index];
                    army_troops = ai_troops[armyID_check_index];
                    army_t3 = ai_t3[armyID_check_index];
                }
                else
                {
                    //error,try to do it with the classic method that may fail in complicated cases and give wrong user/kd name cutoffs
                    army_ruler_name = title.substring(name_separator_pos4 + ' controlled by '.length);
                    army_kd = '';
                    army_troops = ' ERROR fetching troop number';
                    army_t3 = '\nERROR fetching tier 3';
                }
            }
            
            
            if (army_ruler_name == strRulerName)
            {
                army_color = color_own;
            }            
            else if (army_kd == kd_own[0])
            {
                army_color = color_ownkd;
            }
            else if (kds_friendly.indexOf(army_kd) !== -1)
            {
                army_color = color_friendly;
            }
            else if (kds_neutral.indexOf(army_kd) !== -1)
            {
                army_color = color_neutral;
            }
            else if (kds_enemy.indexOf(army_kd) !== -1)
            {
                army_color = color_enemy;
            }
            else //if (kds_neutral_nokd.indexOf(army_kd) !== -1)
            {
                army_color = color_neutral_nokd;
            }
            
            army_ruler_name_short = army_ruler_name;
            for (j = 0; j < titles_len; j++)
            {
                if (army_ruler_name_short.indexOf(titles_trim[j]) === 0)
                {
                    army_ruler_name_short = army_ruler_name_short.slice(titles_trim[j].length);
                    break;
                }
            }
            if (army_ruler_name_short.length > 10)
            {
                ruler_name_space_pos = army_ruler_name_short.indexOf(' ');
                if (ruler_name_space_pos !== -1)
                    army_ruler_name_short = army_ruler_name_short.substring(0, ruler_name_space_pos); //add another layer of indexOf(' ') for a short word
                if (army_ruler_name_short.length > 10)
                    army_ruler_name_short == army_ruler_name_short.substring(0, 9);
            }

            

            if ($(armies[i]).hasClass('attackingarmy') || $(armies[i]).hasClass('frozen'))
            {
                army_margin = '2em';
            }
            else
            {
                army_margin = '1em';
            }

            army_left = parseInt($(armies[i]).css('left')); //.replace('px','') not needed if using parseInt
            army_top = parseInt($(armies[i]).css('top'));
            


           
            army_name_span = $('<a></a>')
            .text(army_race_short + army_ruler_name_short)
            .css({
                'position' : 'absolute',
                'text-decoration' : 'none',
                'cursor' : 'pointer',
                'top' : army_top,
                'left' : army_left,
                'margin-top' : army_margin,
                'color' : army_color,
                'font-weight' : 'bold',
                'font-size' : '0.8em',
                //'z-index' : '10',
                'text-align' : 'center',
                'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                '-webkit-font-smoothing' : 'antialiased'
            })
            .attr('title', title)
            .attr('onclick', army_onclick);

            
            $(armies[i]).after(army_name_span);
            army_name_width = parseInt(army_name_span.width());
            army_name_span.css('left', army_left - Math.floor((army_name_width-$(armies[i]).width())/2)); //$(armies[i]).width() = 18 for normal army (16 + 2x1 border), 22 for attacking army (16 + 2x3), 28 for frozen (16 + 2x6)

            //adds army troop numbers and if they're t3 to title
            army_size_index = army_size_names.indexOf(army_size);
            if (army_size_index !== -1)
            {
                army_kd = (army_kd !== '') ? 'of ' + army_kd : '';
                title = army_name + ': '+ army_race + ' ' + army_size + ' (' + army_troops  + ')\n'
                        + army_ruler_name + ' ' + army_kd + army_t3;// + army_size_signs[army_size_index] + army_size_numbers[army_size_index]
                $(armies[i]).attr('title', title); //add for own armies
                army_name_span.attr('title', title); //add for own armies
            }
            else
            {
                //add for not found armies
                alert('wrong army size! ' + army_name + ': '+ army_race + ' ' + army_size + ' (' + army_troops  + ')\n'
                        + army_ruler_name + ' ' + army_kd + army_t3); //group of armies causes this to pop up
            }
        }
        

        //city info from strCities:
        //cityID # city name # s # grc # x # y # ruler name # r ## kdID # g # of kd name # losgt # usrID # buildings
        
        //s = city pic size
        //grc = city pic race
        //x = from -2500 to 2500 (4x2500x2500 = world size)
        //y = from -2500 to 2500 (4x2500x2500 = world size)
        //r = race
        //missing column between two ## = spells? arma? fear from orc attack?
        //g = gates none or open 0, closed 1
        //losgt = extra line of sight from guardtowers, round or ceil(guartower number/2) = losgt;

        //strCities
        //gives info about users that have visible cities
        var cities_info = strCities.split('&');
        cities_info.pop();
        var cities_info_len = cities_info.length;
        var city_info = '';

        var ci_users = [];
        //var ci_userIDs = [];
        var ci_user_kds = [];
        //var ci_user_kdIDs = [];
        var ci_cityIDs = [];
        var ci_city_names = [];
        var ci_city_gts = [];

        for (i = 0; i < cities_info_len; i++)
        {
            city_info = cities_info[i].split('#');
            ci_cityIDs[i] = city_info[0];
            ci_city_names[i] = city_info[1];
            ci_users[i] = city_info[6];
            ci_city_gts[i] = numberWithCommas(parseInt(city_info[12])*2);
            //ci_userIDs[i] = city_info[11];
            /*if (city_info[10] == '')
            {
                ci_user_kds[i] = '';
            }
            else
            {
                ci_user_kds[i] = city_info[10].substr(4);
            }*/
            //ci_user_kdIDs[i] = city_info[7];
        }
        var cityID_check_index = -1;
        
        //enableDrag(obj)
        
        //cities
        for (i = 0; i < city_len; i++)
        {

            if (ci_city_gts[i] == '2')
            {
                city_gts = '1 guardtower.';
            }
            else if (ci_city_gts[i] == '2,000')
            {
                city_gts = '2,000 or more guardtowers.';
            }
            else
            {
                city_gts = ci_city_gts[i] + ' guardtowers.';
            }
            title = $(citynames[i]).attr('title');
            city_name = citynames[i].innerHTML;
            city_ID = $(citynames[i]).attr('onclick').replace("pop('cityInfoE.asp?cityID=", '').replace("')", '');

            ruler_name = '';
            if (title.indexOf('Your city:') === -1)
            {
                name_separator_pos1 = title.indexOf(' city owned by ');
                race = title.substring(0, name_separator_pos1);
                race = '[' + race.substr(0,2) + ']';
                name_separator_pos2 = title.indexOf(' of ');
                name_separator_pos3 = title.indexOf(':');


                if (name_separator_pos2 !== -1)
                {
                    cityID_check_index = ci_cityIDs.indexOf(city_ID);
                    if (cityID_check_index !== -1)
                    {
                        ruler_name = ci_users[cityID_check_index];
                        //kd_name = ci_user_kds[cityID_check_index];
                    }
                    else
                    {
                        //error,try to do it with the classic method that may fail in complicated cases and give wrong user/kd name cutoffs
                        ruler_name = title.substring(name_separator_pos1 + ' city owned by '.length, name_separator_pos2);
                        //kd_name = title.substring(name_separator_pos2 + ' of '.length, name_separator_pos3);
                    }
                }
                else
                {
                    ruler_name = title.substring(name_separator_pos1 + ' city owned by '.length, name_separator_pos3);
                    //kd_name = '';
                }
            }
             
            
            
            for (j = 0; j < titles_len; j++)
            {
                if (ruler_name.indexOf(titles_trim[j]) === 0)
                {
                    ruler_name = ruler_name.slice(titles_trim[j].length);
                    break;
                }
            }
            if (ruler_name.length > 10)
            {
                ruler_name_space_pos = ruler_name.indexOf(' ');
                if (ruler_name_space_pos !== -1)
                    ruler_name = ruler_name.substring(0, ruler_name_space_pos);
                if (ruler_name.length > 10)
                    ruler_name = ruler_name.substring(0, 9);
            }
            
            //citynames[i].innerHTML = race + city_name;
            ruler_name_style = $(citynames[i]).attr('style');
            $(citynames[i]).css({
                'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                '-webkit-font-smoothing' : 'antialiased'
            });
            
            title = numberWithCommas(title);
            title = title + ' ' + city_gts;
            title = title.replace(': ', ':\r');
            $(citynames[i]).attr('title', title);
            
            
            //color_case = '';
            if (title.indexOf('Your city:') !== -1)
            {
                //color_case = color_own;
                $(citynames[i]).css('color', color_own);
                kd_found = true;
            }
            else
            {
                kd_found = false;
                if (title.indexOf(kd_own[0]) !== -1)
                {
                    //color_case = color_ownkd;
                    $(citynames[i]).css('color', color_ownkd);
                    city_name_span = $('<span style="' + ruler_name_style +'"></span>')
                    .html(race + ruler_name)
                    .css({
                        'width' : '100px',
                        'height' : '20px',
                        'margin-top' : '3em',
                        'text-decoration' : 'none',
                        'cursor' : 'default',
                        'color' : color_ownkd,
                        'font-weight' : 'bold',
                        'font-size' : '0.8em',
                        'text-align' : 'center',
                        'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                        '-webkit-font-smoothing' : 'antialiased'
                    })
                    .attr('title', title);
                    $(citynames[i]).before(city_name_span);
                    kd_found = true;
                }
                if (kd_found) continue;

                for (j = 0; j < kds_friendly.length ; j++)
                {
                    if (title.indexOf(kds_friendly[j]) !== -1)
                    {
                        //color_case = color_friendly;
                        $(citynames[i]).css('color', color_friendly);
                        city_name_span = $('<span style="' + ruler_name_style +'"></span>')
                        .html(race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
                            'margin-top' : '3em',
                            'text-decoration' : 'none',
                            'cursor' : 'default',
                            'color' : color_friendly,
                            'font-weight' : 'bold',
                            'font-size' : '0.8em',
                            'text-align' : 'center',
                            'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                            '-webkit-font-smoothing' : 'antialiased'
                        })
                        .attr('title', title);
                        $(citynames[i]).before(city_name_span);
                        kd_found = true;
                        break;
                    }
                }
                if (kd_found) continue;
                
                for (j = 0; j < kds_neutral.length ; j++)
                {
                    if (title.indexOf(kds_neutral[j]) !== -1)
                    {
                        //color_case = color_neutral;
                        $(citynames[i]).css('color', color_neutral);
                        city_name_span = $('<span style="' + ruler_name_style +'"></span>')
                        .html(race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
                            'margin-top' : '3em',
                            'text-decoration' : 'none',
                            'cursor' : 'default',
                            'color' : color_neutral,
                            'font-weight' : 'bold',
                            'font-size' : '0.8em',
                            'text-align' : 'center',
                            'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                            '-webkit-font-smoothing' : 'antialiased'
                        })
                        .attr('title', title);
                        $(citynames[i]).before(city_name_span);
                        kd_found = true;
                        break;
                    }
                }
                if (kd_found) continue;
                
                for (j = 0; j < kds_enemy.length ; j++)
                {
                    if (title.indexOf(kds_enemy[j]) !== -1)
                    {
                        //color_case = color_enemy;
                        $(citynames[i]).css('color', color_enemy);
                        city_name_span = $('<span style="' + ruler_name_style +'"></span>')
                        .html(race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
                            'margin-top' : '3em',
                            'text-decoration' : 'none',
                            'cursor' : 'default',
                            'color' : color_enemy,
                            'font-weight' : 'bold',
                            'font-size' : '0.8em',
                            'text-align' : 'center',
                            'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                            '-webkit-font-smoothing' : 'antialiased'
                        })
                        .attr('title', title);
                        $(citynames[i]).before(city_name_span);
                        kd_found = true;
                        break;
                    }
                }
                if (kd_found) continue;

                //neutral,unlisted kds, no kds
                //color_case = color_neutral_nokd;
                $(citynames[i]).css('color', color_neutral_nokd);
                city_name_span = $('<span style="' + ruler_name_style +'"></span>')
                .html(race + ruler_name)
                .css({
                    'width' : '100px',
                    'height' : '20px',
                    'margin-top' : '3em',
                    'text-decoration' : 'none',
                    'cursor' : 'default',
                    'color' : color_neutral_nokd,
                    'font-weight' : 'bold',
                    'font-size' : '0.8em',
                    'text-align' : 'center',
                    'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                    '-webkit-font-smoothing' : 'antialiased'
                })
                .attr('title', title);
                $(citynames[i]).before(city_name_span);
                kd_found = true;
            }
        }
    }
    
        //menu
        //hidden buttons (display: none);, all with special ids
        // mslot16 - production
        // mslot11-16 - popout
        // magic, waypoint
        // hoh, mslot18-21 - popout
        //click on army/city - popout
        //click on the upper menu buttons - popout
        //click on the hidden menu buttons - popout
    
    //replies when kd button in the menu is blinking. this fixes is to go to the right post...
    if (url.indexOf('&replies=') !== -1)
    {
        var reply_number = parseInt(url.substring(url.indexOf('&replies=')+'&replies='.length));
        var page = Math.ceil((reply_number + 1)/50);
        var page_navigation = $("a[href='#top']").parent().parent();
        page_navigation = page_navigation.clone();
        var current_page = parseInt(page_navigation.find('strong').text());
        page_navigation.find('b').remove();
        page_navigation.find('strong').remove();
        page_navigation.find("a:contains('(next)')").remove();
        page_navigation.find("a:contains('(back)')").remove();
        var max_page = Math.max(parseInt(page_navigation.find('a:last-child').text()), current_page);
        var url_page = url.indexOf('&page=');
        if (url_page !== -1)
            url_page = parseInt(url.substring(url_page + '&page='.length));
        else
            url_page = max_page;
        var reply_number_mod = reply_number%50;

        if ((page === current_page) || (page === url_page))
        {
            $("#main > table:eq(0) > tbody > tr:eq(" + (reply_number_mod+1).toString() + ")").attr('id','reply_post');
            window.location.href = '#reply_post'; //fix it not jumping so the id is at the top of the page, there's a small gap
        }
        else
        {
            if (window.location.href.indexOf('&page=') === -1)
            {
                window.open(window.location.href.replace('&replies=', '&page=' + page + '&replies='), '_self');
            }
            else
            {
                window.open(window.location.href.replace(/\&page=[0-9]+/, '&page=' + page), '_self');
            }
        }
        //location.hash = '#reply_post'; <--this one just changes the hash (part including and after #)
        //http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=Market%20Sales&replies=36#reply_post <--- includes &t=
        
    } //posts in thread
    if (url.indexOf('&t=') !== -1)
    {
        var breadcrumbs = $('#main > h1:first-child');
        breadcrumbs = breadcrumbs.clone();

        var navigation = $('tr').find('a[href="#top"]');
        navigation = navigation.parent().parent().parent();
        navigation.prev().attr('id','bottom');
        navigation = navigation.clone();
        navigation.find('a[href="#top"]').attr('href','#bottom');
        navigation.find('a[href="#bottom"]').html('Bottom');
        navigation.find('> td').attr('class', 'mork');
        $("#main > table:first-of-type tr:eq(0)").after(navigation);

        $("#main > table:first-of-type").after(breadcrumbs);
        
        if ((url.indexOf('#new') === -1) && (url.indexOf('#bottom') !== -1))
            navigation.find('a[href="#bottom"]').get(0).click();
        
        //adds quote button
        //modified from https://static.visual-utopia.com/mobile/pop.js
        $(function () {
            $('<script>')
            .attr('type', 'text/javascript')
            .text('function reply(obj) { var html = obj.parentNode.parentNode.innerHTML; var name = html.substring( html.indexOf("<b>") + 3, html.indexOf("</b>") ); var txt = html.substring( html.indexOf(\'<div class="t">\') + 15, html.indexOf(\'</div><br> <a href="forum.asp?forum=\') ); html = \'<blockquote cite="\' + document.location.href + \'"><b>\' + name +  \':</b>\' + txt  + \'</blockquote><br><br>\'; var iframe = document.getElementsByTagName(\'iframe\')[1]; var doc = iframe.contentWindow.document; doc.body.innerHTML = doc.body.innerHTML + "<br>" + html; window.location.href = "#bottom";}')
            .appendTo('head');
        });
        
        
        
        $('a[href*="reportmessage"]').after(' &nbsp <a href="#reply" onclick="javascript: reply(this);">Quote</a>');
        
    } //topics in subforum
    else if ((url.indexOf('?f=') !== -1) || (url.indexOf('?forum=') !== -1))
    {
        var topics = $('#main > table tr:not(:first-child):not(:last-child)');
        var topics_len = topics.length;
        var replies = -1;
        var pages = -1;
        var thread_a = '';
        var thread_url = '';
        var new_posts = -1;
        for (i = 0; i < topics_len; i++)
        {
            replies = parseInt(topics.eq(i).find('td.ljus').eq(0).text())+1;
            pages = Math.ceil(replies/50);
            thread_a = topics.eq(i).find('td.mork a.f.v');
            if (thread_a.attr('href') === undefined)
                thread_a = topics.eq(i).find('td.mork a.f');
            thread_url = thread_a.attr('href');
            new_posts = thread_url.indexOf('#new');

            if (new_posts === -1)
            {
                thread_a.after(thread_a.clone().attr('href', thread_url.substring(0,thread_url.length-1) + pages.toString() + '#bottom'));
                thread_a.next().text(" » ");
            }
            /*else
            {
                new_posts = thread_a.next().trim().text().substr(1);
                new_posts = new_posts.substr(0, new_posts.length-1);
            }*/
        }
    } //subforums in main forum
    else if (url.indexOf('forum.asp') !== -1)
    {
        
    }
    //add: in threads / subforum, link to the (last) page, and maybe (first) page
    //maybe change: number of thread posts = posts + 1, since currently, the forum doesn't count the first post as a post
    //with reply threads, fix it not jumping so the id is at the top of the page, there's a small gap
    //just removing the &page= part from the url always gives teh last page, so remove unnecessary code
    
    //production window
    if (url.indexOf('production.asp') !== -1)
    {
        $('#main').css('max-width', '900px').css('*width', '900px'); //568px //.css('width', '900px')
        $('table').html($('table').html().replace(/<!--/g, '').replace(/-->/g, '').replace(/\?city=/g, '?cityID=').replace(/<font class="minus">Nothing<\/font>/g, '').replace(/\s*&\s*[0-9]+ wall/g, '')); //.replace(/ & /g, '').replace(/<\/a>\s*([0-9]+) wall\s*/g, '</a> & $1 wall').replace(/wall/g, 'walls').replace(/1 walls/g, '1 wall');
        var row_len = $('table tr').length;
        var col_len = $('table tr th').length;
        
        //http://stackoverflow.com/a/5464478
        //http://markimarta.com/html-css/change-table-columns-order-via-jquery/
        $.moveColumn = function (table, from_col, to_col, start_row, end_row) {
            var rows = $('tr', table);
            /*if (to_row < 0)
            {
                var row_len = rows.length;
                to_row = row_len + to_row;
            }*/
            var cols;
            if (start_row == end_row)
                end_row++;
            
            for (i = start_row; i < end_row; i++)
            {
                cols = rows.eq(i).children('th, td');
                cols.eq(from_col).detach().insertBefore(cols.eq(to_col));
            }
        };
        $.moveColumn($('table'), 1, 10, 0, row_len-4);
        $.moveColumn($('table'), 1, 10, 0, row_len-4);
        $.moveColumn($('table'), 1, 10, 0, row_len-4);
        $.moveColumn($('table'), 1, 10, 0, row_len-4);
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:first-child').remove();
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:last-child').remove();
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:last-child').before('<td class="light"></td>').before('<td></td>').before('<td class="light"></td>').before('<td></td>').after('<td></td>');
        var tax_total = 0;
        var mine_gold_total = 0;
        for (i = 1; i < row_len-4; i++)
        {
            tax_total = tax_total + parseInt($('table tr:nth-child(' + (i+1).toString() + ') td:nth-child(2)').text().replace('+', '').replace(',', ''));
            mine_gold_total = mine_gold_total + parseInt($('table tr:nth-child(' + (i+1).toString() + ') td:nth-child(3)').text().replace('+', '').replace(',', ''));
        }
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:nth-child(2)').removeAttr('colspan');
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:nth-child(2)').removeAttr('align').removeClass('light').text('+' + numberWithCommas(tax_total));
        $('table tr:nth-child(' + (row_len-4+1).toString() + ') td:nth-child(2)').after('<td class="light">+' + numberWithCommas(mine_gold_total) + '</td>');
        $('table tr:nth-child(' + (row_len-4+1).toString() + ')').after('<tr><td colspan="2" align="right">Gold Income:</td><td align="right" class="light">+' + numberWithCommas(tax_total + mine_gold_total) + '</td></tr>');
        $('table tr:nth-child(' + (row_len-4+1).toString() + ')').after('<tr><td>&nbsp;</td></tr>');
        
        window.parent.$('#slot0').css('width', '900px').css('max-width', '900px').css('*width', '900px').css('left', '67px');
        window.parent.$('#id_ifrslot0').css('width', '876px').css('max-width', '876px').css('*width', '876px');
    }
    else
    {
        //$('#main').css('max-width', '568px').css('*width', '568px');
        window.parent.$('#slot0').css('width', '628px').css('max-width', '628px').css('*width', '628px').css('left', '203px');
        window.parent.$('#id_ifrslot0').css('width', '604px').css('max-width', '604px').css('*width', '604px');
    }
    
    if (url.indexOf('train.asp') !== -1)
    {
        text_info = $('#infotext');
        var human = (text_info.text().indexOf('Catapults') !== -1);
        var top_train_button;
        var top_mob_button;
        var top_train_table;
        var top_train_row;
        
        var mobilize = false;
        if (human)
        {
            top_train_table = $('<table></table>')
            .attr('class', 'nostyle')
            .css('width', '100%');
            $('form').prepend(top_train_table);

            top_train_button = $('.button.big.city:eq(1)').clone();
            top_mob_button = $('.button.big.city:eq(0)').detach();
            
            top_train_row = $('<tr></tr>');
            top_train_table.append(top_train_row);
            top_train_row.append($('<td></td>').css('width', '67%').append(top_mob_button), $('<td></td>').css('width', '33%').append(top_train_button));
            $('form').prev().remove(); //removes <br>
            $('form').prev().remove(); //removes <br>
            //top_train_table.after('<br>');
            
            if ($('.button.big.city:eq(0)').text().indexOf('Mobilize') === -1)
            {
                mobilize = true;
                $('.button.big.city:eq(0)').attr('title', 'When mobilized, troops in training will be trained double as fast, but at a total loss of about 4% of them.\nMobilization training times are shown in red below, and normal training time in gray.');
                top_train_table.before('<span style="color:red;"><span style="font-weight:bold; text-decoration:underline;">Troops are Mobilized!</span><br>Losing about 4% troops that get trained each day!</span><br>While Mobilized, troops are trained at the rate of 2 days in 1 day.<br>');
                $('#main > table:last-of-type').before('<span style="color:red;"><span style="font-weight:bold; text-decoration:underline;">Troops are Mobilized!</span><br>Losing about 4% troops that get trained each day!</span><br>While Mobilized, troops are trained at the rate of 2 days in 1 day.');
            }
            else
            {
                $('.button.big.city:eq(0)').attr('title', 'Troops already in training will be trained double as fast, but at a total loss of about 4% of them.\nMobilization training times are shown in red below, and normal training time in gray.');   
            }
        }
        else
        {
            top_train_table = $('<table></table>')
            .attr('class', 'nostyle')
            .css('width', '100%');
            $('form').prepend(top_train_table);
            
            top_train_button = $('.button.big.city:eq(1)').clone();
            
            top_train_row = $('<tr></tr>');
            top_train_table.append(top_train_row);
            top_train_row.append($('<td></td>').css('width', '67%'), $('<td></td>').css('width', '33%').append(top_train_button));
            $('form').prev().remove(); //removes <br>
            $('form').prev().remove(); //removes <br>
        }
        top_train_row.after("<tr><td style='text-align:right; font-weight:bold;'>Total training cost:</td><td style='text-align:center;'><span id='total_training_costs'>0</span> gold</td></tr>");
        $('form table:last-child').before("<table class='nostyle' style='width:100%'><tr><td style='text-align:right; font-weight:bold; width:66%;'>Total training cost:</td><td style='text-align:center; width:33%;'><span id='total_training_costs2'>0</span> gold</td></tr></table>");
        
        text_info = text_info.clone();
        text_info.find('ul').remove();
        text_info = text_info.html().replace(/[^0-9 ]+/g, '').replace(/[ ]+/g, ' ').trim().split(' ');
        if (text_info.length !== 6)
        {
            alert('train window number mismatch, data array length (is not 10): ' + (text_info.length).toString() + ' array: ' + text_info.join(', '));
        }

        var c_t = [];
        $.each(text_info, function(i) {
            c_t[i] = parseInt(text_info[i]);
        });
        var c_trainable = c_t[5];
        //var c_mu = c_t[3];
        var c_max_t_trainable = -1;

        var train_el;
        var train_input;
        var train_max_button;
        var train_id;
        var training_time = -1;
        var mtime = -1;
        var training_t_gold = -1;
        var training_t_gold_total = -1;
        var brr;
        var train_cost_span;

        
        for (i = 0; i < 5; i++)
        {
            train_el = $('form table:eq(' + (i + 1).toString() + ') tr:eq(3) td:eq(2)');
            training_time = train_el.text().match(/\(([0-9]+) days\)/)[1];
            mtime = Math.ceil(parseInt(training_time)/2);
            if (human && mobilize)
            {
                train_el.html(train_el.html().replace(/\(([0-9]+) days\)/, '(<span style="color:red;">' + mtime.toString() + '</span>/$1 days)'));
            }
            else if (human)
            {
                train_el.html(train_el.html() + '<br>(<span style="color:red;">' + mtime.toString() + '</span> mobilized)');
            }

            c_max_t_trainable = Math.min(c_t[i], c_trainable);
            training_t_gold = parseInt($('form table:eq(' + (i + 1).toString() + ') tr:eq(6) td:eq(1)').text().replace(/[^0-9&]/g, ''));
            train_input = train_el.find('input');
            train_id = 't' + (i + 1).toString();
            train_input.attr('id', train_id)
            .attr('onkeyup', 
                "this.value = Math.min(this.value, " + c_max_t_trainable + "); \
                if (this.value === '0') \
                    this.value = ''; \
                if (this.value == " + c_max_t_trainable + ") \
                { \
                    document.getElementById('" + train_id + "_button').innerHTML = 'Clear'; \
                } \
                else \
                { \
                    document.getElementById('" + train_id + "_button').innerHTML = 'Max'; \
                } \
                document.getElementById('" + train_id + "_total_cost').innerHTML = numberWithCommasx(this.value*" + training_t_gold.toString() + "); sum_training_gold_cost();");

            
            brr = $('<br>');
            train_input.after(brr);
            train_cost_span = $('<span></span>')
            .attr('id', train_id + '_total_cost')
            .text('0');
            brr.after(train_cost_span);
            train_cost_span.after(' gold');
            train_max_button = $('<button></button>')
            .text('Max')
            .attr('class', 'button')
            .attr('type', 'button')
            .attr('id', train_id + '_button')
            .attr('onclick', 
                "if (!(document.getElementById('" + train_id + "').value == '" + c_max_t_trainable.toString() + "')) { \
                    document.getElementById('" + train_id + "').value = '" + c_max_t_trainable.toString() + "'; \
                    document.getElementById('" + train_id + "_total_cost').innerHTML = numberWithCommasx(" + (c_max_t_trainable*training_t_gold).toString() + "); \
                    this.innerHTML = 'Clear'; \
                sum_training_gold_cost(); \
                } \
                else \
                { \
                    document.getElementById('" + train_id + "').value = ''; \
                    document.getElementById('" + train_id + "_total_cost').innerHTML = '0'; \
                    this.innerHTML = 'Max'; \
                sum_training_gold_cost(); \
                }");
            train_input.after(train_max_button);
        }
        $('#infotext').html(numberWithCommas($('#infotext').html()));
    }
    
    if (url.indexOf('kingdom.asp?list=otherkingdoms') !== -1)
    {
       
        $('#main > h1').css('text-align', 'center').text('Kingdom power list');
        $('#main > a:eq(1)').addClass('button').text('Return to kingdom page');
        //$('#redirlink').show();
        $('#main > table:eq(0)').after('<a href="kingdom.asp" class="button">Return to kingdom page</a><br>');
        $('#main > table:eq(0)').remove();
        
        
        //make the mouse a pointer when hovering over the whole label
        //http://stackoverflow.com/a/20705524
        /*
        $('head').append('<style type="text/css">.hiderow {display: none;}</style>');
        $('#main > br:eq(0)').after('<label><input type="checkbox" id="onlyNonZeroes" checked> <span>Hide</span> kingdoms with 0% power.</label><br>');
     
        
        $(document).on("change", "#onlyNonZeroes", function () {
            if ($(this).is(":checked")) {
                $(this).parent().find('span').text('Hide');
                $('tr td:eq(4)').each(function (k, element) {  //needs class I think
                    if ($(element).html() == '0') {
                        $(element).addClass("hiderow");
                    }
                });
            } else {
                $(this).parent().find('span').text('Show');
                $('tr td:eq(4)').removeClass("hiderow"); //needs class I think
            }
        });
        */
        
    }
    else if (url.indexOf('kingdom.asp') !== -1)
    {
        //moves kd banner under the kd forum button
        var kd_banner = $('center:eq(0)');
        //var kd_list_button = $('a').eq(1);
        //alert(kd_list_button.text());
        kd_banner = kd_banner.clone();
        $('#main > table:eq(0)').after(kd_banner);
        $('#main > table:eq(0)').after('<br>');

        //centers the kd name header
        $('#main > h1').css('text-align', 'center');

        //makes the forum open up in the same window instead of a new tab
        $('table:eq(0) a').removeAttr('target');

        //adds a 'List other kingdoms' button under your kd players list
        var kd_list = $('#main > a:eq(1)').clone();
        $('#main > br:eq(3)').after(kd_list);
    }
    

    if (url.indexOf('build.asp') !== -1)
    {
        $('a.button:eq(0)').text($('a.button:eq(0)').text().replace(' the gates', ''));
        var pop_percent = parseInt($('#b1 table tr:eq(5) td:eq(1)').text());
        var build_info = $('table:eq(0) tr:eq(1)');
        var total_jobs = parseInt(build_info.find('td:eq(1) span').attr('title').replace(/[^0-9]+/g, ''));
        var total_job_buildings = total_jobs/5;
        var productivity_title = build_info.find('td:eq(2) span').attr('title');
        var productivity_change = '';
        if (productivity_title.indexOf('down') > -1)
        {
            productivity_change = -1;
        }
        else if (productivity_title.indexOf('stable') > -1)
        {
            productivity_change = 0;
        }
        else if (productivity_title.indexOf('up') > -1)
        {
            productivity_change = 1;
        }
        var resource_jobs_unfilled = 0;
        resource_jobs_unfilled = productivity_title.replace(/[^0-9]+/g, '');
        resource_jobs_unfilled = (resource_jobs_unfilled === '') ? 0 : parseInt(resource_jobs_unfilled);
        
        var buildings_info = $('script:eq(1)').html().replace(/<!--/g, '').replace(/-->/g, '');
        eval(buildings_info); //replace this with some form of window[var_name] = var_value;
        /*
        b0 - Wreckages
        b1 - Homes
        b2 - Farms
        b3 - Mines
        b4 - Magic Towers
        b5 - Guardtowers
        b6 - Taverne
        b7 - Lumbermills
        b8 - Armories
        b9 - Warehouses
        wall - Walls
        maxWall - total walls possible at the moment (it's not the amount of walls you can build, that's = maxWall - wall )
        razeCost - raze gold cost = build gold cost
        baseCost1 = 15.1410706674963; - wtf is dis
        bspace - max left building space in city
        b<1-9>i - building in construction (see the b1-9 above)
        walli - walls in construction
        slaves - slaves working on jobs (not construction)
        aslaves - available slaves (slaves you have globally), same as g_slaves from below
        cityID - city number used for all the popout windows
        cityName - city name...
        */
        var total_resource_buildings = b2 + b3 + b7;
        var total_buildings = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9;
        var total_buildings_in_construction = b1i + b2i + b3i + b4i + b5i + b6i + b7i + b8i + b9i;
        //var total_job_buildings = total_buildings - b1;
        
        var resources_info = $('script:eq(4)').html();
        resources_info = resources_info.replace(/[^0-9&]/g, '');
        resources_info = resources_info.split("&");
        resources_info.pop();
        
        var resources_names = ['g_gold', 'g_food', 'g_stone', 'g_tree', 'g_slaves'];
        $.each(resources_names, function(i) {
            window[resources_names[i]] = parseInt(resources_info[i]);
        });
        
        text_info = $('#infotext');
        text_info = text_info.clone();
        text_info.find('ul').remove();
        text_info = text_info.html().replace(/[^0-9 ]+/g, '').replace(/[ ]+/g, ' ').trim().split(' ');
        if (text_info.length === 9) //build info with all peasants employed
        {
            text_info.splice(1, 0, '0');
        }
        else if (text_info.length !== 10) //build info with some peasants unemployed, otherwise error
        {
            alert('build window number mismatch, data array length (is not 10): ' + (text_info.length).toString() + ' array: ' + text_info.join(', '));
        }

        var info_names = ['c_peasants', 'c_peasants_unemployed', 'c_build_space_left', 'c_num_buildable', 'c_num_buildable_walls', 'c_build_cost_gold', 'c_build_cost_tree', 'c_build_cost_stone', 'c_build_cost_stone_wall', 'c_build_time'];
        $.each(info_names, function(i) {
            window[info_names[i]] = parseInt(text_info[i]);
        });
        
        
        var slaves_used = 0;
        var slaves_building = 0;
        var slave_table_present = false;
        if ($('table').size() > 14) //if you don't have global slaves, this table is not there, so add a check for that table; if there's slaves asigned to the city, it will be there though
        {
            slaves_used = parseInt($('table:eq(1) tr:eq(1)').text().replace(/[^0-9]+/g, ''));
            slaves_building = parseInt($('table:eq(1) tr:eq(2)').text().replace(/[^0-9]+/g, ''));
            slave_table_present = true;
          }
        
        //var c_slave_build_time = Math.ceil(c_build_time/2);

        //total_jobs = total_job_buildings*5;
        var resource_jobs = total_resource_buildings*5;
        
        var total_jobs_unfilled = 0;
        total_jobs_unfilled = total_jobs - (c_peasants + slaves_used);
        if (total_jobs_unfilled < 0)
            total_jobs_unfilled = 0;

        if (resource_jobs_unfilled === 0)
        {
            resource_jobs_unfilled = resource_jobs - (c_peasants + slaves_used);
            if (resource_jobs_unfilled < 0)
                resource_jobs_unfilled = 0;
        }
        
        var tax_jobs_unfilled = total_jobs - c_peasants;
        if (tax_jobs_unfilled/total_jobs < 0)
            tax_jobs_unfilled = 0;
        
        /*var resource_jobs_unfilled_peasants = resource_jobs - c_peasants;
        if (resource_jobs_unfilled_peasants/resource_jobs < 0)
            resource_jobs_unfilled_peasants = 0;*/
     
        
        var job_buildings_missing = Math.ceil(c_peasants_unemployed/5);
        var max_buildings_capacity = total_buildings + c_build_space_left;
        
        //slaves for productivity handling, default value for transfer slaves
        var slaves_missing = 0;
        var slaves_working = resource_jobs - c_peasants;
        if (slaves_working < 0)
            slaves_working = 0;
        if (slaves_used < slaves_working)
        {
            slaves_missing = slaves_working - slaves_used;
            slaves_working = slaves_used;
        }
        var slaves_unused = slaves_used - slaves_working;
        var slaves_add_remove = 0;
        if (slaves_unused > 0)
            slaves_add_remove = -slaves_unused;
        else if (slaves_missing > 0)
        {
            if (slaves_missing > g_slaves) //aslaves = g_slaves
                slaves_add_remove = g_slaves;
            else
                slaves_add_remove = slaves_missing;
        }   
        
        if (slave_table_present)
        {
            $('button.slaves:eq(0)').attr('onclick', 'addSlaves("' + slaves_add_remove.toString() + '", "' + cityID.toString() + '", "' + cityName.toString() + '")');
            $('table:eq(1) tr:eq(1) td:eq(1)').html(numberWithCommas($('table:eq(1) tr:eq(1) td:eq(1)').html().trim()) + ' <span style="font-weight:bold;">/</span> <span title="The amount of slaves needed for 100% production." class="underdotted">' + numberWithCommas(slaves_used + slaves_add_remove));
        }
        
        
        //productivity%
        var productivity_info = $('table:eq(0) tr:eq(1) td:eq(2)');
        //productivity_info.html(productivity_info.child().wrap("<span class='underdotted'></span>"));
        var productivity = parseInt(productivity_info.text());
        // fix this to remove the extensions from towns with no resource_jobs, and fix the title
        var productivity_percent_real = (resource_jobs === 0) ? 100 : Math.round((resource_jobs - resource_jobs_unfilled)*100/resource_jobs);
        var productivity_percent_peasants = (resource_jobs === 0) ? 0 : Math.round(c_peasants*100/resource_jobs); //can be over 100%
        var productivity_percent_slaves = (resource_jobs === 0) ? 0 : Math.round(slaves_used*100/resource_jobs);
        productivity_info.children(':eq(0)').attr('title', numberWithCommas(productivity_info.children(':eq(0)').attr('title'))).addClass('underdotted');
        productivity_info.html(productivity_info.html() + '/<span class="underdotted" title="Productivity due to ' + numberWithCommas(slaves_used + c_peasants) + ' peasants and slaves working in resouce-generating buildings.">' + productivity_percent_real.toString() + '%</span><br><span style="font-size:small;"><span class="underdotted" title="Productivity due to ' + numberWithCommas(c_peasants) + ' peasants working in resouce-generating buildings.">' +
        productivity_percent_peasants.toString() + '%</span> + <span class="underdotted" title="Productivity due to ' + numberWithCommas(slaves_used) + ' slaves working in resouce-generating buildings.">' + productivity_percent_slaves.toString() + '%</span></span>');
        $('table:eq(0) tr:eq(1) td:eq(1) :eq(0)').attr('title', numberWithCommas($('table:eq(0) tr:eq(1) td:eq(1) :eq(0)').attr('title'))).addClass('underdotted');
        
        //population%
        var peasants_percent = Math.round(100*c_peasants/(b1*25));
        var army_percent = pop_percent - peasants_percent;
        var estimated_army_number = Math.round(army_percent*b1*25/100);
        var pop_full = Math.round(b1*25*pop_percent/100);
        var pop_empty = b1*25 - pop_full;
        $('table:eq(0) tr:eq(0) th:eq(2)').after('<th>Pop</th>');
        $('table:eq(0) tr:eq(1) td:eq(2)').after('<td class="big"><span class="underdotted" title="Total population, peasants and army troops, is about ' + numberWithCommas(pop_full) + ' ± ' + Math.round(b1*25/(100*2)) + '.\nIn total there\'s room for ' + numberWithCommas(b1*25) + ' people, and about ' + numberWithCommas(pop_empty) + ' ± ' + Math.round(b1*25/(100*2)) + ' of it is unused.">' + pop_percent.toString() + '%</span><br><span class="underdotted" style="font-size:small;" title="There\'s ' + numberWithCommas(c_peasants) + ' peasants in the city.">' + peasants_percent.toString() + '%</span> + <span class="underdotted" style="font-size:small;" title="There\'s about ' + numberWithCommas(estimated_army_number) + ' ± ' + Math.round(b1*25/(100*2)) + ' troops in the city.">' + army_percent.toString() + '%</span></td>');
        
        //tax%
        var tax_percent = Math.floor(c_peasants*100/total_jobs); //Math.floor((total_jobs - tax_jobs_unfilled)*100/total_jobs)';
        $('table:eq(0) tr:eq(0) th:eq(1)').after('<th>Tax</th>');
        if (tax_percent > 100)
        {
            tax_percent = 100;
            $('table:eq(0) tr:eq(1) td:eq(1)').after('<td class="big" title="' + numberWithCommas(c_peasants_unemployed) + ' peasants are unemployed and not paying tax.\nBuild ' + numberWithCommas(job_buildings_missing) + ' more non-house buildings to generate jobs, train them to military, or move them to where there is jobs available." style="color: red"><span class="underdotted">' + tax_percent.toString() + '%</span></td>');
        }
        else
        {
            $('table:eq(0) tr:eq(1) td:eq(1)').after('<td class="big" title="There are jobs not filled by peasants.\nGet ' + numberWithCommas(tax_jobs_unfilled) + ' more peasants to generate maximum tax."><span class="underdotted">' + tax_percent.toString() + '%</span></td>');
        }
        
        
        var build_input;
        var build_max_button;
        var build_id;
        var building_gold_total = -1;
        //var building_wood_total = -1;
        //var building_stone_total = -1;
        var bbrr;
        var build_cost_gold_span;
        //var build_cost_wood_span;
        //var build_cost_stone_span;
        var top_build_table;
        var top_build_button;
        var top_build_row;
        var buildable_b;
        
        for (i = 1; i < 11; i++)
        {
            build_input = $('form table:eq(' + (i - 1).toString() + ') input');
            if (i !== 10)
            {
                buildable_b = c_num_buildable;
                build_id = 'b_' + i.toString();
            }
            else
            {
                buildable_b = c_num_buildable_walls;
                build_id = 'b_wall';
            }
            
/*
//add this before document.getElementById('" + build_id + "_button').innerHTML = 'Clear'; \ that's below
for (j=1;j<10;j++) { document.getElementById('b_' + j.toString() + '_button').innerHTML = 'Max'; document.getElementById('b_' + j.toString()).innerHTML = ''; } \
document.getElementById('b_wall_button').innerHTML = 'Max'; document.getElementById('b_wall').innerHTML = '';\
this.value = " + buildable_b.toString() + "; \
*/
            build_input.attr('id', build_id)
            .attr('onkeyup', 
                "this.value = Math.min(this.value, " + buildable_b.toString() + "); \
                sumBuild(); \
                if (this.value === '0') \
                    this.value = ''; \
                if (this.value == " + buildable_b.toString() + ") \
                { \
                    document.getElementById('" + build_id + "_button').innerHTML = 'Clear'; \
                } \
                else \
                { \
                    document.getElementById('" + build_id + "_button').innerHTML = 'Max'; \
                } \
                document.getElementById('" + build_id + "_total_cost').innerHTML = numberWithCommasx(this.value*" + c_build_cost_gold.toString() + "); sum_building_gold_cost();");

            
            bbrr = $('<br>');
            build_input.after(bbrr);
            build_cost_gold_span = $('<span></span>')
            .attr('id', build_id + '_total_cost')
            .text('0');
            bbrr.after(build_cost_gold_span);
            build_cost_gold_span.after(' gold');
            build_max_button = $('<button></button>')
            .text('Max')
            .attr('class', 'button')
            .attr('type', 'button')
            .attr('id', build_id + '_button')
            .attr('onclick', 
                "if (!(document.getElementById('" + build_id + "').value == '" + buildable_b.toString() + "')) { \
                    document.getElementById('" + build_id + "').value = '" + buildable_b.toString() + "'; \
                    document.getElementById('" + build_id + "_total_cost').innerHTML = numberWithCommasx(" + (buildable_b*c_build_cost_gold).toString() + "); \
                    this.innerHTML = 'Clear'; \
                    sum_building_gold_cost(); \
                    sumBuild(); \
                } \
                else \
                { \
                    document.getElementById('" + build_id + "').value = ''; \
                    document.getElementById('" + build_id + "_total_cost').innerHTML = '0'; \
                    this.innerHTML = 'Max'; \
                    sum_building_gold_cost(); \
                    sumBuild(); \
                 }");
            build_input.after(build_max_button);
        }
        $('form').prepend("<table class='nostyle' style='width: 100%'><tr><td style='text-align:right; font-weight:bold; width:67%;'>Total building gold cost:</td><td style='text-align:center; width:33%;'><span id='total_building_costs'>0</span> gold</td></tr></table>");
        $('form table:last-child').before("<table class='nostyle' style='width:100%'><tr><td style='text-align:right; font-weight:bold; width:67%;'>Total building gold cost:</td><td style='text-align:center; width:33%;'><span id='total_building_costs2'>0</span> gold</td></tr></table>");
        
        top_build_table = $('<table></table>')
        .attr('class', 'nostyle')
        .css('width', '100%');
        $('form').prepend(top_build_table);

        top_build_button = $('.button.big.build').clone();

        top_build_row = $('<tr></tr>');
        top_build_table.append(top_build_row);
        top_build_row.append($('<td></td>').css('width', '67%'), $('<td></td>').css('width', '33%').append(top_build_button));
        $('form').prev().remove(); //removes <br>
        $('form').prev().remove(); //removes <br>
        
        //$('#infotext').wrap('<span style="pointer-events: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;"></span>');
        $('#infotext').html(numberWithCommas($('#infotext').html()));
        //$('#infotext').after('dfgdf<span class="nonselectable"> sdfsf 1253434 sdf23423432gd</span>dfgdg');

    }
        
});