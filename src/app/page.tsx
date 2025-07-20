"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Home = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.inngest.mutationOptions({
    
  }))

  return (
    <div className="p-4 text-2xl font-bold max-w-7xl mx-auto">
      <Button onClick={() => invoke.mutate({text: "test"})}>Invoke Background Jobs</Button>
    </div>
  );
}

export default Home;