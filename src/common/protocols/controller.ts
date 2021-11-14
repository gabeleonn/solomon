export interface IRequest {
  data?: any;
  params: any;
  query?: any;
}
export interface IResponse {
  status: number;
  message?: string;
  data?: any;
}

export interface IController {
  handle: (request: IRequest) => Promise<IResponse>;
}
