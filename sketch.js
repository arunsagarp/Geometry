let poi=[];
let slider;
function setup() {
	createCanvas(800, 500);
	slider = createSlider(4,20,4);
}

function draw() {
	background(0);
	translate(400,250)
	let angle = (TWO_PI)/slider.value();
	let radius = 200;
	for(let i=0;i<slider.value();i++){	
		poi[i] = {x:radius * cos(angle*(i+1)), y:radius * sin(angle*(i+1))}	

	}
	console.log(poi)
	stroke(255);
	noFill();
	for (let i=0;i<slider.value();i++){
		for (let j=i+1;j<slider.value();j++){
			line(poi[i].x,poi[i].y,poi[j].x,poi[j].y)
		}
	}
	translate(200,-200)
	textSize(32);
	text('No of side '+slider.value(), 10, 30);

}