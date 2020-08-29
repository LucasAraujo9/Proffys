// DADOS
const proffys = [
    {
        name: "Lucas Araujo",
        avatar: "https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/83292418_3280573061969940_3273507464649113600_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeF8Cp2GWiAzOnOoUdSD8YxnSorvoSomeZ5Kiu-hKiZ5nl5c_Akm_lUh7MkIpOFOUMV2X9BYwQeiZ14xtAA7EBCD&_nc_ohc=OD8OindkvMsAX-ZXQE9&_nc_ht=scontent-gru1-1.xx&oh=ff6ef56e8863a66c6087d43914aa8345&oe=5F59A172",
        whatsapp: "949171522", 
        bio :"Entusiasta das melhores tecnologias de programação avançada.Apaixonado por quebrar a cabeça tentando resolver problemas pessoais e da empresa em que trabalha.", 
        subject: "Programador", 
        cost: "2000", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    {
        name: "Natalia Gabrieli",
        avatar: "https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/99427223_1946771315456508_5880462126950121472_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeFwfQHdWesltYdKc91xdUPnZdVqeFK96nVl1Wp4Ur3qdQAGEoYWmkDZA-hTNL_lRok9hrYGpVfmNkkhj0fcEEp3&_nc_ohc=r8ZpHYl6PWMAX-xq2_g&_nc_ht=scontent-gru1-1.xx&oh=5e34b257af55f51edcbf53b0eb20a998&oe=5F59927A",
        whatsapp: "949171522", 
        bio :"Uma das mais de 8 mil enfermeiros(as) que trabalham duro com Médicos Sem Fronteiras (MSF) em todo o mundo, salvando vidas e oferecendo ajuda médica a quem mais precisa.", 
        subject: "Enfermeira", 
        cost: "2000", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "949171522", 
        bio :"Uma das mais de 8 mil enfermeiros(as) que trabalham duro com Médicos Sem Fronteiras (MSF) em todo o mundo, salvando vidas e oferecendo ajuda médica a quem mais precisa.", 
        subject: "Enfermeira", 
        cost: "2000", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    }
]

const subjects = [
    "Artes", 
    "Biologia", 
    "Ciência", 
    "Educação Fésica", 
    "Física", 
    "Geografia", 
    "História", 
    "Matemática", 
    "Português", 
    "Química", 
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]



// FUNCIONALIDADES

function getSubject(subjectNumber){
    const position = +subjectNumber
    return subjects[position]
} 

function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy(req, res){
    const filters =  req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res){ 
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    // se tiver dados (data)
    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    // se não, mostrar a pagina

    return res.render("give-classes.html", {subjects, weekdays})
}

//SERVIDOR
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// INICIO E CONFIG DO SERVIDOR
server
//configyrar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplcação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//START DO SERVIDOR
.listen(5500) 