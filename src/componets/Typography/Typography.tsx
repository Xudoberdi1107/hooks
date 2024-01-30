import React from "react";

type TypographyProps = {
  children?: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
};

function Typography(props: TypographyProps) {
  const { children, tag, className } = props;

  const Tag = tag as "p";

  return <Tag className={className}>{children}</Tag>;
}

export default Typography;
