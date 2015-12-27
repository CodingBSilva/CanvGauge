define( [], function () {
	'use strict';

	// ---------------------------------------------------------------------------------------
	// Dimensions & Measures
	// ---------------------------------------------------------------------------------------
  
	var dimensions = {
		uses: "dimensions",
		min: 0,
		max: 0
	};

	var measures = {
		uses: "measures",
		min: 1,
		max: 1
	};

	var sorting = {
		uses: "sorting"
	};

	// ---------------------------------------------------------------------------------------
	// Layout Settings
	// ---------------------------------------------------------------------------------------

	var glow = {
		ref: "glow",
		type: "boolean",
		component: "switch",
		label: "Glow",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false
	};
  
  	var plate = {
		ref: "plate",
		type: "string",
		label: "Background Color",
		defaultValue: "lightyellow",
	};
  
  	// ---------------------------------------------------------------------------------------
	// Gauge Titles and Units Settings
	// ---------------------------------------------------------------------------------------
  
  
  	var showunits = {
		ref: "showunits",
		type: "boolean",
		component: "switch",
		label: "Show Units",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false,
	  	show: true
	};
  
  	var units = {
		ref: "units",
		type: "string",
		label: "Units Title",
		defaultValue: "ms",
	  	show: function(layout) { return layout.showunits }
	};
  
  	var colorunits = {
		ref: "colorunits",
		type: "string",
		label: "Units Color",
		defaultValue: "lightgreen",
	  	show: function(layout) { return layout.showunits }
	};
  
  	var showgaugetitle = {
		ref: "showgaugetitle",
		type: "boolean",
		component: "switch",
		label: "Show Gauge Title",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false,
	  	show: true
	};
  
  	var gaugetitle = {
		ref: "gaugetitle",
		type: "string",
		label: "Gauge Title",
		defaultValue: "Ping",
	  	show: function(layout) { return layout.showgaugetitle }
	};
  
  	var colorgaugetitle = {
		ref: "colorgaugetitle",
		type: "string",
		label: "Gauge Title Color",
		defaultValue: "lightgreen",
	  	show: function(layout) { return layout.showgaugetitle }
	};
  
  	// ---------------------------------------------------------------------------------------
	// Ticks Settings
	// ---------------------------------------------------------------------------------------

	var stroketicks = {
		ref: "stroketicks",
		type: "boolean",
		component: "switch",
		label: "Stroke Ticks",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false
	};
  
  	var majorticks = {
		ref: "majorticks",
		type: "string",
		label: "Major Ticks Color",
		defaultValue: "darkgreen",
	  	show: true
	};
  
  	var majorticksvals = {
		ref: "majorticksvals",
		type: "string",
	  label: "Major Ticks Values",
		defaultValue: "0,10,20,30,40,50",
	  	show: true
	};
  
  
  	var minorticks = {
		ref: "minorticks",
		type: "string",
		label: "Minor Ticks Color",
		defaultValue: "lightgreen",
	  	show: true
	};
   
  
  	var nminorticks = {
	  	type: "integer",
		component: "slider",
		label: "Number of Minor Ticks",
		ref: "nminorticks",
		min: 0,
		max: 10,
		step: 1,
		defaultValue: 0
	};
  
  	// ---------------------------------------------------------------------------------------
	// Values Settings
	// ---------------------------------------------------------------------------------------
  
  	var numbers = {
		ref: "numbers",
		type: "string",
		label: "Numbers Color",
		defaultValue: "darkgreen",
	  	show: true
	};

	var minvaluerange = {
		ref: "minvaluerange",
		type: "integer",
		label: "Min Value",
		defaultValue: 0,
	  	show: true
	};

  	var maxvaluerange = {
		ref: "maxvaluerange",
		type: "integer",
		label: "Máx Value",
		defaultValue: 50,
	  	show: true
	};
	
  
  	var formatint = {
		ref: "formatint",
		type: "integer",
		label: "Format Integers",
		defaultValue: 4,
	  	show: true
	};
  
  	var formatdec = {
		ref: "formatdec",
		type: "integer",
		label: "Format Number of Decimals",
		defaultValue: 2,
	  	show: true
	};
  
  	// ---------------------------------------------------------------------------------------
	// Needle Settings
	// ---------------------------------------------------------------------------------------
  
  	var needledefault = {
		ref: "needledefault",
		type: "boolean",
		component: "switch",
		label: "Change Needle Color",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false,
	  	show: true
	};
  
  	var needlestart = {
		ref: "needlestart",
		type: "string",
		label: "Needle Start Color",
		defaultValue: "lightgreen",
	  	show: function(layout) { return layout.needledefault }
	};
  
  	var needleend = {
		ref: "needleend",
		type: "string",
		label: "Needle End Color",
		defaultValue: "red",
	  	show: function(layout) { return layout.needledefault }
	};
  
  	var needleanim = {
		ref: "needleanim",
		type: "boolean",
		component: "switch",
		label: "Animation",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false,
	  	show: true
	};
  
  	var needledelay = {
		ref: "needledelay",
		type: "integer",
		label: "Animation Delay",
		defaultValue: 25,
	  	show: function(layout) { return layout.needleanim }
	};
  
  
  	var needleduration = {
		ref: "needleduration",
		type: "integer",
		label: "Animation Duration",
		defaultValue: 500,
	  	show: function(layout) { return layout.needleanim }
	};
  
  
  	var needlestyle = {
		ref: "needlestyle",
		type: "string",
		label: "Animation Style",
	  	component: "dropdown",
	  	options: 
		  [ {
			value: "elastic",
			label: "Elastic"
		  }, {
			value: "linear",
			label: "Linear"
		  }, {
			value: "quad",
			label: "Quad"
		  }, {
			value: "quint",
			label: "Quint"
		  }, {
			value: "cycle",
			label: "Cycle"
		  }, {
			value: "bounce",
			label: "Bounce"
		  } ],
		defaultValue: "elastic",
	  	show: function(layout) { return layout.needleanim }
	};
  
   
  
  	// ---------------------------------------------------------------------------------------
	// Highlights Settings
	// ---------------------------------------------------------------------------------------
  
  	var highlightsdefault = {
		ref: "highlightsdefault",
		type: "boolean",
		component: "switch",
		label: "Highlights",
		options: [
			{
				value: true,
				label: "True"
			},
			{
				value: false,
				label: "False"
			}
		],
		defaultValue: false,
	  	show: true
	};
  
  	var highlights1 = {
		ref: "highlights1",
		type: "string",
		label: "1 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};

  	var highlights2 = {
		ref: "highlights2",
		type: "string",
		label: "2 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};
  
	var highlights3 = {
		ref: "highlights3",
		type: "string",
		label: "3 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};
  
  
  	var highlights4 = {
		ref: "highlights4",
		type: "string",
		label: "4 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};

  	var highlights5 = {
		ref: "highlights5",
		type: "string",
		label: "5 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};
  
	var highlights6 = {
		ref: "highlights6",
		type: "string",
		label: "6 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};
  
  
  	var highlights7 = {
		ref: "highlights7",
		type: "string",
		label: "7 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};

  	var highlights8 = {
		ref: "highlights8",
		type: "string",
		label: "8 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};
  
	var highlights9 = {
		ref: "highlights9",
		type: "string",
		label: "9 - Highlights",
		defaultValue: "",
	  	show: function(layout) { return layout.highlightsdefault }
	};

	// ---------------------------------------------------------------------------------------
	// Property Panel Definition
	// ---------------------------------------------------------------------------------------

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
			  type: "items",
			  label: "Layout Settings",
			  items: {
					plate: plate,
					glow: glow
				  }
				},
		  	 ticks: {
			  type: "items",
			  label: "Ticks Settings",
			  items: {
					stroketicks: stroketicks,
					majorticks: majorticks,
					majorticksvals: majorticksvals,
					minorticks: minorticks,
					nminorticks: nminorticks
				  }
				},
		  	 valuesset: {
			  type: "items",
			  label: "Values Settings",
			  items: {
					minvaluerange: minvaluerange,
					maxvaluerange: maxvaluerange,
					numbers: numbers,
					formatint: formatint,
					formatdec: formatdec
				  }
				},
			 titles: {
			   type: "items",
			   label: "Titles & Units Settings",
			   items: {
				 showunits: showunits,
				 units: units,
				 colorunits: colorunits,
				 showgaugetitle: showgaugetitle,
				 gaugetitle: gaugetitle,
				 colorgaugetitle: colorgaugetitle
			   }
			},
			 needle: {
			   type: "items",
			   label: "Needle Settings",
			   items: {
				 needledefault: needledefault,
				 needlestart: needlestart,
				 needleend: needleend,
				 needleanim: needleanim,
				 needledelay: needledelay,
				 needleduration: needleduration,
				 needlestyle: needlestyle
			   }
			},
			 highlights: {
			   type: "items",
			   label: "Highlights Settings",
			   items: {
				 highlightsdefault: highlightsdefault,
				 highlights1: highlights1,
				 highlights2: highlights2,
				 highlights3: highlights3,
				 highlights4: highlights4,
				 highlights5: highlights5,
				 highlights6: highlights6,
				 highlights7: highlights7,
				 highlights8: highlights8,
				 highlights9: highlights9
			   }
			}
		  
		 }
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: appearancePanel
		}
	};

} );