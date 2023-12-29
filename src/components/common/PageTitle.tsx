const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:pt-10 xl:pt-0">
      <h2 className="text-center relative uppercase text-5xl lg:text-6xl font-bold pt-16">
        {children}
      </h2>
    </div>
  );
};

export default PageTitle;
