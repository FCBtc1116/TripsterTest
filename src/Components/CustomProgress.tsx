import { Progress, Typography } from "@material-tailwind/react";

export default function CustomProgress(props: ICustomProgressProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-4 mb-1">
        <Typography className="text-customFontColor text-sm font-bold">
          {props.topic}
        </Typography>
        <Typography className="text-customFontColor text-sm ">
          {props.mark}/10
        </Typography>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className="bg-customBlue h-1.5 rounded-full"
          style={{ width: `${props.mark * 10}%` }}
        ></div>
      </div>
    </div>
  );
}

declare interface ICustomProgressProps {
  topic: string;
  mark: number;
}
