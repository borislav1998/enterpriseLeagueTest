
import $ from "jquery";
var location;
$.getJSON("https://api.db-ip.com/v2/free/self", function(data) {
  location=data;
  if(location.continentCode == "EU" && location.countryCode == "UK"){
    $("#businessPrice").html("£10.99<span class=\"period\">/month</span>");
    $("#premiumPrice").html("£4.99<span class=\"period\">/month</span>");
  }else if(location.continentCode == "EU"){
    $("#businessPrice").html("€10.99<span class=\"period\">/month</span>");
    $("#premiumPrice").html("€4.99<span class=\"period\">/month</span>");
  }else{
    $("#businessPrice").html("$10.99<span class=\"period\">/month</span>");
    $("#premiumPrice").html("$4.99<span class=\"period\">/month</span>");
  }
});

