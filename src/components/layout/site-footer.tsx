export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="itmes-center flex text-center text-sm leading-loose text-muted-foreground md:text-left ">
          Built by
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mx-1 font-medium underline underline-offset-4"
          >
            Mohamed Lifa
          </a>
          <span>,</span>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="itmes-center mx-1 flex font-medium underline underline-offset-4"
          >
            <span>Powered by Vercel</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
