$(".dropdown-menu").click(function() {
 
    $(".navbar-collapse").collapse("hide");

});

$(".homeLink").click(function() {

    $(".navbar-collapse").collapse("hide");

});

/*WikipediaViewer*/
$(".searchResult").css("display","none");

document.querySelector("#go").addEventListener("click", function () {
 
 var keyword = document.getElementById("query").value;
 
 if(keyword){
     $.ajax( {
         type: 'GET',
         dataType: 'json',
         url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=10&format=json&callback=?",
         success: function(responseText,statusText,xhr) {
             $(".searchResult").css("display","block");
             $("h1").addClass("addMargin");
             
              if (typeof responseText[1][0] !== "undefined") {
                 $("#title1").html(responseText[1][0]);
                 $("#summary1").html(responseText[2][0]);
                 $("#link1").attr('href',responseText[3][0]);
             } else {
                 $("#searchResult1").css("display","none");
             }
             
             if (typeof responseText[1][1] !== "undefined") {
             document.querySelector("#title2").textContent = responseText[1][1];
             document.querySelector("#summary2").textContent = responseText[2][1];
             $("#link2").attr('href',responseText[3][1]);
             } else {
                 $("#searchResult2").css("display","none");
             }

             if (typeof responseText[1][2] !== "undefined") {
                 document.getElementById("title3").textContent = responseText[1][2];
                 document.getElementById("summary3").textContent = responseText[2][2];
                 $("#link3").attr('href',responseText[3][2]);
             } else {
                 $("#searchResult3").css("display","none");
             }
             
             if (typeof responseText[1][3] !== "undefined") {
                 $("#title4").html(responseText[1][3]);
                 $("#summary4").html(responseText[2][3]);
                 $("#link4").attr('href',responseText[3][3]);
             } else {
                 $("#searchResult4").css("display","none");
             }

              if (typeof responseText[1][4] !== "undefined") {
                 document.querySelector("#title5").textContent = responseText[1][4];
                 document.querySelector("#summary5").textContent = responseText[2][4];
                 $("#link5").attr('href',responseText[3][4]);
             } else {
                 $("#searchResult5").css("display","none");
             }
             
              if (typeof responseText[1][5] !== "undefined") {
                 document.getElementById("title6").textContent = responseText[1][5];
                 document.getElementById("summary6").textContent = responseText[2][5];
                 $("#link6").attr('href',responseText[3][5]);
             } else {
                 $("#searchResult6").css("display","none");
             }
             
             if (typeof responseText[1][6] !== "undefined") {
                 $("#title7").html(responseText[1][6]);
                 $("#summary7").html(responseText[2][6]);
                 $("#link7").attr('href',responseText[3][6]);
             } else {
                 $("#searchResult7").css("display","none");
             }
             
              if (typeof responseText[1][7] !== "undefined") {
                 document.querySelector("#title8").textContent = responseText[1][7];
                 document.querySelector("#summary8").textContent = responseText[2][7];
                 $("#link8").attr('href',responseText[3][7]);
             } else {
                 $("#searchResult8").css("display","none");
             }
             
             if (typeof responseText[1][8] !== "undefined") {
                 document.getElementById("title9").textContent = responseText[1][8];
                 document.getElementById("summary9").textContent = responseText[2][8];
                 $("#link9").attr('href',responseText[3][8]);
             } else {
                 $("#searchResult9").css("display","none");
             }

             if (typeof responseText[1][9] !== "undefined") {
             $("#title10").html(responseText[1][9]);
             $("#summary10").html(responseText[2][9]);
             $("#link10").attr('href',responseText[3][9]);
             } else {
                 $("#lastResult").css("display","none");
             }
         }
     });
 } else {
     alert("Please Enter a word to lookup!")
 }

});