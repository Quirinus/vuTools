// ==UserScript==
// @name         vuTools
// @version      0.26
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
        var city_gates;
        var city_race = '';
        var city_color;
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
        var kds_neutral = ['Mad and Dangerous', 'The Visual Utopia Empire', 'The Death Dealers', 'Forsaken'];
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
        var army_size_img;
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
        var army_race_numbers = ['Human', 'Elf', 'Orc', 'Dwarf', 'Troll', 'Halfling'];
        var army_race_fast_units = ['knights', 'riders', 'nazguls', '', '', 'pony riders'];
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
        //var ai_user_kdIDs = [];
        var ai_armyIDs = [];
        var ai_troops = [];
        var ai_t3 = [];
        var ai_name = [];
        var ai_race = [];
        var ai_size = [];
        var ai_size_signs = [];
        var ai_user_kds = [];
        /* //needed for army vision range
        var ai_x = [];
        var ai_y = [];
        var a_los_marker;
        var a_fow_square_width;
        var army_los_radius_safe_margin;
        var army_los_radius;
        var army_x;
        var army_y;
        var army_los_color;
        var army_los_show;*/
        
        for (i = 0; i < armies_info_len; i++)
        {
            army_info = armies_info[i].split('#');
            ai_name[i] = army_info[1];
            ai_armyIDs[i] = army_info[0];
            ai_race[i] = army_race_numbers[parseInt(army_info[5]) - 1]; //from https://static.visual-utopia.com/main.js
            ai_users[i] = army_info[4];
            //ai_userIDs[i] = army_info[11];
            ai_size[i] = army_size_names[parseInt(army_info[9]) - 1];
            ai_size_signs[i] = army_size_signs[parseInt(army_info[9]) - 1];
            ai_troops[i] = numberWithCommas(parseInt(army_info[13])-1) + ' troops';
            if (ai_troops[i] == '1 troops')
                ai_troops[i] = '1 soldier';
            //ai_t3[i] = (army_info[14] == '0') ? '' : '\nOnly tier 3 troops - movement bonus.';
            ai_t3[i] = (army_info[14] == '0') ? '' : '\nOnly ' + army_race_fast_units[parseInt(army_info[5]) - 1] + ' in army - movement bonus.';
            if (army_info[10] === '')
            {
                ai_user_kds[i] = '';
            }
            else
            {
                ai_user_kds[i] = army_info[10].substr(4);
            }
            //ai_user_kdIDs[i] = army_info[7];
            
            /* //needed for army vision range
            ai_x[i] = (parseInt(army_info[2]) + 2500).toString(); // since x range from the game is -2500 to 2500, and the click detection is 0 to 5000, I add 2500 to this
            ai_y[i] = (parseInt(army_info[3]) + 2500).toString(); // since y range from the game is -2500 to 2500, and the click detection is 0 to 5000, I add 2500 to this
            */
            
            //WORKS: shows army vision range (uncomment the neccesary variable declarations above)
            /*a_fow_square_width = 99;
            army_los_radius_safe_margin = Math.ceil(a_fow_square_width/2) + 20;
            army_los_radius = parseInt(armyLOS) + army_los_radius_safe_margin;
            army_x = parseInt(ai_x[i]) - army_los_radius;
            army_y = parseInt(ai_y[i]) - army_los_radius;
            army_los_color = '';
            army_los_show = false;
            if (kds_enemy.indexOf(ai_user_kds[i]) !== -1)
            {
                army_los_show = true;
                army_los_color = color_enemy;
            }
            if (kds_neutral.indexOf(ai_user_kds[i]) !== -1)
            {
                army_los_show = true;
                army_los_color = color_neutral;
            }
            if (kd_own.indexOf(ai_user_kds[i]) !== -1)
            {
                army_los_show = true;
                army_los_color = color_own;
            }
            if (army_los_show)
            {
                a_los_marker = $('<div></div>')
                .css('position', 'absolute')
                .css('top', army_y)
                .css('left', army_x)
                .css('width', 2*army_los_radius)
                .css('height', 2*army_los_radius)
                .css('border', '1px solid ' + army_los_color)
                .css('-moz-border-radius', army_los_radius)
                .css('-webkit-border-radius', army_los_radius)
                .css('pointer-events', 'none')
                .css('border-radius', army_los_radius);
                $('#hideSpill').append(a_los_marker);
            }
            army_los_show = false;*/
        }
        var armyID_check_index = -1;

        /*var _oldpop = pop;
        function pop() {
            _oldpop();//if you need previous function
            //extend code here;
            alert('gg');
        }*/
        //alert(pop('armyInfoE.asp?armyID=1537470'));
        
        
        
        //hide armies - unfininshed
        /*var shift_click_distance = -1;
        var shift_click_army_id = -1;
        var shift_click_x = -1;
        var shift_click_y = -1;
        var shift_click_x_old = -1;
        var shift_click_y_old = -1;
        var armies_hide_index = [];
        var armies_hide_id = [];
        var armies_hide_len = 0;
        var cycle_id = 0;
        var cycle_z = 0;
        function get_armies_in_distance()
        {
            armies_hide_index = [];
            armies_hide_id = [];
            //alert($(armies[3]).attr('onclick').replace("pop('armyInfoE.asp?armyID=", '').replace("')", '').trim() == 1537446);
            for (i = 0; i < armies_info_len; i++)
            {
                shift_click_distance = Math.sqrt(Math.pow(ai_x[i] - shift_click_x,2) + Math.pow(ai_y[i] - shift_click_y,2));
                if (shift_click_distance < 150)
                {
                    shift_click_army_id = ai_armyIDs[i];
                    for (j = 0; j < army_len; j++)
                    {
                        if ($(armies[j]).attr('onclick').replace("pop('armyInfoE.asp?armyID=", '').replace("')", '').trim() == shift_click_army_id)
                        {





                            armies_hide_index[armies_hide_index.length] = j;
                            armies_hide_id[armies_hide_id.length] = shift_click_army_id;
                        }
                    }
                }
            }


            armies_hide_len = armies_hide_index.length;
        }
        function cycle_hide_armies()
        {
            //if (armies_hide_len > 0)
            //{
            for (i = 0; i < armies_hide_len; i++)
            {
                if (i === cycle_id)
                {
                    cycle_z = '1';
                }
                else
                {
                    cycle_z = '0';
                }
                j = armies_hide_index[i];
                $(armies[j]).css('z-index', cycle_z);
                $(armies[j]).next().css('z-index', cycle_z);
                $('img[style*="top: ' + (parseInt($(armies[j]).css('top'))-6).toString() + 'px; left: ' + (parseInt($(armies[j]).css('left'))-1).toString() + 'px"]').css('z-index', cycle_z);
                //alert('img[style*="top: ' + (parseInt($(armies[j]).css('top'))-6).toString() + 'px; left: ' + (parseInt($(armies[j]).css('left'))-1).toString() + 'px"]');
                //alert(shift_click_distance + ' ' + ai_size_signs[i] + '\n' + ai_name[i] + ': '+ ai_race[i] + ' ' + ai_size[i] + ' (' + ai_troops[i]  + ')\n' + ai_users[i] + ' ' + ai_user_kds[i] + ai_t3[i]);
            }
            //}
        }
        function handle_cycle_distance(e)
        {
           if (e.shiftKey)
            {
                if ($(this).attr('class') === 'fow')
                {
                    alert('fow');
                    shift_click_x = e.pageX - $(this).parent().offset().left;
                    shift_click_y = e.pageY - $(this).parent().offset().top;
                    if ((shift_click_x !== shift_click_x_old) && (shift_click_y !== shift_click_y_old))
                    {
                        get_armies_in_distance(shift_click_x, shift_click_y);
                        cycle_id = 0;
                    }
                    else
                    {
                        cycle_id++;
                        if (cycle_id === armies_hide_len)
                            cycle_id = 0;
                    }
                    cycle_hide_armies();
                    return;
                }
                else if ($(this).prop("tagName") === 'IMG')
                {
                    if ($(this).parent().attr('id') === 'karta')
                    {
                        alert('#karta > img');
                        shift_click_x = e.pageX - $(this).parent().offset().left - 2500;
                        shift_click_y = e.pageY - $(this).parent().offset().top - 2500;
                        if ((shift_click_x !== shift_click_x_old) && (shift_click_y !== shift_click_y_old))
                        {
                            get_armies_in_distance(shift_click_x, shift_click_y);
                            cycle_id = 0;
                        }
                        else
                        {
                            cycle_id++;
                            if (cycle_id === armies_hide_len)
                                cycle_id = 0;
                        }
                        cycle_hide_armies();
                        return;
                    }
                    else if ($(this).parent().attr('id') === 'hideSpill')
                    {
                        alert('#hideSpill > img');
                        shift_click_x = parseInt($(this).css('left')) + e.pageX - $(this).offset().left;
                        shift_click_y = parseInt($(this).css('top')) + e.pageY - $(this).offset().top;
                        if ((shift_click_x !== shift_click_x_old) && (shift_click_y !== shift_click_y_old))
                        {
                            get_armies_in_distance(shift_click_x, shift_click_y);
                            cycle_id = 0;
                        }
                        else
                        {
                            cycle_id++;
                            if (cycle_id === armies_hide_len)
                                cycle_id = 0;
                        }
                        cycle_hide_armies();
                        return;
                    }
                }
                else if ($(this).prop("tagName") === 'DIV')
                {
                    if ($(this).parent().attr('id') === 'hideSpill')
                    {
                        alert('#hideSpill > div');
                        shift_click_x = parseInt($(this).css('left')) + e.pageX - $(this).offset().left;
                        shift_click_y = parseInt($(this).css('top')) + e.pageY - $(this).offset().top;
                        if ((shift_click_x !== shift_click_x_old) && (shift_click_y !== shift_click_y_old))
                        {
                            get_armies_in_distance(shift_click_x, shift_click_y);
                            cycle_id = 0;
                        }
                        else
                        {
                            cycle_id++;
                            if (cycle_id === armies_hide_len)
                                cycle_id = 0;
                        }
                        cycle_hide_armies();
                        return;
                    }
                    else if (($(this).parent().prop("tagName") === 'DIV') && ($(this).parent().parent().prop("tagName") === 'BODY') && ($(this).parent().parent().parent().prop("tagName") === 'HTML'))
                    {
                        alert('html > body > div > div');
                        shift_click_x = e.pageX - $(this).offset().left;
                        shift_click_y = e.pageY - $(this).offset().top;
                        if ((shift_click_x !== shift_click_x_old) && (shift_click_y !== shift_click_y_old))
                        {
                            get_armies_in_distance(shift_click_x, shift_click_y);
                            cycle_id = 0;
                        }
                        else
                        {
                            cycle_id++;
                            if (cycle_id === armies_hide_len)
                                cycle_id = 0;
                        }
                        cycle_hide_armies();
                        return;
                    }
                }
            }

        }
        $("#hideSpill > img").off('click','#karta > img', handle_cycle_distance).off('click', '#hideSpill > div', handle_cycle_distance).off('click', 'html > body > div > div', handle_cycle_distance).off('click', '.fow', handle_cycle_distance).on('click', handle_cycle_distance);
        $("#karta > img").off('click','#hideSpill > img', handle_cycle_distance).off('click', '#hideSpill > div', handle_cycle_distance).off('click', 'html > body > div > div', handle_cycle_distance).off('click', '.fow', handle_cycle_distance).on('click', handle_cycle_distance);
        $("#hideSpill > div").off('click','#karta > img', handle_cycle_distance).off('click', '#hideSpill > img', handle_cycle_distance).off('click', 'html > body > div > div', handle_cycle_distance).off('click', '.fow', handle_cycle_distance).on('click', handle_cycle_distance);
        $("html > body > div > div").off('click','#karta > img', handle_cycle_distance).off('#hideSpill > img', handle_cycle_distance).off('click', '#hideSpill > div', handle_cycle_distance).off('click', '.fow', handle_cycle_distance).on('click', handle_cycle_distance);
        $(".fow").off('click','#karta > img', handle_cycle_distance).off('click', '#hideSpill > img', handle_cycle_distance).off('click', '#hideSpill > div', handle_cycle_distance).off('click', 'html > body > div > div', handle_cycle_distance).on('click', handle_cycle_distance);
        */
        
        //armies
        $('div[style*="arrow"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)'); //css('z-index', '2'); // and add image map with coordinates from img, rotated for each
        $('img[src*="armysize"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)').css('z-index', '2');
        $('img[src*="reddot"]').css('-webkit-filter', 'invert(100%)').css('filter', 'invert(100%)');
        
        for (i = 0; i < army_len; i++)
        {
            
            title = $(armies[i]).attr('title');
            army_onclick = $(armies[i]).attr('onclick');
            army_ID = army_onclick.replace("pop('armyInfoE.asp?armyID=", '').replace("')", '');
            //army_onclick = 'pop2(' + army_ID +');';
            //army_onclick = 'if (!e.shiftKey) ' + army_onclick;
            //$(armies[i]).attr('onclick', army_onclick);
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
            


           //add army race + ruler name, and make it link to the army
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

            //make army size signs link to the army as well
            army_size_img = $('img[style*="top: ' + (parseInt($(armies[i]).css('top'))-6).toString() + 'px; left: ' + (parseInt($(armies[i]).css('left'))-1).toString() + 'px"]');
            army_size_img
            .css('cursor', 'pointer')
            .attr('title', title)
            .attr('onclick', army_onclick)
            .addClass('army_size_sign');
            
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
                army_size_img.attr('title', title); //add for own armies
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
        var ci_city_gates = [];
        var ci_city_los = [];
        var ci_city_x = [];
        var ci_city_y = [];

        for (i = 0; i < cities_info_len; i++)
        {
            city_info = cities_info[i].split('#');
            ci_cityIDs[i] = city_info[0];
            ci_city_names[i] = city_info[1];
            ci_users[i] = city_info[6];
            //ci_userIDs[i] = city_info[11];
            ci_city_gates[i] = city_info[10];
            if ((ci_city_gates[i] === '') || (ci_city_gates[i] === '0'))
                ci_city_gates[i] = 'Gates: Open or none.';
            else if (ci_city_gates[i] === '1')
                ci_city_gates[i] = 'Gates: Closed.';
            ci_city_gts[i] = numberWithCommas(parseInt(city_info[12])*2);
            if (ci_city_gts[i] == '2')
            {
                ci_city_gts[i] = '1 guardtower.';
            }
            else if (ci_city_gts[i] == '2,000')
            {
                ci_city_gts[i] = '2,000 or more guardtowers.';
            }
            else
            {
                ci_city_gts[i] = ci_city_gts[i] + ' guardtowers.';
            }
            //ci_city_los[i] = city_info[12]; //for city vision range
            //ci_city_x[i] = (parseInt(city_info[4]) + 2500).toString(); //for city vision range
            //ci_city_y[i] = (parseInt(city_info[5]) + 2500).toString(); //for city vision range
            /*if (city_info[11] == '')  //for city vision range
            {
                ci_user_kds[i] = '';
            }
            else
            {
                ci_user_kds[i] = city_info[11].substr(4);
            }*/
            //ci_user_kdIDs[i] = city_info[7];
            
            
            //WORKS: show city vision range circles
            /*var los_marker;
            var fow_square_width = 99;
            var city_los_radius_safe_margin = Math.ceil(fow_square_width/2) + 20;
            var city_los_radius = parseInt(ci_city_los[i]) + parseInt(cityLOS) + city_los_radius_safe_margin;
            var city_x = parseInt(ci_city_x[i]) - city_los_radius;
            var city_y = parseInt(ci_city_y[i]) - city_los_radius;
            var city_los_color = '';
            var city_los_show = false;
            if (kds_enemy.indexOf(ci_user_kds[i]) !== -1)
            {
                city_los_show = true;
                city_los_color = color_enemy;
            }
            if (kds_neutral.indexOf(ci_user_kds[i]) !== -1)
            {
                city_los_show = true;
                city_los_color = color_neutral;
            }
            if (kd_own.indexOf(ci_user_kds[i]) !== -1)
            {
                city_los_show = true;
                city_los_color = color_own;
            }
            if (city_los_show)
            {
                los_marker = $('<div></div>')
                .css('position', 'absolute')
                .css('top', city_y)
                .css('left', city_x)
                .css('width', 2*city_los_radius)
                .css('height', 2*city_los_radius)
                .css('border', '1px solid ' + city_los_color)
                .css('-moz-border-radius', city_los_radius)
                .css('-webkit-border-radius', city_los_radius)
                .css('pointer-events', 'none')
                .css('border-radius', city_los_radius);
                $('#hideSpill').append(los_marker);
            }
            city_los_show = false;*/
        }
        var cityID_check_index = -1;
        
        //cities
        for (i = 0; i < city_len; i++)
        {
            cityID_check_index = -1;
            title = $(citynames[i]).attr('title');
            city_name = citynames[i].innerHTML;
            city_ID = $(citynames[i]).attr('onclick').replace("pop('cityInfoE.asp?cityID=", '').replace("')", '');
            ruler_name = '';
            if (title.indexOf('Your city:') === -1)
            {
                name_separator_pos1 = title.indexOf(' city owned by ');
                city_race = title.substring(0, name_separator_pos1);
                city_race = '[' + city_race.substr(0,2) + ']';
                name_separator_pos2 = title.indexOf(' of ');
                name_separator_pos3 = title.indexOf(':');

                if (name_separator_pos2 !== -1)
                {
                    cityID_check_index = ci_cityIDs.indexOf(city_ID);
                    if (cityID_check_index !== -1)
                    {
                        ruler_name = ci_users[cityID_check_index];
                        city_gts = ' ' + ci_city_gts[cityID_check_index];
                        city_gates = ' ' + ci_city_gates[cityID_check_index];
                        //kd_name = ci_user_kds[cityID_check_index];
                    }
                    else
                    {
                        //error,try to do it with the classic method that may fail in complicated cases and give wrong user/kd name cutoffs
                        ruler_name = title.substring(name_separator_pos1 + ' city owned by '.length, name_separator_pos2);
                        city_gts = '';
                        city_gates = '';
                        //kd_name = title.substring(name_separator_pos2 + ' of '.length, name_separator_pos3);
                    }
                }
                else
                {
                    ruler_name = title.substring(name_separator_pos1 + ' city owned by '.length, name_separator_pos3);
                    city_gts = '';
                    city_gates = '';
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
   
            //citynames[i].innerHTML = city_race + city_name;
            ruler_name_style = $(citynames[i]).attr('style');
            $(citynames[i]).css({
                'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                '-webkit-font-smoothing' : 'antialiased'
            });
            
            title = numberWithCommas(title);
            title = title + city_gts + city_gates;
            title = title.replace(': ', ':\r');
            $(citynames[i]).attr('title', title);
            
            kd_found = false;
            if (title.indexOf('Your city:') !== -1)
            {
                $(citynames[i]).css('color', color_own);
                kd_found = true;
            }
            else
            {
                if (title.indexOf(kd_own[0]) !== -1)
                {
                    city_color = color_ownkd;
                    kd_found = true;
                }

                if (!kd_found)
                {
                    for (j = 0; j < kds_friendly.length ; j++)
                    {
                        if (title.indexOf(kds_friendly[j]) !== -1)
                        {
                            city_color = color_friendly;
                            kd_found = true;
                            break;
                        }
                    }
                }
                
                if (!kd_found)
                {
                    for (j = 0; j < kds_neutral.length ; j++)
                    {
                        if (title.indexOf(kds_neutral[j]) !== -1)
                        {
                            city_color = color_neutral;
                            kd_found = true;
                            break;
                        }
                    }
                }
                
                if (!kd_found)
                {
                    for (j = 0; j < kds_enemy.length ; j++)
                    {
                        if (title.indexOf(kds_enemy[j]) !== -1)
                        {
                            city_color = color_enemy;
                            kd_found = true;
                            break;
                        }
                    }
                }
                
                if (!kd_found)
                {
                    //neutral,unlisted kds, no kds
                    city_color = color_neutral_nokd;
                    kd_found = true;
                }
                
                $(citynames[i]).css('color', city_color);
                city_name_span = $('<span></span>')
                .html(city_race + ruler_name)
                .addClass('city_ruler_race_name')
                .attr('style', ruler_name_style)
                .css({
                    'width' : '100px',
                    'height' : '20px',
                    'margin-top' : '3em',
                    'text-decoration' : 'none',
                    'cursor' : 'default',
                    'color' : city_color,
                    'font-weight' : 'bold',
                    'font-size' : '0.8em',
                    'text-align' : 'center',
                    'text-shadow' : 'black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px',
                    '-webkit-font-smoothing' : 'antialiased',
                    'pointer-events': 'none'
                })
                .attr('title', title);
                $(citynames[i]).before(city_name_span);
            }
        }

        //allows map scrolling when clicking on city img, waypoints and army movement arrows
        $('#hideSpill > img:not(.armyclick):not(.army_size_sign)').css('pointer-events', 'none'); //important that it's after the code above, because .army_size_sign is added there
        $('.wp').css('pointer-events', 'none');
        $('div[style*="arrow"]').css('pointer-events', 'none');
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
        /*race = 2;
        human = false;
        $('.button.big.city:eq(0)').remove();*/
        
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

            top_train_button = $('.button.big.city:eq(0)').clone();
            
            top_train_row = $('<tr></tr>');
            top_train_table.append(top_train_row);
            top_train_row.append($('<td>&nbsp;</td>').css('width', '67%'), $('<td></td>').css('width', '33%').append(top_train_button));
            //$('form').prev().remove(); //removes <br>
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
        
        $('form table:eq(4) tr:eq(3) td:eq(1)').append('&nbsp;&nbsp;<img src="https://static.visual-utopia.com/images/yellowball.gif">1');
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
        var race_b = parseInt($('#wizard').attr('src').replace(/[^0-9]/g,'').substring(0,1));
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
        productivity_info.html(productivity_info.html() + '/<span class="underdotted" title="Productivity due to ' + numberWithCommas(slaves_used + c_peasants) + ' peasants and slaves working in resouce-generating buildings.\nThere are ' + numberWithCommas(resource_jobs) + ' resource-producing jobs available for them.">' + productivity_percent_real.toString() + '%</span><br><span style="font-size:small;"><span class="underdotted" title="Productivity due to ' + numberWithCommas(c_peasants) + ' peasants working in resouce-generating buildings.">' +
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
        var build_1_5_button;
        var build_1_6_button;
        
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
            
            if (i < 5)
            {
                build_1_5_button = $('<button></button>')
                .text('1:5')
                .attr('class', 'button')
                .attr('type', 'button')
                .attr('id', build_id + '_button_1_5');
                if (i === 1)
                {
                    build_1_5_button.attr('onclick', 
                                          "document.getElementById('b_1').value = '" + (Math.ceil(buildable_b/5)).toString() + "'; \
                                          document.getElementById('b_3').value = '" + (Math.floor(buildable_b*4/5)).toString() + "'; \
                                          document.getElementById('b_1_button').innerHTML = 'Max'; \
                                          document.getElementById('b_3_button').innerHTML = 'Max'; \
                                          document.getElementById('b_1_total_cost').innerHTML = numberWithCommasx(" + (Math.ceil(buildable_b/5)*c_build_cost_gold).toString() + "); \
                                          document.getElementById('b_3_total_cost').innerHTML = numberWithCommasx(" + (Math.floor(buildable_b*4/5)*c_build_cost_gold).toString() + "); \
                                          sum_building_gold_cost(); \
                                          sumBuild();");
                }
                else
                {
                    build_1_5_button.attr('onclick', 
                                          "document.getElementById('b_1').value = '" + (Math.ceil(buildable_b/5)).toString() + "'; \
                                          document.getElementById('b_" + i.toString() + "').value = '" + (Math.floor(buildable_b*4/5)).toString() + "'; \
                                          document.getElementById('b_1_button').innerHTML = 'Max'; \
                                          document.getElementById('" + build_id + "_button').innerHTML = 'Max'; \
                                          document.getElementById('b_1_total_cost').innerHTML = numberWithCommasx(" + (Math.ceil(buildable_b/5)*c_build_cost_gold).toString() + "); \
                                          document.getElementById('b_" + i.toString() + "_total_cost').innerHTML = numberWithCommasx(" + (Math.floor(buildable_b*4/5)*c_build_cost_gold).toString() + "); \
                                          sum_building_gold_cost(); \
                                          sumBuild();");
                }
                $('#b_' + i.toString() + '_button').after(build_1_5_button);
            }

            if (((race_b === 4) && (i === 3)) || ((race_b === 6) && (i === 2))) //dwarf or halfling
            {
                build_1_6_button = $('<button></button>')
                .text('1:6')
                .attr('class', 'button')
                .attr('type', 'button')
                .attr('id', build_id + '_button_1_6');
                if (race_b === 4)
                {
                    build_1_6_button.attr('onclick', 
                                          "document.getElementById('b_1').value = '" + (Math.ceil(buildable_b*6/31)).toString() + "'; \
                                          document.getElementById('b_3').value = '" + (Math.floor(buildable_b*25/31)).toString() + "'; \
                                          document.getElementById('b_1_button').innerHTML = 'Max'; \
                                          document.getElementById('b_3_button').innerHTML = 'Max'; \
                                          document.getElementById('b_1_total_cost').innerHTML = numberWithCommasx(" + (Math.ceil(buildable_b*6/31)*c_build_cost_gold).toString() + "); \
                                          document.getElementById('b_3_total_cost').innerHTML = numberWithCommasx(" + (Math.floor(buildable_b*25/31)*c_build_cost_gold).toString() + "); \
                                          sum_building_gold_cost(); \
                                          sumBuild();");
                    $('#b_3_button_1_5').after(build_1_6_button);
                }
                else if (race_b === 6)
                {
                    build_1_6_button.attr('onclick', 
                                          "document.getElementById('b_1').value = '" + (Math.ceil(buildable_b*6/31)).toString() + "'; \
                                          document.getElementById('b_2').value = '" + (Math.floor(buildable_b*25/31)).toString() + "'; \
                                          document.getElementById('b_1_button').innerHTML = 'Max'; \
                                          document.getElementById('b_2_button').innerHTML = 'Max'; \
                                          document.getElementById('b_1_total_cost').innerHTML = numberWithCommasx(" + (Math.ceil(buildable_b*6/31)*c_build_cost_gold).toString() + "); \
                                          document.getElementById('b_2_total_cost').innerHTML = numberWithCommasx(" + (Math.floor(buildable_b*25/31)*c_build_cost_gold).toString() + "); \
                                          sum_building_gold_cost(); \
                                          sumBuild();");
                    $('#b_2_button_1_5').after(build_1_6_button);
                }
            }
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

        //thousand separators for buildings (built and in construction)
        for (i = 2; i < 12; i++)
        {
            $('form table:eq(' + i.toString() + ') tr:eq(3) td:eq(1)').text(numberWithCommas($('form table:eq(' + i.toString() + ') tr:eq(3) td:eq(1)').text()));
            $('form table:eq(' + i.toString() + ') tr:eq(4) td:eq(1)').text(numberWithCommas($('form table:eq(' + i.toString() + ') tr:eq(4) td:eq(1)').text()));
        }
            $('form table:eq(12) tr:eq(3) td:eq(1)').text(numberWithCommas($('form table:eq(12) tr:eq(3) td:eq(1)').text()));
        
        //show buildings    //total_buildings
        if(b0 > 0) document.getElementById('b0').style.display = 'block'; //b0 - Wreckages
        if(b1 > 0 || b1i > 0) document.getElementById('b1').style.display = 'block'; //b1 - Homes
        if(b1 > 0 || b1i > 0) document.getElementById('b1').style.display = 'block'; //b2 - Farms
        if(b2 > 0 || b2i > 0) document.getElementById('b2').style.display = 'block'; //b3 - Mines
        if(b3 > 0 || b3i > 0) document.getElementById('b3').style.display = 'block'; //b4 - Magic Towers
        if(b4 > 0 || b4i > 0) document.getElementById('b4').style.display = 'block'; //b5 - Guardtowers
        if(b5 > 1 || b5i > 0) document.getElementById('b5').style.display = 'block';                 //b6 - Guardtowers, don't show GT if it has 0 or 1 GT
        if(b6 > 0 || b6i > 0) document.getElementById('b6').style.display = 'block'; //b6 - Taverns
        if(b7 > 0 || b7i > 0) document.getElementById('b7').style.display = 'block'; //b7 - Lumbermills
        if(b8 > 0 || b8i > 0) document.getElementById('b8').style.display = 'block'; //b8 - Armories
        if(b9 > 0 || b9i > 0) document.getElementById('b9').style.display = 'block'; //b9 - Warehouses

        if(wall>0) document.getElementById('wall').style.display = 'block'; // && wall<maxWall
    }
    
    function add_cross_window_navigation_menu(cityID)
    {
        var city_name_h1 = $('#main h1');
        var city_nav_table = $('<table style="background: black; float: left;"></table>');
        var city_nav_tr = $('<tr></tr>');
        city_name_h1.after(city_nav_table);
        city_nav_table.append(city_nav_tr);
        city_name_h1.css('float', 'left');
        city_name_h1.css('margin-right', '1em');
        city_nav_tr.append('<td><a href="build.asp?cityID=' + cityID + '"><img src="https://static.visual-utopia.com/images/but_build.gif"></a></td>');
        city_nav_tr.append('<td><a href="train.asp?cityID=' + cityID + '"><img src="https://static.visual-utopia.com/images/but_train.gif"></a></td>');
        city_nav_tr.append('<td><a href="NewArmy.asp?cityID=' + cityID + '"><img src="https://static.visual-utopia.com/images/newarmy.gif"></a></td>');
        city_nav_tr.append('<td><a href="defence.asp?cityID=' + cityID + '#' + cityID + '"><img src="https://static.visual-utopia.com/images/defence.gif"></a></td>');
        city_nav_tr.append('<td><a href="gates.asp?cityID=' + cityID + '#' + cityID + '"><img src="https://static.visual-utopia.com/images/closegate.gif"></a></td>');
        city_nav_table.after('<div style="clear: both;"></div>');
        return city_nav_table;
    }
    
    //navigation between train/build/new army/defense/gates
    if ((url.indexOf('train.asp') !== -1) || (url.indexOf('build.asp') !== -1))
    {
        //buttons/links to other windows
        var city_id_s = $('#cityid').val().toString();
        var city_nav_table = add_cross_window_navigation_menu(city_id_s);
        
        //city_nav_tr.append('<td><a class="button big" style="background-image: url(\'images/but_army.gif\'); width: 170px; padding-left: 38px;" href="armyInfo.asp">Army</a></td>');
    }
    if ((url.indexOf('newArmy.asp') !== -1) || (url.indexOf('NewArmy.asp') !== -1))
    {
        //buttons/links to other windows
        var city_id_s = $('select').val().toString();
        var city_nav_table = add_cross_window_navigation_menu(city_id_s);
        
        $('#infotext').append('<p>All one and two letter words, excessive spaces and non-alphabetical characters will be removed from the name.</p>');
    }
    if ((url.indexOf('defence.asp') !== -1) || (url.indexOf('gates.asp') !== -1))
    {
        //buttons/links to other windows
        var city_name_h1 = $('#main h1');
        city_name_h1.text(city_name_h1.text().replace('defences', ''));
        var city_id_s = location.hash.substring(1);
        //if (city_id_s !== '')
        //{
            var city_nav_table = add_cross_window_navigation_menu(city_id_s);
        //}
    }

    if (url.indexOf('armyInfo.asp') !== -1)
    {
        
        //adds city names to army names in the dropdown
        var army_selected = $(document.armySelect.armys).val();
        var army_select = $(document.armySelect.armys);
        var army_select_options = army_select.find('option');
        //army_select.append('<optgroup label="on mission" id="optg_on_mission"></optgroup>');
        //$('#optg_on_mission').append(army_select_options.detach());
        var select_opt_len = army_select_options.length;
        var armys_len = armys.length;
        for (i = 0; i < armys_len; i++)
        {
            for (j = 0; j < select_opt_len; j++)
            {
                if (armys[i][1] === army_select_options.eq(j).text())
                {
                    if (armys[i][13] !== '')
                        army_select_options.eq(j).html('.&nbsp;&nbsp;' + armys[i][13] + ' | ' + army_select_options.eq(j).text());
                }
            }
        }
        $('#armyinfo > table:nth-child(3) th:eq(0)').text('Choose army (City | Army)');
        
        //sorts the dropdown alphabetically + puts cities on top
        army_select_options.sort(function(a, b) { return $(a).text().toLowerCase().substring(1) < $(b).text().toLowerCase().substring(1) ? 1 : -1; });
        army_select.html('').append(army_select_options);
        for (j = 0; j < select_opt_len; j++)
        {
            if (army_select_options.eq(j).text().substring(0,1) === '.')
                army_select_options.eq(j).text(army_select_options.eq(j).text().substring(1));
        }
        //selects the army that was selected before the sorting
        $(document.armySelect.armys).val(army_selected);
        
        //makes the city name clickable, add thousands spearators, checks if you're in your own city
        var army_city_id = -1;
        var in_self_city = false;
        function prep_army_page() {
            //adds thousand spearators
            $('#upkeep').text(numberWithCommas($('#upkeep').text()));
            $('#army_peasants').text(numberWithCommas($('#army_peasants').text()));
            $('#army_peasants').parent().parent().find('th').html($('#army_peasants').parent().parent().find('th').html().replace('Peasants', 'Ready'));
            $('#s1').text(numberWithCommas($('#s1').text()));
            $('#s2').text(numberWithCommas($('#s2').text()));
            $('#s3').text(numberWithCommas($('#s3').text()));
            $('#s4').text(numberWithCommas($('#s4').text()));
            $('#s5').text(numberWithCommas($('#s5').text()));
            $('#s1i').text(numberWithCommas($('#s1i').text()));
            $('#s2i').text(numberWithCommas($('#s2i').text()));
            $('#s3i').text(numberWithCommas($('#s3i').text()));
            $('#s4i').text(numberWithCommas($('#s4i').text()));
            $('#s5i').text(numberWithCommas($('#s5i').text()));
            
            //if in city
            if ($('#located').text() !== 'on mission')
            {
                for (i = 0; i < armys_len; i++)
                {
                    if (armys[i][1] === $('h1').text())
                    {
                        //armys[i][13] //city name
                        army_city_id = armys[i][14];
                        //check if you're in your own city
                        if (parseInt(armys[i][22]) === parseInt(userID))
                            in_self_city = true;
                        else
                            in_self_city = false;
                        break;
                    }
                }
                if (in_self_city)
                {
                    //make the city name clickable
                    $('#located').html('<a href="train.asp?cityID=' + army_city_id + '">' + $('#located').text() + '</a>');

                    //adds thousand spearators when in city
                    $('#city_peasants').text(numberWithCommas($('#city_peasants').text()));
                    $('#free_beds').text(numberWithCommas($('#free_beds').text()));
                    $('#cityS1').text(numberWithCommas($('#cityS1').text()));
                    $('#cityS2').text(numberWithCommas($('#cityS2').text()));
                    $('#cityS3').text(numberWithCommas($('#cityS3').text()));
                    $('#cityS4').text(numberWithCommas($('#cityS4').text()));
                    $('#cityS5').text(numberWithCommas($('#cityS5').text()));
                    
                    //$('#city_peasants').parent().parent().parent().find('tr:eq(0)').before($('#cityResourcesText tbody tr:lt(2)').detach());
                    //$('#city_peasants').parent().parent().parent().find('tr:eq(3)').before($('#cityResourcesText tbody tr:eq(0)').detach());
                    //$('#city_peasants').parent().parent().parent().find('tr:eq(2)').before($('<tr><td colspan="2" style="height:2.7em">&nbsp;</td></tr>'));
                    //$('#cityResourcesText').remove(); //no idea why remove removes the first row in the new table... probably jquery miss-assigning stuff or not keeping track of it
                }
            }
            else
                in_self_city = false;
        }
        
        //prep page on open
        prep_army_page();
        
        //navigation from army info to train/build/new army/defense/gates (uses prep_army_page vars, so it needs to be called after it)
        var city_id_s = army_city_id;
        var city_nav_table = add_cross_window_navigation_menu(city_id_s);
        if (!in_self_city)
            city_nav_table.hide();
        
        //prep page when you change army
        $('select').change(function () {
            prep_army_page();
            city_id_s = army_city_id;
            if (in_self_city)
            {
                city_nav_table.find('a').attr('href', function (index, value) {
                    return value.replace(/[-0-9]+/g, city_id_s);
                }); //change cityID in the navigation menu links
                city_nav_table.show();
            }
            else
            {
                city_nav_table.hide();
            }
        });

        //units stats
        var magic_science = 0;
        var military_science = 0;
        //var morale = $('#morale');
        //var exp = $('#experience');
        var unit_op = [];
        var unit_dp = [];
        unit_op[0] = [3, 4, 11, 0, 40]; //Human
        unit_op[1] = [2, 2, 7, 0, '*']; //Elf
        unit_op[2] = [1, 3, 8, 0, 160]; //Orc
        unit_op[3] = [2, 5, 10, 0, 6]; //Dwarf
        unit_op[4] = [2, 5, 10, 1, 35]; //Troll
        unit_op[5] = [0, 2, 6, 0, 8]; //Halfling

        unit_dp[0] = [2, 5, 11, 0, 20]; //Human
        unit_dp[1] = [1, 10, 10, 0, '*']; //Elf
        unit_dp[2] = [2, 3, 8, 0, 160]; //Orc
        unit_dp[3] = [2, 6, 8, 0, 3]; //Dwarf
        unit_dp[4] = [3, 4, 10, 0, 35]; //Troll
        unit_dp[5] = [1, 2, 4, 0, 8]; //Halfling
        var raw_op, raw_dp, mod_op, mod_dp;
        var craw_op, craw_dp, cmod_op, cmod_dp;
        
        //adds op, dp and mu info + military/magic sci dropdowns
        $('#armyinfo table:nth-last-child(7)').before('<table><tr><td>Magic science: <select id="magisci"><option selected>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select></td></tr></table>');
        if (race !== 2) //Elf
            $('#magisci').parent().parent().parent().hide();
        $('#armyinfo table:nth-last-child(7)').before('<table style="float:left;"><tr><td>Military science: <select id="milisci"><option selected>0 Raw</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select></td></tr></table>');
        $('#armyinfo table:nth-last-child(7)').before('<div style="clear:both;"></div>');
        $('#armyinfo table:nth-last-child(7)').before('<table style="float:left;"><tr><td><span id="mod_unmod_text">Raw power</span>: <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/att2.gif"><span id="a_op">0</span></td><td><img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/def6.gif"><span id="a_dp">0</span></td><td><img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/yellowball.gif"><span id="a_mus">0</span></td></tr></table>');
        //if ($('#located').text() !== 'on mission')
        //{
            $('#armyinfo table:nth-last-child(7)').before('<span style="float:left;">&nbsp;&nbsp;</span><table id="city_def"><tr><td><span id="c_mod_unmod_text">City raw power</span>: <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/att2.gif"><span id="c_op">0</span></td><td><img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/def6.gif"><span id="c_dp">0</span></td><td><img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/yellowball.gif"><span id="c_mus">0</span></td></tr></table>');
        //}
        $('#armyinfo table:nth-last-child(7)').before('<div style="clear:both;">&nbsp;</div>');
        
        //calculates total op and dp, raw then mod, in army and in city
        function calc_power()
        {
            //military_science = parseInt(GM_getValue("milisci", parseInt($('#milisci option:selected').text()).toString()));
            //magic_science = parseInt(GM_getValue("magisci", parseInt($('#milisci option:selected').text()).toString());
            military_science = parseInt($('#milisci option:selected').text());
            magic_science = parseInt($('#magisci option:selected').text());
            unit_op[1][4] = 3*magic_science;
            unit_dp[1][4] = 3*magic_science;

            raw_op = parseInt($('#s1').text().replace(',',''))*unit_op[race-1][0] + parseInt($('#s2').text().replace(',',''))*unit_op[race-1][1] + parseInt($('#s3').text().replace(',',''))*unit_op[race-1][2] +
                parseInt($('#s4').text().replace(',',''))*unit_op[race-1][3] + parseInt($('#s5').text().replace(',',''))*unit_op[race-1][4];
            raw_dp = parseInt($('#s1').text().replace(',',''))*unit_dp[race-1][0] + parseInt($('#s2').text().replace(',',''))*unit_dp[race-1][1] + parseInt($('#s3').text().replace(',',''))*unit_dp[race-1][2] +
                parseInt($('#s4').text().replace(',',''))*unit_dp[race-1][3] + parseInt($('#s5').text().replace(',',''))*unit_dp[race-1][4] + parseInt($('#army_peasants').text().replace(',',''))*0.05;
            mod_op = Math.round(raw_op*(1 + military_science*0.1)); //*(1 + parseInt($('#experience'))*0.015)*(parseInt($('#morale'))/100);
            mod_dp = Math.round(raw_dp*(1 + military_science*0.1)); //Math.round((raw_dp*(1 + military_science*0.1) + 0.00001)*100)/100 //*(1 + parseInt($('#experience'))*0.015)*(parseInt($('#morale'))/100);
            if (in_self_city)
            {
                craw_op = parseInt($('#cityS1').text().replace(',',''))*unit_op[race-1][0] + parseInt($('#cityS2').text().replace(',',''))*unit_op[race-1][1] + parseInt($('#cityS3').text().replace(',',''))*unit_op[race-1][2] +
                    parseInt($('#cityS4').text().replace(',',''))*unit_op[race-1][3] + parseInt($('#cityS5').text().replace(',',''))*unit_op[race-1][4];
                craw_dp = parseInt($('#cityS1').text().replace(',',''))*unit_dp[race-1][0] + parseInt($('#cityS2').text().replace(',',''))*unit_dp[race-1][1] + parseInt($('#cityS3').text().replace(',',''))*unit_dp[race-1][2] +
                    parseInt($('#cityS4').text().replace(',',''))*unit_dp[race-1][3] + parseInt($('#cityS5').text().replace(',',''))*unit_dp[race-1][4] + parseInt($('#city_peasants').text().replace(',',''))*0.05;
                cmod_op = Math.round(craw_op*(1 + military_science*0.1)); //*(1 + parseInt($('#experience'))*0.015)*(parseInt($('#morale'))/100);
                cmod_dp = Math.round(craw_dp*(1 + military_science*0.1)); //*(1 + parseInt($('#experience'))*0.015)*(parseInt($('#morale'))/100);
            }
        }
        
        //change numbers when you change military sci level (and magic sci level if you're elf, because of archmages)
        $('#magisci, #milisci, select:eq(0)').change(function () {
            calc_power();
            //GM_setValue("milisci", military_science.toString());
            //GM_setValue("magisci", magic_science.toString());
            
            //army stats
            $('#a_op').text(numberWithCommas(mod_op));
            $('#a_dp').text(numberWithCommas(mod_dp));
            $('#a_mus').text(numberWithCommas(parseInt($('#s4').text().replace(',',''))));
            if (military_science === 0)
                $('#mod_unmod_text').text('Raw power');
            else
                $('#mod_unmod_text').text('Modded power');
            
            if (in_self_city)
            {
                $('#city_def').show();
                $('#c_op').text(numberWithCommas(cmod_op));
                $('#c_dp').text(numberWithCommas(cmod_dp));
                $('#c_mus').text(numberWithCommas(parseInt($('#cityS4').text().replace(',',''))));
                if (military_science === 0)
                    $('#c_mod_unmod_text').text('City raw power');
                else
                    $('#c_mod_unmod_text').text('City modded power');
            }
            else
            {
                $('#city_def').hide();
            }
            
            if (race == 2) //elf
            {
                $('#stat_op5').text(unit_op[1][4].toString() + '*');
                $('#stat_dp5').text(unit_dp[1][4].toString() + '*');
            }
        });

        //initialize op/dp/mu
        $('#milisci').change();
        
        /*$('a[href*="javaScript:transfer("]').each(function (index) {
            $(this).attr('href', $(this).attr('href').replace("');", "#gg');"));
        });*/
        
        var magic_stat;
        for (i = 0; i < 5; i++)
        {
            if (i === 3)
                magic_stat = ' <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/yellowball.gif">1';
            else
                magic_stat = '';
            $('#s' + (i+1).toString()).parent().parent().parent().find('tr:eq(0) th').append(' <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/att2.gif"><span id="stat_op' + (i+1).toString() + '">' + unit_op[race-1][i].toString() + '</span> <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/def6.gif"><span id="stat_dp' + (i+1).toString() + '">' + unit_dp[race-1][i].toString() + '</span>' + magic_stat);
            //$('#s' + (i+1).toString()).parent().parent().parent().find('tr:eq(0)').after('<tr><td colspan="2"><img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/att2.gif">' + unit_op[race-1][i].toString() + ' <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/def6.gif">' + unit_dp[race-1][i].toString() + '</td></tr>');
        }
        $('table:nth-last-child(2)').prepend('<tr><th colspan="2">Peasants <img align="absmiddle" style="line-height: 18px; text-align: -webkit-center; vertical-align: middle;" src="https://static.visual-utopia.com/images/def6.gif">0.05</th></tr>');

        
    }
    
    if (url.indexOf('scoutTerrain.asp') !== -1)
    {
        $('#infotext').append('<p>All one and two letter words, excessive spaces and non-alphabetical characters will be removed from the name.</p>');
    }
    
    if (url.indexOf('menu.asp') !== -1)
    {
        //here I wanted to add city names to armies in the main menu, but realized those are only listed in the armyInfo window...
        /*var strArmies = top.frames["map"].strArmies;
        var armies_select = document.armyForm.armyID;
        var armies_select_options = document.armyForm.armyID.options;
        var armies_select_len = document.armyForm.armyID.options.length;
        var armies_ids = [];
        var armies_names = [];
        
        for (i = 0; i < armies_select_len - 1; i++)
        {
            armies_ids[i] = document.armyForm.armyID.options[i].value;
            armies_names[i] = document.armyForm.armyID.options[i].innerHTML;
        }
        
        var armies_info = strArmies.split('&');
        armies_info.pop();
        var armies_info_len = armies_info.length;
        var army_info = '';
        
        var ai_users = [];
        var ai_armyIDs = [];
        var ai_name = [];
        var ai_size_signs = [];
        
        for (i = 0; i < armies_info_len; i++)
        {
            army_info = armies_info[i].split('#');
            ai_name[i] = army_info[1];
            ai_armyIDs[i] = army_info[0];
            ai_users[i] = army_info[4];
            ai_size_signs[i] = army_size_signs[parseInt(army_info[9]) - 1];
            if (armies_ids.indexOf(army_info[0]) !== -1)
            {

            }
        }*/
        
        //can't find the city the army is in. at most I can add army info that's in strArmies, like size designations...
        
        
        $('#mslot2').after($('#mslot1').detach());
        $('#mslot7').after($('#mslot8').detach());
    }
    
    //market buy
    if ((url.indexOf('option=sell') === -1) && ((url.indexOf('market2.asp?option=buy') !== -1) || (url.indexOf('market2.asp') !== -1)))
    {
        if ($('#main').text().indexOf('or buy something else') === -1)
        {
            var resources_info = $('script:eq(3)').html();
            resources_info = resources_info.replace(/[^0-9&]/g, '');
            resources_info = resources_info.split("&");
            var g_gold = resources_info[0].replace(',', '');

            var total_cost_buy = $('#totalCost');
            var input_total_cost_buy = $('<input>')
            .attr('id', 'icost');
            total_cost_buy.after(input_total_cost_buy);
            total_cost_buy.hide();

            $('#main input:eq(0)').on('keyup', function () {
                if (parseInt($('#main input:eq(0)').val()) > Math.round(parseInt(g_gold)/parseFloat( sell[document.buy.from.selectedIndex][2]/ sell[document.buy.from.selectedIndex][1] )))
                    $('#main input:eq(0)').val(Math.round(parseInt(g_gold)/parseFloat( sell[document.buy.from.selectedIndex][2]/ sell[document.buy.from.selectedIndex][1] )));
                calcCost();
                input_total_cost_buy.val(total_cost_buy.text());
                if (input_total_cost_buy.val() === '0')
                    input_total_cost_buy.val('');
                if ($('#main input:eq(0)').val() === '0')
                    $('#main input:eq(0)').val('');
                $('#infotext').html(numberWithCommas($('#infotext').html()));
            });

            $(input_total_cost_buy).on('keyup', function () {
                if (parseInt(input_total_cost_buy.val()) > parseInt(sell[document.buy.from.selectedIndex][2]))
                    input_total_cost_buy.val(sell[document.buy.from.selectedIndex][2]);
                if (parseInt(input_total_cost_buy.val()) > parseInt(g_gold))
                    input_total_cost_buy.val(g_gold);
                $('#main input:eq(0)').val(Math.round(input_total_cost_buy.val()/parseFloat( sell[document.buy.from.selectedIndex][2]/ sell[document.buy.from.selectedIndex][1] ))); // $('select:eq(0) option:selected').text().replace(/[^0-9.]+/g, '')
                document.buy.marketID.value=sell[document.buy.from.selectedIndex][4];
                if (input_total_cost_buy.val() === '0')
                    input_total_cost_buy.val('');
                if ($('#main input:eq(0)').val() === '0')
                    $('#main input:eq(0)').val('');
                $('#infotext').html(numberWithCommas($('#infotext').html()));
            });

            $('select').change(function () {
                if (parseInt(input_total_cost_buy.val()) > parseInt(g_gold))
                    //input_total_cost_buy.val(g_gold);
                    $('#main input:eq(0)').val(Math.round(parseInt(g_gold)/parseFloat( sell[document.buy.from.selectedIndex][2]/ sell[document.buy.from.selectedIndex][1] )));
                calcCost();
                input_total_cost_buy.val(total_cost_buy.text());
                if (input_total_cost_buy.val() === '0')
                    input_total_cost_buy.val('');
                if ($('#main input:eq(0)').val() === '0')
                    $('#main input:eq(0)').val('');
                $('#infotext').html(numberWithCommas($('#infotext').html()));
            });
            
            //get "price" from dropdown by getting the content between ( and ), and inset it in the "Price:" element when it loads (currently it's empty)
            
            $('#main input:eq(0)').css('float', 'left');
            $('#main input:eq(0)').after('<button class="button" style="float: left" onclick="document.buy.buyAmount.value = Math.min(parseInt(sell[document.buy.from.selectedIndex][1]), Math.round(parseInt(frame.resources.document.getElementById(\'gold\').innerHTML.replace(/[^0-9]+/g,\'\'))/parseFloat( sell[document.buy.from.selectedIndex][2]/ sell[document.buy.from.selectedIndex][1] ))).toString(); document.buy.marketID.value=sell[document.buy.from.selectedIndex][4]; calcCost(); document.getElementById(\'icost\').value = document.getElementById(\'totalCost\').innerHTML; if (document.getElementById(\'icost\').value === \'0\') document.getElementById(\'icost\').value = \'\'; if (document.buy.buyAmount.value === \'0\') document.buy.buyAmount.value = \'\'; ">Max</button>');

        }
    }
    
    //market sell
    if ((url.indexOf('option=sell') !== -1))
    {
          $(document.sell.amount).after('<a class="button" onclick="document.sell.amount.value = frame.resources.document.getElementById(document.sell.vad.value).innerHTML.replace(/[^0-9]+/g,\'\'); calcprice(document.sell.price); if (document.sell.amount.value === \'0\') document.sell.amount.value = \'\'; if (document.sell.price.value === \'0\') document.sell.price.value = \'\'; ">Max</a>');
    }
    

});