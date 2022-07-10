import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { avatar } from "./avatar.css";
import Image from "next/image";

type AvatarProps = {
  src: string;
  className?: string;
  size?: "sm" | "md" | "lg";
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const avatarClasses = {
  root: "Vanilla-Avatar-root",
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, sx, src, size = "md", ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        avatarClasses.root,
        sx && configs(sx as object),
        avatar({ size }),
        className
      )}
      {...rest}
    >
      <Image src={src} layout="fill" objectFit="contain" alt="User Icon" />
    </div>
  );
});
