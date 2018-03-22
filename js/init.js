    var dataJson = {"0": "Capture d’écran 2017-05-13 à 21.45.39.png","1": "4849435063_a39ec78ddd_o.jpeg","2": "AeroMap Light Theme  Mapbox.png","3": "uploads%2F2017%2F6%2F14%2Ffonsiannelli_24.jpeg","4": "4-grootens-nhw.jpeg","5": "14111301801_77cdb6c536_k.jpeg","6": "tumblr_njzlwmth8C1t5fphqo2_1280.png","7": "a0203faa2ff4d34461554ed49d4f5f3f.jpeg","8": "caen_1943.jpeg","9": "1D98FA52-55C5-4A52-9F19-DDE777045421.png","10": "andrewbmyers_000005.jpeg","11": "Capture d’écran 2013-06-13 à 09.51.40.png","12": "Studio_Joost_Grootens_YoungOld_468-469.jpeg","13": "4100397001_7e47c7b70c_o.jpeg","14": "ffzero_01.png","15": "jemmahostetler.com-scion2.jpeg","16": "x1971-261-1024x814_william_garnett.jpeg","17": "Strategic_Air_Command_15.png","18": "mars_672808main_grotzinger-3_full.jpeg","19": "avion_orly.jpeg","20": "moebius.png","21": "1381392081-09F9B4D8-A630-4837-8005-A3CC3E87C201.png","22": "INX_Topo_Short.jpeg","23": "1378715654-9F218569-0343-4C67-88AD-22046232344E.png","24": "infoamazonia.org-2.png","25": "4943135_6_0219_nemours-seine-et-marne-frappee-par-les_15f5debe9c53ca49420495d779dc1420.jpeg","26": "andrewbmyers_000020.jpeg","27": "dasboot_3.png","28": "0F88A7C8-761F-4EDD-944F-5C0A087BFE2B.png","29": "3-grootens-limes.jpeg","30": "Col_Ben_O._Davis_leads_F-86-Sabre_flight_(51st_FIW,_Korea).jpeg","31": "tumblr_n22qh1Jlk31qzbok1o1_500.png","32": "11695811_10153374033511772_7800751528975989205_n.jpeg","33": "on_tchouri.jpeg","34": "propagande-usa-guerre-mondiale-kodachrome-10.jpeg","35": "28576603021_b4ed9ebc8e_o.jpeg","36": "mars_map.jpeg","37": "704b997175ccd9b10abe622a4ff82cd8.jpeg","38": "ideditor.com.png","39": "chicago-model-projections.jpeg","40": "tumblr_md94ut2NDd1qmy8iho1_1280.jpeg","41": "1382543991-0A66DE73-075F-4BF2-927F-8B3DED970520.png","42": "alexmclean3_Disney_World_Parking_Lot_with_Striped_Walkway-Orlando_Florida.png","43": "susa_ventures_map.png","44": "observatoire.png","45": "AeroMap Light Theme  Mapbox 2.png","46": "tumblr_mayzzfFsgn1qzbok1o1_1280.jpeg","47": "SurfaceEurope_satellite_jupiter.jpeg","48": "joost_grootens_Cover_CIAM_atlas_lores.jpeg","49": "thumbr.jpeg","50": "Capture d’écran 2017-05-13 à 21.45.21.png","51": "30c668550494d27719804af564f0f8ef.jpeg","52": "jemmahostetler.com-scion1.jpeg","53": "The Analytical Engine has no pretensions whatever to originate... - Screen explorations by Stdio.jpeg","54": "caen_1944.jpeg","55": "cristo_surrounded_islands.jpeg","56": "ny_vertical-web.png","57": "mapsbox_adresses.png","58": "12184263_10153629702321772_6782907423109770583_o.jpeg","59": "13927914137_eb9a8fb714_h.jpeg","60": "BDFDD7D9-A7B0-49CD-B365-6181850B46A5.png","61": "terminator_salvation-5.jpeg","62": "saturn.jpl.nasa.jpeg","63": "LFPT PONTOISE CORMEILLES EN VEXIN_0523.jpeg","64": "2215a1c55aa4156464e5616aec73665f.jpeg","65": "EBBR_region_VFR.jpeg","66": "AeroMap Light Theme  Mapbox 3.png","67": "chicago-model-projections-3.jpeg","68": "radar_2.png","69": "RedAlert.jpeg","70": "1012398_10202642523045495_1622884491_n.jpeg","71": "il_570xN.587383536_cvg2.jpeg","72": "earth.nullschool.net_map4.png","73": "2-grootens-limes.jpeg","74": "jean_renaudie_renee_gailhoustet_ivry_1.jpeg","75": "look_inside_in_singapore.jpeg","76": "tumblr_n22qh1Jlk31qzbok1o2_1280.jpeg","77": "tenement_pair_smaller_smaller.jpeg","78": "jemmahostetler.com-scion3.jpeg","79": "IMG_0842.png","80": "Fabian_Oefner_Millefiori_23-1180x851.jpeg","81": "gta_5_cam2a.jpeg"};
    var imgs = new Array;
var filesPath = "files/";
var thumbsPath = "files/thumbs/";
var activeImage;
var overlayActive = false;

$(document).ready(function() {

    $.each(dataJson, function(i, obj) {
		imgs.push(obj);
	});
	displayThumbs();
	listenKeys();


});

function displayThumbs(){
	for (var i = 0 ; i<imgs.length ; i++){
		$(".wrapper").append("<div class='cell'><div class='link'><img src='"+thumbsPath+imgs[i]+"' class='thumb'/></div></div>");
	}
	clickHandler();
}

function clickHandler() // Gestion des cells de la mosa�que
{
	$(".link").each(function(index){
		$(this).on("click", function(event){
			event.preventDefault();

			showOverlay(index);
		});
	});
}

function showOverlay(index){
	activeImage = index;
	overlayActive = true;
	console.log("activeImage = "+activeImage+" / imgs.length = "+imgs.length);
	$("body").append("<div class='overlay'></div>").addClass("overlay-visible");
	$(".overlay").append("<p class='description'>"+imgs[activeImage]+"</p><img src='"+filesPath+imgs[index]+"'/>");

	listenOverlay();
}

function listenOverlay(){
	$(".overlay").click(function(e){
		overlayActive = false;
		hideOverlay();
	});
}

function hideOverlay(){
	$(".overlay").hide().remove();
	$("body").removeClass("overlay-visible");
}

function listenKeys(){
	$("body").keydown(function( event ) {
		if(overlayActive == true){
			if ( event.keyCode == 37 ) {
				event.preventDefault();
				if(activeImage == 0){
					activeImage = imgs.length-1;
				}
				else{
					activeImage--;
				}
				$(".overlay").empty();
				$(".overlay").append("<p class='description'>"+imgs[activeImage]+"</p><img src='"+filesPath+imgs[activeImage]+"'/>");
			} else if ( event.keyCode == 39 ) {
				event.preventDefault();
				if(activeImage == imgs.length-1){
					activeImage = 0;
				}
				else{
					activeImage++;
				}
				$(".overlay").empty();
				$(".overlay").append("<p class='description'>"+imgs[activeImage]+"</p><img src='"+filesPath+imgs[activeImage]+"'/>");
			} else if ( event.keyCode == 27 ) {
				hideOverlay();
			}
		}
	});
}
