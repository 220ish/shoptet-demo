import { Store } from "pullstate"

type IStore = {
    apiKey: null|string;
}

const store = new Store<IStore>({
    apiKey: null
})

export default store