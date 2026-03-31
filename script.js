/* Go from welcome page to login page */
function goLogin(){
window.location.href = "login.html";
}

/* After login go to choose page */
function login(){
window.location.href = "choose.html";
}

/* Go to signup page */
function goSignup(){
window.location.href = "signup.html";
}

/* Choose donate or buy */
function selectAction(action){
localStorage.setItem("action", action);
window.location.href = "waste.html";
}

/* Select waste type */
function selectWaste(waste){
localStorage.setItem("waste", waste);
window.location.href = "quantity.html";
}

/* Confirm quantity and go to success page */
function confirm(){
window.location.href = "success.html";
}


/* State → Capital city dropdown */
function updateCity(){

const capitals = {

"Andhra Pradesh":"Amaravati",
"Arunachal Pradesh":"Itanagar",
"Assam":"Dispur",
"Bihar":"Patna",
"Chhattisgarh":"Raipur",
"Goa":"Panaji",
"Gujarat":"Gandhinagar",
"Haryana":"Chandigarh",
"Himachal Pradesh":"Shimla",
"Jharkhand":"Ranchi",
"Karnataka":"Bengaluru",
"Kerala":"Thiruvananthapuram",
"Madhya Pradesh":"Bhopal",
"Maharashtra":"Mumbai",
"Manipur":"Imphal",
"Meghalaya":"Shillong",
"Mizoram":"Aizawl",
"Nagaland":"Kohima",
"Odisha":"Bhubaneswar",
"Punjab":"Chandigarh",
"Rajasthan":"Jaipur",
"Sikkim":"Gangtok",
"Tamil Nadu":"Chennai",
"Telangana":"Hyderabad",
"Tripura":"Agartala",
"Uttar Pradesh":"Lucknow",
"Uttarakhand":"Dehradun",
"West Bengal":"Kolkata"

};

const state = document.getElementById("state").value;
const cityDropdown = document.getElementById("city");

cityDropdown.innerHTML = "";

if(capitals[state]){
const option = document.createElement("option");
option.text = capitals[state];
cityDropdown.add(option);
}

}
function logout() {
  // Clear stored user data
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  });

  document.getElementById("cancelBtn").addEventListener("click", function () {
    window.history.back();
  });

});

function showWaste(type, btn){

const data = {
paper: {
img: "images/paper.png",
text: "♻️ Paper<br><br>\
• Waste paper is collected and sorted based on quality<br>\
• It is shredded and mixed with water to form pulp<br>\
• Ink and dirt are removed through cleaning processes<br>\
• The pulp is pressed and dried into new paper sheets<br>\
• Recycled paper is used to make newspapers and notebooks<br>\
• It is also used for cardboard boxes and packaging materials"
  
},
tin: {
img: "images/tin.png",
text: "🥫 Tin (Metal)<br><br>\
• Metal waste is collected and separated using magnets<br>\
• It is cleaned to remove impurities and coatings<br>\
• The metal is melted at very high temperatures<br>\
• Melted metal is poured into molds to form new shapes<br>\
• Recycled tin is used to make new cans and containers<br>\
• It is also used in construction materials and machinery parts"
},
glass: {
img: "images/glass.png",
text: "🍾 Glass<br><br>\
• Glass is collected and sorted by color<br>\
• It is crushed into small pieces called cullet<br>\
• The cullet is melted in a furnace<br>\
• Melted glass is molded into new products<br>\
• Recycled glass is used to make bottles and jars<br>\
• It is also used for tiles, decorations, and fiberglass"
},
plastic: {
img: "images/plastic.png",
text: "🧴 Plastic<br><br>\
• Plastic waste is sorted by type and cleaned<br>\
• It is shredded into small flakes or pieces<br>\
• The plastic is melted and converted into pellets<br>\
• These pellets are used to manufacture new items<br>\
• Recycled plastic is used for bottles and containers<br>\
• It is also used to make clothing fibers and furniture"
},
wet: {
img: "images/wetwaste.png",
text: "🌱 Wet Waste (Organic Waste)<br><br>\
• Food and organic waste is collected separately<br>\
• It is decomposed naturally through composting<br>\
• Microorganisms break it down into nutrient-rich compost<br>\
• It can also be processed in biogas plants<br>\
• Biogas produced is used for cooking and electricity<br>\
• The leftover material becomes organic fertilizer"
  
}
};

document.getElementById("wasteImage").src = data[type].img;
document.getElementById("wasteText").innerHTML = data[type].text;

// active button
document.querySelectorAll(".navbar button").forEach(b => b.classList.remove("active"));
btn.classList.add("active");
}
