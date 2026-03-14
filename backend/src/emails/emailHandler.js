import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {

    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to chat.io",
        html: createWelcomeEmailTemplate(name, clientURL),
    });


    if (error) {
        console.log(error);
        console.error(`Failed to send welcome email: ${error}`);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);

}