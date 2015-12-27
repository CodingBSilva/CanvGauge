# CanvGauge (Building Documentation, coming soon)
Pure HTML5/JavaScript gauge implementation now for Qlik Sense.

<h2>Description</h2>
This visualization extension brings Mikhus implementation of gauge using pure JavaScript and HTML5 canvas to be integrated with Qlik Sense. 
Original souce: https://github.com/Mikhus/canv-gauge/wiki
<br/>
<br/>
<h2>Screenshots</h2>
<img src="https://raw.githubusercontent.com/CodingBSilva/CanvGauge/master/CanvGauge/preview.png" height="200" /><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg2.PNG?raw=true" height="120" />
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg3.PNG?raw=true" height="120" />
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeImg1.PNG?raw=true" height="120" />
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

<h5>About Color Settings</h5>
The colors in the settings can be specified by the following methods:
<ol>
<li><b>Hexadecimal colors</b><br/>
"Hexadecimal color values are supported in all major browsers.<br/>

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF."<br/>
<b>Example:</b><strong><code>#F0F0F0</code></strong><br/>
<b>List of Colors:</b>
<a href="http://www.w3schools.com/html/html_colors.asp">http://www.w3schools.com/html/html_colors.asp</a><br/>
</li>

<li><b>Predefined/Cross-browser color names</b><br/>
"140 color names are predefined in the HTML and CSS color specification."<br/><br/>
<b>List of Colors:</b>
<a href="http://www.w3schools.com/cssref/css_colornames.asp">http://www.w3schools.com/cssref/css_colornames.asp</a><br/>
<b>List of Colors by Group:</b>
<a href="http://www.w3schools.com/tags/ref_colorgroups.asp">http://www.w3schools.com/tags/ref_colorgroups.asp</a><br/><br/>
</li>

<li><b>RGB Colors</b><br/>
"RGB color values are supported in all major browsers.<br/>
An RGB color value is specified with: rgb(red, green, blue). Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).<br/>
For example, the rgb(0,0,255) value is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.<br/>
Also, the following values define equal color: rgb(0,0,255) and rgb(0%,0%,100%)."<br/>
<b>List of Colors:</b>
<a href="http://www.w3schools.com/html/html_colors.asp">http://www.w3schools.com/html/html_colors.asp</a><br/><br/>
</li>
<li><b>RGBa Colors</b><br/>
"RGBA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and in Opera 10+.<br/>
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the object.<br/>
An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque)."<br/>
</li>
</ol>
<h8><b>source:</b> <a href="http://www.w3schools.com/cssref/css_colors_legal.asp">http://www.w3schools.com/cssref/css_colors_legal.asp</a></h8>

<h5>Layout Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeLayoutSettings.PNG?raw=true"/><br/>

<h5>Ticks Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeTicksSettings.PNG?raw=true"/><br/>
<b>Stroke Ticks or not?</b><br/>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeStrokeSettings.PNG?raw=true"/><br/>

<h5>Values Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeValuesSettings.PNG?raw=true"/><br/>

<h5>Titles & Units Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeTitlesSettings.PNG?raw=true"/><br/>

<h5>Needle Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeNeedleSettings.PNG?raw=true"/><br/>

<h5>Highlights Settings</h5>
<img src="https://github.com/CodingBSilva/CanvGauge/blob/master/CanvGaugeHighlightSettings.PNG?raw=true"/><br/>

