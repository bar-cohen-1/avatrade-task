export class LocalStorageService {
  static get(keyName: string) {
    const item = localStorage.getItem(keyName);
    const parseItem = item ? JSON.parse(item) : item;
    return parseItem;
  }

  static set(keyName: string, value: unknown) {
    try {
      localStorage.setItem(keyName, JSON.stringify(value));
    } catch (err) {
      console.log("Can't to set item in local storage", err);
    }
  }

  static remove(keyName: string) {
    localStorage.removeItem(keyName);
  }
}
