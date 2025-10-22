'use client';

export default function Home() {
   const { testdata } = useAppData();
  console.log("Context Data:", testdata);
  return (
    <div>
      Hello, Next.js!
    </div>
  );
}
