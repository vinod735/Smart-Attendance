import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import EditShiftComponent from '../../components/Shift/EditShift'
import { GET_SHIFT, QUERY_COMPANY, UPDATE_SHIFT } from '../Company/queries'

const EditShift: React.FC<any> = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const [selectedShiftInitialValue, setSelectedShiftInitialValue] = useState<any>()
  const { data: selectedShiftData } = useQuery(GET_SHIFT, {
    variables: {
      id: params.id
    }
  })

  const [updateShift] = useMutation(UPDATE_SHIFT, {
    refetchQueries: [{
      query: QUERY_COMPANY,
      variables: {
        first: 100,
        level: 2
      }
    }]
  })

  useEffect(() => {
    if (selectedShiftData) {
      const initialValuesFormat = {
        shiftName: selectedShiftData.company.title,
        startingTime: selectedShiftData.company.startTime,
        endingTime: selectedShiftData.company.endTime
      }
      setSelectedShiftInitialValue(initialValuesFormat)
    }
  }, [selectedShiftData])

  const handleEditShift = async (values: any) => {
    console.log(values)
    const response = await updateShift({
      variables: {
        id: selectedShiftData?.company?.pk,
        parent: selectedShiftData?.company?.parent?.pk,
        title: values.shiftName,
        startTime: values.startingTime,
        endTime: values.endingTime
      }
    })

    if (response?.data?.updateCompany?.success) {
      navigate("/shift")
      toast.success("Shift Edited Successfully")
    } else {
      toast.error(response?.data?.updateCompany?.errors)
    }
  }

  return (
    <div>
      <EditShiftComponent
        handleEditShift={handleEditShift}
        selectedShiftInitialValue={selectedShiftInitialValue}
      />
    </div>
  )
}

export default EditShift
