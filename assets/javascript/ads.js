const ads = `
	<div class="contentGroup">
		<div class="contentIcon iconAds"></div>
		<div class="contentTitle">Ads</div>
	</div>
	<!-- Ads 1 -->
	<ins class="adsbygoogle adBlock" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="6618344666"></ins>
	<!-- Ads 2 -->
	<ins class="adsbygoogle adBlock" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="1982672065"></ins>
	<!-- Ads 3 -->
	<ins class="adsbygoogle adBlock" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="7686386895"></ins>
`;

// Ads
const adsCreate = document.createElement('div');
adsCreate.classList.add('contentBox', 'ads');
adsCreate.innerHTML = ads;
document.querySelector(".content").appendChild(adsCreate);

for (var i = 0; i < 3; i++)
	(adsbygoogle = window.adsbygoogle || []).push({});