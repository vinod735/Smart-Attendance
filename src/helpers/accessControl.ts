import {permissions} from "./sessionKey";
import React from "react";

interface ICheckPermissionProps {
  allowedPermissions: any
}

interface IAccessControlProps {
  allowedPermissions: any,
  children: React.ReactNode,
  renderNoAccess: () => void
}

const checkPermissions = ({allowedPermissions}: ICheckPermissionProps) => {
  if (allowedPermissions.length === 0) {
    return true;
  }
  return permissions().some((permission: any) =>
    allowedPermissions.includes(permission['codename'])
  );
};

const AccessControl = ({
                         allowedPermissions,
                         children,
                         renderNoAccess
                       }: IAccessControlProps) => {
  const permitted = checkPermissions(allowedPermissions);
  if (permitted) {
    return children;
  }
  return renderNoAccess();
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  permissions: [],
  renderNoAccess: () => null,
};

export default AccessControl;
