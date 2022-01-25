import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type ArchiveAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccountPayload = {
  __typename?: 'ArchiveAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type AuthRegisterInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  username: Scalars['String'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type AuthRegisterPayload = {
  __typename?: 'AuthRegisterPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type AuthUserNode = Node & {
  __typename?: 'AuthUserNode';
  archived?: Maybe<Scalars['Boolean']>;
  companyHod: CompanyNodeConnection;
  createdCompanys: CompanyNodeConnection;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  updatedCompanys: CompanyNodeConnection;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};


export type AuthUserNodeCompanyHodArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type AuthUserNodeCreatedCompanysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type AuthUserNodeUpdatedCompanysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AuthUserNodeConnection = {
  __typename?: 'AuthUserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AuthUserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AuthUserNode` and its cursor. */
export type AuthUserNodeEdge = {
  __typename?: 'AuthUserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AuthUserNode>;
};

export type CompanyNode = Node & {
  __typename?: 'CompanyNode';
  address?: Maybe<Scalars['String']>;
  children: CompanyNodeConnection;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  createdBy?: Maybe<AuthUserNode>;
  hod?: Maybe<AuthUserNode>;
  /** The ID of the object. */
  id: Scalars['ID'];
  level: Scalars['Int'];
  lft: Scalars['Int'];
  modified: Scalars['DateTime'];
  parent?: Maybe<CompanyNode>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  rght: Scalars['Int'];
  title: Scalars['String'];
  treeId: Scalars['Int'];
  updatedBy?: Maybe<AuthUserNode>;
};


export type CompanyNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CompanyNodeConnection = {
  __typename?: 'CompanyNodeConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompanyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `CompanyNode` and its cursor. */
export type CompanyNodeEdge = {
  __typename?: 'CompanyNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CompanyNode>;
};

export type CreateCompanyInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  hod?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyNode>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteCompanyInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  objectId: Scalars['String'];
};

export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccountPayload>;
  createCompany?: Maybe<CreateCompanyPayload>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChangePayload>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordResetPayload>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSetPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshTokenPayload>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<AuthRegisterPayload>;
  /**
   * Remove user secondary email.
   *
   * Require password confirmation.
   */
  removeSecondaryEmail?: Maybe<RemoveSecondaryEmailPayload>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmailPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeTokenPayload>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivationPayload>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmailsPayload>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccountPayload>;
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccountPayload>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmailPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyTokenPayload>;
};


export type MutationArchiveAccountArgs = {
  input: ArchiveAccountInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};


export type MutationPasswordChangeArgs = {
  input: PasswordChangeInput;
};


export type MutationPasswordResetArgs = {
  input: PasswordResetInput;
};


export type MutationPasswordSetArgs = {
  input: PasswordSetInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRegisterArgs = {
  input: AuthRegisterInput;
};


export type MutationRemoveSecondaryEmailArgs = {
  input: RemoveSecondaryEmailInput;
};


export type MutationResendActivationEmailArgs = {
  input: ResendActivationEmailInput;
};


export type MutationRevokeTokenArgs = {
  input: RevokeTokenInput;
};


export type MutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type MutationSendSecondaryEmailActivationArgs = {
  input: SendSecondaryEmailActivationInput;
};


export type MutationSwapEmailsArgs = {
  input: SwapEmailsInput;
};


export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationVerifyAccountArgs = {
  input: VerifyAccountInput;
};


export type MutationVerifySecondaryEmailArgs = {
  input: VerifySecondaryEmailInput;
};


export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  mobileNumber?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebTokenPayload = {
  __typename?: 'ObtainJSONWebTokenPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PasswordChangeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChangePayload = {
  __typename?: 'PasswordChangePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type PasswordResetInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordResetPayload = {
  __typename?: 'PasswordResetPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PasswordSetInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSetPayload = {
  __typename?: 'PasswordSetPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  companies?: Maybe<CompanyNodeConnection>;
  company?: Maybe<CompanyNode>;
  me?: Maybe<UserNode>;
  user?: Maybe<AuthUserNode>;
  users?: Maybe<AuthUserNodeConnection>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  mobileNumber?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type RefreshTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type RemoveSecondaryEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Remove user secondary email.
 *
 * Require password confirmation.
 */
export type RemoveSecondaryEmailPayload = {
  __typename?: 'RemoveSecondaryEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ResendActivationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmailPayload = {
  __typename?: 'ResendActivationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RevokeTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  refreshToken: Scalars['String'];
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeTokenPayload = {
  __typename?: 'RevokeTokenPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SendPasswordResetEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SendSecondaryEmailActivationInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivationPayload = {
  __typename?: 'SendSecondaryEmailActivationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SwapEmailsInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmailsPayload = {
  __typename?: 'SwapEmailsPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateCompanyInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  companyId: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  hod?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyNode>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  companyHod: CompanyNodeConnection;
  createdCompanys: CompanyNodeConnection;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  mobileNumber: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  updatedCompanys: CompanyNodeConnection;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};


export type UserNodeCompanyHodArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type UserNodeCreatedCompanysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type UserNodeUpdatedCompanysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type VerifyAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccountPayload = {
  __typename?: 'VerifyAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifySecondaryEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmailPayload = {
  __typename?: 'VerifySecondaryEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifyTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyTokenPayload = {
  __typename?: 'VerifyTokenPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserListQuery = { __typename?: 'Query', users?: { __typename?: 'AuthUserNodeConnection', edges: Array<{ __typename?: 'AuthUserNodeEdge', node?: { __typename?: 'AuthUserNode', id: string, email: string, username: string, secondaryEmail?: string | null | undefined, pk?: number | null | undefined, mobileNumber: string } | null | undefined } | null | undefined> } | null | undefined };


export const UserListDocument = gql`
    query UserList {
  users(first: 10) {
    edges {
      node {
        id
        email
        username
        secondaryEmail
        pk
        mobileNumber
      }
    }
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;