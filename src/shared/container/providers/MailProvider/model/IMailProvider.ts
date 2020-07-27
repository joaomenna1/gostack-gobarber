import ISendMailDTO from '../DTOS/ISendEmailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
