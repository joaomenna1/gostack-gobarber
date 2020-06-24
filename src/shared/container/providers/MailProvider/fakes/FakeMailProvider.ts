import IMailProvider from '../model/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeEmailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    });
  }
}
