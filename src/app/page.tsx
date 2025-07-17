import prisma from '@/lib/db';
import { Button } from '@/components/ui/button';

const Home = async () => {
    const user = await prisma.user.findMany();

  return(
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Home;