import { useEffect } from 'react';
import { useRouter } from 'next/router';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/'); // Redirect ke /admin/bloglist
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default page;
