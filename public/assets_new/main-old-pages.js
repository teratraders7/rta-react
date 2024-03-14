 $(document).ready(function(e) { 
        $("a.extUrl").click(function(e) {
            e.preventDefault();  
            var lnk = $(this).attr("href");
            //$.colorbox({ inline:true, closeButton:false, href:"#pageRedirect"});
            
//             $("#pageRedirect").colorbox({width:"70%", height:"250",
//            href: function() {
//                return "#pageRedirect";
//            }, preloading:false, iframe:true, overlayClose:false, open:true});
            
            //setTimeout(function() { window.location.href = lnk; }, 2000);
            window.location.href = lnk;
	});  
	  
	//$.colorbox({ inline:true, width:"100%", height:"100%", maxWidth:"500", maxHeight:"220", closeButton:false, href:"#nafethathi"});
	
//	if ($.cookie('blindMode') == 1) {
//		$(".view").addClass("active");
//		var cssLink = $("<link rel='stylesheet' type='text/css' href='/<%=request.getContextPath()%>/assets_ar/css/blind.css'>");
//		$("head").append(cssLink); 
//	}
	if ($.cookie('speechMode') == 1) {
		$(".speech").addClass("active");
		$("#readspeaker_button1").show(); 
	}

	
	
//	$(".view").click(function(){
//		if ($(this).hasClass("active")) {
//			$.cookie('blindMode', '0', { expires: 1 });
//			$('link[rel=stylesheet][href~="/<%=request.getContextPath()%>/assets_ar/css/blind.css"]').remove();
//			$(this).removeClass("active");
//		} else {
//			$.cookie('blindMode', '1', { expires: 1 });
//			$(this).addClass("active"); 
//			var cssLink = $("<link rel='stylesheet' type='text/css' href='/<%=request.getContextPath()%>/assets_ar/css/blind.css'>");
//			$("head").append(cssLink);
//		}
//	});
	$(".speech").click(function(){
		if ($(this).hasClass("active")) { 
			$.cookie('speechMode', '0', { expires: 1 });
			$(this).removeClass("active");
			$("#readspeaker_button1").hide(); 
		} else { 
		    $.cookie('speechMode', '1', { expires: 1 });
			$(this).addClass("active"); 
			$("#readspeaker_button1").show(); 
		}
	});
	
	$('a.suggestion[href*=#]').bind("click", function(e){ 
		var anchor = $(this);
			if (anchor!=null) {
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 120
			}, 1000); 
			e.preventDefault();
		}
		 
	}); 
	
	resizeHeight();
	
	var vis = 5;
	$('.search-result li').slice(vis).hide();
	var $more = $('.load-more');
	$more.click(function(){
		vis = 10;
		$('.search-result li:hidden').slice(0, vis).fadeToggle(500);
		if($('.search-result li:hidden').length == 0)
			$more.hide();
	});
	
	$(".second-menu a").click(function() { 
		$(this).parent().siblings().find('.third-menu').hide();
		$(".second-menu a").removeClass('down-arrow');
		$(this).addClass('down-arrow');
		$('.third-menu').hide();
		$me = $(this);
		$third = $me.parent().find(".third-menu");
		$third.fadeIn(500);
	});


//         $(".second-menu a").click(function() {
//             $me = $(this);
//             $third = $me.parent().find(".third-menu");
//             $third.fadeToggle(500); 
//         });

	$(".third-menu .back").click(function() {  
		console.log("back");
		$third = $("#main_nav_part .third-menu");//$me.parent().parent().parent().find(".third-menu");
		$third.fadeOut(500);
	}); 
	$("#main_nav_part").mouseleave(function() {
	  $third = $("#main_nav_part .third-menu").fadeOut(500);
	});
console.log($("#left_section").css("margin-left"));
	$('#show_login, .top-bar').click(function() {
		$me = $("#left_section");
		console.log($me.css("margin-left"));
		if ($me.css("margin-left") == "0px") 
			$me.animate({"margin-left": '-=257'});   
		else 
			$me.animate({"margin-left": '+=257'}); 
		$("#left_section").toggleClass("active");
    }); 
	
	$(".main-page").click(function(e) {
		if(document.activeElement.tagName !== 'BUTTON'){
			if ($("#left_section").hasClass("active")) 
				$("#show_login").trigger("click");
			if (document.activeElement.className != "search-autosuggest" && document.activeElement.tagName !== 'INPUT')
				if ($("#search_part .search-autosuggest").is(":visible")) 
					$(".sugclose").trigger("click");
		}
		if (document.activeElement.id != "servicesKWSuggestions" && document.activeElement.tagName !== 'INPUT') {
			$("#servicesKWSuggestions").hide();
		}
	});
	
	$("#btnLoginConfirm, #btnLoginConfirmCR").click(function(e) { 
		console.log(e.target.value);
		$("#show_login").trigger("click"); 
		e.preventDefault();
	});

	$(".reset-font").click(function(){
		$me = $(this);
		if ($me.hasClass("medium-font")) {
			$me.removeClass("medium-font");
			$me.addClass("large-font");
			$me.attr("data-font", "medium");
		} else if ($me.hasClass("large-font")) {
			$me.removeClass("large-font");
			$me.addClass("normal-font");
			$me.attr("data-font", "large");
		} else if ($me.hasClass("normal-font")) {
			$me.removeClass("normal-font");
			$me.addClass("medium-font");
			$me.attr("data-font", "normal");
		} 
		$("body").removeClass().addClass($(this).attr("data-font"));
                $("body").addClass("container");
	}); 
	
	$("#btnSurveyNo").click(function(){
		  $("#searchSurvey" ).slideUp("slow");
		  //var panelH = $('#frmRegisterIndividual').innerHeight();
		  $("#searchSurveyNo").fadeToggle("slow");
  
	});
	$("#btnSurveyYes").click(function(){
		  $("#searchSurvey" ).slideUp("fast");
		  //var panelH = $('#frmRegisterIndividual').innerHeight();
		  $("#searchSurveyThankYouYes").fadeToggle("slow");
  
	});
	$("#btnSurveyNoSend").click(function(){
		  $("#searchSurveyNo" ).slideUp("fast");
		  //var panelH = $('#frmRegisterIndividual').innerHeight();
		  $("#searchSurveyThankYouNo").fadeToggle("slow");
  
	});
	$("#btnServicesSend").click(function(){
		  $("#servicesSurvey" ).slideUp("fast");
		  //var panelH = $('#frmRegisterIndividual').innerHeight();
		  $("#servicesSurveyThanks").fadeToggle("slow");
  
	});
	$('#formServicesSurvey input, #formServicesSurvey textarea').change(function() { 
		$("#btnServiceReset").show();
	});
	$('#btnServiceReset').click(function() { 
		$("#formServicesSurvey")[0].reset(); 
		$("input").removeClass("error"); 
		$(this).hide();
    });
	$(".sclose, .close").click(function(){
		$("#searchSurvey").slideUp(1000);
		$("#searchSurveyNo").slideUp(1000);
		$("#searchSurveyThankYouYes").slideUp(1000);
		$("#searchSurveyThankYouNo").slideUp(1000);
		$("#servicesSurvey").slideUp(1000);
		$("#servicesSurveyThanks").slideUp(1000);
		
	});
	$(".inline").colorbox({
		inline:true,
		scrolling:false
	});
	//$(".suggestions a").on("click", function() { 
	
	
	$('#rtaApps').carousel({
		interval: 4000
	});
$('#slider_news').carousel({
		interval: 10000
	});
// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#rtaApps').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#rtaApps').bind('slide.bs.carousel', function (e) {
  var id = $('#rtaApps .active').data('slide-number');
  id = parseInt(id)+1; 
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});
	
});

function resizeHeight(){
	$("#left_section").css("height",$("html").height() + "px");
}

$(document).scroll(function (){
	var menuheight= $('header').height();
	var y = $(this).scrollTop(); 
	if (y > (menuheight)) 
		$('.main_nav_part_bg').addClass('sticky'); 
	else 
		$('.main_nav_part_bg').removeClass('sticky'); 
});  
$("#nav-open-btn").click(function() {
	$(".main_nav_bar").toggle("slow"); 
});