//node js
const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir:['views/partials']
})
//const res = require('express/lib/response')

const app = express()
app.use(express.static('public'))

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

const authUser = (req, res, next) =>{
    const auth = true;
    if(auth){
        next()
    }else{
        res.render('login')
    }
};

app.get('/',(req,res)=>{
    const nome = 'Test'
    res.render('home', {nome})
})

app.get('/alunos',(req,res)=>{

    const alunos = [
        {nome: ' gb ', beleza: ' alta '},
        {nome: ' feitosa ', beleza: ' alto '},
        {nome: ' leon ', beleza: ' mil grau '},
        {nome: ' rebeca ', beleza: ' beleza '},
        {nome: ' wesley ', beleza: ' nata '}
    ]
    
    const arrayAluno = alunos.map((aluno) =>{
        return aluno.nome
    })
    
    res.render('alunos', {arrayAluno, alunos})
})


app.get('/sobre',(req,res)=>{

    const cidades = [
        {nome: 'Bayeux', estado: 'Paraíba', populacao: '97.203'},

        {nome: 'João Pessoa', estado: 'Paraíba', populacao: '833.932'},

        {nome: 'Los Angeles', estado: 'Califórnia', populacao: '3,822 milhões'},

        {nome: 'Santa Rita', estado: 'Paraíba', populacao: '149.910'}
    ]

    res.render('sobre', {cidades})
})

app.get('/contatos',(req,res)=>{
    const github = "https://github.com/gbython1905"
    const youtube = "https://www.youtube.com/@leibky"
    const nome = 'Gabriel Pereira'
    res.render('contatos', {github, youtube, nome})

})

app.get('/login', (req,res) =>{
    res.render('login')
})

app.get('/blog', (req,res) =>{
    produtos = [
        {nome: 'Calça DJeans', preco: 700.00, desc: 'Calça DJeans Azul'},
    
        {nome: 'Camisa Polo', preco: 300.00, desc: 'Camisa Polo Verde'},
    
        {nome: 'Tênis Nike', preco: 1700.00, desc: 'Tênis Nike Edição Limitada'}
    ]
    
    res.render('blog', {produtos})
})

app.use(authUser);

app.listen(3000,()=>console.log(`Servidor funcionando em http://localhost:3000`))
