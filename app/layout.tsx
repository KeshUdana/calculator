
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
     <body className="absolute h-screen w-screen bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
     <header>
        <h1 className="flex flex-col items-center z-40 fixed text-justify text-lime-500 text-light text-5xl ">Start Calculating</h1>
     </header>
     
     {children}</body>
     </html>
    
  );
}
