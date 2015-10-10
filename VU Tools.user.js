// ==UserScript==
// @name         VU Tools
// @version      0.13
// @author       Ivan Jelenić (Quirinus)
// @description  A userscript to improve various user interface bits of the Visual Utopia browser game.
// @homepage     https://github.com/Quirinus/
// @namespace    https://github.com/Quirinus/
// @downloadURL  https://github.com/Quirinus/vuTools/archive/master.zip
// @supportURL   https://github.com/Quirinus/vuTools/issues
// @icon         http://visual-utopia.com/favicon.ico
// @match        http://visual-utopia.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function ()
{
    
    var url = window.location.href;
    
    //http://stackoverflow.com/a/2901298
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
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
        var army_size_names = ['scout', 'section', 'platoon', 'company', 'battalion', 'regiment', 'brigade',  'division', 'corps', 'army', 'group of armies', 'horde'];
        var army_size_numbers = ['(1-5)', '(8-12)', '(20-50)', '(100-300)', '(500-1500)', '(2000-4000)', '(around 5000)',  '(10,000-20,000)', '(around 50,000)', '(100,000-200,000)', '(200,000-1,000,000)', 'of more then one million soldiers'];
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
            ai_troops[i] = ' ' + numberWithCommas(parseInt(army_info[13])-1) + ' troops';
            if (ai_troops[i] == '1 troops')
                ai_troops[i] = '1 unit';
            ai_t3[i] = (army_info[14] == '0') ? '' : '\nOnly tier 3 troops - movement bonus.';
            if (army_info[10] == '')
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
            army_ID = $(armies[i]).attr('onclick').replace("pop('armyInfoE.asp?armyID=", '').replace("')", '');
            name_separator_pos1 = title.indexOf(': ');
            name_separator_pos2 = title.substring(name_separator_pos1 + ': '.length).indexOf(' ');
            name_separator_pos3 = title.substring(name_separator_pos2  + ' '.length).indexOf(' ');
            name_separator_pos4 = title.indexOf(' controlled by ');

            army_name = title.substring(0, name_separator_pos1);
            army_race = title.substring(name_separator_pos1 + ': '.length, name_separator_pos1 + ': '.length + name_separator_pos2);
            army_size = title.substring(title.indexOf(army_race) + army_race.length, name_separator_pos4).trim();
            army_race_short = '[' + army_race.substr(0,2) + ']';
            
            name_separator_pos5 = title.substring(name_separator_pos4 + ' controlled by '.length).indexOf(' of ');

            if (name_separator_pos5 != -1)
            {
                armyID_check_index = ai_armyIDs.indexOf(army_ID);
                if (armyID_check_index != -1)
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
                if (armyID_check_index != -1)
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
            else if (kds_friendly.indexOf(army_kd) != -1)
            {
                army_color = color_friendly;
            }
            else if (kds_neutral.indexOf(army_kd) != -1)
            {
                army_color = color_neutral;
            }
            else if (kds_enemy.indexOf(army_kd) != -1)
            {
                army_color = color_enemy;
            }
            else //if (kds_neutral_nokd.indexOf(army_kd) != -1)
            {
                army_color = color_neutral_nokd;
            }
            
            army_ruler_name_short = army_ruler_name;
            for (j = 0; j < titles_len; j++)
            {
                if (army_ruler_name_short.indexOf(titles_trim[j]) == 0)
                {
                    army_ruler_name_short = army_ruler_name_short.slice(titles_trim[j].length);
                    break;
                }
            }
            if (army_ruler_name_short.length > 10)
            {
                ruler_name_space_pos = army_ruler_name_short.indexOf(' ');
                if (ruler_name_space_pos != -1)
                    army_ruler_name_short = army_ruler_name_short.substring(0, ruler_name_space_pos); //add another layer of indexOf(' ') for a short word
                if (army_ruler_name_short.length > 10)
                    army_ruler_name_short = army_ruler_name_short.substring(0, 9);
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
            


           
            army_name_span = $('<span></span>')
            .text(army_race_short + army_ruler_name_short)
            .css({
                'position' : 'absolute',
                'top' : army_top,
                'left' : army_left,
                'margin-top' : army_margin,
                'cursor' : 'default',
                'color' : army_color,
                'font-weight' : 'bold',
                'font-size' : '0.8em',
                'z-index' : '10',
                'text-align' : 'center',
                'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                '-webkit-font-smoothing' : 'antialiased'
            })
            .attr('title', title);

            
            $(armies[i]).after(army_name_span);
            army_name_width = parseInt(army_name_span.width());
            army_name_span.css('left', army_left - Math.floor((army_name_width-$(armies[i]).width())/2)); //$(armies[i]).width() = 18 for normal army (16 + 2x1 border), 22 for attacking army (16 + 2x3), 28 for frozen (16 + 2x6)

            //adds army troop numbers and if they're t3 to title
            army_size_index = army_size_names.indexOf(army_size);
            if (army_size_index != -1)
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
                        + army_ruler_name + ' ' + army_kd + army_t3;);
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
            title = title + ' ' + city_gts;
            title = title.replace(': ', ':\r');
            $(citynames[i]).attr('title', title);
            city_name = citynames[i].innerHTML;
            city_ID = $(citynames[i]).attr('onclick').replace("pop('cityInfoE.asp?cityID=", '').replace("')", '');

            name_separator_pos1 = title.indexOf(' city owned by ');
            race = title.substring(0, name_separator_pos1);
            race = '[' + race.substr(0,2) + ']';
            name_separator_pos2 = title.indexOf(' of ');
            name_separator_pos3 = title.indexOf(': ');
            
            if (name_separator_pos2 != -1)
            {
                cityID_check_index = ci_cityIDs.indexOf(city_ID);
                if (cityID_check_index != -1)
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
            
            
            
            
            for (j = 0; j < titles_len; j++)
            {
                if (ruler_name.indexOf(titles_trim[j]) == 0)
                {
                    ruler_name = ruler_name.slice(titles_trim[j].length);
                    break;
                }
            }
            if (ruler_name.length > 10)
            {
                ruler_name_space_pos = ruler_name.indexOf(' ');
                if (ruler_name_space_pos != -1)
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
                    .html('<br><br><br>' + race + ruler_name)
                    .css({
                        'width' : '100px',
                        'height' : '20px',
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
                        .html('<br><br><br>' + race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
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
                        .html('<br><br><br>' + race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
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
                        .html('<br><br><br>' + race + ruler_name)
                        .css({
                            'width' : '100px',
                            'height' : '20px',
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
                .html('<br><br><br>' + race + ruler_name)
                .css({
                    'width' : '100px',
                    'height' : '20px',
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
    
    //replies when kd button in the menu is blinking
    if (url.indexOf('&replies=') != -1)
    {
        var reply_number = parseInt(url.substring(url.indexOf('&replies=')+'&replies='.length));
        $("table:nth-of-type(1) tr:eq(" + (reply_number+1).toString() + ")").attr('id','reply_post');
        window.location.href = '#reply_post'; //fix it not jumping so the id is at the top of the page, there's a small gap
        //location.hash = '#reply_post'; <--this one just changes the hash (part including and after #)
        
        //http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=Market%20Sales&replies=36#reply_post <--- includes &t=
    } //posts in thread
    if (url.indexOf('&t=') != -1)
    {
        var breadcrumbs = $('#main > h1:first-child');
        breadcrumbs = breadcrumbs.clone();

        var navigation = $('tr').find('a[href="#top"]');
        navigation = navigation.parent().parent().parent();
        navigation.prev().attr('id','bottom');
        navigation = navigation.clone();
        navigation.find('a[href="#top"]').attr('href','#bottom');
        navigation.find('a[href="#bottom"]').html('Bottom');
        navigation.prependTo("#main > table:first-of-type");
        $("table:nth-of-type(2)").before(breadcrumbs);
        
        if ((url.indexOf('#new') == -1) && (url.indexOf('#bottom') != -1))
            navigation.find('a[href="#bottom"]').get(0).click();
        
        //adds quote button
        //modified from https://static.visual-utopia.com/mobile/pop.js
        $(function () {
            $('<script>')
            .attr('type', 'text/javascript')
            .text('function reply(obj) { var html = obj.parentNode.parentNode.innerHTML; var name = html.substring( html.indexOf("<b>") + 3, html.indexOf("</b>") ); var txt = html.substring( html.indexOf(\'<div class="t">\') + 15, html.indexOf(\'</div><br> <a href="forum.asp?forum=\') ); html = \'<blockquote cite="\' + document.location.href + \'"><b>\' + name +  \':</b>\' + txt  + \'</blockquote><br><br>\'; var iframe = document.getElementsByTagName(\'iframe\')[1]; var doc = iframe.contentWindow.document; doc.body.innerHTML = doc.body.innerHTML + "<br>" + html;}')
            .appendTo('head');
        });
        
        $('a[href*="reportmessage"]').after(' &nbsp <a href="#reply" onclick="javascript: reply(this);">Quote</a>');
        
    } //topics in subforum
    else if ((url.indexOf('?f=') != -1) || (url.indexOf('?forum=') != -1))
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
            if (thread_a.attr('href') == undefined)
                thread_a = topics.eq(i).find('td.mork a.f');
            thread_url = thread_a.attr('href');
            new_posts = thread_url.indexOf('#new');

            if (new_posts == -1)
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
    else if (url.indexOf('forum.asp') != -1)
    {
        
    }
    //add: navigation to the top and breadcrumbs to the bottom in the subforums
    //add: in threads / subforum, link to the (last) page, and maybe (first) page
    //maybe change: number of thread posts = posts + 1, since currently, the forum doesn't count the first post as a post
    // in threads, add quote button/link on all posts
    //with reply threads, fix it not jumping so the id is at the top of the page, there's a small gap
    //just removing the &page= part from the url always gives teh last page, so remove unnecessary code
    
    //production window
    if (url.indexOf('production.asp') != -1)
    {
        $('#main').css('max-width', '900px').css('*width', '900px'); //568px //.css('width', '900px')
        $('table').get(0).innerHTML = $('table').get(0).innerHTML.replace(/<!--/g, '').replace(/-->/g, '').replace(/\?city=/g, '?cityID=').replace(/<font class="minus">Nothing<\/font>/g, '').replace(/\s*&\s*[0-9]+ wall/g, ''); //.replace(/ & /g, '').replace(/<\/a>\s*([0-9]+) wall\s*/g, '</a> & $1 wall').replace(/wall/g, 'walls').replace(/1 walls/g, '1 wall');
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
                end_row++
            
            for (i = start_row; i < end_row; i++)
            {
                cols = rows.eq(i).children('th, td');
                cols.eq(from_col).detach().insertBefore(cols.eq(to_col));
            }
        }
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
    
    if (url.indexOf('train.asp') != -1)
    {
        var human = ($('#infotext').text().indexOf('Catapults') != -1);

        if (human)
        {
            var mobilize = false;
            if ($('a[href^=mobilize]').text().indexOf('Mobilize') == -1)
            {
                mobilize = true;
                $('a[href^=mobilize]').attr('title', 'When mobilized, troops in training will be trained double as fast, but at a total loss of about 4% of them.\nMobilization training times are shown in red below, and normal training time in gray.');
                $('a[href^=mobilize]').after('<br><span style="color:red;"><span style="font-weight:bold; text-decoration:underline;">Troops are Mobilized!</span><br>Losing about 4% troops that get trained each day!</span><br>While Mobilized, troops are trained at the rate of 2 days in 1 day.');
                $('#main > table:last-of-type').before('<span style="color:red;"><span style="font-weight:bold; text-decoration:underline;">Troops are Mobilized!</span><br>Losing about 4% troops that get trained each day!</span><br>While Mobilized, troops are trained at the rate of 2 days in 1 day.');
            }
            else
            {
                $('a[href^=mobilize]').attr('title', 'Troops already in training will be trained double as fast, but at a total loss of about 4% of them.\nMobilization training times are shown in red below, and normal training time in gray.');   
            }

            var train_el = '';
            var training_time = -1;
            var mtime = -1;
            for (i = 0; i < 5; i++)
            {
                var train_el = $('form table:eq(' + i + ') tr:eq(3) td:eq(2)').get(0);
                training_time = train_el.innerHTML.match(/\(([0-9]+) days\)/)[1];
                mtime = Math.ceil(parseInt(training_time)/2);
                if (mobilize)
                {
                    train_el.innerHTML = train_el.innerHTML.replace(/\(([0-9]+) days\)/, '(<span style="color:red;">' + mtime.toString() + '</span>/$1 days)');
                }
                else
                {
                    train_el.innerHTML = train_el.innerHTML + '<br>(<span style="color:red;">' + mtime.toString() + '</span> mobilized)';
                }
            }
        }
    }
    
    if (url.indexOf('kingdom.asp?list=otherkingdoms') != -1)
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
    else if (url.indexOf('kingdom.asp') != -1)
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
    

    if (url.indexOf('build.asp') != -1)
    {
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
        resource_jobs_unfilled = (resource_jobs_unfilled == '') ? 0 : parseInt(resource_jobs_unfilled);
        
        var buildings_info = $('script:eq(1)').get(0).innerHTML.replace(/<!--/g, '').replace(/-->/g, '');
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
        var total_job_buildings = total_buildings - b1;
        
        var resources_info = $('script:eq(4)').get(0).innerHTML;
        resources_info = resources_info.replace(/[^0-9&]/g, '');
        resources_info = resources_info.split("&");
        resources_info.pop();
        
        var resources_names = ['g_gold', 'g_food', 'g_stone', 'g_tree', 'g_slaves'];
        $.each(resources_names, function(i) {
            window[resources_names[i]] = parseInt(resources_info[i]);
        });
        
        var text_info = $('#infotext');
        text_info = text_info.clone();
        text_info.find('ul').remove();
        text_info = text_info.get(0).innerHTML.replace(/[^0-9 ]+/g, '').replace(/[ ]+/g, ' ').trim().split(' ');
        if (text_info.length == 9) //build info with all peasants employed
        {
            text_info.splice(1, 0, '0');
        }
        else if (text_info.length == 10) //build info with some peasants unemployed
        {
            
        }
        else
        {
            alert('build window number mismatch, data array length (is not 10): ' + (text_info.length).toString() + ' array: ' + text_info.join(', '));
        }

        var info_names = ['c_peasants', 'c_peasants_unemployed', 'c_build_space_left', 'c_num_buildable', 'c_num_buildable_walls', 'c_build_cost_gold', 'c_build_cost_tree', 'c_build_cost_stone', 'c_build_cost_stone_wall', 'c_build_time'];
        $.each(info_names, function(i) {
            window[info_names[i]] = parseInt(text_info[i]);
        });
        
        
        var slaves_used = 0;
        var slaves_building = 0;
        if ($('table').size() > 14) //if you don't have global slaves, this table is not there, so add a check for that table; if there's slaves asigned to the city, it will be there though
        {
            slaves_used = parseInt($('table:eq(1) tr:eq(1)').text().replace(/[^0-9]+/g, ''));
            slaves_building = parseInt($('table:eq(1) tr:eq(2)').text().replace(/[^0-9]+/g, ''));
        }
        
        //var c_slave_build_time = Math.ceil(c_build_time/2);

        var total_jobs = total_job_buildings*5;
        var resource_jobs = total_resource_buildings*5;
        
        var total_jobs_unfilled = 0;
        total_jobs_unfilled = total_jobs - (c_peasants + slaves_used);
        if (total_jobs_unfilled < 0)
            total_jobs_unfilled = 0;

        if (resource_jobs_unfilled == 0)
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
        
        var slaves_working = 0;
        var slaves_unused = 0;
        
        /*
        var pop_percent_peasants = Math.floor(c_peasants*100/(b1*25));
        var pop_missing_peasants = b1*25 - c_peasants;
        var pop_percent_total = parseInt($('#b1 tr:eq(5) td:eq(1)').replace(/[^0-9]+/g, ''));
        var pop_percent_army = 100 - pop_percent_total - pop_percent_peasants;
        $('table:eq(0) tr:eq(0) th:eq(2)').after('<th>Pop.</th>');
        if (pop_percent_total != pop_percent_peasants)
        {
            $('table:eq(0) tr:eq(1) td:eq(2)').after('<td class="big"><span title="Percent of houses filled by peasants.">' + pop_percent_peasants.toString() + '%</span><br><span title="Percent of houses filled by army.">' + pop_percent_army.toString() + '</span></td>');
        }
        else
        {
            $('table:eq(0) tr:eq(1) td:eq(2)').after('<td class="big" title="Percent of houses filled by peasants.">' + pop_percent_peasants.toString() + '%</td>');
        }
        */
            
        var tax_percent = Math.floor(c_peasants*100/total_jobs); //Math.floor((total_jobs - tax_jobs_unfilled)*100/total_jobs)';
        $('table:eq(0) tr:eq(0) th:eq(2)').after('<th>Tax</th>');
        if (tax_percent > 100)
        {
            tax_percent = 100;
            $('table:eq(0) tr:eq(1) td:eq(2)').after('<td class="big" title="' + numberWithCommas(c_peasants_unemployed) + ' peasants are unemployed and not paying tax.\nBuild ' + numberWithCommas(job_buildings_missing) + ' more non-house buildings to generate jobs, train them to military, or move them to where there is jobs available." style="color: red">' + tax_percent.toString() + '%</td>');
        }
        else
        {
            $('table:eq(0) tr:eq(1) td:eq(2)').after('<td class="big" title="There are jobs not filled by peasants.\nGet ' + numberWithCommas(tax_jobs_unfilled) + ' more peasants to generate maximum tax.">' + tax_percent.toString() + '%</td>');
        }
        
        
        //productivity
        var productivity_info = $('table:eq(0) tr:eq(1) td:eq(2)');
        var productivity = parseInt(productivity_info.text());
        // fix this to remove the extensions from towns with no resource_jobs, and fix the title
        var productivity_percent_real = (resource_jobs == 0) ? 100 : Math.round((resource_jobs - resource_jobs_unfilled)*100/resource_jobs);
        var productivity_percent_peasants = (resource_jobs == 0) ? 0 : Math.round(c_peasants*100/resource_jobs); //can be over 100%
        var productivity_percent_slaves = (resource_jobs == 0) ? 0 : Math.round(slaves_used*100/resource_jobs);
        productivity_info.html(productivity_info.html() + '/<span title="Productivity due to ' + numberWithCommas(slaves_used + c_peasants) + ' peasants and slaves.">' + productivity_percent_real.toString() + '%</span><br><span style="font-size:small;"><span title="Productivity due to ' + numberWithCommas(c_peasants) + ' peasants.">' +
        productivity_percent_peasants.toString() + '%</span> + <span title="Productivity due to ' + numberWithCommas(slaves_used) + ' slaves.">' + productivity_percent_slaves.toString() + '%</span></span>');
        
        
        
        
        //$('#infotext').get(0).innerHTML = numberWithCommas($('#infotext').get(0).innerHTML);
        
        
        
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
        
        
        
        //building tree/stone cost = gold cost/4 = wall stone cost/8
        //1 slave works as 1 peasant, but doesn't pay taxes and doesn't spend food
        //1 peasant pays 1 gold in taxes, it increases in bigger cities, he also eats 0.25 food
        //it takes 10 slaves to speed up the building of 1 building, so the formula is by floor((slaves/10)*build_time/2), I think.
        
        // fix defense: 4,198 men + 3 armies. --> remove trailing dot .
        // 81647 vs 83104,744525547445255474452554745 *2.74; from my biggest army, the coefficient is 2,7889258555133079847908745247148, gives correct total army upkeep (not sure if single units are rounded)
        
        
    }
        
});
    //<div title="Halfling city owned by Mr. Ruthless The Tall of Childrens Playground: 27539 buildings." onclick="pop('cityInfoE.asp?cityID=493328')" style="position: absolute; top:3848; left: 3524;" class="citynames">The PalaceHalfling city owned by Mr. Ruthless The Tall of Childrens Playground: 27539 buildings.</div>

//cities code: maybe instead of using loops:
             /*for (j = 0; j < kds_friendly.length ; j++)
                {
                    if (title.indexOf(kds_friendly[j]) !== -1)
                    {*/
   //use:
              //if (kds_friendly.indexOf(kd_name) !== -1)
              //{
   //have to think which is more reliable probably the second one by far, but the second one is definitely faster and more elegant; if you do this, turn ci_user_kds on again

//build page: add number of resource jobs in some of the titles, eg. prod% 
//build page: remove the extensions from towns with no resource_jobs, and fix the title
//build page: reconstruct productivity, so the current%/total% is all wrapped up in the span, so all is red, and all has the same title. then the titles includes unfilled jobs (+plus up/down/stable) and peasants + slaves working numbers. and add numberWithCommas to numbers.
//build page: indicate that productivity depends on resources jobs, not total jobs, filled with peasants and slaves. but tax depends on total jobs filled by peasants.
//every popup window: add underdotted to every element that has a title
// replace .replace(/[^0-9]+/g, '') with a new method called .stripNonNum(optional delimiter), where if delimiter != undefined then get all numbers and return them as a delimited string
//map: click on waypoint opens waypoints
//map: add city name to title
//map: make the border of tier 3 fast armies thicker, or red, or make that army stand out somehow
//map: z-order of self army vs other armies, vs army names, vs city names... also, see what the march button does in terms of js to put armies on top of others (for non-orcs)
//map: when hovering over a city, show line of sight distance according to city size (does this matter?), gt. use the intern function to draw the fog of war limit, or use a circle. terrain?
//map: when hovering over an army, show line of sight distance. use the intern function to draw the fog of war limit, or use a circle. terrain?
//hide/remove some waypoints (from kd page list and from map)
//add extra X or some other sign like for armies of the last size, or two rows, one with 3X and the other with 2X
//wut, opens when you click on the KD button: http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=Battle%20Reports&replies=42
//when you reply it scrolls to the top of the page... make it scroll to the bottom
// in production window, calculate the max amount of walls, and use the current amount to show %walls (or %increased prep time)
// in production window, add col for training, new army, and add links to defense in the empty defense cells
// fix right borders in production window
// in production window, from Prod.	Pop.	Empl. and land, calculate the approx number of jobs and home and workers (pezzie+slave) and other buildings
// in production window, rename Total Income to Net Income and Gold Income to Total Income
// in production window, move land col to the first place after city names, remove light color from it, recolor the rest of the table with alternate colors, make the 4 tds of the gold total rows at the bot have colspan="2"
// in market, remember the resource tab open when switching between buy/sell
// market - add max buy/sell price when it's empty; also add native prices for each when empty; try to figure out native prices when not empty
// market - allow entering an amount and then the multiplier(floored) for easier selling
// market - allow using size suffixes: 10M or 10m = 1000000, 100k
// market - add automatic , adding on numbers
// market - allow inserting , and . as thousands separators
// in training window, add max button, and costs next to input boxes
// in kingdom window, maybe make the forum link open the forum inside the window, not in a new tab; same when the kd button is flashing in the menu
// kd list window: hide kds that have 0%. some code is already included and commented out in this script
// kd: add link to your kd, take it from kd list window. you can compare stuff to other kds there.
// science window: add explanation what each one does, and how much %. add commas to the resources listed at the top of the page
// science window: add a confirmation dialog when clicking the button.
// science window: add the amount of missing resources
// science window: add estimated cost of all sciences, when you hover over one, if you would upgrade it.
// build window: add 1:5 button next to the 3 production buildings, and a max button next to all
// add option to always auto-use slaves to build if available, store as variable (if option turned on, and no or not enough  slaves globally and/or locally, add a confirmation/info window where you can cancel the build)
// build window: always show: homes, 3 productions, walls and any other building that passes 10%
// build window: add train shortcut
// train window: add build shortcut
// prompts on various things: http://visual-utopia.com/forum.asp?f=Suggestions+and+Improvements&t=YESNO%20prompt%20on%20mobile&page=1
// on kd page kd list: hide 0% kds. hide worlds other than your own. add checkboxes to show/hide both. world could be detectable from the function scrollToFlag(world, x, y):
//      frame = window.opener.parent.map
//      else frame = parent.parent.map
// when changing the city/army from a dropdown box in a window, change it in the global menu, and vice-versa
// add build, train and defense buttons on the build/train/defense windows of city pages
// similar links as ^above for armies
// army window: lots of useful info in the script at the bottom
// production window: add check for red productivity % text
// training window: in the training timeline table, hide 0s, center numbers and time headers, right align unit names, fix light/dark rows/columns with overlapping opacities?
// training: title explaining mobilization and mouse pointer when you hover over (xx mobilized) and (xx/yy days)
// training: add unit abilites descriptions; ranged troops can defend vs catapults; last tier unit specialty; gaia; nazguls; mages;
// training: add base training times for comparison (with no milisci, arms or mobilization; don't forget to count in base orc bonus):
/*
training time(tier) = ceil((base(tier)+milisci)*orc*arms*mobilize)

tier = [0, 1, 2, 3, 4]
base = [30, 40, 50, 60, 72]
milisci = 0, 1, 2, 3,...
orc = 1/2
arms = between 1 and 1/2
mobilize = 1/2 (optional for humans, for randomly about 4% training losses)
*/
// replies: http://visual-utopia.com/forum.asp?f=Childrens%20Playground&t=AdviceFAQ&replies=68#reply_post, goes to page 2, 19th post is the reply, does not scroll when opening



//SEEMS NOT! //SOLVED: forum rul replies: check if reply_number is mod50, so indicates the last page, or can be on previous pages as well; since &replies= doesn't redirect to other pages, I guess it's so
//DONE: training: maybe: change train time shown when mobilization is on - make it (red mobilize time/(normal color nonmobilze time)
//DONE: turn on land size, productivity, employement, morale and maybe defense in production
//DONE: in production window, separate total tax and total gold from mines, then show them combined under it
//DONE: split tax and mine gold income

//http://static.visual-utopia.com/
//http://static.visual-utopia.com/images/
//http://static.visual-utopia.com/images/dragon.gif
//https://static.visual-utopia.com/menu.js
//https://static.visual-utopia.com/pop.js
//https://static.visual-utopia.com/pngfix.js
//https://static.visual-utopia.com/build.js
//https://static.visual-utopia.com/style.css?v=3
//http://static.visual-utopia.com/
//http://static.visual-utopia.com/images/
//http://static.visual-utopia.com/images/dragon.gif



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
        
        //find total prep time formula. maybe involves: number of units on your side or op, building size of the city, number of walls (find out the % they increase). might also invovle number of enemy units or dp
        //find how % success changes with prep time, for attacks and for siege
        
        //merging an army to a prepping army halves the already prepped time (probably floored); I think it doesn't depend on the size of the merger vs mergee
        
        //unit gold upkeep = Number of troops * 2,74 ?
        //human sped up training gives ~4% less troops in total
        //1 xp = random 1-2% bonus op/dp, roughly 1.5%
        //% morale ~= % op/dp



       //intUserKingdomID <-- user's kd id
        
        //army info from strArmies:
        //1536928#Hai Binh Laden#1367#1876#Mr. Quirinus IV#1##5768#3#10# of Childrens Playground#90599#0#87142#0#0
        //Army ID#  Army Name   #    #    #  Ruler name   # ##KDID# #  # of Kingdom Name        #usrID# #total troops+1#?#?
        //1535372#Zzzzzombies   #2006#2351#Mr. Quirinus IV#1##5768##5# of Childrens Playground#90599#0#744#0#0
        
        //gives info only about users that have visible armies
        //also, broken, need to fix unique function to give keys
        /*
        var armies_info = strArmies.split('&');
        armies_info.pop();
        var armies_info_len = armies_info.length;
        var army_info = '';
        var ai_users = [];
        var ai_userIDs = [];
        var ai_user_kds = [];
        var ai_user_kdIDs = [];
        var ai_unique_user_index = [];
        var ai_unique_kd_index = [];
        
        //function unique(list) {
        //    var res = [];
        //    $.each(list, function(i, e) {
        //        if ($.inArray(ele, res) == -1) res.push(e);
        //    });
        //   return res;
        //}
        
        //function unique(value, index, self) { 
        //    self.indexOf(value) === index;
        //}
        
        //I want this to return keys, not elements
        Array.prototype.unique = function(a){
            return function(){ return this.filter(a) }
        }(function(a,b,c){ return c.indexOf(a,b+1) < 0 });
        
        for (i = 0; i < armies_info_len; i++)
        {
            army_info = armies_info[i].split('#');
            ai_users[i] = army_info[4];
            ai_userIDs[i] = army_info[11];
            if (army_info[10] == '')
            {
                ai_user_kds[i] = '';
            }
            else
            {
                ai_user_kds[i] = army_info[10].substr(4);
            }
            ai_user_kdIDs[i] = army_info[7];
        }
        
 
        //get unique users and their: username, user id, kd name, kd id; & dictionary userID --> username
        ai_unique_user_index = ai_userIDs.unique();
        alert(ai_unique_user_index);
        var ai_unique_user_index_len = ai_unique_user_index.length;
        var userID_to_user_dictionary = [];
        
        for (i = 0; i < ai_unique_user_index_len; i++)
        {
            ai_users[i] = ai_users[ai_unique_user_index[i]];
            ai_userIDs[i] = ai_userIDs[ai_unique_user_index[i]];
            ai_user_kds[i] = ai_user_kds[ai_unique_user_index[i]];
            ai_user_kdIDs[i] = ai_user_kdIDs[ai_unique_user_index[i]];
            
            userID_to_user_dictionary[ai_userIDs[i]] = ai_users[i];
        }
        ai_users = ai_users.slice(0, ai_unique_user_index_len - 1);
        ai_userIDs = ai_userIDs.slice(0, ai_unique_user_index_len - 1);
        ai_user_kds = ai_user_kds.slice(0, ai_unique_user_index_len - 1);
        ai_user_kdIDs = ai_user_kdIDs.slice(0, ai_unique_user_index_len - 1);
        
        //get unique kds and kd ids; & dictionary ukdID --> kdname
        ai_unique_kd_index = unique(ai_user_kdIDs);
        var ai_unique_kd_index_len = ai_unique_kd_index.length;
        var ai_kds = [];
        var ai_kdIDs = [];
        var kdID_to_kd_dictionary = [];
        
        for (i = 0; i < ai_unique_kd_index_len; i++)
        {
            ai_kds[i] = ai_user_kds[ai_unique_user_index[i]];
            ai_kdIDs[i] = ai_user_kdIDs[ai_unique_user_index[i]];
             
            kdID_to_kd_dictionary[ai_kdIDs[i]] = ai_kds[i];
        }
        
        //alert(kdID_to_kd_dictionary[5768]);
        */

