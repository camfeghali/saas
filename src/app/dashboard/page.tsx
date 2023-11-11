import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { RedirectType } from 'next/navigation';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import Dashboard from '@/components/Dashboard';

// In NextJs >=13, you create a page by create a directory in the /app directory.
// The file must be named `page.tsx`
// It is Rendered on the server by default
// You can use the 'use client' directive to make a a client side component.

const Page = async () => {
  console.log('hello from the server');
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  const dbUser = await db.user.findFirst({ where: { id: user.id } });

  if (!dbUser) redirect('/auth-callback?origin=dashboard');

  return <Dashboard></Dashboard>;
};

export default Page;
