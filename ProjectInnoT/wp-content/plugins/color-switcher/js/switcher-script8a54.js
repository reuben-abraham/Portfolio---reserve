;(function($){
    "use strict";

    $(document).ready(function () {

        /*********
         Switcher Panel
         **********/
        if ($(".color_switcher_zone").length > 0) {
            //switcher
            var switchs = true;
            $(".settingBtn").on("click", function (e) {
                e.preventDefault();
                if (switchs) {
                    $(this).addClass("active");
                    $(".color_switcher_zone").animate({"right": "0px"}, 400);
                    switchs = false;
                } else {
                    $(this).removeClass("active");
                    $(".color_switcher_zone").animate({"right": "-366px"}, 400);
                    switchs = true;
                }
            });
            if ($("#grad_actionColors a").length > 0) {
                $("#grad_actionColors a").on("click", function (e) {
                    e.preventDefault();
                    var color = $(this).attr("href");
                    $("#grad_actionColors a").removeClass("active");
                    $(this).addClass("active");
                });
            }
        }
        /*********
         Switcher Panel ToolTip
         **********/
        $(function () {
            $('#age,#age1,#age2').tooltip({
                position: {
                    my: "right-30 top",
                    at: "center top",
                    using: function (position, feedback) {
                        $(this).css(position);
                        $("<div>")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                    }
                }
            });
        });


        $('input:radio[name=accent_color]').on('change', function() {
            let color = '#'+$(this).attr('value');
            if( color == '#53bced' ) {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo-2.png');
            }
            else if( color == '#02bb73' ) {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo-3.png');
            }
            else if( color == '#3E31AE' ) {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo-4.png');
            }
            else if( color == '#DC3737' ) {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo-5.png');
            }
            else if( color == '#F97C46' ) {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo-6.png');
            } else {
                $('.navbar-brand img').attr('src', 'http://droitthemes.com/wp/mak/logo/logo.png');
            }
        });

        /*********
         change color bar
         **********/


        $('input:radio[name=accent_color]').change(function() {

            let color = '#'+$(this).attr('value');
            $('style').removeAttr('id', 'dynamic_colors_test');
            $('head').append(
                "<style id='dynamic_colors_test'>" +
                    ".mak_navbar_header .navbar-collapse ul.nav li.active a, \n .mak_navbar_header .navbar-collapse ul.nav li a:hover \n, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn:hover \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover \n, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-dec38d1 .hire_wrap .btn_glob.hair_btn, .contact_wrap .contact-form .submit_btn:hover, .footer-bottom a, .footer-bottom a:hover, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn:hover, .bg_dark .mak_navbar_header.affix .navbar-collapse ul.nav li.active a, .mak_navbar_header .navbar-collapse ul.nav li.active > a, .mak_navbar_header .navbar-collapse ul.nav li a:hover, .bg_dark .mak_navbar_header.affix .navbar-collapse ul.nav li a:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li.active, .expertise-media .media-left span, .blog_wrap .text .catagory, .bg_dark.header_dark_color .mak_navbar_header .navbar-collapse ul.nav li.active a, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover .icon, .available_for_freelanching .contactMe .btnContact, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap .ex-content h5, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .bg_dark.header_dark_color .mak_navbar_header .navbar-collapse ul.nav li a:hover, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .progress-element .skill-info .skill-val, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover .icon, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap h4.title:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap .ex-content h5, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active {"
                + "color:" + color + ";" +
                "}" +

                "#slide-3-layer-15, #slide-4-layer-15, #slide-5-layer-15 {"
                    + "color:" + color + " !important;" +
                "}"

                +
                ".mak_navbar_header .navbar-collapse ul.nav li a::before \n, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .service_wrap .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .experience_single_item:hover .experience_item, .page-template-template-full-width .elementor-element.elementor-element-f8842af, .sec_title:before, .contact_wrap .contact-form .submit_btn, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .service_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, tp-caption rev-btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .cus_expertise .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-a188d02 .blog_wrap .sec_title:before, .blog_wrap .text .catagory:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .cus_expertise .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-a188d02 .blog_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:before, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .bt-skill .bt-skillholder .bt-skillbar, .sec-title3 h2:before, .sec-title3 h2:after, .sec-title3 h2.under_line:after, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:before, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:after, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover {"
                + "background-color:" + color + ";" +
                "}" +


                ".btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .cus_filter .filter_menu li.active, .contact_wrap .contact-form .submit_btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .working_single_item:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before {"
                + "border-color:" + color + ";" +
                "}" +

                ".filter_item:hover .hover_content, .banner_content.content_right_text::before, .header_contact_icon, .header_contact_icon:hover, .header_contact_icon:focus, .header_contact_icon:active, .tp-caption.rev-btn, .about_wrap .about_content .portfolioLink .portfolio, .bt-skill .bt-skillholder .bt-skillbar, .about_wrap .about_img_content:before, .available_for_freelanching .overlay, .ex-content:after {"
                + "background-image: linear-gradient( 40deg, " + color + " 0%, " + color + " 100%)" + " !important;" +
                "}" +

                ".ex-content:after {"
                + "box-shadow: 0px 5px 10px 0px" + color + ";" +
                "}" +
                "</style>"
            );
        });


        $('input[name=accent_color_custom]').change(function() {
            let color = ''+$(this).attr('value');

            $('style').removeAttr('id', 'dynamic_colors_test');
            $('head').append(
                "<style id='dynamic_colors_test'>" +
                    ".mak_navbar_header .navbar-collapse ul.nav li.active a, \n .mak_navbar_header .navbar-collapse ul.nav li a:hover \n, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn:hover \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover \n, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-dec38d1 .hire_wrap .btn_glob.hair_btn, .contact_wrap .contact-form .submit_btn:hover, .footer-bottom a, .footer-bottom a:hover, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn:hover, .bg_dark .mak_navbar_header.affix .navbar-collapse ul.nav li.active a, .mak_navbar_header .navbar-collapse ul.nav li.active > a, .mak_navbar_header .navbar-collapse ul.nav li a:hover, .bg_dark .mak_navbar_header.affix .navbar-collapse ul.nav li a:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li.active, .expertise-media .media-left span, .blog_wrap .text .catagory, .bg_dark.header_dark_color .mak_navbar_header .navbar-collapse ul.nav li.active a, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow:hover, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .filter_menu li.active, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover .icon, .available_for_freelanching .contactMe .btnContact, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap .ex-content h5, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active, .bg_dark.header_dark_color .mak_navbar_header .navbar-collapse ul.nav li a:hover, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .progress-element .skill-info .skill-val, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover .icon, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap h4.title:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .exp_wrap .ex-content h5, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .filter_menu li.active {"
                + "color:" + color + ";" +
                "}" +

                "#slide-3-layer-15, #slide-4-layer-15, #slide-5-layer-15 {"
                    + "color:" + color + " !important;" +
                "}"

                +
                ".mak_navbar_header .navbar-collapse ul.nav li a::before \n, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .service_wrap .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before \n, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .experience_single_item:hover .experience_item, .page-template-template-full-width .elementor-element.elementor-element-f8842af, .sec_title:before, .contact_wrap .contact-form .submit_btn, .page-template-template-full-width .elementor-element.elementor-element-38903b2 .mak_hero_wrap .hair_btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .service_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, tp-caption rev-btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .cus_expertise .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-a188d02 .blog_wrap .sec_title:before, .blog_wrap .text .catagory:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_img_shap_inner .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download:hover, .page-template-template-full-width .elementor-element.elementor-element-3ede0ea .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-86baf52 .cus_expertise .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-04fdf4d .experience_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-a188d02 .blog_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:before, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .bt-skill .bt-skillholder .bt-skillbar, .sec-title3 h2:before, .sec-title3 h2:after, .sec-title3 h2.under_line:after, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:before, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_wrap .sec-title3.sec-left h2:after, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:before, .page-template-template-full-width .elementor-element.elementor-element-736f5aa .skill_wrap .sec-title3 h2:after, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover {"
                + "background-color:" + color + ";" +
                "}" +


                ".btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow \n, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .cus_filter .filter_menu li.active, .contact_wrap .contact-form .submit_btn, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_yellow, .page-template-template-full-width .elementor-element.elementor-element-d599c45 .about_content .btn_glob.btn_download, .working_single_item:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume, .page-template-template-full-width .elementor-element.elementor-element-7aa3401 .working_single_item:hover, .page-template-template-full-width .elementor-element.elementor-element-fe57746 .experience-two-area .downloadResume:hover, .page-template-template-full-width .elementor-element.elementor-element-232573e .latest_work_wrap .sec_title:before {"
                + "border-color:" + color + ";" +
                "}" +

                ".filter_item:hover .hover_content, .banner_content.content_right_text::before, .header_contact_icon, .header_contact_icon:hover, .header_contact_icon:focus, .header_contact_icon:active, .tp-caption.rev-btn, .about_wrap .about_content .portfolioLink .portfolio, .bt-skill .bt-skillholder .bt-skillbar, .about_wrap .about_img_content:before, .available_for_freelanching .overlay, .ex-content:after {"
                + "background-image: linear-gradient( 40deg, " + color + " 0%, " + color + " 100%)" + " !important;" +
                "}" +

                ".ex-content:after {"
                + "box-shadow: 0px 5px 10px 0px" + color + ";" +
                "}" +
                "</style>"
            );
        });



    });

})(jQuery);