$(document).ready(function(){
	var selectedUnitImageBlock = $("section.info_selected_unit_img");
	var selectedUnitInfo = $("section.info_selected_unit");
	var startButton = $("input.play");
	var menu = $("div.menu");
	var gameZone = $("div.game");
	var units = $("section.unit");
	var spells = $("section.spell");
	var endOfTurn = $("section.end_step_button button");
	var menuSwap = $("section.spell-button");
	var unitMenu =  $("section.unit-menu");
	var spellMenu =  $("section.spell-menu");
	var currentMenu = "units";
	startButton.click(function(){
		menu.fadeOut();
		gameZone.fadeIn();
		game();
	});

	units.click(function(){ 
		selectUnitMenu($(this).attr("name"));
		units.removeClass("select_unit");
		$(this).addClass("select_unit");
		switch($(this).attr("name")){
			case "cursor":
				selectedUnitImageBlock.addClass("non-display");
				selectedUnitInfo.addClass("non-display");
				break;
			default:
				selectedUnitImageBlock.removeClass("non-display");
				selectedUnitInfo.removeClass("non-display");
				break;
		}
	});
	spells.click(function(){
		selectSpellMenu($(this).attr("name"));
		spells.removeClass("select_unit");
		$(this).addClass("select_unit");
		selectedUnitImageBlock.addClass("non-display");
		selectedUnitInfo.addClass("non-display");
	});
	menuSwap.click(function(){
		switch(currentMenu){
			case "units":
				unitMenu.addClass("non-display");
				spellMenu.removeClass("non-display");
				currentMenu = "spells";
				break;
			case "spells":
				spellMenu.addClass("non-display");
				unitMenu.removeClass("non-display");
				currentMenu = "units";
				break;
		}
	});
	endOfTurn.click(function(){
		selectedUnitImageBlock.addClass("non-display");
		selectedUnitInfo.addClass("non-display");
		spellMenu.addClass("non-display");
		unitMenu.removeClass("non-display");
		currentMenu = "units";
	});
});