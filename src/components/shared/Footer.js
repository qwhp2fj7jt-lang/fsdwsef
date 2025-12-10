export default function Footer() {
  const nowYear=new Date().getFullYear() 
    return (
      
      <footer className="w-full h-[20vh] border-t text-gray-400 dark:border-gray-800  border-gray-200 flex items-center pl-[15%] ">
        <div className="container mx-auto px-6 md:px-10 py-10">
          <p>Next.js, React, Tailwind CSS ile geliştirildi.</p>
          <p className="flex items-center gap-2">
  Keyifle kodlanmıştır.

  <img
    src="/images/footer/latte.png"
    width="18"
    height="18"
    className="animate-bounce ml-1 dark:bg-text"
    alt="latte"
  />
</p>

          <p>© {nowYear} | Zeynep Baş</p>
        </div>
      </footer>
    )
  }
  