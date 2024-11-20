import { sendEmail } from "@/utils/mail.utils"

export async function POST() {
    const sender = {
        name: 'beautybutler application',
        address:'no-reply@example.com'
    }
    const receipient =[{
        name: 'emmanuel',
        address: 'jonielsanni2@gmail.com'
    }]
    try {
        const result = await sendEmail ({
            sender,
            receipient,
            subject: 'welcome',
            message: 'you are welcome to our platform'
        })
        return Response.json({
            accepted: result.accepted
        })
    } catch (error){
        return Response.json({message: 'unable to send'}, {status: 500})

    }
}