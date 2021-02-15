import { PetApi, StoreApi, UserApi } from './generated';

export default {
    Pet: new PetApi(),
    Store: new StoreApi(),
    User: new UserApi(),
};
