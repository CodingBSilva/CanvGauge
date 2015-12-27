# CanvGauge (Building Documentation, coming soon)
Pure HTML5/JavaScript gauge implementation now for Qlik Sense.

<script src="//ru.smart-ip.net/canv-gauge/gauge.min.js"></script>

<script>
var gauge3 = new Gauge({
	renderTo   : 'gauge3',
	width      : 200,
	height     : 200,
	maxValue   : 1000,
	majorTicks : ['0','100','200','300','400','500','600','700','800','900','1000'],
	glow       : true,
	units      : 'ms',
	title      : 'Ping',
	highlights : false,
	glow : false,
	valueFormat : { int : 4, dec : 1 },
	colors : {
		needle : { start : 'lightgreen', end : 'navy' },
		plate : 'lightyellow',
		title : 'green',
		units : 'lightgreen',
		majorTicks : 'darkgreen',
		minorTicks : 'lightgreen',
		numbers : 'darkgreen'
	},
	animation : {
		delay : 25,
		duration: 500,
		fn : 'elastic'
	}
});

gauge3.onready = function() {
	setInterval( function() {
		gauge3.setValue( Math.random() * 1000);
	}, 1000);
};
gauge3.draw();
</script>

<!--<img src="https://raw.githubusercontent.com/CodingBSilva/CanvGauge/master/CanvGauge/preview.png" height="200" /> -->


<b>Features</b>
<br/>
<br/>
<b>Usage</b>
<br/>
Simply drag and drop the CanvGauge extension into a sheet ....
<br/>
<br/>
<b>Server</b>

Download the .zip file and remove README.md from the archive
Import the .zip file via the QMC, under Extensions
Desktop

Download the .zip-archive, unpack and rename to CanvGauge
Place the directory CanvGauge in you Qlik Sense Extensions directory, usually found at "C:\Users\your.username\Documents\Qlik\Sense\Extensions\"
