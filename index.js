
//Defining Function for Button on Click event

$(document).ready(function(){
	$('#button').on('click', function(){

	//Calling user inputs from document
	var amtSale = $("#amtSale").val();
	var amtTender = $("#amtTender").val();

	//Applying appropriate formulas to calculate change
	var totalChange = amtTender - amtSale;
	var numDollar = Math.floor(totalChange);
	var remainChange = totalChange - numDollar;

	var numQuarter = Math.floor(remainChange/0.25);
	remainChange = remainChange % 0.25;
	var numDime = Math.floor(remainChange / 0.10);
	remainChange = remainChange % 0.10;
	var numNickel = Math.floor(remainChange / 0.05);
	remainChange = remainChange % 0.05;
	var numPenny = Math.floor(remainChange / 0.01);

	//Outputting the change to the document

	$('.numDollar').html(numDollar);
	$('.numQuarter').html(numQuarter);
	$('.numDime').html(numDime);
	$('.numNickel').html(numNickel);
	$('.numPenny').html(numPenny);

	})
});