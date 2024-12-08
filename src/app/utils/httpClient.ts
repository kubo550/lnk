
export class HttpClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${handlePath(path)}`);
    return response.json();
  }

  async post<T>(path: string, body: Record<string, any>): Promise<T> {
    const response = await fetch(`${this.baseUrl}${handlePath(path)}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
}

function handlePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}