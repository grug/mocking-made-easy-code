type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';

export class Http {
  static get<T>(endpoint: string, headers?: object): Promise<T> {
    return this.request(endpoint, 'GET', undefined, headers);
  }

  private static request<T>(
    endpoint: string,
    method: HttpMethod,
    body?: object,
    headers?: object
  ): Promise<T> {
    let request: RequestInit = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      method
    };

    if (!!body) {
      request = { ...request, body: JSON.stringify(body) };
    }

    return fetch(endpoint, request).then((response: Response) =>
      response.ok ? response.json() : Promise.reject(response.status)
    );
  }
}
