import { http, HttpResponse } from 'msw';

export const handlers = [
  // 로그인
  http.post(`/member/login`, () => {
    return HttpResponse.json({ message: '로그인 성공' });
  }),

  // 닉네임 중복 확인
  http.get(`/member/duplicate/:nickname`, ({ params }) => {
    const { nickname } = params;

    // 테스트를 위해 'existinguser'는 항상 존재하는 것으로 처리
    if (nickname === 'existinguser') {
      return HttpResponse.json(true);
    }
    return HttpResponse.json(false);
  }),

  // 회원가입
  http.post(`/member`, () => {
    return HttpResponse.json({ message: '회원가입 성공' }, { status: 201 });
  }),

  // 회원 정보 조회
  http.get(`/member/info`, () => {
    return HttpResponse.json({
      name: 'testuser',
    });
  }),

  // 로그아웃
  http.post(`/member/logout`, () => {
    return HttpResponse.json({ message: '로그아웃 성공' });
  }),

  // 전체 기록 조회
  http.get(`/record`, () => {
    return HttpResponse.json([
      {
        date: '2023-10-03',
        records: [
          {
            id: 1,
            title: 'MSW 연동 실패',
            content: 'MSW 연동 중 알 수 없는 오류 발생',
            feel: '좌절',
            createdAt: '10:00',
          },
        ],
      },
    ]);
  }),

  // 특정 기록 조회
  http.get(`/record/:recordId`, () => {
    return HttpResponse.json({
      id: 1,
      title: 'MSW 연동 실패',
      content: 'MSW 연동 중 알 수 없는 오류 발생',
      feel: '좌절',
    });
  }),

  // 기록 수정
  http.put(`/record`, () => {
    return HttpResponse.json({ message: '기록 수정 성공' });
  }),

  // 기록 추가
  http.post(`/record`, () => {
    return HttpResponse.json({ message: '기록 추가 성공' }, { status: 201 });
  }),

  // 기록 삭제
  http.delete(`/record`, () => {
    return HttpResponse.json({ message: '기록 삭제 성공' });
  }),

  // 영수증 생성
  http.post(`/receipt`, () => {
    return HttpResponse.json('mock-receipt-id');
  }),

  // 영수증 조회
  http.get(`/receipt/:receiptId`, () => {
    return HttpResponse.json({
      date: '2023-10-03',
      writerName: 'testuser',
      total: 1,
      receiptList: [
        {
          id: 1,
          title: 'MSW 연동 실패',
          content: 'MSW 연동 중 알 수 없는 오류 발생',
          feel: '좌절',
          createdAt: '10:00',
        },
      ],
    });
  }),
];
