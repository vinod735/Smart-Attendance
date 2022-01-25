import React from 'react';
import {Link} from "react-router-dom";

interface IFullPageMessageProps {
  children?: React.ReactNode
  data?: any
  message?: string
  link?: string
}

const FullPageMessage: React.FC<IFullPageMessageProps> = (props) => {
  const {data, children, message, link} = props
  return (
    <>
      {data?.length ? children :
        <>
          <main
            className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <h1
                  className="mt-2 font-extrabold text-gray-900 tracking-tight sm:text-5xl"
                >{message}</h1>

                <div className="mt-6">
                  {link &&
                    <Link
                      to={link}
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >Create Now<span
                      aria-hidden="true"> &rarr;</span></Link>}
                </div>
              </div>
            </div>
          </main>
        </>
      }
    </>
  );
};

export default FullPageMessage;