import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = { 'principal' : Principal } |
  { 'blob' : Array<number> } |
  { 'text' : string };
export type AccountIdentifier__1 = { 'principal' : Principal } |
  { 'blob' : Array<number> } |
  { 'text' : string };
export interface CreateInvoiceArgs {
  'token' : Token,
  'details' : [] | [Details],
  'amount' : bigint,
}
export interface CreateInvoiceErr {
  'kind' : { 'InvalidDetails' : null } |
    { 'InvalidAmount' : null } |
    { 'InvalidDestination' : null } |
    { 'InvalidToken' : null } |
    { 'Other' : null },
  'message' : [] | [string],
}
export type CreateInvoiceResult = { 'ok' : CreateInvoiceSuccess } |
  { 'err' : CreateInvoiceErr };
export interface CreateInvoiceSuccess { 'invoice' : Invoice }
export interface Details { 'meta' : Array<number>, 'description' : string }
export interface GetBalanceArgs { 'token' : Token }
export interface GetBalanceErr {
  'kind' : { 'NotFound' : null } |
    { 'InvalidToken' : null } |
    { 'Other' : null },
  'message' : [] | [string],
}
export type GetBalanceResult = { 'ok' : GetBalanceSuccess } |
  { 'err' : GetBalanceErr };
export interface GetBalanceSuccess { 'balance' : bigint }
export interface GetCallerIdentifierArgs { 'token' : Token }
export interface GetCallerIdentifierErr {
  'kind' : { 'InvalidToken' : null } |
    { 'Other' : null },
  'message' : [] | [string],
}
export type GetCallerIdentifierResult = { 'ok' : GetCallerIdentifierSuccess } |
  { 'err' : GetCallerIdentifierErr };
export interface GetCallerIdentifierSuccess {
  'accountIdentifier' : AccountIdentifier,
}
export interface GetInvoiceArgs { 'id' : bigint }
export interface GetInvoiceErr {
  'kind' : { 'NotFound' : null } |
    { 'InvalidInvoiceId' : null } |
    { 'Other' : null },
  'message' : [] | [string],
}
export type GetInvoiceResult = { 'ok' : GetInvoiceSuccess } |
  { 'err' : GetInvoiceErr };
export interface GetInvoiceSuccess { 'invoice' : Invoice }
export interface Invoice {
  'id' : bigint,
  'creator' : Principal,
  'destination' : AccountIdentifier,
  'token' : TokenVerbose,
  'refundedAtTime' : [] | [Time],
  'paid' : boolean,
  'refunded' : boolean,
  'verifiedAtTime' : [] | [Time],
  'amountPaid' : bigint,
  'expiration' : Time,
  'refundAccount' : [] | [AccountIdentifier],
  'details' : [] | [Details],
  'amount' : bigint,
}
export interface RefundInvoiceArgs {
  'id' : bigint,
  'refundAccount' : AccountIdentifier,
  'amount' : bigint,
}
export interface RefundInvoiceErr {
  'kind' : { 'InvalidDestination' : null } |
    { 'TransferError' : null } |
    { 'NotFound' : null } |
    { 'BadFee' : null } |
    { 'InvalidToken' : null } |
    { 'InvalidInvoiceId' : null } |
    { 'AlreadyRefunded' : null } |
    { 'Other' : null } |
    { 'NotYetPaid' : null } |
    { 'InsufficientFunds' : null },
  'message' : [] | [string],
}
export type RefundInvoiceResult = { 'ok' : RefundInvoiceSuccess } |
  { 'err' : RefundInvoiceErr };
export interface RefundInvoiceSuccess { 'blockHeight' : bigint }
export type Time = bigint;
export interface Token { 'symbol' : string }
export interface TokenVerbose {
  'decimals' : bigint,
  'meta' : [] | [{ 'Issuer' : string }],
  'symbol' : string,
}
export interface TransferArgs {
  'destination' : AccountIdentifier,
  'token' : Token,
  'amount' : bigint,
}
export interface TransferError {
  'kind' : { 'InvalidDestination' : null } |
    { 'BadFee' : null } |
    { 'InvalidToken' : null } |
    { 'Other' : null } |
    { 'InsufficientFunds' : null },
  'message' : [] | [string],
}
export type TransferResult = { 'ok' : TransferSuccess } |
  { 'err' : TransferError };
export interface TransferSuccess { 'blockHeight' : bigint }
export interface VerifyInvoiceArgs { 'id' : bigint }
export interface VerifyInvoiceErr {
  'kind' : { 'InvalidAccount' : null } |
    { 'TransferError' : null } |
    { 'NotFound' : null } |
    { 'InvalidToken' : null } |
    { 'InvalidInvoiceId' : null } |
    { 'Other' : null } |
    { 'NotYetPaid' : null } |
    { 'Expired' : null },
  'message' : [] | [string],
}
export type VerifyInvoiceResult = { 'ok' : VerifyInvoiceSuccess } |
  { 'err' : VerifyInvoiceErr };
export type VerifyInvoiceSuccess = { 'Paid' : { 'invoice' : Invoice } } |
  { 'AlreadyVerified' : { 'invoice' : Invoice } };
export interface _SERVICE {
  'accountIdentifierToBlob' : (arg_0: AccountIdentifier__1) => Promise<
      Array<number>
    >,
  'create_invoice' : (arg_0: CreateInvoiceArgs) => Promise<CreateInvoiceResult>,
  'get_balance' : (arg_0: GetBalanceArgs) => Promise<GetBalanceResult>,
  'get_caller_identifier' : (arg_0: GetCallerIdentifierArgs) => Promise<
      GetCallerIdentifierResult
    >,
  'get_invoice' : (arg_0: GetInvoiceArgs) => Promise<GetInvoiceResult>,
  'refund_invoice' : (arg_0: RefundInvoiceArgs) => Promise<RefundInvoiceResult>,
  'remaining_cycles' : () => Promise<bigint>,
  'transfer' : (arg_0: TransferArgs) => Promise<TransferResult>,
  'verify_invoice' : (arg_0: VerifyInvoiceArgs) => Promise<VerifyInvoiceResult>,
}
