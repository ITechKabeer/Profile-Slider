document.title = "Saylani Mass IT Traning"

function setstyle(elem,style){
    Object.assign(elem.style, style)
}

const persons = [
    {
        name : "Saylani Mass IT Traning",
        position : "Web Development Batch 17",
        img : "assets/img/SMIT.jpg",
        description : "Meet the highly motivated students of <mark>Saylani Mass IT Training (SMIT) Batch 17!</mark> These future developers are currently immersed in a rigorous program focused on <b>MERN Stack Development (MongoDB, Express.js, React, Node.js)</b>. Training at the state-of-the-art <b>Zaitoon Ashraf IT Park</b>, they are mastering the skills needed to build complete, full-stack web applications. This intensive hands-on experience is preparing them to immediately launch successful careers and become impactful innovators in the highly competitive world of technology."
    },
    {
        name : "Kabeer Hussain",
        position : "Designer || Mern Stack Learner",
        img : "assets/img/kabeer.jpg",
        description : "I am a dedicated <mark>MERN Stack learner</mark>, currently focusing on mastering <b>JavaScript</b>. I have been consistently learning and practicing coding, building a strong foundation in both front-end and back-end development. My goal is to create dynamic and interactive web applications. I enjoy solving problems and applying my knowledge to real-world projects. Continuously improving, I am committed to becoming a skilled <b>full-stack developer</b>."
    },
    {
        name : "Muzammil Ahmed",
        position : "Trader || Mern Stack Learner",
        img : "assets/img/muzammil.jpg",
        description : "A dedicated trader currently immersed in <strong>web development</strong> training at <b>Saylani</b>. Focused on building strong technical skills and mastering coding. Applying the discipline and analytical focus gained from finance to accelerate his learning in technology. His ultimate goal is to effectively merge his financial insight with his newly acquired technical expertise to create functional and impactful web applications."
    },
    {
        name : "Waleed Farrukh",
        position : "Designer || Mern Stack Learner",
        img : "assets/img/waleeed.jpg",
        description : "I am <b>Waleed</b>, a creative professional blending design and coding expertise. I currently work as a graphic designer, creating impactful visual content. Simultaneously, I am dedicatedly studying <b>web development</b> at <b>Saylani</b>. My goal is to merge my design skills with robust front-end development capabilities. I am committed to creating beautiful, functional, and user-centered web experiences."
    },
    {
        name : "Meelad Raza",
        position : "Frontened Developer || Mern Stack Learner",
        img : "assets/img/meelad.jpg",
        description : "I’m a passionate <b>Frontend Developer</b> focused on building clean, responsive, and user-friendly web experiences. With a strong eye for detail and a love for modern web technologies, I turn ideas into interactive and visually engaging websites. Always eager to learn and grow, I aim to craft digital solutions that make a real impact."
    },
    {
        name : "Abdul Ghaffar",
        position : "12th Year Student || Mern Stack Learner",
        img : "assets/img/ghaffar.png",
        description : "A highly driven individual fully committed to learning <b>web development</b>. Currently enhancing technical skills through intensive training at <b>Saylani Mass IT Traning</b>. Focused on mastering key <b>programming languages</b> and modern frameworks. Dedicated to building robust and scalable web applications. Committed to applying acquired knowledge to solve real-world digital challenges."
    },
    {
        name : "Ibad Ahmed",
        position : "Frontened Developer || Mern Stack Learner",
        img : "assets/img/ibad.jpg",
        description : "A highly motivated individual dedicated to mastering the art of <b>web development</b>. Currently engaged in intensive training and skill acquisition at <b>SMIT</b>. Actively building a robust foundation in modern coding languages and frameworks. Focused on creating responsive and impactful web solutions. Committed to professional growth and becoming a successful, innovative developer."
    }
]

let value = 0; 

const body = document.body
setstyle(body, {
    width : "100%",
    minHeight : "100vh",
    background: "linear-gradient(180deg, #ADD8E6, #FFFFFF)",
    display: "flex",
    alignItems : "center",
    justifyContent : "center"
})

const container = document.createElement("div");
setstyle(container, {
    width : "auto",
    maxWidth : "500px",
    height : "auto",
    background: "#ffffff",
    padding: "30px",
    margin : "20px",
    border : "none",
    boxShadow : "0 0 10px rgba(0, 0, 0, 0.5)",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : "20px"
})
body.append(container)

let divimg = document.createElement("div")
setstyle(divimg, {
    width : "130px",
    height : "130px",
    borderRadius: "50%",
    overflow : "hidden",
})
container.append(divimg)

let img = document.createElement("img")
img.src = persons[value].img
setstyle(img, {
    width : "100%",
    height : "100%",
    objectFit : "cover",
    objectPosition : "top",
    transition : "all 0.8s ease-in-out"
})
divimg.append(img)

let heading = document.createElement("h1")
heading.innerHTML = persons[value].name;
setstyle(heading, {
    width : "100%",
    height : "100%",
    fontSize: "30px",
    fontFamily : "'Nunito Sans', sans-serif",
    fontWeight : "600",
    textAlign : "center",
    marginTop :"15px",
    transition : "all 0.8s ease-in-out"
})
container.append(heading)

let role = document.createElement("h2")
role.innerHTML = persons[value].position;
setstyle(role, {
    width : "100%",
    height : "100%",
    fontSize: "25px",
    fontFamily : "'Nunito Sans', sans-serif",
    fontWeight : "500",
    color : "#0d5ebbff",
    textAlign : "center",
    marginTop :"15px",
    transition : "all 0.8s ease-in-out"
})
container.append(role)

let para = document.createElement("p")
para.innerHTML = persons[value].description
setstyle(para, {
    width : "100%",
    height : "100%",
    fontSize: "16px",
    fontFamily : "'Nunito Sans', sans-serif",
    fontWeight : "500",
    color : "#444b52ff",
    textAlign : "center",
    marginTop :"15px",
    transition : "all 0.8s ease-in-out"
})
container.append(para)

let buttondiv = document.createElement("div")
setstyle(buttondiv, {
    width : "100%",
    height : "auto",
    marginTop : "15px",
    display : "flex",
    alignItems : "center",
    justifyContent : "space-between",
})
container.append(buttondiv)

const previousbutton = document.createElement("div")
previousbutton.innerHTML = `<i class="bi bi-caret-left-fill"></i>`
setstyle(previousbutton, {
    color : "#0d5ebbff",
    fontSize : "30px",
    transtition : "all 0.3s ease-in-out",
})
previousbutton.addEventListener("mouseover", () => {
    previousbutton.style.opacity = "0.8";
    previousbutton.style.transform = "scale(0.95)";
})
previousbutton.addEventListener("mouseout", () => {
    previousbutton.style.opacity = "1";
    previousbutton.style.transform = "none";
})
previousbutton.addEventListener('click', () => {
    previouslide()
})
buttondiv.append(previousbutton)

const nextbutton = document.createElement("div")
nextbutton.innerHTML = `<i class="bi bi-caret-right-fill"></i>`
setstyle(nextbutton, {
    color : "#0d5ebbff",
    fontSize : "30px",
})
nextbutton.addEventListener("mouseover", () => {
    nextbutton.style.opacity = "0.8";
    nextbutton.style.transform = "scale(0.95)";
})
nextbutton.addEventListener("mouseout", () => {
    nextbutton.style.opacity = "1";
    nextbutton.style.transform = "none";
})
nextbutton.addEventListener('click', () => {
    nextslide()
})
buttondiv.append(nextbutton)

let footer = document.createElement("footer")
footer.innerHTML = "Made By Kabeer Hussain ❤️ || Mern Stack Learner"
setstyle(footer,{
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    color: "#222",
    marginTop: "15px",
    marginBottom: "0",
    transition: "all 300ms ease-in-out"
})
container.append(footer)

function updateSlide(){
    img.src = persons[value].img
    heading.innerHTML = persons[value].name;
    role.innerHTML = persons[value].position;
    para.innerHTML = persons[value].description  
}

function previouslide(){
    value--
    if(value < 0){
        value = persons.length -1
    }
    updateSlide()
    return
}
function nextslide(){
    value++
    if(value > persons.length -1){
        value = 0
    }
    updateSlide()
    return
}

function checkscreensize(){
    if(innerWidth <= 768){
        previousbutton.addEventListener("touchstart", () => {
        previousbutton.style.opacity = "0.8";
        previousbutton.style.transform = "scale(0.95)";
        })
        previousbutton.addEventListener("touchend", () => {
        previousbutton.style.opacity = "1";
        previousbutton.style.transform = "none";
        })
        nextbutton.addEventListener("touchstart", () => {
        nextbutton.style.opacity = "0.8";
        nextbutton.style.transform = "scale(0.95)";
        })
        nextbutton.addEventListener("touchend", () => {
        nextbutton.style.opacity = "1";
        nextbutton.style.transform = "none";
        })
    }else{
        previousbutton.addEventListener("mouseover", () => {
        previousbutton.style.opacity = "0.8";
        previousbutton.style.transform = "scale(0.95)";
        })
        previousbutton.addEventListener("mouseout", () => {
        previousbutton.style.opacity = "1";
        previousbutton.style.transform = "none";
        })
        nextbutton.addEventListener("mouseover", () => {
        nextbutton.style.opacity = "0.8";
        nextbutton.style.transform = "scale(0.95)";
        })
        nextbutton.addEventListener("mouseout", () => {
        nextbutton.style.opacity = "1";
        nextbutton.style.transform = "none";
        })
    }
}

checkscreensize()
window.addEventListener("resize" , checkscreensize)