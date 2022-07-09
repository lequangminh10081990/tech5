import { AppService } from './app.service';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AppController {
    private readonly appService;
    private readonly mailService;
    constructor(appService: AppService, mailService: MailerService);
    getHello(): string;
    getDoc(select: string, data: object): string;
    plainTextEmail(toEmail: string): Promise<any>;
    fileAttachement(toEmail: any): Promise<string>;
}
