const cursorCreate = document.createElement('div');
cursorCreate.classList.add('cursor');
document.querySelector('body').appendChild(cursorCreate);

const cursor = document.querySelector('.cursor');
const cursorClick = document.getElementsByClassName('cursorClickE');
const cursorDropdown = document.getElementsByClassName('dropdown');
const cursorWip = document.getElementsByClassName('textWip');

const cursorA = document.getElementsByTagName('a');
const cursorButton = document.getElementsByTagName('button');
const cursorCode = document.getElementsByTagName('code');
const cursorInput = document.getElementsByTagName('input');
const cursorOption = document.getElementsByTagName('option');
const cursorTextarea = document.getElementsByTagName('textarea');

const cursorListClick = [
	cursorClick,
	cursorDropdown,
	cursorA,
	cursorButton,
	cursorOption
];
const cursorListTyping = [
	cursorInput,
	cursorTextarea
];

document.addEventListener('mousemove', (e) => {
	var x = e.clientX;
	var y = e.clientY;
	
	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
	cursor.classList.remove('cursorOut');
});
document.addEventListener('mouseout', () => {
	cursor.classList.add('cursorOut');
});

for(let cursorI of cursorListClick) {
	for(let i = 0; i < cursorI.length; i++) {
		cursorI[i].addEventListener('mouseenter', addClick);
		cursorI[i].addEventListener('mouseleave', removeClick);
	};
};
for(let cursorI of cursorListTyping) {
	for(let i = 0; i < cursorI.length; i++) {
		cursorI[i].addEventListener('mouseenter', addTyping);
		cursorI[i].addEventListener('mouseleave', removeTyping);
	};
};
for(let i = 0; i < cursorCode.length; i++) {
	cursorCode[i].addEventListener('mouseenter', addCopy);
	cursorCode[i].addEventListener('mouseleave', removeCopy);
};
for(let i = 0; i < cursorWip.length; i++) {
	cursorWip[i].addEventListener('mouseenter', addWip);
	cursorWip[i].addEventListener('mouseleave', removeWip);
}

function addClick() {
	cursor.classList.add('cursorClick');
}
function removeClick() {
	cursor.classList.remove('cursorClick');
}
function addTyping() {
	cursor.classList.add('cursorTyping');
}
function removeTyping() {
	cursor.classList.remove('cursorTyping');
}
function addCopy() {
	cursor.classList.add('cursorCopy');
}
function removeCopy() {
	cursor.classList.remove('cursorCopy');
}
function addWip() {
	cursor.classList.add('cursorWip');
}
function removeWip() {
	cursor.classList.remove('cursorWip');
}

// const cursorLogoWiki = document.querySelector(".logoWiki");
// const cursorSearchIcon = document.querySelector(".searchIcon");
// const cursorSearchBox = document.querySelector(".searchBox");
// const cursorGoTop = document.querySelector(".goTop");
// const cursorResult = document.querySelector(".result");

// const cursorSidebarIcon = document.getElementsByClassName("sidebarIcon");
// const cursorThemeIcon = document.getElementsByClassName("themeIcon");
// const cursorCmd = document.getElementsByClassName("textCommand");
// const cursorSyntax = document.getElementsByClassName("textSyntax");
// const cursorNote = document.getElementsByClassName("textNote");
// const cursorSocialLogo = document.getElementsByClassName("socialLogo");

// const cursorColor = document.getElementById("color");
// const cursorGlyph = document.getElementsByClassName("cursorTd");

// cursorLogoWiki.addEventListener('mouseenter', addClick)
// cursorLogoWiki.addEventListener('mouseleave', removeClick)

// cursorSearchIcon.addEventListener('mouseenter', addClick)
// cursorSearchIcon.addEventListener('mouseleave', removeClick)

// cursorSearchBox.addEventListener('mouseenter', addClick)
// cursorSearchBox.addEventListener('mouseleave', removeClick)

// cursorGoTop.addEventListener('mouseenter', addClick)
// cursorGoTop.addEventListener('mouseleave', removeClick)

// if(cursorResult != null) {
// 	cursorResult.addEventListener('mouseenter', addCopy)
// 	cursorResult.addEventListener('mouseleave', removeCopy)
// }

// for (i = 0; i < cursorSidebarIcon.length; i++) {
// 	cursorSidebarIcon[i].addEventListener("mouseenter", addClick);
// 	cursorSidebarIcon[i].addEventListener("mouseleave", removeClick);
// }

// for (i = 0; i < cursorThemeIcon.length; i++) {
// 	cursorThemeIcon[i].addEventListener("mouseenter", addClick);
// 	cursorThemeIcon[i].addEventListener("mouseleave", removeClick);
// }

// for (i = 0; i < cursorCmd.length; i++) {
// 	cursorCmd[i].addEventListener("mouseenter", addCopy);
// 	cursorCmd[i].addEventListener("mouseleave", removeCopy);
// }

// for (i = 0; i < cursorSyntax.length; i++) {
// 	cursorSyntax[i].addEventListener("mouseenter", addCopy);
// 	cursorSyntax[i].addEventListener("mouseleave", removeCopy);
// }

// for (i = 0; i < cursorNote.length; i++) {
// 	cursorNote[i].addEventListener("mouseenter", addZoom);
// 	cursorNote[i].addEventListener("mouseleave", removeZoom);
// }

// for (i = 0; i < cursorExpand.length; i++) {
// 	cursorExpand[i].addEventListener("mouseenter", addExpand);
// 	cursorExpand[i].addEventListener("mouseleave", removeExpand);
// 	// cursorExpand[i].addEventListener("click", createCollapse);
// 	// cursorExpand[i].addEventListener("click", eventExpand);
// }
// function addExpand() {
// 	cursor.classList.add("cursorExpand");
// }
// function removeExpand() {
// 	cursor.classList.remove("cursorExpand");
// }
// // function eventExpand() {
// // 	addCollapse();
// // 	removeExpand();
// // }
// // function createCollapse() {
// // 	var cursorCollapse = document.getElementsByClassName("dropdownActive");
// // 	for (i = 0; i < cursorCollapse.length; i++) {
// // 		cursorCollapse[i].addEventListener("mouseenter", addCollapse);
// // 		cursorCollapse[i].addEventListener("mouseleave", removeCollapse);
// // 		cursorCollapse[i].addEventListener("click", eventCollapse);
// // 	}
// // }
// // function addCollapse() {
// // 	cursor.classList.add("cursorCollapse");
// // }
// // function removeCollapse() {
// // 	cursor.classList.remove("cursorCollapse");
// // }
// // function eventCollapse() {
// // 	this.removeEventListener("mouseenter", addCollapse);
// // 	this.removeEventListener("click", eventCollapse);
// // 	addExpand();
// // 	removeCollapse();
// // }

// for (i = 0; i < cursorSocialLogo.length; i++) {
// 	cursorSocialLogo[i].addEventListener("mouseenter", addClick);
// 	cursorSocialLogo[i].addEventListener("mouseleave", removeClick);
// }

// if(cursorColor != null) {
// 	cursorColor.addEventListener("mouseenter", addClick);
// 	cursorColor.addEventListener("mouseleave", removeClick);
// }
// for (i = 0; i < cursorGlyph.length; i++) {
// 	cursorGlyph[i].addEventListener("mouseenter", addClick);
// 	cursorGlyph[i].addEventListener("mouseleave", removeClick);
// }

// for (i = 0; i < cursorA.length; i++) {
// 	cursorA[i].addEventListener("mouseenter", addClick);
// 	cursorA[i].addEventListener("mouseleave", removeClick);
// }
// for (i = 0; i < cursorCode.length; i++) {
// 	cursorCode[i].addEventListener("mouseenter", addClick);
// 	cursorCode[i].addEventListener("mouseleave", removeClick);
// }
// for (i = 0; i < cursorButton.length; i++) {
// 	cursorButton[i].addEventListener("mouseenter", addClick);
// 	cursorButton[i].addEventListener("mouseleave", removeClick);
// }
// for (i = 0; i < cursorInput.length; i++) {
// 	cursorInput[i].addEventListener("mouseenter", addTyping);
// 	cursorInput[i].addEventListener("mouseleave", removeTyping);
// }
// for (i = 0; i < cursorTextarea.length; i++) {
// 	cursorTextarea[i].addEventListener("mouseenter", addTyping);
// 	cursorTextarea[i].addEventListener("mouseleave", removeTyping);
// }
// for (i = 0; i < cursorOption.length; i++) {
// 	cursorOption[i].addEventListener("mouseenter", addClick);
// 	cursorOption[i].addEventListener("mouseleave", removeClick);
// }

// function addZoom() {
// 	cursor.classList.add("cursorZoom");
// }
// function removeZoom() {
// 	cursor.classList.remove("cursorZoom");
// }