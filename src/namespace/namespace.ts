// 의미없는 namespace를 생성하지 않도록 주의 해야한다.

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}