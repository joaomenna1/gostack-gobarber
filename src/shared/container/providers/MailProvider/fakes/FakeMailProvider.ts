import IMailProvider from '../model/IMailProvider';
import ISendMailDTO from '../DTOS/ISendEmailDTO';

export default class FakeEmailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
