var express = require('express')
var app = express()
var cors = require("cors")
var bodyParser = require("body-parser")

var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.use(express.json())
app.use(urlencodedParser)


//---------------------------Home------------------------

app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/index.html");
});

//---------------------------Result------------------------

app.post('/',(req,res)=>{

	const num1 = req.body.num1;
	const num2 = req.body.num2;
	const h = num1*num1;
	const w = num2;
	const result = w/h;
	res.send("<h1 style='color:red; text-align:center;'>BMI is "+result+" kg/m2<br><br><a href='/'>BACK TO HOME</a><br><br>Copyright@praveensanpada.com</h1>");

});

//---------------------------404------------------------

app.get('*',(req,res)=>{
	res.send("404! Page Not Found....");
});

//---------------------------port------------------------

app.listen(8089);


