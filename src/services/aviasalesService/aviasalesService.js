export default class AviasalesService {
  _baseUrl = 'https://aviasales-test-api.kata.academy';

  getSearchId = async () => {
    const result = await fetch(`${this._baseUrl}/search`);
    if (!result.ok) {
      throw new Error(`Error, status ${result.status}`);
    }
    const body = await result.json();
    return body.searchId;
  };

  getTickets = async (searchId) => {
    const result = await fetch(`${this._baseUrl}/tickets?searchId=${searchId}`);
    if (!result.ok) {
      return false;
    }
    const body = await result.json();
    return body;
  };
}
