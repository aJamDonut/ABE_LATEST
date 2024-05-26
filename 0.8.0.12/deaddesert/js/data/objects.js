//Bootstrapped before UI etc

//Some object collections here are in arrays rather than objects. That's because I made them years ago before I understood how much better using obj props are.
//Refactor sometime maybe?
bootStrap.push(function () {
	dismantle = {
		name: "dismantle",
		readName: _LANG.DESTROY,
		codename: "dismantle",
		description: _LANG.DESC_DESTROY,
		cost: 0,
		across: 31,
		down: 4,
		blocks: 1,
		quality: 1,
		dirs: 1,
		offsetX: 0,
		offsetY: 0,
		tick: false,
		mouseDown: false,
		onCreate: false,
		data: {dismantle: true}
	};
	game.world.objectTemplates = {
		general: {
			trash1: {
				height: 64,
				width: 64,
				framex: 29 * 64,
				framey: 4 * 64,
				tileSetName: game.folder + "png/furni.png",
				built: true,
				id: "rb",
				data: {ref: null, buildFloor: false, cleanup: true},
				name: "trash",
				alpha: 1
			},
			scuff1: {
				height: 64,
				width: 64,
				framex: 30 * 64,
				framey: 4 * 64,
				tileSetName: game.folder + "png/furni.png",
				built: true,
				id: "rb",
				data: {ref: null, buildFloor: false, cleanup: true},
				name: "trash",
				alpha: 1
			},
			scuff2: {
				height: 64,
				width: 64,
				framex: 32 * 64,
				framey: 4 * 64,
				tileSetName: game.folder + "png/furni.png",
				built: true,
				id: "rb",
				data: {ref: null, buildFloor: false, cleanup: true},
				name: "trash",
				alpha: 1
			}
		},
		planning: [
			{
				name: "markroom",
				readName: _LANG.NEW_ROOM,
				description: _LANG.WAITING_FOR_DESCRIPTION,
				cost: 50,
				across: 1,
				down: 1,
				data: {buildFurni: true}
			}
		],
		other: {
			trash: {
				name: "trash",
				readName: _LANG.WOOD,
				description: _LANG.WAITING_FOR_DESCRIPTION,
				cost: 0,
				across: 30,
				down: 5,
				blocks: 1,
				data: {
					cleanup: true,
					fill: "floor",
					killOnBuild: true,
					friction: 0,
					across: 30,
					down: 5
				}
			}
		}
	};

	game.world.objectTemplates.walls = [
		{
			name: "buildroom",
			readName: "Wood wall",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 3,
			down: 3,
			blocks: 1,
			collide: "allowwall",
			data: {
				layer: 5,
				buildFloor: true,
				wallBuild: true,
				across: 3,
				down: 3,
				complex: true,
				blockZone: "all",
				recipe: "pers_worlditem_buildwall",
				crafts: "pers_worlditem_buildwall"
			}
		},
		{
			name: "buildroom",
			readName: "Fence",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 15,
			down: 3,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 5, buildFloor: true, wallBuild: true, across: 15, down: 3}
		},
		{
			name: "buildroom",
			readName: "Sand",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 1,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 1, fill: [1, 1], buildFloor: true, wallBuild: true, across: 1, down: 1}
		},
		{
			name: "buildroom",
			readName: "Grated Walls",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 12,
			down: 3,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 5, buildFloor: true, wallBuild: true, across: 12, down: 3}
		},
		{
			name: "buildroom",
			readName: "Black walls",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 9,
			down: 3,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 5, buildFloor: true, wallBuild: true, across: 9, down: 3}
		},
		{
			name: "buildroom",
			readName: "Mountain",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 4,
			down: 15,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 3, fill: [4, 15], buildFloor: true, wallBuild: true, across: 4, down: 15}
		},
		{
			name: "buildroom",
			readName: "Road",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 6,
			down: 7,
			blocks: 1,
			collide: "allowwall",
			data: {layer: 2, fill: [8, 8], buildFloor: true, wallBuild: true, across: 6, down: 7}
		},
		{
			name: "blue",
			readName: "Tiles",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 8,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 8],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 8
			}
		},
		{
			name: "tiled",
			readName: "Tiles 2",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 9,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 9],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 9
			}
		},
		{
			name: "concrete",
			readName: "Tiles 3",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 10,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 10],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 10
			}
		},
		{
			name: "red",
			readName: "Grid",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 11,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 11],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 11
			}
		},
		{
			name: "wood",
			readName: "Ash",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 12,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 12],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 12
			}
		},
		{
			name: "gravel",
			readName: "Purple Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 13,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 13],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 13
			}
		},
		{
			name: "gravel",
			readName: "Brown Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 14,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 14],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 14
			}
		},
		{
			name: "gravel",
			readName: "Maple Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 15,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 15],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 15
			}
		},

		{
			name: "gravel",
			readName: "Orange Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 13,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 13],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 13
			}
		},

		{
			name: "gravel",
			readName: "Red Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 14,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 14],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 14
			}
		},

		{
			name: "gravel",
			readName: "Parple Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 15,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 15],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 15
			}
		},

		{
			name: "gravel",
			readName: "Green Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 16,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 16],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 16
			}
		},

		{
			name: "gravel",
			readName: "Blue Brick",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 17,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 17],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 17
			}
		},

		{
			name: "gravel",
			readName: "Blue Diamond",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 18,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 18],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 18
			}
		},

		{
			name: "gravel",
			readName: "Black Diamond",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 2,
			down: 19,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [2, 19],
				killOnBuild: true,
				friction: 0,
				across: 2,
				down: 19
			}
		},

		{
			name: "pather",
			readName: "Pathing",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 19,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 19],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 19
			}
		},
		{
			name: "steps",
			readName: "Steps 1",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 25,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 25],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 25
			}
		},
		{
			name: "steps",
			readName: "Steps 2",
			codename: "floor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 1,
			down: 26,
			blocks: 1,
			data: {
				layer: 1,
				buildFloor: true,
				wallBuild: true,
				fill: [1, 26],
				killOnBuild: true,
				friction: 0,
				across: 1,
				down: 26
			}
		}
	];
	game.world.objectTemplates.submenus = [
		{
			name: "submenu",
			readName: "Decor",
			codename: "furni",
			submenu: "decor",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 34,
			down: 6,
			blocks: 1
		},
		{
			name: "submenu",
			readName: "Food",
			codename: "furni",
			submenu: "food",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 30,
			down: 6,
			blocks: 1
		},
		{
			name: "submenu",
			readName: "Hygiene",
			codename: "furni",
			submenu: "hygiene",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 33,
			down: 6,
			blocks: 1
		},
		{
			name: "submenu",
			readName: "Elec",
			codename: "furni",
			submenu: "power",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 31,
			down: 6,
			blocks: 1
		},
		{
			name: "submenu",
			readName: "Office",
			codename: "furni",
			submenu: "office",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 32,
			down: 6,
			blocks: 1
		},
		{
			name: "submenu",
			readName: "Research",
			codename: "furni",
			submenu: "research",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 0,
			across: 35,
			down: 6,
			blocks: 1
		}
	];

	game.world.objectTemplates.ui = [
		{
			name: "os",
			readName: _LANG.WORKMAN,
			codename: "os",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 26,
			blocks: 1,
			down: 1,
			data: false
		},
		{
			name: "build",
			readName: _LANG.WORKMAN,
			codename: "build",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 18,
			blocks: 1,
			down: 3,
			data: false
		},
		{
			name: "suppliers",
			readName: _LANG.WORKMAN,
			codename: "suppliers",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 19,
			blocks: 1,
			down: 4,
			data: false
		},
		{
			name: "research",
			readName: _LANG.WORKMAN,
			codename: "research",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 19,
			blocks: 1,
			down: 5,
			data: false
		},
		{
			name: "managerjobs",
			readName: _LANG.WORKMAN,
			codename: "managerjobs",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 20,
			blocks: 1,
			down: 5,
			data: false
		},
		{
			name: "thoughts",
			readName: _LANG.WORKMAN,
			codename: "thoughts",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 24,
			blocks: 1,
			down: 9,
			data: false
		},
		{
			name: "rotate",
			readName: _LANG.WORKMAN,
			codename: "rotate",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 18,
			blocks: 1,
			down: 4,
			data: false
		},
		{
			name: "pindown",
			readName: _LANG.WORKMAN,
			codename: "pindown",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 24,
			blocks: 1,
			down: 4,
			data: false
		},
		{
			name: "pinup",
			readName: _LANG.WORKMAN,
			codename: "pinup",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 25,
			blocks: 1,
			down: 4,
			data: false
		},
		{
			name: "hire",
			readName: _LANG.WORKMAN,
			codename: "hire",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 21,
			blocks: 1,
			down: 4,
			data: false
		},
		{
			name: "cash",
			readName: _LANG.WORKMAN,
			codename: "cash",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 26,
			blocks: 1,
			down: 9,
			data: false
		},
		{
			name: "escmenu",
			readName: _LANG.WORKMAN,
			codename: "escmenu",
			description: _LANG.WAITING_FOR_DESCRIPTION,
			cost: 5000,
			across: 20,
			blocks: 1,
			down: 4,
			data: false
		}
	];
	/*
	//Sorting functions
	function compare(a,b) {
	  if (a.cost < b.cost)
		return -1;
	  if (a.cost > b.cost)
		return 1;
	  return 0;
	}
	*/
	//game.world.objectTemplates.machines.sort(compare);
});
