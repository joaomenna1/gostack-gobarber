import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/model/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtheralEmailProvider';

import IMailTemplateProvider from './MailTemplateProvider/model/IMailTemplateProvider';
import HandleBarsMailTemplateProvider from './MailTemplateProvider/implementations/HandleBarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider()
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandleBarsMailTemplateProvider
);
