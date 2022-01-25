import React from 'react';
import Divider from "../Divider";

interface ICardProps {
  title: string,
  children?: React.ReactNode
}


const Card: React.FC<ICardProps> = (props) => {
  const {title, children} = props
  return (
    <div className="rounded-md bg-white">
      <div className="p-2">
        <header className="text-2xl capitalize">{title}</header>
      </div>
      <Divider/>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default Card;
