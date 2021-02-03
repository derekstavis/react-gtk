import Soup from "soup";

type Fetch = typeof fetch;

declare global {
  const fetch: Fetch;
}

class Response {
  session: Soup.Session;
  message: Soup.Message;
  url?: string;
  headers?: Soup.MessageHeaders;
  status?: number;
  statusText?: string;
  ok?: boolean;
  response: Promise<Soup.Message>;

  constructor(session: Soup.Session, message: Soup.Message) {
    this.session = session;
    this.message = message;
    this.response = this.retrieveResponse();
  }

  private async retrieveResponse() {
    if (this.response) {
      return this.response;
    }
    return new Promise<Soup.Message>((resolve) => {
      this.session.queue_message(this.message, (_, message) => {
        // console.log("request", message.request_body.data);
        // console.log("response", message.response_body.data);
        this.headers = message.response_headers;

        this.url = message.get_uri().to_string(false);

        this.status = message.status_code;
        this.statusText = Soup.status_get_phrase(this.status);

        this.ok = this.status === Soup.Status.OK;

        this.message = message;

        resolve(message);
      });
    });
  }

  async blob() {
    const response = await this.retrieveResponse();
    return response.response_body.data;
  }

  async text() {
    const response = await this.retrieveResponse();
    return response.response_body.data.toString();
  }

  async json() {
    const response = await this.retrieveResponse();
    return JSON.parse(response.response_body.data.toString());
  }
}

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: string;
  headers?: Record<string, string>;
};

export const fetch = (uri: string, options: FetchOptions = {}) => {
  return new Promise((resolve) => {
    let session = new Soup.SessionAsync({ user_agent: "Mozilla/5.0" });

    Soup.Session.prototype.add_feature.call(
      session,
      new Soup.ProxyResolverDefault()
    );

    let message = new Soup.Message({
      method: options.method || "GET",
      uri: new Soup.URI(uri),
    });

    if (options.body) {
      // console.log("body", options.body);
      // console.log("body type", typeof options.body);
      message.request_body.append(options.body);
    }

    if (options.headers) {
      for (const [key, value] of Object.entries(options.headers)) {
        // console.log("header %s = %s", key, value);
        message.request_headers.append(key, value);
      }
    }

    resolve(new Response(session, message));
  });
};

Object.assign(window, { fetch });
