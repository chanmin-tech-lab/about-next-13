// [Must-Know]
// * 한 프로젝트 내에는 Root layout이 필수로 존재해야 한다.
// Root layout에는 <html>, <body> 태그와 children이 필수로 존재해야 한다.
// layout은 Server component로 동작한다. (client component로 변경도 가능하다)

// [부가적인 지식]
// layout.tsx가 없는 상태에서 next dev를 실행하면 layout.tsx를 생성해준다.
// 라우팅이 일어나도 레이아웃은 재렌더링되지 않고 상태를 유지한다.

// [하위 컴포넌트와의 관계]
// layout에서는 하위 세그먼트의 정보를 알 수 없다.
// 하위 컴포넌트의 정보를 알기 위해서는 client component에서 useSelectedLayoutSegment 훅을 사용해야 한다.

// [레이아웃과 페이지]
// 한 폴더 내에 layout.js와 page.js가 동시에 존재할 수 있고, 해당 layout.js는 page.js를 감싸게 된다.
// Root layout만이 <html>, <body> 태그를 가질 수 있다.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
