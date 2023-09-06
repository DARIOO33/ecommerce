const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body.email);
  const message = `
    Name : ${body.name} \r\n
    Email : ${body.email} \r\n
    Message : ${body.message} \r\n
  `
  const data = {
    to : "raptun635@gmail.com",
    from :"darioanwar3@gmail.com",
    subject : "Hire Dario Message",
    text : "dario4dev.netlify.app",
    html:`
     ${body.message}
     `
  }
  mail.send(data)
  res.status(200).json({ name: 'John Doe' })
  }