class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}!`);
    }


}

class WhatsAppService extends MailService{
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService extends MailService{
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    } 
}

const whatsapp = new WhatsAppService("0812345");
whatsapp.sendBroadcastMessage("halo halo", ["1234", "5431"]);

const email = new EmailService("naufal@gmail.com");
email.sendDelayedMessage("halo halo", "tes@tes", 30);

//operator instanceof berfungsi untuk melihat parent dari class tsb

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false