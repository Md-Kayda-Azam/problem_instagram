import nodemailer from 'nodemailer';


// create Email
export const sendEmail = async ( to, subject, text) => {

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "ac45beabf03b61",
              pass: "84808dc36539a4"
            }
          });


      await   transport.sendMail({
            from : 'mdkaydaazam1@gmail.com',
            to : to,
            subject : subject,
            text : text
         })


    } catch (error) {
        
    }
}