import { DeviceTemplate} from './deviceTemplate.model';

export class Command {
  constructor(
    id: string,
    name: string,
    isSynchronous: boolean,
    deviceTemplate: DeviceTemplate
    )
    {}
}
