import config from "../playwright.config";

export abstract class BasePage {
  public get baseURL(): string | undefined {
    return config?.use?.baseURL;
  }
}
