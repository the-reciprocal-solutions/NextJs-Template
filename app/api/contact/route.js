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
        user: 'kmuralikum2002@gmail.com',
        pass: "ljwp fvvo wqle bnaa",
      },
      secure: false,
    })
    const mailData = {
      from: 'kmuralikum2002@gmail.com',
      to: 'murali.k.cse.2019@snsct.org',
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
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
      res.redirect("/contact#200");
        console.log("Email sent: " + info)
        
    })
    return Response.json({msg:"email Sent"})
  }