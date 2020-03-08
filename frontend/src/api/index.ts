
import axios from "axios"

export default class API{

    private baseURL: string

    constructor(url: string = 'http://localhost:5000') {
        this.baseURL = url;
    }

    getBaseURL() {
        return this.baseURL;
    }

    setBaseURL(val: string) {
        this.baseURL = val;
    }

    async get({
        url = "",
        params = {},
      }) {
        // return axios.get(this.baseURL + url);
        return axios(
            {
              url: url,
              method: 'get',
              baseURL: this.baseURL,
              params: params,
            }
        );
      }
    
      async post({
        url = "",
        data = {},
      }) {
        return axios(
            {
              url: url,
              method: 'post',
              data: data,
            }
        );
      }

      // visualization用取得
      async updateCell(data: string) {
        return this.post({
          url: '/notebook/cell/update',
          data: data
        });
      }
    
}