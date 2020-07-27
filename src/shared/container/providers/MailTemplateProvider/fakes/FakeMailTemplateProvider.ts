import IMailTemplateProvider from '../model/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'mail content';
  }
}

export default new FakeMailTemplateProvider();
