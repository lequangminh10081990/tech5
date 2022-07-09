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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
let AppService = class AppService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    getHello() {
        return 'Hello World!';
    }
    async getDoc(select, data) {
        const data1 = {
            ubndxa: "UBND xa BCD",
            hoten_nguoiyeucau: "Hà Nguyễn",
            noicutru_nguoiyeucau: "69 96 Street, Hồ Chí Minh City, VIệt Nam",
            cmnd_nguoiyeucau: "123456789",
            quanhe: "Cha",
            hoten_nguoiduocyeucau: "Tuấn Đinh",
            birthday: '01/01/2000',
            gioitinh: 'THứ 3',
            dantoc: 'Kinh',
            quoctich: 'Việt Nam',
            noicutru_nguoiduocyeucau: '96 69 Street, Biên Hòa, Đồng Nai',
            cmnd_nguoiduocyeucau: '123456123',
            tinhtranghonnhan: 'Độc thân',
            mucdich: 'Lấy chồng',
            ngay: '09',
            thang: '07',
            nam: '2022',
            toEmail: 'ha.nguyen@teqie.io'
        };
        const data2 = {
            female_name: "Tuấn ĐInh",
            female_birthday: '20/02/2020',
            female_dantoc: 'Kinh',
            female_quoctich: 'Việt Nam',
            female_noicutru: 'Biên Hòa, Đồng Nai',
            female_cmnd: "123456789",
            female_lankethon: '10',
            male_name: "Hà Nguyễn",
            male_birthday: '20/02/2020',
            male_dantoc: 'Kinh',
            male_quoctich: 'Việt Nam',
            male_noicutru: 'Biên Hòa, Đồng Nai',
            male_cmnd: "123456789",
            male_lankethon: '10',
            coquandangki: "UBND xã 69",
            ngaydangki: '09',
            thangdangki: '07',
            namdangki: '2022',
            toEmail: 'tuan.dinh@teqie.io'
        };
        let pathFile;
        if (select === '1') {
            data = Object.keys(data).length !== 0 ? data : data1;
            pathFile = 'to-khai-cap-giay-xac-nhan-tinh-trang-hon-nhan';
        }
        else {
            data = Object.keys(data).length !== 0 ? data : data2;
            pathFile = 'Mau_TK_dang_ky_ket_hon';
        }
        console.log('in service, getdoc');
        const PizZip = require("pizzip");
        const Docxtemplater = require("docxtemplater");
        const fs = require("fs");
        const path = require("path");
        const content = fs.readFileSync(path.resolve(__dirname, `../public/${pathFile}.docx`), "binary");
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
        doc.render(data);
        const buf = doc.getZip().generate({
            type: "nodebuffer",
            compression: "DEFLATE",
        });
        const date = new Date();
        const id = date.getMilliseconds();
        fs.writeFileSync(path.resolve(__dirname, `../src/mails/${pathFile}-${id}.docx`), buf);
        var response = await this.mailService.sendMail({
            to: data['toEmail'],
            from: 'lequangminh10081990@gmail.com',
            subject: 'File Attachment',
            html: "<h1>File Attachment</h1>",
            attachments: [{
                    path: (0, path_1.join)(__dirname, `../src/mails/${pathFile}-${id}.docx`),
                    filename: 'result.docx',
                    contentDisposition: "attachment"
                }]
        });
        return;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map