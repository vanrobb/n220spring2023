function setup(){
    createCanvas(800,800);
    
    fill("#558392");
    noStroke();
    circle(400,400,775);
    //shadow
    fill("#75a6b5");
    ellipse(475, 400, 600,700 );
    ellipse(440, 400, 600,750 );
    ellipse(410, 400, 600,785 );
    ellipse(400, 400, 600,785 );
    ellipse(400, 390, 600,785 );
    beginShape();
    curveVertex(300, 755);
    curveVertex(265, 755);
    curveVertex(150, 650);
    curveVertex(75, 450);
    curveVertex(80, 285);
    curveVertex(125, 172);
    curveVertex(235, 40);
    curveVertex(235, 40);
    endShape();
    //eyes
    fill("#000000");
    circle(275,280,75);
    circle(615,225,75);
    //mouth
        //main shape
        fill("#434f99");
        beginShape();
        vertex(368, 410);
        vertex(537, 375);
        vertex(617, 435);
        vertex(617, 560);
        vertex(552, 625);
        vertex(344, 670);
        vertex(270, 630);
        vertex(275, 495);
        endShape();
        //tounge
        fill("#ac5a5c");
        quad(278,520, 270, 634, 345, 674, 485,642);
        stroke("#000000");
        strokeWeight(10);
        beginShape();
        curveVertex(275,520);
        curveVertex(275,520);
        curveVertex(375,515);
        curveVertex(410,520);
        curveVertex(420,525);
        curveVertex(435,535);
        curveVertex(455,550);
        curveVertex(470,570);
        curveVertex(480,605);
        curveVertex(480,642);
        curveVertex(480,642);
        endShape();
        //border
        stroke("#000000");
        strokeWeight(15);
        line(367, 411, 532, 375)
        line(615, 435, 615, 560)
        line(550, 625, 345, 670)
        line(270, 628, 275, 495)

        fill("#434f99");
        beginShape();
        curveVertex(250, 600);
        curveVertex(275, 495);
        curveVertex(290, 465);
        curveVertex(310, 445);
        curveVertex(340, 425);
        curveVertex(370, 410);
        curveVertex(390, 410);
        endShape();

        beginShape();
        curveVertex(535, 375);
        curveVertex(535, 375);
        curveVertex(575, 380);
        curveVertex(600, 400);
        curveVertex(610, 415);
        curveVertex(615, 435);
        curveVertex(615, 435);
        endShape();

        beginShape();
        curveVertex(615, 560);
        curveVertex(615, 560);
        curveVertex(612,578);
        curveVertex(607,594);
        curveVertex(585,615);
        curveVertex(550, 625);
        curveVertex(550, 625);
        endShape();
        fill("#ac5a5c");
        beginShape();
        curveVertex(345, 670);
        curveVertex(345, 670);
        curveVertex(312, 670);
        curveVertex(285, 660);
        curveVertex(275, 645);
        curveVertex(270, 630);
        curveVertex(270, 630);
        endShape();
    //border
    strokeWeight(25);
    noFill()
    circle(400,400,775);
    
}