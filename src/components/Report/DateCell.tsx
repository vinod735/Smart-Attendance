import React, { useState } from 'react'
import { Popover } from '@headlessui/react'

interface Props {
  value: string
}

const DateCell = (props: Props) => {
  const { value } = props
  const inOut = value.split("-")

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <p className='cursor-pointer'
        onMouseOver={() => setOpenPopup(true)}
        onMouseLeave={() => setOpenPopup(false)}
      >P</p>
      {
        openPopup ?
          <div className='absolute bg-[#fff] p-2 rounded-lg border'>
            <p className='text-sm text-green-800'>In: {inOut[0]?.substring(0, 5)}</p>
            <p className='text-sm text-red-800'>Out: {inOut[1]?.substring(0, 5)}</p>
          </div> : null
      }
    </>
  )
}

export default DateCell
