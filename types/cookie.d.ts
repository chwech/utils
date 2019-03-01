export class Cookie {
  constructor();
  get(name: string): string;
  set(name: string, value: string, expires?: string, path?: string, domain?: string, secure?: string): void;
  unset(name, path?: string, domain?: string, secure?: string): void;
}