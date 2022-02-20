    let imgArr = ["awk.png","corey.png","arch.png","gun.jpg","horse.png", "windowsME.webp", "kube_moment.jpg", "e.png"];
	let txtArr = ["Every FUCKING time, man.", "chair.png", "My ICBM will ONLY run:", "*Whenever I see a computer*", "Hey man, don't alert the-", "'We got Linux at home.' *Linux at Home*", "Oops, I OOM'ed :E", "When you @channel in #general and the RTPs and the when you and the RTPs when in general you @channel @channel in the @channel and the @channel in my RTP"]

    function displayImg(){
        let num = Math.floor(Math.random() * (imgArr.length));
        return { image : "res/"+imgArr[num], caption : txtArr[num]};
    }

	function notAuthed() {
		let image = displayImg();
		document.getElementById("plugImage").src = image.image;
		document.getElementById("sponsorMsg").textContent = image.caption;
		document.getElementById("plugImage").style = "height: 200px;"
	}

	function notAuthedVert() {
		document.getElementById("plugVert").style = "display:none"; // Fuck it, just hide the ad.
		//document.getElementById("vimOnFire").style = "align: center";
	}

	function wallpaper() {
		let wallpapers = [ "connectwork.png", "diagonal-squares.png", "folk-pattern-black.png", "memphis-mini-dark.png" ];
        let num = Math.floor(Math.random() * (wallpapers.length));
		
		document.body.style.backgroundImage = "url('res/patterns/" + wallpapers[num] + "')";
	}

	async function enjoyingYourStay() {
		await new Promise(r => setTimeout(r, 4000));
		let promptLine = "wilnil@boalisk ~/ $: # ";
		let stay = [ "Enjoying your stay?", "I sure hope so, I worked very hard on this :)", "So, what do you like to do on the weekends?", "Maybe we could catch a movie?", "Or write some shitty Rust code?"];
		let computerRant = [ "You know, I really hate computers.", "Like, a lot.", "I honestly don't fucking know why I became a CE.", "This is bullshit.", "Fuck you, RIT.", "Eat my ass."];

		series = [stay, computerRant];

        let num = Math.floor(Math.random() * (series.length));
		
		let rant = series[num];
		
		let keystrokePeriod = 50; // Delay between keystrokes. Smaller = type faster.

		let cmdPrompt = document.getElementById("cmdPrompt");
		for (let i = 0; i < stay.length; i++) {
			let paragraph = document.createElement("p");
			cmdPrompt.appendChild(paragraph);
			paragraph.textContent += promptLine;
			cmdPrompt.scrollTop = cmdPrompt.scrollHeight - cmdPrompt.clientHeight;
			for (let j = 0; j < rant[i].length; j++) { 
				paragraph.textContent += rant[i][j];
				await new Promise(r => setTimeout(r, keystrokePeriod));
			}
			await new Promise(r => setTimeout(r, 2000));
		}
	}
