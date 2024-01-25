$(document).ready(function(){
	$('#slide_trend_out').val($('#slide_trend').val());
	$('#slide_trend').mousemove(function() {
		$('#slide_trend_out').val($('#slide_trend').val());
	});

	$('#slide_trend_out').change(function() {
		$('#slide_trend').val($('#slide_trend_out').val());
	});
})

$(document).ready(function(){
	$('#slide_time_out').val($('#slide_time').val());
	$('#slide_time').mousemove(function() {
		$('#slide_time_out').val($('#slide_time').val());
	});

	$('#slide_time_out').change(function() {
		$('#slide_time').val($('#slide_time_out').val());
	});
})

$(document).ready(function(){
	$('#slide_budget_out').val($('#slide_budget').val());
	$('#slide_budget').mousemove(function() {
		$('#slide_budget_out').val($('#slide_budget').val());
	});

	$('#slide_budget_out').change(function() {
		$('#slide_budget').val($('#slide_budget_out').val());
	});
})
