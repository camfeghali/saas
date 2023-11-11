import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { RedirectType } from 'next/navigation';
import { redirect } from 'next/navigation';

// In NextJs >=13, you create a page by create a directory in the /app directory.
// The file must be named `page.tsx`
// It is Rendered on the server by default
// You can use the 'use client' directive to make a a client side component.

const Page = async () => {
  console.log('hello from the server');
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    redirect('/auth-callback?origin=dashboard');
  }

  return <div>{user && user.email}</div>;
};

export default Page;
