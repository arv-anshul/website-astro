import TechStackCard from "@/components/ui/tech-stack-card";
import { loadInfoData } from "@/lib/data-loaders/info";
import { cn } from "@/lib/utils";

const referLinks = [
  {
    description: "See my projects in detail.",
    url: "/projects",
    title: "Projects",
  },
  {
    description: "Learn more about my experience.",
    url: "/",
    title: "About",
  },
  {
    description: "See my resume.",
    url: "/resume",
    title: "Resume",
  },
  {
    description: "Read my blogs.",
    url: "/blog",
    title: "Blogs",
  },
  {
    description: "See some of my friends.",
    url: "/friends",
    title: "Friends",
  },
  {
    description: "See my GitHub profile.",
    url: "https://github.com/arv-anshul",
    title: "GitHub",
  },
];

export default async function Home({ className }: { className?: string }) {
  const info = await loadInfoData();

  return (
    <div
      className={cn(
        "mb-10 flex flex-1 flex-col items-center justify-center px-4 py-8 text-center",
        className
      )}
    >
      <img
        alt="arv-anshul"
        className="w-60 rounded-full"
        height="auto"
        src={info.avatar_url}
        width="auto"
      />
      <h1 className="mt-5 font-extrabold text-3xl">{info.name}</h1>
      <p className="mt-10 text-justify md:max-w-2/3">{info.intro_text}</p>

      <div className="mt-10 min-w-10/12 grid-cols-1 md:min-w-2/3">
        <h2 className="font-bold text-2xl text-fd-foreground" id="refer-to">
          Refer To
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {referLinks.map((item) => (
            <a className="rounded-xl border p-4" href={item.url} key={item.url}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 min-w-10/12 grid-cols-1 md:min-w-2/3">
        <h2
          className="prose font-bold text-2xl text-fd-foreground"
          id="tech-stack"
        >
          Tech Stack
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(info.tech_stack).map(([category, items]) => (
            <TechStackCard category={category} items={items} key={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
