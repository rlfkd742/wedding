// 이 파일만 수정하면 날짜, 이름, 장소, 계좌번호가 바뀝니다.
window.WEDDING_CONFIG = {
  date: '2027-03-13',       // YYYY-MM-DD, 날짜를 바꾸면 달력과 D-day도 자동 변경
  time: '17:30',            // 24시간 형식
  groomName: '홍기랑',
  brideName: '김진희',
  venue: '더 컨벤션 송파문정',
  hall: '그랜드볼룸',
  address: '서울특별시 송파구 송파대로 155',
  message: '서로의 가장 좋은 친구가 되어\n같은 방향을 바라보며 걸어가려 합니다.\n저희 두 사람의 새로운 시작에\n함께해 주시면 감사하겠습니다.',
  // label: 표시 이름, bank: 은행명, number: 계좌번호, holder: 예금주
  // 부모님 계좌는 필요한 만큼 추가하거나 지울 수 있습니다.
  groomAccounts: [
    { label: '홍백희', bank: '', number: '', holder: '' },
    { label: '구인순', bank: '농협은행', number: '168-02-291401', holder: '구인순' },
    { label: '홍기랑', bank: '토스뱅크', number: '1001-8672-3252', holder: '홍기랑' }
  ],
  brideAccounts: [
    { label: '김상호', bank: '', number: '', holder: '' },
    { label: '김순이', bank: '', number: '', holder: '' },
    { label: '김진희', bank: '신한은행', number: '110-430-122095', holder: '김진희' }
  ]
};
