import handleBars from 'handlebars';
import IParseMailTemplateDTO from '../dtos/IParseTemplateDTO';
import IMailTemplateProvider from '../model/IMailTemplateProvider';

class HandleBarsMailProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handleBars.compile(template);

    return parseTemplate(variables);
  }
}

export default new HandleBarsMailProvider();
