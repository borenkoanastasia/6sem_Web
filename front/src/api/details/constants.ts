import { Token } from 'src/models/apiModels';

class ApiConfig {
  private _default_url = 'http://localhost:0080/api/v1';
  private _jwt_token: Token | null = null;

  get jwt_token() {
    return this._jwt_token;
  }
  set jwt_token(token: Token | null) {
    this._jwt_token = token;
  }

  get default_url() {
    return this._default_url;
  }

  get headers() {
    if (this.jwt_token)
      return {
        Authorization: `Bearer ${this.jwt_token.access_token}`,
        'Content-Type': 'application/json; charset=utf-8',
      };
    else
      return {
        'Content-Type': 'application/json; charset=utf-8',
      };
  }
}

const api_config: ApiConfig = new ApiConfig();

export { api_config };
