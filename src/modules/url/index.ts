import { URLController } from './entrypoints/controllers/url-controller';
import { MapListResponseHelper } from './helpers/map-response/map-list-response-helper';
import { MapResponseHelper } from './helpers/map-response/map-response-helper';
import { AddURLUseCase } from './use-cases/add-url/add-url-usecase';
import { AddURLValidate } from './use-cases/add-url/add-url-validate';
import { GetUniqueRandomStringRule } from './use-cases/add-url/rules/get-unique-random-string/get-unique-random-string-rule';
import { GetURLUseCase } from './use-cases/get-url/get-url-usecase';
import { GetURLValidate } from './use-cases/get-url/get-url-validate';
import { DeleteURLUseCase } from './use-cases/delete-url/delete-url-usecase';
import { DeleteURLValidate } from './use-cases/delete-url/delete-url-validate';
import { UpdateURLUseCase } from './use-cases/update-url/update-url-usecase';
import { UpdateURLValidate } from './use-cases/update-url/update-url-validate';

export const controllersURL = [
  URLController,
]

export const providersURL = [
  AddURLUseCase,
  AddURLValidate,
  GetURLUseCase,
  GetURLValidate,
  DeleteURLUseCase,
  DeleteURLValidate,
  UpdateURLUseCase,
  UpdateURLValidate,
  GetUniqueRandomStringRule,
  MapListResponseHelper,
  MapResponseHelper,
]

