export interface IRequest {
  data: any;
}
export interface IResponse {
  status: number;
  message?: string;
  data?: any;
}

export interface IController {
  handle: (request: IRequest) => Promise<IResponse>;
}
