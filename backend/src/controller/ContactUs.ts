import { getRepository,In} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ContactUs} from "../entity/ContactUs";
import sendEmail from '../utils/contact-us';
export class ContactUsController {

    private ContactUsRepository = getRepository(ContactUs);

    async save(request: Request, response: Response, next: NextFunction) {
        const {name, phone, email, message} = request.body;
        if(!name || !phone || !email || !message) throw Error('Please fill all the fields')
       // send email to admin

       const output = `
                        <p>You have a new contact request</p>
                            <h3>Contact Details</h3>
                            <ul>  
                            <li>Name: ${name}</li>
                            <li>Phone: ${phone}</li>
                            <li>Email: ${email}</li>
                            </ul>
                            <h3>Message</h3>
                        <p>${message}</p>
                        `;
         await sendEmail(email, "Nouveau message du client", output);

        const contactUs = this.ContactUsRepository.create({name, phone, email, message});

        const result = await this.ContactUsRepository.save(contactUs);
        return result
    }

}

