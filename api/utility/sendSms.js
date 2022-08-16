import axios from "axios"


// send SMS 
export const sendSms = async (number, message) => {

    try {
        
        await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=Jm8VHHg7LKGtESut2XdM&type=text&number=${ number }&senderid=03590002777&message=${ message }`);

    } catch (error) {
        console.log(error);
    }
}