//Defining Function for Button on Click event

$(document).ready(function() {
    $('#button').on('click', function() {

            //Calling user inputs from document

            var amtSale = $("#amtSale").val();
            var amtTender = $("#amtTender").val();

            if (amtSale > amtTender) {
                alert("You still owe money! Please check the amount tendered!");

            } else {

                //Applying appropriate formulas to calculate change
                
                var totalChange = amtTender - amtSale;
                var numDollar = Math.floor(totalChange);
                var remainChange = totalChange - numDollar;
                remainChange =remainChange * 100 //change is now in cents

                var numQuarter = Math.floor(remainChange / 25);
                remainChange = remainChange % 25;
                var numDime = Math.floor(remainChange / 10);
                remainChange = remainChange % 10;
                var numNickel = Math.floor(remainChange / 5);
                remainChange = remainChange % 5;
                var numPenny = Math.round(remainChange);
                
                $('.numDollar').html(numDollar);
                $('.numQuarter').html(numQuarter);
                $('.numDime').html(numDime);
                $('.numNickel').html(numNickel);
                $('.numPenny').html(numPenny);
            }
    })
});
