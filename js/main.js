$(document).ready(function() {

// IMAGE HOVER EFFECTS START

        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });

 // IMAGE HOVER EFFECTS END

// SKILLS CHARTS START
var executed;

  $(window).scroll(function() {
     var hT = $('#skills').offset().top,
         wS = $(this).scrollTop();


    // Execute a little before reaching #skills
     if (wS > (hT - 5) && !executed){

       	// Web Design Chart
        	var webdesignChart = $("#webdesignChart").get(0).getContext("2d");

        	var data = [
        		{
        			value: 270,
        			color: "#f1c40f",
        		},
        			{
        				value: 90,
        				color: "#b2afac",
        			}
        	];

        	var options = {
          //Boolean - Whether we should show a stroke on each segment
          // set to false to hide the space/line between segments
          segmentShowStroke: false,
          showTooltips: false
        	};

        	var webdesignChart = new Chart(webdesignChart).Doughnut(data, options)



        	// HTML Chart
         	var htmlChart = $("#htmlChart").get(0).getContext("2d");

         	var data = [
         		{
         			value: 342,
         			color: "#e67e22",
         		},
         			{
         				value: 18,
         				color: "#b2afac",
         			}
         	];

         	var options = {
           //Boolean - Whether we should show a stroke on each segment
           // set to false to hide the space/line between segments
           segmentShowStroke: false,
           showTooltips: false
         	};


         	var htmlChart = new Chart(htmlChart).Doughnut(data, options)

        	// CSS Chart
         	var cssChart = $("#cssChart").get(0).getContext("2d");

         	var data = [
         		{
         			value: 342,
         			color: "#e74c3c",
         		},
         			{
         				value: 18,
         				color: "#b2afac",
         			}
         	];

         	var options = {
           //Boolean - Whether we should show a stroke on each segment
           // set to false to hide the space/line between segments
           segmentShowStroke: false,
           showTooltips: false
         	};


         	var cssChart = new Chart(cssChart).Doughnut(data, options)

        	// Javascript Chart
         	var javascriptChart = $("#javascriptChart").get(0).getContext("2d");

         	var data = [
         		{
         			value: 306,
         			color: "#1abc9c",
         		},
         			{
         				value: 54,
         				color: "#b2afac",
         			}
         	];

         	var options = {
           //Boolean - Whether we should show a stroke on each segment
           // set to false to hide the space/line between segments
           segmentShowStroke: false,
           showTooltips: false
         	};


         	var javascriptChart = new Chart(javascriptChart).Doughnut(data, options)

        	// jQuery Chart
         	var jqueryChart = $("#jqueryChart").get(0).getContext("2d");

         	var data = [
         		{
         			value: 252,
         			color: "#3498db",
         		},
         			{
         				value: 108,
         				color: "#b2afac",
         			}
         	];

         	var options = {
           //Boolean - Whether we should show a stroke on each segment
           // set to false to hide the space/line between segments
           segmentShowStroke: false,
           showTooltips: false
         	};


         	var jqueryChart = new Chart(jqueryChart).Doughnut(data, options)

        	// Ruby Chart
         	var rubyChart = $("#rubyChart").get(0).getContext("2d");

         	var data = [
         		{
         			value: 270,
         			color: "#9b59b6",
         		},
         			{
         				value: 90,
         				color: "#b2afac",
         			}
         	];

         	var options = {
           //Boolean - Whether we should show a stroke on each segment
           // set to false to hide the space/line between segments
           segmentShowStroke: false,
           showTooltips: false
         	};


         	var rubyChart = new Chart(rubyChart).Doughnut(data, options)

          executed = true;
     }
  });

// SKILLS CHARTS END


});


// NAVBAR a href START

smoothScroll.init({
	speed: 500,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset: 0
});
