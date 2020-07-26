import IParseMailTemplateDTO from '../dtos/IParseTemplateDTO';
import IMailTemplateProvider from '../model/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default new FakeMailTemplateProvider();
