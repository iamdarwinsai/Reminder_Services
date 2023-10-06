const amqplib = require("amqplib");
const {EXCHANGE_NAME} = require("../config/serverConfig");


const createChannel = async () => {
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME, "direct", false)
        return channel;
    } catch (error) {
        throw {
            error
        }
    }
}

const subscribeMessage = async (channel, service, binding_key) => {
    try {
        const applicationQueue = await channel.assertQueue("BOOKING_QUEUE");

        channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);

        channel.consume(applicationQueue.queue, msg => { 
            console.log("Recived Data");
            /* 
            {
                data: {
                  from: 'AIRPLINE@SUPPORTADMIN.COM',
                  to: 'darushyam143@gmail.com',
                  subject: 'Hello user we have success fully booked your ticketThis is a reminder of flight status is BOOKED. Enjoy your flight',
                  text: 'Enjoy your flight'
                },
                service: 'SEND MAIL'
              }
            */
            console.log(JSON.parse(msg.content));
            service(JSON.parse(msg.content))
            console.log("Recived the message and sent mail");
            channel.ack(msg)
        })

    } catch (error) {
        throw {
            error
        }
    }
}

const publishMessage = async (channel, binding_key, message) => {
    try {   
        await channel.assertQueue("BOOKING_QUEUE")
        await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message))
    } catch (error) {}
}


module.exports = {
    createChannel,
    subscribeMessage,
    publishMessage
}
