# CanvGauge
Pure HTML5/JavaScript gauge implementation now for Qlik Sense.

<h2>Description</h2>
This visualization extension brings Mikhus implementation of gauge using pure JavaScript and HTML5 canvas to be integrated with Qlik Sense. 
Original souce: https://github.com/Mikhus/canv-gauge/wiki
<br/>
<br/>
<h2>Screenshots</h2>
<img src="https://raw.githubusercontent.com/CodingBSilva/CanvGauge/master/CanvGauge/preview.png" height="200" /><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg2.PNG?raw=true" height="120" />
<!--<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg3.PNG?raw=true" height="120" />
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg1.PNG?raw=true" height="120" />-->
<br/>
<br/>
<h2>Installation</h2>
<ol>
<li>Download the content.</li>
<li>Deploy the extension to your Qlik Sense environment.</li>

<li><ol>
  <li>Qlik Sense Desktop: Copy the entire contents of the .zip file to 
  "C:\Users\<UserName>\Documents\Qlik\Sense\Extensions\CanvGauge"</li>
  <li>Qlik Sense Server: Follow the instructions for "Deploying visualizations in Qlik Sense"
  </ol>
</li>
</ol>
<br/>
<br/>
<h2>Usage</h2>
Open a Qlik Sense app sheet, start Edit mode, then drag and drop CanvGauge from the Charts menu onto the sheet.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeButton.PNG?raw=true" />
<br/>
<br/>
<h2>Settings</h2>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeSettings.PNG?raw=true"/><br/>

<h4>About Color Settings</h4>
The colors in the settings can be specified by the following methods:
<ol>
<li>Hexadecimal colors</li>
<li>RGB colors</li>
<li>RGBA colors</li>
<li>HSL colors</li>
<li>HSLA colors</li>
<li>Predefined/Cross-browser color names</li>
</ol>
<b>More info about the methods follow the link:</b> <br/>
<a href="http://www.w3schools.com/cssref/css_colors_legal.asp">http://www.w3schools.com/cssref/css_colors_legal.asp</a>

<h4>Layout Settings</h4>
In this section we can define the background color of the Gauge and if have a glow or not.<br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeLayoutSettings.PNG?raw=true"/><br/><br/>

<h4>Ticks Settings</h4>
In this section we can define the color of the Major and Minor ticks, stroke line or not, the number of minor ticks visible
and also define the Major ticks.<br/>
If the Major ticks is empty the gauge calculate them automatically<br/><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeTicksSettings.PNG?raw=true"/><br/>
<b>Below one example with Stroke Ticks (the left one) and other Without (the right one)</b><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeStrokeSettings.PNG?raw=true"/><br/><br/>

<h4>Values Settings</h4>
In this section we can define values color and format (number of decimal places and leading zeros), also the minimum and the maximum value presented by the gauge.<br/><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeValuesSettings.PNG?raw=true"/><br/><br/>

<h4>Titles & Units Settings</h4>
In this section we can define the title (notice that this is the inside gauge title) and it's color and a unit label.<br/><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeTitlesSettings.PNG?raw=true"/><br/><br/>

<h4>Needle Settings</h4>
In this section we can define the color of the Needle and it's animation.<br/>
By default the needle always have define animation (elastic) but through this section we can override this animation.<br/><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeNeedleSettings.PNG?raw=true"/><br/><br/>

<h4>Highlights Settings</h4>
The Highlights must be defined as the follow:<br/>
<code>"from" : < tick number >, "to" : < tick number >, "color" : "< color >"</code><br/><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeHighlightSettings.PNG?raw=true"/><br/><br/>

<h2>License</h2>
Copyright © 2015 Bruno Silva

Released under the MIT license.
