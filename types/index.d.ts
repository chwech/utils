export function noop(): void;
export function transferUrl(url: string, params: array): string;
export function serializeQueryStr(params: object, sep = '&'): string;
export function getQueryString(name: string): string | null;

export class Cookie {
  constructor();
  get(name: string): string;
  set(name: string, value: string, expires?: string, path?: string, domain?: string, secure?: string): void;
  unset(name, path?: string, domain?: string, secure?: string): void;
}

