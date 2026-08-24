import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '谭凯宸｜把 AI 变成业务结果',
  description: '从企业真实问题出发，完成 AI 业务诊断、产品设计、系统开发与员工采用。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: '谭凯宸｜把 AI 变成业务结果',
    description: '企业 AI 改造、FDE 与端到端产品实践。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '谭凯宸｜把 AI 变成业务结果',
    description: '企业 AI 改造、FDE 与端到端产品实践。',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f2efe7',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
