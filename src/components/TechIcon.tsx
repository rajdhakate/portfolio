export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

/*
component type as prop

rgb values - enter a text-emerald-300, hover over to get rgb value

linear-gradient on svg - add a linear gradient with size-0 absolute and use it's id to fill the svg
*/
