var score=0
function preload(){
  greetingbg=loadImage("./assets/background.png")
  frontbg=loadImage("./assets/frontbg.webp")
  image1=loadImage("./assets/image1.jpg")
  image2=loadImage("./assets/image2.png")
  image3=loadImage("./assets/image3.jpg")
  image4=loadImage("./assets/image4.webp")
  image5=loadImage("./assets/image5.png")
  wrongSound=loadSound("./assets/Wrong.mp3")
  correctSound=loadSound("./assets/Correct.wav")
  image6=loadImage("./assets/image6.jpg")
  image7=loadImage("./assets/image7.png")
  image8=loadImage("./assets/image8.jpg")
}


function setup() {
 createCanvas(windowWidth,windowHeight)
 background(frontbg)
 push()
 textSize(90)
 fill("black")
 textStyle(ITALIC)
 stroke("white")
 strokeWeight(3)
 text("How well do you know Rajasthan?",70,100)
 pop()

 textSize(30)
 fill("black")
 textStyle(BOLD)
 text("Enter your name:",400,300)

 login=createInput("")
 login.size(180,30)
 login.position(700,270)

 button=createButton("Submit")
 button.style("background-color","red")
 button.style("font-size","25px")
 button.position(windowWidth/2-100,windowHeight/2)
 button.mousePressed(()=>{
  name1=login.value()
  if(name1===""){
    alert("Please enter your name")
  }
  else{
    button.mouseClicked(greeting)
  }
 })


}
function greeting(){
  background (greetingbg)
  login.hide()
  button.hide()
  name1=login.value()
 greeting=createElement("h1")
 greeting.html("Hello "+name1+ "  !!")
 greeting.style("font-size","50px")
 greeting.position(windowWidth/2-200, windowHeight/2-200)
 button1=createButton("Start Here")
 button1.style("background-color","blue")
 button1.style("font-size","25px")
 button1.position(windowWidth/2-100,windowHeight/2)
 button1.mouseClicked(question1)
}

function question1(){
  background(image1)
  greeting.hide()
  button1.hide()
  Q1=createElement("h1")
  Q1.html("Q1.Who is the Cheif Minister of Rajasthan?")
  Q1.style("font-size","50px")
  Q1.position(windowWidth/2-450, windowHeight/2-200)
 Q1A1=createButton("a).Shri Bhupendra Patel")
 Q1A1.style("background-color","white")
 Q1A1.style("color","black")
 Q1A1.style("font-size","35px")
 Q1A1.position(windowWidth/2-500,windowHeight/2)
 Q1A1.mouseClicked(Q1Option1)

 Q1A2=createButton("b).Shri Ashok Gehlot")
 Q1A2.style("background-color","white")
 Q1A2.style("color","black")
 Q1A2.style("font-size","35px")
 Q1A2.position(windowWidth/2-500,windowHeight/2+100)
 Q1A2.mouseClicked(Q1Option2)

 Q1A3=createButton("c).Shri Eknath Shinde")
 Q1A3.style("background-color","white")
 Q1A3.style("color","black")
 Q1A3.style("font-size","35px")
 Q1A3.position(windowWidth/2+200,windowHeight/2)
 Q1A3.mouseClicked(Q1Option3)

 Q1A4=createButton("d).Shri Arvind Kejriwal")
 Q1A4.style("background-color","white")
 Q1A4.style("color","black")
 Q1A4.style("font-size","35px")
 Q1A4.position(windowWidth/2+200,windowHeight/2+100)
 Q1A4.mouseClicked(Q1Option4)

 button2=createButton("Next Question")
 button2.style("background-color","blue")
 button2.style("font-size","25px")
 button2.position(windowWidth/2+500,windowHeight-100)
 button2.mouseClicked(question2)

}
function  Q1Option1(){
  Q1A1.style("background-color","red")
  Q1A2.style("background-color","green")
  Q1A1.attribute('disabled','')
  Q1A2.attribute('disabled','')
  Q1A3.attribute('disabled','')
  Q1A4.attribute('disabled','')
  wrongSound.play()

}
function  Q1Option2(){
  Q1A2.style("background-color","green")
  Q1A1.attribute('disabled','')
  Q1A2.attribute('disabled','')
  Q1A3.attribute('disabled','')
  Q1A4.attribute('disabled','')
  correctSound.play()
  score+=1

}
function  Q1Option3(){
  Q1A3.style("background-color","red")
  Q1A2.style("background-color","green")
  Q1A1.attribute('disabled','')
  Q1A2.attribute('disabled','')
  Q1A3.attribute('disabled','')
  Q1A4.attribute('disabled','')
  wrongSound.play()
}

function  Q1Option4(){
  Q1A4.style("background-color","red")
  Q1A2.style("background-color","green")
  Q1A1.attribute('disabled','')
  Q1A2.attribute('disabled','')
  Q1A3.attribute('disabled','')
  Q1A4.attribute('disabled','')
  wrongSound.play()
}
function question2(){
  background(image2)
  Q1.hide()
  Q1A1.hide()
  Q1A2.hide()
  Q1A3.hide()
  Q1A4.hide()
  button2.hide()
  Q2=createElement("h1")
  Q2.html("Q2.'Rajasthan Day' is celebrated on?")
  Q2.style("font-size","45px")
  Q2.position(windowWidth/2-400, windowHeight/2-350)
 Q2A1=createButton("a).30th March")
 Q2A1.style("background-color","white")
 Q2A1.style("color","black")
 Q2A1.style("font-size","35px")
 Q2A1.position(windowWidth/2-500,windowHeight/2)
 Q2A1.mouseClicked(Q2Option1)

 Q2A2=createButton("b).18th March")
 Q2A2.style("background-color","white")
 Q2A2.style("color","black")
 Q2A2.style("font-size","35px")
 Q2A2.position(windowWidth/2-500,windowHeight/2+100)
 Q2A2.mouseClicked(Q2Option2)

 Q2A3=createButton("c).1st April")
 Q2A3.style("background-color","white")
 Q2A3.style("color","black")
 Q2A3.style("font-size","35px")
 Q2A3.position(windowWidth/2+250,windowHeight/2)
 Q2A3.mouseClicked(Q2Option3)

 Q2A4=createButton("d).28th February")
 Q2A4.style("background-color","white")
 Q2A4.style("color","black")
 Q2A4.style("font-size","35px")
 Q2A4.position(windowWidth/2+250,windowHeight/2+100)
 Q2A4.mouseClicked(Q2Option4)

 button3=createButton("Next Question")
 button3.style("background-color","blue")
 button3.style("font-size","25px")
 button3.position(windowWidth/2+500,windowHeight-100)
 button3.mouseClicked(question3)

}
function  Q2Option1(){
  Q2A1.style("background-color","green")
  Q2A1.attribute('disabled','')
  Q2A2.attribute('disabled','')
  Q2A3.attribute('disabled','')
  Q2A4.attribute('disabled','')
  correctSound.play()
  score+=1

}
function  Q2Option2(){
  Q2A2.style("background-color","red")
  Q2A1.style("background-color","green")
  Q2A1.attribute('disabled','')
  Q2A2.attribute('disabled','')
  Q2A3.attribute('disabled','')
  Q2A4.attribute('disabled','')
  wrongSound.play()

}
function  Q2Option3(){
  Q2A3.style("background-color","red")
  Q2A1.style("background-color","green")
  Q2A1.attribute('disabled','')
  Q2A2.attribute('disabled','')
  Q2A3.attribute('disabled','')
  Q2A4.attribute('disabled','')
  wrongSound.play()
}

function Q2Option4(){
  Q2A4.style("background-color","red")
  Q2A1.style("background-color","green")
  Q2A1.attribute('disabled','')
  Q2A2.attribute('disabled','')
  Q2A3.attribute('disabled','')
  Q2A4.attribute('disabled','')
  wrongSound.play()
}
function question3(){
  background(image3)
  Q2.hide()
  Q2A1.hide()
  Q2A2.hide()
  Q2A3.hide()
  Q2A4.hide()
  button3.hide()
  Q3=createElement("h1")
  Q3.html("Q3.How many districts of Rajasthan shares a border with Pakistan?")
  Q3.style("font-size","45px")
  Q3.position(windowWidth/2-500, windowHeight/2-200)
 Q3A1=createButton("a).1")
 Q3A1.style("background-color","white")
 Q3A1.style("color","black")
 Q3A1.style("font-size","35px")
 Q3A1.position(windowWidth/2-400,windowHeight/2)
 Q3A1.mouseClicked(Q3Option1)

 Q3A2=createButton("b).8")
 Q3A2.style("background-color","white")
 Q3A2.style("color","black")
 Q3A2.style("font-size","35px")
 Q3A2.position(windowWidth/2-400,windowHeight/2+100)
 Q3A2.mouseClicked(Q3Option2)

 Q3A3=createButton("c).4")
 Q3A3.style("background-color","white")
 Q3A3.style("color","black")
 Q3A3.style("font-size","35px")
 Q3A3.position(windowWidth/2+300,windowHeight/2)
 Q3A3.mouseClicked(Q3Option3)

 Q3A4=createButton("d).None")
 Q3A4.style("background-color","white")
 Q3A4.style("color","black")
 Q3A4.style("font-size","35px")
 Q3A4.position(windowWidth/2+300,windowHeight/2+100)
 Q3A4.mouseClicked(Q3Option4)

 button4=createButton("Next Question")
 button4.style("background-color","blue")
 button4.style("font-size","25px")
 button4.position(windowWidth/2+500,windowHeight-100)
 button4.mouseClicked(question4)

}
function  Q3Option1(){
  Q3A1.style("background-color","red")
  Q3A3.style("background-color","green")
  Q3A1.attribute('disabled','')
  Q3A2.attribute('disabled','')
  Q3A3.attribute('disabled','')
  Q3A4.attribute('disabled','')
  wrongSound.play()

}
function  Q3Option2(){
  Q3A2.style("background-color","red")
  Q3A3.style("background-color","green")
  Q3A1.attribute('disabled','')
  Q3A2.attribute('disabled','')
  Q3A3.attribute('disabled','')
  Q3A4.attribute('disabled','')
  wrongSound.play()

}
function  Q3Option3(){
  Q3A3.style("background-color","green")
  Q3A1.attribute('disabled','')
  Q3A2.attribute('disabled','')
  Q3A3.attribute('disabled','')
  Q3A4.attribute('disabled','')
  correctSound.play()
  score+=1
}

function Q3Option4(){
  Q3A4.style("background-color","red")
  Q3A3.style("background-color","green")
  Q3A1.attribute('disabled','')
  Q3A2.attribute('disabled','')
  Q3A3.attribute('disabled','')
  Q3A4.attribute('disabled','')
  wrongSound.play()
}
function question4(){
  background(image4)
  Q3.hide()
  Q3A1.hide()
  Q3A2.hide()
  Q3A3.hide()
  Q3A4.hide()
  button4.hide()
  Q4=createElement("h1")
  Q4.html("Q4.The biggest salt lake of Rajasthan is?")
  Q4.style("font-size","45px")
  Q4.position(windowWidth/2-400, windowHeight/2-200)
 Q4A1=createButton("a).Pushkar Lake")
 Q4A1.style("background-color","white")
 Q4A1.style("color","black")
 Q4A1.style("font-size","35px")
 Q4A1.position(windowWidth/2-450,windowHeight/2)
 Q4A1.mouseClicked(Q4Option1)

 Q4A2=createButton("b).Kaylana Lake")
 Q4A2.style("background-color","white")
 Q4A2.style("color","black")
 Q4A2.style("font-size","35px")
 Q4A2.position(windowWidth/2-450,windowHeight/2+100)
 Q4A2.mouseClicked(Q4Option2)

 Q4A3=createButton("c).Udai Sagar Lake")
 Q4A3.style("background-color","white")
 Q4A3.style("color","black")
 Q4A3.style("font-size","35px")
 Q4A3.position(windowWidth/2+200,windowHeight/2)
 Q4A3.mouseClicked(Q4Option3)

 Q4A4=createButton("d).Sambhar Lake")
 Q4A4.style("background-color","white")
 Q4A4.style("color","black")
 Q4A4.style("font-size","35px")
 Q4A4.position(windowWidth/2+200,windowHeight/2+100)
 Q4A4.mouseClicked(Q4Option4)

 button5=createButton("Next Question")
 button5.style("background-color","blue")
 button5.style("font-size","25px")
 button5.position(windowWidth/2+500,windowHeight-100)
 button5.mouseClicked(question5)

}
function  Q4Option1(){
  Q4A1.style("background-color","red")
  Q4A4.style("background-color","green")
  Q4A1.attribute('disabled','')
  Q4A2.attribute('disabled','')
  Q4A3.attribute('disabled','')
  Q4A4.attribute('disabled','')
  wrongSound.play()
}
function  Q4Option2(){
  Q4A2.style("background-color","red")
  Q4A4.style("background-color","green")
  Q4A1.attribute('disabled','')
  Q4A2.attribute('disabled','')
  Q4A3.attribute('disabled','')
  Q4A4.attribute('disabled','')
  wrongSound.play()
}

function  Q4Option3(){
  Q4A3.style("background-color","red")
  Q4A4.style("background-color","green")
  Q4A1.attribute('disabled','')
  Q4A2.attribute('disabled','')
  Q4A3.attribute('disabled','')
  Q4A4.attribute('disabled','')
  wrongSound.play()
}

function Q4Option4(){
  Q4A4.style("background-color","green")
  Q4A1.attribute('disabled','')
  Q4A2.attribute('disabled','')
  Q4A3.attribute('disabled','')
  Q4A4.attribute('disabled','')
  correctSound.play()
  score+=1
}
function question5(){
  background(image5)
  Q4.hide()
  Q4A1.hide()
  Q4A2.hide()
  Q4A3.hide()
  Q4A4.hide()
  button5.hide()
  Q5=createElement("h1")
  Q5.html("Q5.Which city of Rajasthan is known as 'Camel Country'?")
  Q5.style("font-size","45px")
  Q5.position(windowWidth/2-400, windowHeight/2-200)
 Q5A1=createButton("a).Jaisalmer")
 Q5A1.style("background-color","white")
 Q5A1.style("color","black")
 Q5A1.style("font-size","35px")
 Q5A1.position(windowWidth/2-450,windowHeight/2)
 Q5A1.mouseClicked(Q5Option1)

 Q5A2=createButton("b).Bikaner")
 Q5A2.style("background-color","white")
 Q5A2.style("color","black")
 Q5A2.style("font-size","35px")
 Q5A2.position(windowWidth/2-450,windowHeight/2+100)
 Q5A2.mouseClicked(Q5Option2)

 Q5A3=createButton("c).Jodhpur")
 Q5A3.style("background-color","white")
 Q5A3.style("color","black")
 Q5A3.style("font-size","35px")
 Q5A3.position(windowWidth/2+200,windowHeight/2)
 Q5A3.mouseClicked(Q5Option3)

 Q5A4=createButton("d).Jaipur")
 Q5A4.style("background-color","white")
 Q5A4.style("color","black")
 Q5A4.style("font-size","35px")
 Q5A4.position(windowWidth/2+200,windowHeight/2+100)
 Q5A4.mouseClicked(Q5Option4)

 button6=createButton("Submit")
 button6.style("background-color","blue")
 button6.style("font-size","25px")
 button6.position(windowWidth/2+500,windowHeight-100)
 button6.mouseClicked(scorePage)

}
function  Q5Option1(){
  Q5A1.style("background-color","red")
  Q5A2.style("background-color","green")
  Q5A1.attribute('disabled','')
  Q5A2.attribute('disabled','')
  Q5A3.attribute('disabled','')
  Q5A4.attribute('disabled','')
  wrongSound.play()
}
function  Q5Option2(){
  Q5A2.style("background-color","green")
  Q5A1.attribute('disabled','')
  Q5A2.attribute('disabled','')
  Q5A3.attribute('disabled','')
  Q5A4.attribute('disabled','')
  correctSound.play()
  score+=1
}

function  Q5Option3(){
  Q5A3.style("background-color","red")
  Q5A2.style("background-color","green")
  Q5A1.attribute('disabled','')
  Q5A2.attribute('disabled','')
  Q5A3.attribute('disabled','')
  Q5A4.attribute('disabled','')
  wrongSound.play()
}

function Q5Option4(){
  Q5A2.style("background-color","green")
  Q5A4.style("background-color","red")
  Q5A1.attribute('disabled','')
  Q5A2.attribute('disabled','')
  Q5A3.attribute('disabled','')
  Q5A4.attribute('disabled','')
  wrongSound.play()
}
function scorePage(){
  background("white")
  Q5.hide()
  Q5A1.hide()
  Q5A2.hide()
  Q5A3.hide()
  Q5A4.hide()
  button6.hide()
  if(score===1 || score===2 || score===0){
    background(image6)
    text("Your score is: "+score,1200,60)
  }
  else if(score===3 || score===4){
    background(image7)
    text("Your score is: "+score,1200,60)
  }
  else{
    background(image8)
    text("Your score is: "+score,1200,60)
  }
}