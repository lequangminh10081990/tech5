import { MailerService } from '@nestjs-modules/mailer';
export declare class AppService {
    private readonly mailService;
    constructor(mailService: MailerService);
    getHello(): string;
    getDoc(select: string, data: object): Promise<void>;
}
