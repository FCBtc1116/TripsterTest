import { Button } from "@material-tailwind/react";

export default function CustomButton(props: ICustomButtonProps) {
  return !props.outline ? (
    <Button
      variant="filled"
      className="w-full h-full rounded-full"
      color="blue"
    >
      {props.text}
    </Button>
  ) : (
    <Button
      variant="outlined"
      className="w-full h-full rounded-full"
      color="blue"
    >
      {props.text}
    </Button>
  );
}

declare interface ICustomButtonProps {
  outline: boolean;
  text: string;
}
