/*************ALL VARIABLES HERE*****************/
var dateId = document.getElementById("dateId");
var changeDate = new Date();
var bodyDiv = document.getElementById("bodyDiv");
var contactDiv = document.getElementById("contactDiv");
var homeBtn = document.getElementById("homeBtn");
var noSpam = document.getElementById("noSpam");
var contactBtn = document.getElementById("contactBtn");
var contactCloseBtn = document.getElementById("contactCloseBtn");
var aboutDiv = document.getElementById("aboutDiv");
var aboutBtn = document.getElementById("aboutBtn");
var aboutCloseBtn = document.getElementById("aboutCloseBtn");
var backTop = document.getElementById("backTop");
var social = document.getElementById("social");
var constructDiv = document.getElementById("constructDiv"); //MUST modify or change later





//Update Date
dateId.innerHTML = changeDate.getDate()+"-"+changeDate.getMonth()+"-"+changeDate.getFullYear();


//Page Loaded
homeBtn.click();





/********ALL FUNCTIONS HERE****************/



/***************************************************/
// Home Page ,  Contact Page , About Page Function
function pageFunc(whichPage)
{
	switch(whichPage){
		case 'home':
			homeBtn.style.color="yellow";
			homeBtn.style.backgroundColor = "black";
			homeBtn.style.border="solid 7px black";
			contactBtn.style.color="black";
			contactBtn.style.backgroundColor = "transparent";
			contactBtn.style.border="solid 0px transparent";
			aboutBtn.style.color="black";
			aboutBtn.style.backgroundColor = "transparent";
			aboutBtn.style.border="solid 0px transparent";
			bodyDiv.scrollTop = 0;
			console.log('pressed');
			break;
		case 'contact':
			noSpam.style.display="block";
			contactBtn.style.color="yellow";
			contactBtn.style.backgroundColor = "black";
			contactBtn.style.border="solid 7px black";
			homeBtn.style.color="black";
			homeBtn.style.backgroundColor = "transparent";
			homeBtn.style.border="solid 0px transparent";
			aboutBtn.style.color="black";
			aboutBtn.style.backgroundColor = "transparent";
			aboutBtn.style.border="solid 0px transparent";
			contactDiv.style.width = "100%";
			setTimeout(closeContactTimer,1010);
			break;
		case 'about':
			noSpam.style.display="block";
			aboutBtn.style.color="yellow";
			aboutBtn.style.backgroundColor = "black";
			aboutBtn.style.border="solid 7px black";
			homeBtn.style.color="black";
			homeBtn.style.backgroundColor = "transparent";
			homeBtn.style.border="solid 0px transparent";
			contactBtn.style.color="black";
			contactBtn.style.backgroundColor = "transparent";
			contactBtn.style.border="solid 0px transparent";
			aboutDiv.style.width="100%";
			setTimeout(closeAboutTimer, 1010);
			break;
	}
}


//Close About Button Timer
function closeAboutTimer()
{
	aboutCloseBtn.style.display="block";
	constructDiv.style.display="block";
}


// CLose Contact Button Timer
function closeContactTimer()
{
	contactCloseBtn.style.display="block";
	social.style.display="block";
}

/******************************************************/



/******************************************/
// Close Contact View
function contactCloseFunction()
{
	noSpam.style.display="none";
	social.style.display="none";
	contactCloseBtn.style.display="none";
	contactDiv.style.width="0%";
	homeBtn.style.color="yellow";
	homeBtn.style.backgroundColor = "black";
	homeBtn.style.border="solid 7px black";
	contactBtn.style.color="black";
	contactBtn.style.backgroundColor = "transparent";
	contactBtn.style.border="solid 0px transparent";
}

//Close About View
function aboutCloseFunction()
{
	noSpam.style.display="none";
	aboutCloseBtn.style.display="none";
	constructDiv.style.display="none";
	aboutDiv.style.width="0%";
	homeBtn.style.color="yellow";
	homeBtn.style.backgroundColor = "black";
	homeBtn.style.border="solid 7px black";
	aboutBtn.style.color="black";
	aboutBtn.style.backgroundColor = "transparent";
	aboutBtn.style.border="solid 0px transparent";
}


/*****************************************/


backTopPress = "no";

// Main Body Scroll
function scrollFunc()
{
	if(bodyDiv.scrollTop>50){
		homeBtn.style.color="black";
		homeBtn.style.backgroundColor = "transparent";
		homeBtn.style.border="solid 0px transparent";
		contactBtn.style.color="black";
		contactBtn.style.backgroundColor = "transparent";
		contactBtn.style.border="solid 0px transparent";
		aboutBtn.style.color="black";
		aboutBtn.style.backgroundColor = "transparent";
		aboutBtn.style.border="solid 0px transparent";
		if(backTopPress=="no"){
			backTop.style.display = "block";
		}
	}
	else{
		homeBtn.style.color="yellow";
		homeBtn.style.backgroundColor = "black";
		homeBtn.style.border="solid 7px black";
		contactBtn.style.color="black";
		contactBtn.style.backgroundColor = "transparent";
		contactBtn.style.border="solid 0px transparent";
		aboutBtn.style.color="black";
		aboutBtn.style.backgroundColor = "transparent";
		aboutBtn.style.border="solid 0px transparent";
		backTop.style.display="none";
		backTopPress = "no";
	}
}


//Back To Top Function
function backTopFunc()
{
	backTopPress="yes";
	backTop.style.display="none";
	bodyDiv.scrollTop=0;
}