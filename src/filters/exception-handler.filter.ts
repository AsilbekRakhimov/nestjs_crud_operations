import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: any | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.getResponse();

      res.status(status).send({
        message: message,
        time: new Date().toISOString(),
        path: req.url,
      });
    } else {
      res.status(500).send({
        message: 'Server bilan xatolik',
        time: new Date().toISOString(),
        path: req.url,
      });
    }
  }
}
