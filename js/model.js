export class DefaultAdapter {
  constructor() {
    if (new.target === DefaultAdapter) {
      throw new Error();
    }
  }

  preprocess(data) {
    return data;
  }

  toServer(data) {
    return data;
  }
}

const defaultAdapter = new class extends DefaultAdapter {}();

export default class Model {
  get urlRead() {
    throw new Error(`Abstract method. Define the URL for model.`);
  }

  set urlWrite(url) {
    throw new Error(`Abstract method. Define the URL for model.`);
  }

  load(adapter = defaultAdapter) {
    return fetch(this.urlRead)
      .then((resp) => resp.json())
      .then(adapter.preprocess);
  }

  send(data, adapter = defaultAdapter) {
    const requestSettings = {
      body: adapter.toServer(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:id58774`, requestSettings);
  }
}
