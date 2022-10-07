import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

const generateIceServers = async () => {
  const tokenInstance = await twilioClient.tokens.create();
  return tokenInstance.iceServers;
};

export default generateIceServers;
