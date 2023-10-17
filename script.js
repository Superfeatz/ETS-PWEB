$(document).ready(function(){    
    $.ajax({
        url: "http://159.223.51.203/api/bio",
        type: "GET",
        dataType: "json", 
        success: function(data) {
            var name1 = data[0].name;
            var id1 = data[0].id;
            var name2 = data[1].name;
            var id2 = data[1].id;
            var name3 = data[2].name;
            var id3 = data[2].id;
            var name4 = data[3].name;
            var id4 = data[3].id;
            var name5 = data[4].name;
            var id5 = data[4].id;
            var name6 = data[5].name;
            var id6 = data[5].id;
            var name7 = data[6].name;
            var id7 = data[6].id;
            var name8 = data[7].name;
            var id8 = data[7].id;
            var name9 = data[8].name;
            var id9 = data[8].id;
            var name10 = data[9].name;
            var id10 = data[9].id;
            var name11 = data[10].name;
            var id11 = data[10].id;
            
            $("#data-1").text(name1 + " " + id1);
            $("#data-2").text(name2 + " " + id2);
            $("#data-3").text(name3 + " " + id3);
            $("#data-4").text(name4 + " " + id4);
            $("#data-5").text(name5 + " " + id5);
            $("#data-6").text(name6 + " " + id6);
            $("#data-7").text(name7 + " " + id7);
            $("#data-8").text(name8 + " " + id8);
            $("#data-9").text(name9 + " " + id9);
            $("#data-10").text(name10 + " " + id10);
            $("#data-11").text(name11 + " " + id11);
        },
        error: function() {
        
            $("#data-1").text("Couldn't fetch the data. Please try again later.");
            $("#data-2").text("Couldn't fetch the data. Please try again later.");
            $("#data-3").text("Couldn't fetch the data. Please try again later.");
            $("#data-4").text("Couldn't fetch the data. Please try again later.");
            $("#data-5").text("Couldn't fetch the data. Please try again later.");
            $("#data-6").text("Couldn't fetch the data. Please try again later.");
            $("#data-7").text("Couldn't fetch the data. Please try again later.");
            $("#data-8").text("Couldn't fetch the data. Please try again later.");
            $("#data-9").text("Couldn't fetch the data. Please try again later.");
            $("#data-10").text("Couldn't fetch the data. Please try again later.");
            $("#data-11").text("Couldn't fetch the data. Please try again later.");
            
        }
    });
    });
    
