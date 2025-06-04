export default function AuthPopupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <title>Đăng nhập bằng Google</title>
      </head>
      <body style={{ margin: 0, padding: 0, background: '#fff' }}>{children}</body>
    </html>
  );
}