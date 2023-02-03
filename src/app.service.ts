import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '키보드 심각하게 이상했는대 껏다키니까 바로 해결되어 버리는 이상한 상황이 일어나버렸지 뭐야';
  }
}
