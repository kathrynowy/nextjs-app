/* eslint-disable @typescript-eslint/ban-ts-comment */

import TodosList from './TodosList';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-5">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}
