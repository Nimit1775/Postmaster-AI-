import { error } from "console";
import { MailtrapClient } from "mailtrap";

const token =  'ceb4d437a10ee60d593f02c5437e8a02'
const sender_email  = 'hell@demomailtrap.com' 
const recipient_email = 'nimitsodhani1@gmail.com' 

if(!token){
    throw new Error('MAILTRAP_TOKEN env var is not set') 

}
const client  = new MailtrapClient({token : token})  
const sender =  {name:'Mailtrap test ' , email : sender_email} 

client.send({
    from : sender  , 
    to : [{email : recipient_email}] , 
    subject : 'Hello from Mailtrap' , 
    text :  ' welcome to PostMaster AI '  ,  

}).then(console.log).catch(console.error) 
