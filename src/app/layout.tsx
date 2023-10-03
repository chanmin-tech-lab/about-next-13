// layout.tsx 파일에는 <html>, <body> 태그가 필수로 필요하다.
// layout.tsx가 없는 상태에서 next dev를 실행하면 layout.tsx를 생성해준다.
// 라우팅이 일어나도 레이아웃은 재렌더링되지 않고 상태를 유지한다.

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
