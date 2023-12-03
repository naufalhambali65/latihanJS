class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}!`);
    }


}

class WhatsAppService extends MailService{
    constructor(sender, isBusiness){
        super(sender); //overriding constructor 

        this.isBusiness = isBusiness;
    }

    sendMessage(message, receiver){ // overriding method parent
        console.log(`${this.sender} send ${message} to ${receiver} via whatsapp`);
    }

    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            super.sendMessage(message, receiver); // super.sendMessage berarti mengakses method parent
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
whatsapp.sendMessage("halo halo", 1234);
whatsapp.sendBroadcastMessage("halo halo", ["1234", "5431"]);

const email = new EmailService("naufal@gmail.com");
email.sendDelayedMessage("halo halo", "tes@tes", 30);