import clsx from "clsx";
import { forwardRef } from "react";
import Image from "next/image";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { avatar, avatarImg } from "./avatar.css";

type AvatarProps = {
  src: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  isNextImage?: boolean;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const avatarClasses = {
  root: "Vanilla-Avatar-root",
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    sx,
    src,
    size = "md",
    priority = false,
    isNextImage = true,
    ...rest
  } = props;

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
      {isNextImage ? (
        <Image
          src={src}
          layout="fill"
          objectFit="contain"
          alt="User Icon"
          priority={priority}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} className={avatarImg()} alt="User Icon" />
      )}
    </div>
  );
});
