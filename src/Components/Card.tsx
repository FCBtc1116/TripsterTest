import {
  faHouseChimneyWindow,
  faEye,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomButton from "./CustomButton";

export default function Card(props: ICardProps) {
  return (
    <div className="p-2 rounded-2xl bg-white w-full h-full">
      <img
        src={props.img}
        alt="card"
        className="w-full h-[200px] rounded-2xl"
      />
      <p className="my-2 text-xl text-black font-bold">{props.topic}</p>
      <div className="flex items-center mb-1">
        <FontAwesomeIcon icon={faHouseChimneyWindow} className="text-sm" />
        <p className="text-customFontColor ml-[10px] text-sm">
          {props.sqm} sqm
        </p>
      </div>
      <div className="flex items-center mb-1">
        <FontAwesomeIcon icon={faEye} className="text-sm" />
        <p className="text-customFontColor ml-[10px] text-sm">
          {props.people} people
        </p>
      </div>
      <div className="flex items-center mb-1">
        <FontAwesomeIcon icon={faBed} className="text-sm" />
        <p className="text-customFontColor ml-[10px] text-sm">
          {props.bedSize}
        </p>
      </div>
      <p className="text-customLightFontColor text-sm my-3">
        Non-refunclable, Breakfast included
      </p>
      <div className="w-full h-auto mb-2">
        <CustomButton outline={false} text={`Book now for $${props.price}`} />
      </div>
    </div>
  );
}

declare interface ICardProps {
  img: string;
  topic: string;
  sqm: number;
  people: number;
  bedSize: string;
  price: number;
}
