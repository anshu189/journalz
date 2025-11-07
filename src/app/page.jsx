import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh_-_200px)] flex flex-col gap-4 items-center justify-center">
      <p className="font-bold text-9xl">Time and Price</p>
      <div className="flex gap-4 items-center">
        <Button color="primary" variant="solid">
          Believe
        </Button>
        <Button color="primary" variant="faded">
          in
        </Button>
        <Button color="primary" variant="bordered">
          your
        </Button>
        <Button color="primary" variant="light">
          beliefs
        </Button>
        <Button color="primary" variant="flat">
          That's
        </Button>
        <Button color="primary" variant="ghost">
          all
        </Button>
        <Button color="primary" variant="shadow">
          it takes.
        </Button>
      </div>
    </div>
  );
}
