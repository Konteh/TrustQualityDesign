
const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
app.post('/', (req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: '',// Your Email,
            pass: '' // Your Password
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: , // Receiver Password
        subject: `message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (error, info)=>{
       if(error){
           console.log('error')
           res.send('error')
       }
       else{
           console.log('Email sent' + info.response)
           res.send('success');
           res.render('contact', {msg:'Email has been sent'});
       }
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})