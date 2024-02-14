export const POST =async(req) =>{
    require('dotenv').config()
    const body = await req.json()
    console.log("kkkkk",body);
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host : "smtp.gmail.com",
      port : 535,
      auth: {
        user: 'mailtrscbe@gmail.com',
        pass: "mquzkrnblouztdro",
      },
      secure: false,
    })
    const mailData = {
      from: 'mailtrscbe@gmail.com',
      to: 'navaindia.essensuals@gmail.com',
      subject: `Message From ${body.name}`,
    //   text: body.msg + " | Sent from: " + body.mail,
      html: `<h1>Toni & Guy Essensuals nava india</h1> 
      Name:${body.name}<br>
      Locality:${body.locality}<br>
      Mobile:${body.phone}<br>
      service:${body.service}<br>
      Time:${body.time}<br>
      Date:${body.date}<br>`
    }
    await new Promise(r=>{
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          r()
      })
    })
    return Response.json({msg:"email Sent"}) 
   
  }

  // user: 'mailtrscbe@gmail.com',
  // pass: "mquzkrnblouztdro",