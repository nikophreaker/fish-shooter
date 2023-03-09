// import "./R.js";
// import "./Utils.js";
// import "./fishjoy.js";
// import "./FishManager.js";
// import "./FishGroup.js";
// import "./views/Fish.js";
// import "./views/Cannon.js";
// import "./views/Bullet.js";
// import "./views/Num.js";
// import "./views/Player.js";
import { addScores,addScore } from "./leaderboard.js"
import {
	initializeApp
} from "firebase/app";
import {
	getAnalytics
} from "firebase/analytics";
import {
	getDatabase,
	ref,
	child,
	get
} from "firebase/database";
import {
	getFirestore,
	query,
	collection,
	doc,
	setDoc,
	getDoc,
	getDocs,
	where,
	orderBy,
	limit,
	updateDoc,
	onSnapshot
} from "firebase/firestore";

// CONFIGURASI FIREBASE
const firebaseConfig = {
	apiKey: "AIzaSyBdFMZoNwEWNqCOfUezoSB-TewpOBUfX98",
	authDomain: "mgoalindo---app.firebaseapp.com",
	databaseURL: "https://mgoalindo---app-default-rtdb.firebaseio.com",
	projectId: "mgoalindo---app",
	storageBucket: "mgoalindo---app.appspot.com",
	messagingSenderId: "909481590933",
	appId: "1:909481590933:web:a0626d75765bd850a5db9c",
	measurementId: "G-RLCM7JVYFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firestore Database and get document
const db = getFirestore(app);
const col = "fishshoot-m88-leaderboard";
const colRef = collection(db, col);

var first = true;
var name, telp;
export async function updateScore(newScore) {
	let playerRef = doc(db, col, String(telp));
	return await updateDoc(playerRef, {
		score: newScore
	  });
}

(function () {

	let dpr = window.devicePixelRatio;
	window.onload = function () {
		//start load sound
		loadSound();
		const canvas = document.getElementById("container");
		if (screen.orientation != undefined) {
			if (screen.orientation.type == "portrait" || screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
				document.getElementById("outer").style.backgroundImage = "url(./images/turn.png)";
				document.getElementById("middle").style.visibility = "hidden";
			} else {
				document.getElementById("outer").style.backgroundImage = "";
				document.getElementById("middle").style.visibility = "visible";
				if (first) {
					first = false;
					let gameConfig = {
						type: Phaser.CANVAS,
						scale: {
							mode: Phaser.Scale.FIT,
							autoCenter: Phaser.Scale.CENTER_BOTH,
							parent: "leaderboard",
							width: 980 * dpr,
							height: 453 * dpr,
						},
						dom: {
							createContainer: true
						},
						transparent: true,
						backgroundColor: 0x2A3141, //0xD30000,
						scene: [InputData, Leaderboard]
					};
					var games = new Phaser.Game(gameConfig);
					window.focus();
					setTimeout(function () {
						game.load();
					}, 10);
				}
			}
		} else {
			var mql = window.matchMedia("(orientation: portrait)");

			if (mql.matches) {
				document.getElementById("outer").style.backgroundImage = "url(./images/turn.png)";
				document.getElementById("middle").style.visibility = "hidden";
			} else {
				document.getElementById("outer").style.backgroundImage = "";
				document.getElementById("middle").style.visibility = "visible";
				if (first) {
					first = false;
					let gameConfig = {
						type: Phaser.CANVAS,
						scale: {
							mode: Phaser.Scale.FIT,
							autoCenter: Phaser.Scale.CENTER_BOTH,
							parent: "leaderboard",
							width: 980 * dpr,
							height: 453 * dpr,
						},
						dom: {
							createContainer: true
						},
						transparent: true,
						backgroundColor: 0x2A3141, //0xD30000,
						scene: [InputData, Leaderboard]
					};
					var games = new Phaser.Game(gameConfig);
					window.focus();
					setTimeout(function () {
						game.load();
					}, 10);
				}
			}

		}

		window.addEventListener("orientationchange", function() {
			if (screen.orientation != undefined) {
				if (screen.orientation.type == "landscape" || screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
					document.getElementById("outer").style.backgroundImage = "";
					document.getElementById("middle").style.visibility = "visible";
					if (first) {
						first = false;
						let gameConfig = {
							type: Phaser.CANVAS,
							scale: {
								mode: Phaser.Scale.FIT,
								autoCenter: Phaser.Scale.CENTER_BOTH,
								parent: "leaderboard",
								width: 980 * dpr,
								height: 453* dpr,
							},
							dom: {
								createContainer: true
							},
							transparent: true,
							backgroundColor: 0x2A3141, //0xD30000,
							scene: [InputData, Leaderboard]
						};
						var games = new Phaser.Game(gameConfig);
						window.focus();
						setTimeout(function () {
							game.load();
						}, 10);
					}
				} else {
					document.getElementById("outer").style.backgroundImage = "url(./images/turn.png)";
					document.getElementById("middle").style.visibility = "hidden";
				}
			} else {
				var mql = window.matchMedia("(orientation: portrait)");

				if (mql.matches) {
					document.getElementById("outer").style.backgroundImage = "url(./images/turn.png)";
					document.getElementById("middle").style.visibility = "hidden";
				} else {
					document.getElementById("outer").style.backgroundImage = "";
					document.getElementById("middle").style.visibility = "visible";
					if (first) {
						first = false;
						let gameConfig = {
							type: Phaser.CANVAS,
							scale: {
								mode: Phaser.Scale.FIT,
								autoCenter: Phaser.Scale.CENTER_BOTH,
								parent: "leaderboard",
								width: 980 * dpr,
								height: 453* dpr,
							},
							dom: {
								createContainer: true
							},
							transparent: true,
							backgroundColor: 0x2A3141, //0xD30000,
							scene: [InputData, Leaderboard]
						};
						var games = new Phaser.Game(gameConfig);
						window.focus();
						setTimeout(function () {
							game.load();
						}, 10);
					}
				}
			}
		});
	};

	class InputData extends Phaser.Scene {
		constructor() {
			super("InputData");
		}

		init() {
			window.mobileCheck = function () {
				let check = false;
				(function (a) {
					if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
				})(navigator.userAgent || navigator.vendor || window.opera);
				return check;
			};
			// init canvas size
			this.gameWidth = this.sys.game.scale.width
			this.gameHeight = this.sys.game.scale.height
			this.halfWidth = this.gameWidth / 2;
			this.halfHeight = this.gameHeight / 2;
		}

		preload() {
			this.load.path = "./images/";
			this.load.image("bgDialog", "fieldvoucher.png");
			this.load.image("okButton", "okButton.png");
			this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
			this.load.path = "./audio/";
			this.load.audio("clickedBtn", "click.mp3");
		}

		async create() {
			if (window.mobileCheck()) {
				let click1 = true;
				let clicked = this.sound.add("clickedBtn");
				// this.add.graphics().setDepth(0).fillStyle(0x000000, 0.8).fillRect(0, 0, this.gameWidth, this.gameHeight);
				var dialogBg = this.add.sprite(this.halfWidth, this.halfHeight, "bgDialog");
				dialogBg.setScale(0.35 * dpr);
				this.inputText = this.add.rexInputText(this.halfWidth, this.halfHeight + (35 * dpr), 200 * dpr, 35 * dpr, {
					// Style properties
					align: "center",
					fontSize: `${14 * dpr}px`,
					color: '#ffffff',
					fontStyle: 'bold',
					border: 0,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
					outline: 'none',
					direction: 'ltr',
					placeholder: 'MASUKKAN USERNAME'
				});
	
				this.inputText2 = this.add.rexInputText(this.halfWidth, this.halfHeight + (88 * dpr), 200 * dpr, 35 * dpr, {
					// Style properties
					align: "center",
					fontSize: `${14 * dpr}px`,
					fontStyle: 'bold',
					color: '#ffffff',
					border: 0,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
					outline: 'none',
					direction: 'ltr',
					type: 'number',
					placeholder: 'MASUKKAN NO. HP'
				});
	
				let inputText = this.inputText;
				this.inputText.on('textchange', function (inputs, e) {
					inputText.setText(inputs.text.toString().toUpperCase());
				}, this);
	
				let inputText2 = this.inputText2;
				this.inputText2.on('textchange', function (inputs, e) {
					inputText2.setText(inputs.text.toString().toUpperCase());
				}, this);
	
				let world = this;
				this.btnOk = this.add.sprite(this.halfWidth, this.halfHeight + (140 * dpr), "okButton");
				this.btnOk.setScale(0.2 * dpr);
				this.btnOk.setInteractive();
				this.btnOk.on("pointerover", function () {
	
				});
				this.btnOk.on("pointerout", function () {
	
				});
				this.btnOk.on("pointerdown", async function () {
					if (click1) {
						click1 = false;
						clicked.play();
						let txt = inputText.text
						let txt2 = inputText2.text
						// GET KODE DATA
						if (txt != "" && txt != undefined && txt != null) {
							if (txt2 != "" && txt2 != undefined && txt2 != null) {
								var username = name = txt;
								var notelp = telp = txt2;
								//GET USER DOC
								let docRef = doc(db, col, String(notelp));
								let q = query(colRef, where("name", "==", String(username)));
								let data = await getDocs(q);
								if (data.size == 0 ) {
									let q = query(colRef, where("notelp", "==", String(notelp)));
									let data = await getDocs(q);
									if (data.size == 0 ) {
										await setDoc(docRef, {
											name: username,
											notelp: notelp,
											score: 1000,
											date: tglIndonesia(),
											timestamp: Math.floor(Date.now() / 1000),
										}).then(()=>{
											setTimeout(function () {
												world.scene.stop("InputData");
												document.getElementById("leaderboard").style.zIndex = "-1";
												game.setBtnLeaderboard(world);
												click1 = true;
											}, 10);
											setTimeout(function () {
												document.getElementById("banner").style.visibility = "visible";
											}, 5000);
										}).catch((error) => {
											click1 = true;
											alert(`Error ${error}`);
										});
									} else {
										click1 = true;
										alert(`Nomor ${notelp} sudah terdaftar`);
									}
								} else {
									click1 = true;
									alert(`Nama ${username} sudah terdaftar`);
								}
							} else {
								click1 = true;
								alert("No telp tidak boleh kosong!");
							}
						} else {
							click1 = true;
							alert("Nama tidak boleh kosong!");
						}
					}
				});
			} else {
				let click1 = true;
				let clicked = this.sound.add("clickedBtn");
				// this.add.graphics().setDepth(0).fillStyle(0x000000, 0.8).fillRect(0, 0, this.gameWidth, this.gameHeight);
				var dialogBg = this.add.sprite(this.halfWidth, this.halfHeight, "bgDialog");
				dialogBg.setScale(0.5 * dpr);
				this.inputText = this.add.rexInputText(this.halfWidth, this.halfHeight + (48 * dpr), 220 * dpr, 35 * dpr, {
					// Style properties
					align: "center",
					fontSize: `${16 * dpr}px`,
					color: '#ffffff',
					fontStyle: 'bold',
					border: 0,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
					outline: 'none',
					direction: 'ltr',
					placeholder: 'MASUKKAN USERNAME'
				});
	
				this.inputText2 = this.add.rexInputText(this.halfWidth, this.halfHeight + (122 * dpr), 220 * dpr, 35 * dpr, {
					// Style properties
					align: "center",
					fontSize: `${16 * dpr}px`,
					fontStyle: 'bold',
					color: '#ffffff',
					border: 0,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
					outline: 'none',
					direction: 'ltr',
					type: 'number',
					placeholder: 'MASUKKAN NO. HP'
				});
	
				let inputText = this.inputText;
				this.inputText.on('textchange', function (inputs, e) {
					inputText.setText(inputs.text.toString().toUpperCase());
				}, this);
	
				let inputText2 = this.inputText2;
				this.inputText2.on('textchange', function (inputs, e) {
					inputText2.setText(inputs.text.toString().toUpperCase());
				}, this);
	
				let world = this;
				this.btnOk = this.add.sprite(this.halfWidth, this.halfHeight + (200 * dpr), "okButton");
				this.btnOk.setScale(0.3 * dpr);
				this.btnOk.setInteractive();
				this.btnOk.on("pointerover", function () {
	
				});
				this.btnOk.on("pointerout", function () {
	
				});
				this.btnOk.on("pointerdown", async function () {
					if (click1) {
						click1 = false;
						clicked.play();
						let txt = inputText.text
						let txt2 = inputText2.text
						// GET KODE DATA
						if (txt != "" && txt != undefined && txt != null) {
							if (txt2 != "" && txt2 != undefined && txt2 != null) {
								var username = name = txt;
								var notelp = telp = txt2;
								//GET USER DOC
								let docRef = doc(db, col, String(notelp));
								let q = query(colRef, where("name", "==", String(username)));
								let data = await getDocs(q);
								if (data.size == 0 ) {
									let q = query(colRef, where("notelp", "==", String(notelp)));
									let data = await getDocs(q);
									if (data.size == 0 ) {
										await setDoc(docRef, {
											name: username,
											notelp: notelp,
											score: 1000,
											date: tglIndonesia(),
											timestamp: Math.floor(Date.now() / 1000),
										}).then(()=>{
											setTimeout(function () {
												world.scene.stop("InputData");
												document.getElementById("leaderboard").style.zIndex = "-1";
												game.setBtnLeaderboard(world);
												click1 = true;
											}, 10);
											setTimeout(function () {
												document.getElementById("banner").style.visibility = "visible";
											}, 5000);
										}).catch((error) => {
											click1 = true;
											alert(`Error ${error}`);
										});
									} else {
										click1 = true;
										alert(`Nomor ${notelp} sudah terdaftar`);
									}
								} else {
									click1 = true;
									alert(`Nama ${username} sudah terdaftar`);
								}
							} else {
								click1 = true;
								alert("No telp tidak boleh kosong!");
							}
						} else {
							click1 = true;
							alert("Nama tidak boleh kosong!");
						}
					}
				});
			}
		}
	}

	class Leaderboard extends Phaser.Scene {
		constructor() {
			super("Leaderboard");
		}

		init(data) {
			// init canvas size
			this.gameWidth = this.sys.game.scale.width * 0.25
			this.gameHeight = this.sys.game.scale.height
			this.halfWidth = this.gameWidth / 2;
			this.halfHeight = this.gameHeight / 2;
			this.userId = data.userId;
			this.username = data.name;
			this.opened = data.opened;
		}

		preload() {
			/*
			 *Load ASSET
			 */
			this.load.path = "./images/";
			this.load.image("fieldLeaderboard", "field_leaderboard.png");
		}

		async create() {
			// this.add.graphics().setDepth(1).fillStyle(0x000000, 0.8).fillRect(0, 0, this.gameWidth, this.gameHeight);
			this.fieldLeaderboard = this.add.image(this.halfWidth, this.halfHeight, "fieldLeaderboard")
				.setDepth(2)
				.setScale(0.25 * dpr)
				.setOrigin(0.5, 0.5);

			//GET USER DOC
			let docRef = doc(db, col, String(telp));
			const queryUser = await getDoc(docRef);

			// GET LEADERBOARD DATA (Highest Score)
			var rowWidth = 0;
			var rank = 1;
			var userInHighest = false;
			var arr = [];
			const q = query(colRef, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
    			let name = doc.data().name.length > 8 ? doc.data().name.substring(0, 11) : doc.data().name;
				let score = String(doc.data().score).replace(/(.)(?=(\d{3})+$)/g, '$1,');
				if (telp == doc.id) {
					userInHighest = true;
					this.add.graphics()
						.fillStyle(0xF7D013, 0.4)
						.fillRect(this.halfWidth - (85 * dpr), (this.halfHeight - (95 * dpr)) + (rowWidth * dpr), (175 * dpr), (10 * dpr))
						.setDepth(2);
				}
				this.rank = this.make.text({
					x: this.halfWidth - (70 * dpr),
					y: (this.halfHeight - (90 * dpr)) + (rowWidth * dpr),
					text: "0",
					padding: {
						left: 5,
						right: 5,
						top: 5,
						bottom: 5
					},
					style: {
						align: "center",
						fontFamily: "Arial Black",
						fontSize: 8 * dpr,
						fill: "#000000"
					}
				}).setDepth(2).setOrigin(0.5, 0.5).setText(rank);
				this.name = this.make.text({
					x: this.halfWidth - (40 * dpr),
					y: (this.halfHeight - (90 * dpr)) + (rowWidth * dpr),
					text: "0",
					padding: {
						left: 5,
						right: 5,
						top: 5,
						bottom: 5
					},
					style: {
						align: "center",
						fontFamily: "Arial Black",
						fontSize: 8 * dpr,
						fill: "#000000"
					}
				}).setDepth(2).setOrigin(0, 0.5).setText(name);
				this.score = this.make.text({
					x: this.halfWidth + (35 * dpr),
					y: (this.halfHeight - (90 * dpr)) + (rowWidth * dpr),
					text: "0",
					padding: {
						left: 5,
						right: 5,
						top: 5,
						bottom: 5
					},
					style: {
						align: "center",
						fontFamily: "Arial Black",
						fontSize: 8 * dpr,
						fill: "#000000"
					}
				}).setDepth(2).setOrigin(0, 0.5).setText(score);
				rowWidth += (8 * dpr);
				rank++;
			});

			if (!userInHighest) {
				//GET USER QUERY AFTER UPDATE (Not in Highest)
            	const queryUser2 = await getDoc(docRef);
            	if (queryUser2.exists()) {
					let name = queryUser2.data().name.length > 8 ? queryUser2.data().name.substring(0, 11) : queryUser2.data().name;
					let score = String(queryUser2.data().score).replace(/(.)(?=(\d{3})+$)/g, '$1,');
					this.add.graphics()
						.fillStyle(0x000000, 1)
						.fillRect(this.halfWidth - (85 * dpr), (this.halfHeight - (95 * dpr)) + (rowWidth * dpr), (175 * dpr), (2 * dpr))
						.setDepth(2);
					this.add.graphics()
						.fillStyle(0xF7D013, 0.4)
						.fillRect(this.halfWidth - (85 * dpr), (this.halfHeight - (95 * dpr)) + ((rowWidth * dpr) + (5 * dpr)), (175 * dpr), (10 * dpr))
						.setDepth(2);
					this.rank = this.make.text({
						x: this.halfWidth - (70 * dpr),
						y: (this.halfHeight - (90 * dpr)) + ((rowWidth * dpr) + (5 * dpr)),
						text: "0",
						padding: {
							left: 5,
							right: 5,
							top: 5,
							bottom: 5
						},
						style: {
							align: "center",
							fontFamily: "Arial Black",
							fontSize: 8 * dpr,
							fill: "#000000"
						}
					}).setDepth(2).setOrigin(0.5, 0.5).setText(rank);
				
					this.name = this.make.text({
						x: this.halfWidth - (40 * dpr),
						y: (this.halfHeight - (90 * dpr)) + ((rowWidth * dpr) + (5 * dpr)),
						text: "0",
						padding: {
							left: 5,
							right: 5,
							top: 5,
							bottom: 5
						},
						style: {
							align: "center",
							fontFamily: "Arial Black",
							fontSize: 8 * dpr,
							fill: "#000000"
						}
					}).setDepth(2).setOrigin(0, 0.5).setText(name);
				
					this.score = this.make.text({
						x: this.halfWidth + (35 * dpr),
						y: (this.halfHeight - (90 * dpr)) + ((rowWidth * dpr) + (5 * dpr)),
						text: "0",
						padding: {
							left: 5,
							right: 5,
							top: 5,
							bottom: 5
						},
						style: {
							align: "center",
							fontFamily: "Arial Black",
							fontSize: 8 * dpr,
							fill: "#000000"
						}
					}).setDepth(2).setOrigin(0, 0.5).setText(score);
				}
			}
		}
	}

	var ns = Q.use("fish");

	var game = ns.game = {
		container: null,
		width: 480,
		height: 320,
		fps: 90,
		frames: 0,
		params: null,
		events: Q.supportTouch ? ["touchstart", "touchend"] : ["mousedown", "mouseup"],
		fireInterval: 20,
		fireCount: 0,
		time: 0
	};

	game.load = function (container) {

		var params = this.params = Q.getUrlParams();
		if (params.mode == undefined) params.mode = 2;
		if (params.fps) this.fps = params.fps;
		this.fireInterval = this.fps * 0.15;

		if (Q.isIpod || Q.isIphone || Q.isAndroid) {
			this.width = window.innerWidth; //980;
			this.height = window.innerHeight; //545;
			Q.addMeta({
				name: "viewport",
				content: "user-scalable=no"
			});
		} else {
			Q.addMeta({
				name: "viewport",
				content: "user-scalable=no, initial-scale=1.0, minimum-scale=1, maximum-scale=1"
			});
			this.width = Math.max(1024, window.innerWidth);
			this.height = Math.max(768, window.innerHeight);
		}

		if (params.width) this.width = Number(params.width) || this.width;
		if (params.height) this.height = Number(params.height) || this.height;


		this.container = container || Q.getDOM("container");
		this.container.style.overflow = "hidden";
		this.container.style.width = this.width + "px";
		this.container.style.height = this.height + "px";
		this.screenWidth = window.innerWidth;
		this.screenHeight = window.innerHeight;

		//load info
		var div = Q.createDOM("div", {
			innerHTML: "Loading game, please wait...<br>",
			style: {
				id: "loader",
				position: "absolute",
				width: this.width + "px",
				left: "0px",
				top: (this.height >> 1) + "px",
				textAlign: "center",
				color: "#fff",
				font: Q.isMobile ? 'bold 16px Đen' : 'bold 16px Times New Roman',
				textShadow: "0 2px 2px #111"
			}
		});
		this.container.appendChild(div);
		this.loader = div;

		//hide nav bar
		this.hideNavBar();
		if (Q.supportOrientation) {
			window.onorientationchange = function (e) {
				game.hideNavBar();
				if (game.stage) game.stage.updatePosition();
			};
		}

		if (document.addEventListener) {
			 document.addEventListener('fullscreenchange', enterHandler, false);
			 document.addEventListener('mozfullscreenchange', enterHandler, false);
			 document.addEventListener('MSFullscreenChange', enterHandler, false);
			 document.addEventListener('webkitfullscreenchange', enterHandler, false);
			 document.addEventListener('fullscreenchange', exitHandler, false);
			 document.addEventListener('mozfullscreenchange', exitHandler, false);
			 document.addEventListener('MSFullscreenChange', exitHandler, false);
			 document.addEventListener('webkitfullscreenchange', exitHandler, false);
		}

		function enterHandler() {
			if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
				  if (Q.isIpod || Q.isIphone || Q.isAndroid) {
					this.width = window.innerWidth; //980;
					this.height = window.innerHeight; //545;
					Q.addMeta({
						name: "viewport",
						content: "user-scalable=no"
					});
				} else {
					Q.addMeta({
						name: "viewport",
						content: "user-scalable=no, initial-scale=1.0, minimum-scale=1, maximum-scale=1"
					});
					this.width = Math.max(1024, window.innerWidth);
					this.height = Math.max(768, window.innerHeight);
				}
		
				if (params.width) this.width = Number(params.width) || this.width;
				if (params.height) this.height = Number(params.height) || this.height;
		
		
				this.container = container || Q.getDOM("container");
				this.container.style.overflow = "hidden";
				this.container.style.width = this.width + "px";
				this.container.style.height = this.height + "px";
				this.screenWidth = window.innerWidth;
				this.screenHeight = window.innerHeight;

				game.hideNavBar();
				if (game.stage) game.stage.updatePosition();
			}
		}

		function exitHandler() {
			if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
				  if (Q.isIpod || Q.isIphone || Q.isAndroid) {
					this.width = window.innerWidth; //980;
					this.height = window.innerHeight; //545;
					Q.addMeta({
						name: "viewport",
						content: "user-scalable=no"
					});
				} else {
					Q.addMeta({
						name: "viewport",
						content: "user-scalable=no, initial-scale=1.0, minimum-scale=1, maximum-scale=1"
					});
					this.width = Math.max(1024, window.innerWidth);
					this.height = Math.max(768, window.innerHeight);
				}
		
				if (params.width) this.width = Number(params.width) || this.width;
				if (params.height) this.height = Number(params.height) || this.height;
		
		
				this.container = container || Q.getDOM("container");
				this.container.style.overflow = "hidden";
				this.container.style.width = this.width + "px";
				this.container.style.height = this.height + "px";
				this.screenWidth = window.innerWidth;
				this.screenHeight = window.innerHeight;
				
				game.hideNavBar();
				if (game.stage) game.stage.updatePosition();
			}
		}

		//start load image
		var imgLoader = new Q.ImageLoader();
		imgLoader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
		imgLoader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
		imgLoader.load(ns.R.sources);
	};

	game.onLoadLoaded = function (e) {
		var content = "Loading game, please wait...<br>(" + Math.round(e.target.getLoadedSize() / e.target.getTotalSize() * 100) + "%)";
		this.loader.innerHTML = content;
	};

	game.onLoadComplete = function (e) {
		e.target.removeAllEventListeners();
		this.init(e.images);
	};

	game.init = function (images) {
		ns.R.init(images);
		this.startup();
	};

	game.startup = function () {
		var me = this;
		this.container.removeChild(this.loader);
		this.loader = null;

		if (Q.isWebKit && !Q.supportTouch) {
			document.body.style.webkitTouchCallout = "none";
			document.body.style.webkitUserSelect = "none";
			document.body.style.webkitTextSizeAdjust = "none";
			document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
		}

		var context = null;
		if (this.params.mode == 1) {
			var canvas = Q.createDOM("canvas", {
				id: "canvas",
				width: this.width,
				height: this.height,
				style: {
					position: "absolute"
				}
			});
			this.container.appendChild(canvas);
			this.context = new Q.CanvasContext({
				canvas: canvas
			});
		} else {
			this.context = new Q.DOMContext({
				canvas: this.container
			});
		}

		this.stage = new Q.Stage({
			width: this.width,
			height: this.height,
			context: this.context,
			update: Q.delegate(this.update, this)
		});

		var em = this.evtManager = new Q.EventManager();
		em.registerStage(this.stage, this.events, true, true);

		this.initUI();
		this.initPlayer();

		// this.testFish();
		// this.testFishDirection();
		// this.testFishALL();

		this.fishManager = new ns.FishManager(this.fishContainer);
		this.fishManager.makeFish();

		var timer = this.timer = new Q.Timer(1000 / this.fps);
		timer.addListener(this.stage);
		timer.addListener(Q.Tween);
		timer.start();

		this.showFPS();
	};

	game.setBtnLeaderboard = function (world) {
		var stat = false
		document.getElementById("look").addEventListener("click", function () {
			if (stat) {
				world.scene.stop("Leaderboard");
				getToBack()
				stat = !stat
			} else {
				world.scene.start("Leaderboard");
				getToFront()
				stat = !stat
			}
		})

		function getToBack() {
			document.getElementById("leaderboard").style.zIndex = "-1";
		}

		function getToFront() {
			document.getElementById("leaderboard").style.zIndex = "1";
		}
	}

	game.initUI = function () {
		this.bg = new Q.Bitmap({
			id: "bg",
			image: ns.R.mainbg,
			transformEnabled: false,
			rect: [0, 0, this.width, this.height],
		});

		this.fishContainer = new Q.DisplayObjectContainer({
			id: "fishContainer",
			width: this.width,
			height: this.height,
			eventChildren: false,
			transformEnabled: false
		});
		this.fishContainer.onEvent = function (e) {
			if (e.type == game.events[0] && game.fireCount >= game.fireInterval) {
				game.fireCount = 0;
				game.player.fire({
					x: e.eventX,
					y: e.eventY
				});
			}
		};

		this.bottom = new Q.Bitmap(ns.R.bottombar);
		this.bottom.id = "bottom";
		this.bottom.x = this.width - this.bottom.width >> 1;
		this.bottom.y = this.height - this.bottom.height + 2;
		this.bottom.transformEnabled = false;

		// this.stage.addChild(this.bg, this.fishContainer, this.bottom);
		this.stage.addChild(this.fishContainer, this.bottom);

	};

	game.initPlayer = function () {
		var coin = 1000; //Number(coinsss) || 1000;
		this.player = new ns.Player({
			id: "quark",
			coin: coin
		});
	};

	game.update = function (timeInfo) {
		this.frames++;
		this.fireCount++;
		this.fishManager.update();
	};

	game.testFish = function () {
		var num = this.params.num || 50,
			len = ns.R.fishTypes.length;
		for (var i = 0; i < num; i++) {
			var chance = Math.random() * (len - 1) >> 0;
			var index = Math.random() * chance + 1 >> 0;
			var type = ns.R.fishTypes[index];

			var fish = new ns.Fish(type);
			fish.x = Math.random() * this.width >> 0;
			fish.y = Math.random() * this.height >> 0;
			fish.moving = true;
			fish.rotation = Math.random() * 360 >> 0;
			fish.init();
			this.fishContainer.addChild(fish);
		}
	};

	game.testFishDirection = function () {
		var dirs = [0, 45, 90, 135, 180, 225, 270, 315];

		for (var i = 0; i < 8; i++) {
			var fish = new ns.Fish(ns.R.fishTypes[1]);
			fish.x = this.width >> 1;
			fish.y = this.height >> 1;
			fish.speed = 0.5;
			fish.setDirection(dirs[i]);
			fish.moving = true;
			this.stage.addChild(fish);
		}
	};

	game.testFishALL = function () {
		var sx = 100,
			sy = 50,
			y = 0,
			len = ns.R.fishTypes.length;
		for (var i = 0; i < len - 1; i++) {
			var type = ns.R.fishTypes[i + 1];
			var fish = new ns.Fish(type);
			if (i == 9) fish.x = sx;
			else fish.x = sx + Math.floor(i / 5) * 200;
			if (i == 9) y = sy + 320;
			else if (i % 5 == 0) y = sy;
			fish.y = y + (i % 5) * 20;
			y += fish.height;
			fish.update = function () {};
			this.stage.addChild(fish);
		}
	};

	game.showFPS = function () {
		var me = this,
			fpsContainer = Quark.getDOM("fps");
		if (fpsContainer) {
			setInterval(function () {
				fpsContainer.innerHTML = "FPS:" + me.frames;
				me.frames = 0;
			}, 1000);
		}
	};

	game.hideNavBar = function () {
		window.scrollTo(0, 1);
	};

	function tglIndonesia() {
		var date = new Date();
		var tahun = date.getFullYear();
		var bulan = date.getMonth();
		var tanggal = date.getDate();
		var hari = date.getDay();
		var jam = date.getHours();
		var menit = date.getMinutes();
		var detik = date.getSeconds();
		switch (hari) {
			case 0:
				hari = "Minggu";
				break;
			case 1:
				hari = "Senin";
				break;
			case 2:
				hari = "Selasa";
				break;
			case 3:
				hari = "Rabu";
				break;
			case 4:
				hari = "Kamis";
				break;
			case 5:
				hari = "Jum'at";
				break;
			case 6:
				hari = "Sabtu";
				break;
		}
		switch (bulan) {
			case 0:
				bulan = "Januari";
				break;
			case 1:
				bulan = "Februari";
				break;
			case 2:
				bulan = "Maret";
				break;
			case 3:
				bulan = "April";
				break;
			case 4:
				bulan = "Mei";
				break;
			case 5:
				bulan = "Juni";
				break;
			case 6:
				bulan = "Juli";
				break;
			case 7:
				bulan = "Agustus";
				break;
			case 8:
				bulan = "September";
				break;
			case 9:
				bulan = "Oktober";
				break;
			case 10:
				bulan = "November";
				break;
			case 11:
				bulan = "Desember";
				break;
		}
		var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
		var tampilWaktu = jam + ":" + menit + ":" + detik;
		return tampilTanggal + " " + tampilWaktu
	}

})();

