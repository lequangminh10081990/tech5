"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
let AppController = class AppController {
    constructor(appService, mailService) {
        this.appService = appService;
        this.mailService = mailService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getDoc(select, data) {
        const t = this.appService.getDoc(select, data);
        return 'done';
    }
    async plainTextEmail(toEmail) {
        console.log('start');
        console.log('toEmail', toEmail);
        var response = await this.mailService.sendMail({
            to: toEmail,
            from: "lequangminh10081990@gmail.com",
            subject: 'Plain Text Email ✔',
            text: 'Welcome NestJS Email Sending Tutorial',
        });
        console.log('response', response);
        return response;
    }
    async fileAttachement(toEmail) {
        var response = await this.mailService.sendMail({
            to: toEmail,
            from: 'lequangminh10081990@gmail.com',
            subject: 'File Attachment',
            html: "<h1>File Attachment</h1>",
            attachments: [{
                    path: (0, path_1.join)(__dirname, '../src/mails/to-khai-cap-giay-xac-nhan-tinh-trang-hon-nhan.docx'),
                    filename: 'result.docx',
                    contentDisposition: "attachment"
                }]
        });
        return 'success';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/merge/:select'),
    __param(0, (0, common_1.Param)('select')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getDoc", null);
__decorate([
    (0, common_1.Get)('/plain-text-email'),
    __param(0, (0, common_1.Query)('toEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "plainTextEmail", null);
__decorate([
    (0, common_1.Get)('/file-attachment'),
    __param(0, (0, common_1.Query)('toEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "fileAttachement", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        mailer_1.MailerService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map