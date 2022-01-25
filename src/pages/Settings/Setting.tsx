import React from 'react';
import SettingList from "../../components/Settings/SettingList";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_SETTING, QUERY_SETTINGS} from "./graphql";
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {toast} from "react-toastify";
import {notificationTimeOut} from '../../utils/reactTostifyNotificationTime';
import {QUERY_COMPANY} from "../Company/queries";
import FullPageMessage from "../../components/reusable/FullPageMessage";

const Setting: React.FC<any> = (props) => {
  const {data, loading} = useQuery(QUERY_SETTINGS, {
    variables: {
      first: 100
    }
  })

  const {data: shiftData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 2,
      }
    })

  const [deleteSetting] = useMutation(DELETE_SETTING, {
    refetchQueries: [{
      query: QUERY_SETTINGS, variables: {
        first: 100
      }
    }]
  });


  const handleDeleteSetting = async (id: string) => {
    const response = await deleteSetting({
      variables: {
        objectID: id
      }
    })
    if (response.data.deleteSetting.success) {
      toast.success("Item deleted successfully", {autoClose: notificationTimeOut})
    } else {
      toast.error("Something went wrong", {autoClose: notificationTimeOut})
    }
  }


  return (
    <>
      {data ? <>
          <FullPageMessage
            data={shiftData?.companies?.edges}
            message={"Please add shift first"}
            link={'/shift/create'}
          >
            <SettingList
              data={data?.settings?.edges}
              loading={loading}
              handleDeleteSetting={handleDeleteSetting}
            />
          </FullPageMessage>
        </> :
        <DataLoadSpinner/>
      }
    </>
  );
};

export default Setting;