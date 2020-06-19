### Jest 함수
- describe: 
- test(it): 
- expect: expect(비교 될 기준이 되는 값: any)
  - not: 을 함수 전에 붙이면 반대로 나옴
  - toEqual(비교할 값): primitive와 object의 단순 요소를 비교할 때 사용
  - toBe(비교할 값): primitive와 object의 요소 비교 만약, object라면 같은 object인지까지 확인 함(===)
  - toBeTruthy(), toBeFalsy(): Javascript의 bool체크는 undefined=false, 1=true, 0=false, []=false와 같이 처리된다.
    - toBeTruthy(): Javascript의 bool처리 방법으로 true면 테스트 성공
    - toBeFalsy(): Javascript의 bool처리 방법으로 false면 테스트 성공
  - toHaveLength(배열의 크기): expect에 배열을 넣고, 크기가 맞는지 비교 함
  - toContain(배열의 요소): expect에 배열을 넣고, 배열의 요소가 있는지 확인 함
  - toMatch(정규식): 정규식 검사 함
  - toThrow(정규식|문자열): 문자열을 넘기면 예외 메세지를 비교하고 정규식을 넘기면 정규식 체크를 해 줌
    - toThrow를 사용할 땐 파라미터를 함수로 넘겨주어야 함: expect(() => getUser(-1).toThrow("Invalid ID"))
  - toBeNull(): null이면 성공
  - toBeUndefined(): undefined면 성공
  - toBeDefined(): undefined의 반대면 성공

### Jest Mock

### 가이드
- npm test -- --watch : 명령어로 파일의 변경을 감지하여 테스트를 수행할 수 있습니다.