// Off canvas menu 
let sidebar = document.querySelector('.js-sidebar')
let toggleButton = document.querySelector('.js-toggle')

toggleButton.addEventListener('click', (e) => {
	e.preventDefault();
	sidebar.classList.toggle('is-sidebar');
	document.documentElement.classList.toggle("no-scroll");
	toggleButton.classList.toggle('is-active');
});


// Share buttons pop-up
(function () {
	// share popup
	let shareButton = document.querySelector('.js-post__share-button');
	let sharePopup = document.querySelector('.js-post__share-popup');

	if (shareButton) {
		 sharePopup.addEventListener('click', function (e) {
			  e.stopPropagation();
		 });

		 shareButton.addEventListener('click', function (e) {
			  e.preventDefault();
			  e.stopPropagation();
			  sharePopup.classList.toggle('is-visible');
			  sharePopup.setAttribute('aria-expanded', 'true');
		 });

		 document.body.addEventListener('click', function () {
			  sharePopup.classList.remove('is-visible');
		 });

		 
	}

	// link selector and pop-up window size
	var Config = {
		 Link: ".js-share",
		 Width: 500,
		 Height: 500
	};
	// add handler links
	var slink = document.querySelectorAll(Config.Link);
	for (var a = 0; a < slink.length; a++) {
		 slink[a].onclick = PopupHandler;
	}
	// create popup
	function PopupHandler(e) {
		 e = (e ? e : window.event);
		 var t = (e.target ? e.target : e.srcElement);
		 // hide share popup
		 if (sharePopup) {
			  sharePopup.classList.remove('is-visible');
		 }
		 // popup position
		 var px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			  py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
		 // open popup
		 var link_href = t.href ? t.href : t.parentNode.href;
		 var popup = window.open(link_href, "social",
			  "width=" + Config.Width + ",height=" + Config.Height +
			  ",left=" + px + ",top=" + py +
			  ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		 if (popup) {
			  popup.focus();
			  if (e.preventDefault) e.preventDefault();
			  e.returnValue = false;
		 }

		 return !!popup;
	}
})();