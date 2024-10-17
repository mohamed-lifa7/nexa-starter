import { Icons } from "../icons";

const Features = () => {
  return (
    <section
      id="tech-stack"
      className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Tech Stack
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our starter project is built using a modern tech stack that includes
          the latest frameworks and tools to ensure a robust foundation for your
          application.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Next.js 14</h3>
              <p className="text-sm text-muted-foreground">
                App dir, Routing, Layouts, Loading UI and API routes.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">React 18</h3>
              <p className="text-sm text-muted-foreground">
                Server and Client Components. Use hook.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              className="h-12 w-12 fill-current"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.2069C0 2.77892 2.77892 0 6.2069 0H29.7931C33.2211 0 36 2.77892 36 6.2069V26.2669C36 29.8134 31.5122 31.3525 29.3356 28.5526L22.531 19.7992V30.4138C22.531 33.499 20.03 36 16.9448 36H6.2069C2.77892 36 0 33.2211 0 29.7931V6.2069ZM6.2069 4.96552C5.5213 4.96552 4.96552 5.5213 4.96552 6.2069V29.7931C4.96552 30.4787 5.5213 31.0345 6.2069 31.0345H17.131C17.4738 31.0345 17.5655 30.7566 17.5655 30.4138V16.1797C17.5655 12.6333 22.0533 11.0941 24.2299 13.894L31.0345 22.6474V6.2069C31.0345 5.5213 31.0994 4.96552 30.4138 4.96552H6.2069Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.2069C0 2.77892 2.77892 0 6.2069 0H29.7931C33.2211 0 36 2.77892 36 6.2069V26.2669C36 29.8134 31.5122 31.3525 29.3356 28.5526L22.531 19.7992V30.4138C22.531 33.499 20.03 36 16.9448 36H6.2069C2.77892 36 0 33.2211 0 29.7931V6.2069ZM6.2069 4.96552C5.5213 4.96552 4.96552 5.5213 4.96552 6.2069V29.7931C4.96552 30.4787 5.5213 31.0345 6.2069 31.0345H17.131C17.4738 31.0345 17.5655 30.7566 17.5655 30.4138V16.1797C17.5655 12.6333 22.0533 11.0941 24.2299 13.894L31.0345 22.6474V6.2069C31.0345 5.5213 31.0994 4.96552 30.4138 4.96552H6.2069Z"
              />
              <path d="M29.7931 0C33.2211 0 36 2.77892 36 6.2069V26.2669C36 29.8134 31.5122 31.3525 29.3356 28.5526L22.531 19.7992V30.4138C22.531 33.499 20.03 36 16.9448 36C17.2876 36 17.5655 35.7221 17.5655 35.3793V16.1797C17.5655 12.6333 22.0533 11.0941 24.2299 13.894L31.0345 22.6474V1.24138C31.0345 0.555784 30.4787 0 29.7931 0Z" />
            </svg>

            <div className="space-y-2">
              <h3 className="font-bold">Database</h3>
              <p className="text-sm text-muted-foreground">
                ORM using Prisma and deployed on{" "}
                <a href="https://neon.tech/" className="text-primary underline">
                  NeonDB
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.shadcn className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold">Components</h3>
              <p className="text-sm text-muted-foreground">
                Shadcn UI is a UI components built using Radix UI and styled
                with Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="h-12 w-12 fill-current"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Authentication using Auth.js and middlewares.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-muted p-2 shadow-md">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              className="h-12 w-12 fill-current"
            >
              <path d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Email</h3>
              <p className="text-sm text-muted-foreground">
                Sending custom Emails using{" "}
                <a href="https://resend.com" className="text-primary underline">
                  Resend
                </a>{" "}
                and React Email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
