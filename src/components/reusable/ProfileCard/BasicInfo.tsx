import { Tab } from '@headlessui/react'
import React from 'react'

interface Props {
  basicInfoData: any
  workInfoData: any
  personalInfoData:any
}

const BasicInfo = (props: Props) => {
  const { basicInfoData, workInfoData,personalInfoData } = props

  return (
    <Tab.Panels>
      {
        basicInfoData?
      <Tab.Panel>
        <div className='grid grid-cols-2 gap-8'>
          {
            Object.entries(basicInfoData).map((elem: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">{elem[0]}</div>
                    <div className="px-4 py-2">{elem[1]}</div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </Tab.Panel>:null
      }
      {
        workInfoData?

      <Tab.Panel>
        <div className='grid grid-cols-2 gap-8'>
          {
            Object.entries(workInfoData).map((elem: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">{elem[0]}</div>
                    <div className="px-4 py-2">{elem[1]}</div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </Tab.Panel>:null
      }
      {
        personalInfoData?

        <Tab.Panel>
        <div className='grid grid-cols-2 gap-8'>
          {
            Object.entries(personalInfoData).map((elem: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">{elem[0]}</div>
                    <div className="px-4 py-2">{elem[1]}</div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </Tab.Panel>:null
      }
    </Tab.Panels>

  )
}

export default BasicInfo
