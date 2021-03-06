import clsx from "clsx";
import { forwardRef } from "react";
import { useDisclosure } from "../../../helpers/hooks/useDisclosure";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { Grow } from "../Grow/Grow";
import { accordion } from "./accordion.css";

type AccordionProps = {
  className?: string;
  initialIsOpen?: boolean;
  excerpt: React.ReactElement;
  fullContent: React.ReactElement;
} & { sx?: Partial<SystemProps> } & Omit<
    JSX.IntrinsicElements["div"],
    "exceprt"
  >;

const accordionClasses = {
  root: "Vanilla-Accordion-root",
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      className,
      sx,
      initialIsOpen = false,
      excerpt,
      fullContent,
      ...rest
    } = props;
    const { isOpen, onOpen } = useDisclosure(initialIsOpen);

    return (
      <div
        ref={ref}
        className={clsx(
          accordionClasses.root,
          sx && configs(sx as object),
          accordion(),
          className
        )}
        {...rest}
      >
        {!isOpen && excerpt}
        {!isOpen && (
          <Flex
            sx={{
              mt: 2,
              justifyContent: "center",
            }}
          >
            <Button variant="text" onClick={onOpen}>
              もっと見る
            </Button>
          </Flex>
        )}
        <Grow inProp={isOpen}>{fullContent}</Grow>
      </div>
    );
  }
);
