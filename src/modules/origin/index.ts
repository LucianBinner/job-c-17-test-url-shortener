
import { CountClicksUseCase } from './usecase/count-clicks/count-clicks-usecase';
import { CountClicksValidate } from './usecase/count-clicks/count-clicks-validate';
import { OriginController } from './entrypoints/controllers/origin-controller';

export const controllersOrigin = [
  OriginController
]

export const providersOrigin = [
  CountClicksUseCase,
  CountClicksValidate,
]
