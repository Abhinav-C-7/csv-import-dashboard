const Stack = ({
  direction = "vertical",
  gap = "md",
  alignment = "start",
  children,
}) => {
  const gapVariants = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
  };

  const alignmentVariants = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <div
      className={`flex ${
        direction === "horizontal" ? "flex-row" : "flex-col"
      } ${gapVariants[gap]} ${alignmentVariants[alignment]}`}
    >
      {children}
    </div>
  );
};

export default Stack;
