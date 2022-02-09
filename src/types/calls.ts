import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v0 from './v0'
import * as v10 from './v10'
import * as v11 from './v11'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v15 from './v15'
import * as v17 from './v17'
import * as v18 from './v18'
import * as v23 from './v23'
import * as v24 from './v24'
import * as v25 from './v25'
import * as v26 from './v26'
import * as v28 from './v28'
import * as v29 from './v29'
import * as v30 from './v30'
import * as v5 from './v5'
import * as v6 from './v6'
import * as v7 from './v7'
import * as v9 from './v9'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9110 from './v9110'
import * as v9140 from './v9140'

export class BalancesForceTransferCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.forceTransfer' || this.ctx.extrinsic.name === 'balances.force_transfer')
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('balances.force_transfer') === '48ccdb7abfac6d3acb339fd1d6912592ff73e36843f4c2ff2a6391d0bc52c47b'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get asV0(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get isV28(): boolean {
    return this.ctx._chain.getCallHash('balances.force_transfer') === '74e0c568fd6aca804d5c95e3415122299eca0afd4f876360f062e58d8881cb81'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get asV28(): {source: v28.GenericMultiAddress, dest: v28.GenericMultiAddress, value: bigint} {
    assert(this.isV28)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('balances.force_transfer') === 'd28a011034c5f4a4fcd372830bec93a4de8ca0c3249ed0cf9cfa7a996e4699ad'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV9110(): {source: v9110.MultiAddress, dest: v9110.MultiAddress, value: bigint} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {source: v9110.MultiAddress, dest: v9110.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV9110
  }
}

export class BalancesTransferCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transfer')
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer') === '1b7076e31a9d48be4c397b21777c6c35944b02b8844b65d1277f5450f865914f'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get asV0(): {dest: Uint8Array, value: bigint} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get isV28(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer') === '05861090e3108003cb97b4ef075bbc3dfe3882247b47c71f4b64e099139d62f0'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get asV28(): {dest: v28.GenericMultiAddress, value: bigint} {
    assert(this.isV28)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer') === 'ff4b494557a07e4b7ad8549ff49c59a84a533072550505647509d9073121b8b0'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV9110(): {dest: v9110.MultiAddress, value: bigint} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {dest: v9110.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV9110
  }
}

export class BalancesTransferAllCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transferAll' || this.ctx.extrinsic.name === 'balances.transfer_all')
  }

  /**
   *  Transfer the entire transferable balance from the caller account.
   * 
   *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
   *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   *  transferred by this function. To ensure that this function results in a killed account,
   *  you might need to prepare the account by removing any reference counters, storage
   *  deposits, etc...
   * 
   *  The dispatch origin of this call must be Signed.
   * 
   *  - `dest`: The recipient of the transfer.
   *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *    of the funds the account has, causing the sender account to be killed (false), or
   *    transfer everything except at least the existential deposit, which will guarantee to
   *    keep the sender account alive (true).
   *    # <weight>
   *  - O(1). Just like transfer, but reading the user's transferable balance first.
   *    #</weight>
   */
  get isV9050(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer_all') === '493fabe756e4896b57451bbe4e981656c7d83752667982f0c2aa8f7d398a3988'
  }

  /**
   *  Transfer the entire transferable balance from the caller account.
   * 
   *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
   *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   *  transferred by this function. To ensure that this function results in a killed account,
   *  you might need to prepare the account by removing any reference counters, storage
   *  deposits, etc...
   * 
   *  The dispatch origin of this call must be Signed.
   * 
   *  - `dest`: The recipient of the transfer.
   *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *    of the funds the account has, causing the sender account to be killed (false), or
   *    transfer everything except at least the existential deposit, which will guarantee to
   *    keep the sender account alive (true).
   *    # <weight>
   *  - O(1). Just like transfer, but reading the user's transferable balance first.
   *    #</weight>
   */
  get asV9050(): {dest: v9050.GenericMultiAddress, keepAlive: boolean} {
    assert(this.isV9050)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer_all') === '522b34dee997311495b019abaa49d6d9881169474c06e6adb08ca8ccec3ee5a2'
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV9110(): {dest: v9110.MultiAddress, keepAlive: boolean} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {dest: v9110.MultiAddress, keepAlive: boolean} {
    deprecateLatest()
    return this.asV9110
  }
}

export class BalancesTransferKeepAliveCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transferKeepAlive' || this.ctx.extrinsic.name === 'balances.transfer_keep_alive')
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer_keep_alive') === '16b20d76aac049e10c74897f02f21e245d6d33ee473533aa8c2c686fd0be5afc'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get asV0(): {dest: Uint8Array, value: bigint} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get isV28(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer_keep_alive') === '84fead3d66e86fa3ddf466cc911cf8795e024963ea9f8de058d40a6c76610b16'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get asV28(): {dest: v28.GenericMultiAddress, value: bigint} {
    assert(this.isV28)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('balances.transfer_keep_alive') === 'c4b844c5a53c671fa5f15670e214796fc7f80b16157126b329fc150eabda8a85'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get asV9110(): {dest: v9110.MultiAddress, value: bigint} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {dest: v9110.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV9110
  }
}

export class CrowdloanContributeCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'crowdloan.contribute')
  }

  /**
   * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
   * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('crowdloan.contribute') === '7e270a150cdcaaeedcd4d5f9f63c1aca1458511945179275ed4a8011802c9802'
  }

  /**
   * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
   * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
   */
  get asV9110(): {index: number, value: bigint, signature: (v9110.MultiSignature | undefined)} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {index: number, value: bigint, signature: (v9110.MultiSignature | undefined)} {
    deprecateLatest()
    return this.asV9110
  }
}

export class CrowdloanCreateCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'crowdloan.create')
  }

  /**
   * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
   * 
   * This applies a lock to your parachain configuration, ensuring that it cannot be changed
   * by the parachain manager.
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('crowdloan.create') === 'e59ab6ad69501285e01e5938c0ce77c0c2a17e4d3514776d15b694fdbc734fcd'
  }

  /**
   * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
   * 
   * This applies a lock to your parachain configuration, ensuring that it cannot be changed
   * by the parachain manager.
   */
  get asV9110(): {index: number, cap: bigint, firstPeriod: number, lastPeriod: number, end: number, verifier: (v9110.MultiSigner | undefined)} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {index: number, cap: bigint, firstPeriod: number, lastPeriod: number, end: number, verifier: (v9110.MultiSigner | undefined)} {
    deprecateLatest()
    return this.asV9110
  }
}

export class ProxyProxyCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'proxy.proxy')
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV5(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '91581eafe240d3795fd1f48c04c236837779f7fa11b5de7553585faaa67de11c'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV5(): {real: Uint8Array, forceProxyType: (v5.ProxyType | undefined), call: v5.Type_21} {
    assert(this.isV5)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV6(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '92fe3c52ab0574459ef04a3d5e02ff515930ba0180e15c2b4315d9d1231ab209'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV6(): {real: Uint8Array, forceProxyType: (v6.ProxyType | undefined), call: v6.Type_21} {
    assert(this.isV6)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV7(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === 'ccd02cbaaefc20d19dd6600053c8a1b02948953a8b73a63432dadb5f4d33062b'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV7(): {real: Uint8Array, forceProxyType: (v7.ProxyType | undefined), call: v7.Type_21} {
    assert(this.isV7)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV9(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '7c0f3157b647c6e3220ac1abfabef24156fcf5a70451edefa4fc56400ad14d61'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV9(): {real: Uint8Array, forceProxyType: (v9.ProxyType | undefined), call: v9.Type_21} {
    assert(this.isV9)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV10(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '75f596d0b67de4f716c1c9fbd613ca3779696e75aa307a00be646f6dc1975bca'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV10(): {real: Uint8Array, forceProxyType: (v10.ProxyType | undefined), call: v10.Type_21} {
    assert(this.isV10)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV11(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '1743602abb7e8146384178b157e16850955f36cec47e005850264310b0fe716c'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV11(): {real: Uint8Array, forceProxyType: (v11.ProxyType | undefined), call: v11.Type_21} {
    assert(this.isV11)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV13(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === 'e0b94cc72966a99487944703f6d769ae13f4ec6c4b03b8941edfecb4b57228ce'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV13(): {real: Uint8Array, forceProxyType: (v13.ProxyType | undefined), call: v13.Type_21} {
    assert(this.isV13)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV14(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '810b638e489f45c455a16a9a8ee576439c3422494cf4f9cd2516240a56e585c4'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV14(): {real: Uint8Array, forceProxyType: (v14.ProxyType | undefined), call: v14.Type_21} {
    assert(this.isV14)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV15(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '72b477b8e7265a8bb3dd66a2ec0f55f135bda9c0bc8b31593f83affefa266d6d'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV15(): {real: Uint8Array, forceProxyType: (v15.ProxyType | undefined), call: v15.Type_21} {
    assert(this.isV15)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV17(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '029eeb0db35dab2a4fa2a7ba5a5bb550040963cef1895ebb365c68ad076760b4'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV17(): {real: Uint8Array, forceProxyType: (v17.ProxyType | undefined), call: v17.Type_21} {
    assert(this.isV17)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get isV18(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '080c6c85d55f689fc0bed9e5ab53cd65593b6eb6df87b243e5fab54ee2934517'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  P is the number of proxies the user has
   *  - Base weight: 19.87 + .141 * P µs
   *  - DB weight: 1 storage read.
   *  - Plus the weight of the `call`
   *  # </weight>
   */
  get asV18(): {real: Uint8Array, forceProxyType: (v18.ProxyType | undefined), call: v18.Type_21} {
    assert(this.isV18)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV23(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '468950256045858308e2fba8093686a291e5eb9af51ae43b24abd6da8fcb7db2'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV23(): {real: Uint8Array, forceProxyType: (v23.ProxyType | undefined), call: v23.Type_21} {
    assert(this.isV23)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV24(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === 'd6d61b9d1ce251904fa28c103e5c2f324195fffc933ff32445473c0a04f48bcd'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV24(): {real: Uint8Array, forceProxyType: (v24.ProxyType | undefined), call: v24.Type_21} {
    assert(this.isV24)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV25(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '3899037070d474b8204d480e123ca05a782b3a039e374d648debce1e655628de'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV25(): {real: Uint8Array, forceProxyType: (v25.ProxyType | undefined), call: v25.Type_21} {
    assert(this.isV25)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV26(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === 'f26db2ed8342512327328aa08a4827c2e5b3b7838de65553691882ee97e2f594'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV26(): {real: Uint8Array, forceProxyType: (v26.ProxyType | undefined), call: v26.Type_21} {
    assert(this.isV26)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV28(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '978f4648c42d0b742ac602c8e954aeac9ff678877866a74da9318d60d6cc9909'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV28(): {real: Uint8Array, forceProxyType: (v28.ProxyType | undefined), call: v28.Type_21} {
    assert(this.isV28)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV29(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '175afc811fd8e9f62a7e1cf15517cf4f68a682efeff298ecc21c479779d23aed'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV29(): {real: Uint8Array, forceProxyType: (v29.ProxyType | undefined), call: v29.Type_21} {
    assert(this.isV29)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV30(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === 'e2381ce2ec4fd5e56a11c68361f0a09ba5661ffc71b203e304ef858a9a82375a'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV30(): {real: Uint8Array, forceProxyType: (v30.ProxyType | undefined), call: v30.Type_21} {
    assert(this.isV30)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV9050(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '97d476d6a6ec22cadf0476e2204450199564e7e7f814a944b99d4df8129dddd7'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV9050(): {real: Uint8Array, forceProxyType: (v9050.ProxyType | undefined), call: v9050.Type_21} {
    assert(this.isV9050)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV9080(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '960063fda2afa5c524ac0d0fd237020e013c81919651dc52e53c8a906bf0604d'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV9080(): {real: Uint8Array, forceProxyType: (v9080.ProxyType | undefined), call: v9080.Type_21} {
    assert(this.isV9080)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV9090(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '4696518390efb1385e00cb4da05d6e8fd687af80d9630bf23e76e7801af28abb'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV9090(): {real: Uint8Array, forceProxyType: (v9090.ProxyType | undefined), call: v9090.Type_21} {
    assert(this.isV9090)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get isV9100(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '888e016db4f4a5fad4b7d49fe27f8fab527c66942acc5a43fe7591e2d56840cf'
  }

  /**
   *  Dispatch the given `call` from an account that the sender is authorised for through
   *  `add_proxy`.
   * 
   *  Removes any corresponding announcement(s).
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  Parameters:
   *  - `real`: The account that the proxy will make a call on behalf of.
   *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   *  - `call`: The call to be made by the `real` account.
   * 
   *  # <weight>
   *  Weight is a function of the number of proxies the user has (P).
   *  # </weight>
   */
  get asV9100(): {real: Uint8Array, forceProxyType: (v9100.ProxyType | undefined), call: v9100.Type_21} {
    assert(this.isV9100)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '3afa09e273646a88390cca540d4ef660dd017a379c5092db2f1ecd8cd0b6c027'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV9110(): {real: v9110.AccountId32, forceProxyType: (v9110.ProxyType | undefined), call: v9110.Call} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV9140(): boolean {
    return this.ctx._chain.getCallHash('proxy.proxy') === '630a6c3af0ceb18d48c22b7a2e2b246f4cd59c9428013cfe8f4792d72ae6418b'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV9140(): {real: v9140.AccountId32, forceProxyType: (v9140.ProxyType | undefined), call: v9140.Call} {
    assert(this.isV9140)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {real: v9140.AccountId32, forceProxyType: (v9140.ProxyType | undefined), call: v9140.Call} {
    deprecateLatest()
    return this.asV9140
  }
}

export class StakingPayoutStakersCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'staking.payoutStakers' || this.ctx.extrinsic.name === 'staking.payout_stakers')
  }

  /**
   *  Pay out all the stakers behind a single validator for a single era.
   * 
   *  - `validator_stash` is the stash account of the validator. Their nominators, up to
   *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
   *  - `era` may be any era between `[current_era - history_depth; current_era]`.
   * 
   *  The origin of this call must be _Signed_. Any account can call this function, even if
   *  it is not one of the stakers.
   * 
   *  This can only be called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
   *  - Contains a limited number of reads and writes.
   *  -----------
   *  N is the Number of payouts for the validator (including the validator)
   *  Base Weight: 110 + 54.2 * N µs (Median Slopes)
   *  DB Weight:
   *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, MigrateEra, ErasValidatorReward,
   *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
   *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
   *  - Write Each: System Account, Locks, Ledger (3 items)
   *  # </weight>
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('staking.payout_stakers') === '1fed710492a18f6b425d1332be2515dc1402588e0b4798e067293eb2104339e1'
  }

  /**
   *  Pay out all the stakers behind a single validator for a single era.
   * 
   *  - `validator_stash` is the stash account of the validator. Their nominators, up to
   *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
   *  - `era` may be any era between `[current_era - history_depth; current_era]`.
   * 
   *  The origin of this call must be _Signed_. Any account can call this function, even if
   *  it is not one of the stakers.
   * 
   *  This can only be called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
   *  - Contains a limited number of reads and writes.
   *  -----------
   *  N is the Number of payouts for the validator (including the validator)
   *  Base Weight: 110 + 54.2 * N µs (Median Slopes)
   *  DB Weight:
   *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, MigrateEra, ErasValidatorReward,
   *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
   *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
   *  - Write Each: System Account, Locks, Ledger (3 items)
   *  # </weight>
   */
  get asV0(): {validatorStash: Uint8Array, era: number} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): {validatorStash: Uint8Array, era: number} {
    deprecateLatest()
    return this.asV0
  }
}

export class UtilityBatchCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'utility.batch')
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'ffb6d56b21b4b772a691acae174ed594bf8f6ff20a8349608219c795c31f1ae2'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV0(): {calls: v0.Type_21[]} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV5(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'f2d99bd2da30b3ffa472a1b2156d075ea20c831b5dae8075783450e3b4c196d9'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV5(): {calls: v5.Type_21[]} {
    assert(this.isV5)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV6(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'ffe8c34ef54f7fdeba1f7204bc73d900a0ebe4d643f816acef724f7ce4d4a83d'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV6(): {calls: v6.Type_21[]} {
    assert(this.isV6)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV7(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e0e06f902aca309322d3110b17514f3b84d53849fd10cb69ad87c9a1ad4a4dfb'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  This will execute until the first one fails and then stop. Calls must fulfil the
   *  `IsCallable` filter unless the origin is `Root`.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV7(): {calls: v7.Type_21[]} {
    assert(this.isV7)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV9(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'a0bfe28a0355c56918287aba24d2683fb0cc9ac71ce641517aedeccc6cf34365'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV9(): {calls: v9.Type_21[]} {
    assert(this.isV9)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV10(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '8a82471a7fdab64d166dac0c0aeb108ae040f201bbc78218acae74e0da3d3942'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV10(): {calls: v10.Type_21[]} {
    assert(this.isV10)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV11(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '077865553935b4f510aa668a5d4c3607882c095efaaa9d402774cb698987e523'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV11(): {calls: v11.Type_21[]} {
    assert(this.isV11)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV13(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e15522ea901a949ee96baea4cfa177f531319915fcbed9945b0ad01daf515905'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV13(): {calls: v13.Type_21[]} {
    assert(this.isV13)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV14(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e5fc5db7adb2e74b850324b28db0cbaf36122dc76f954c8c16891570936ca579'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV14(): {calls: v14.Type_21[]} {
    assert(this.isV14)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV15(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '7f414e5b7d49aa8e48d6c7770d6ff62418ee229a3278b1991a3b9890720cdc99'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV15(): {calls: v15.Type_21[]} {
    assert(this.isV15)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV17(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'b66b9be598882029cd0e02be324912bf85927d9a7a95b1ab7d14a5abe52a9047'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV17(): {calls: v17.Type_21[]} {
    assert(this.isV17)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV18(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'a5e5268e39ff4ad7e714e66b8c0ffd5e87476a8005a619aa66ade9cc80563f98'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV18(): {calls: v18.Type_21[]} {
    assert(this.isV18)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV23(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'eeed88f8ccb46637be05b355de0362bc1cc8b57341ab625b81599b973adad22b'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV23(): {calls: v23.Type_21[]} {
    assert(this.isV23)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV24(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '4202cd18751387919f0dc8948e2f07d682ee8fcc4459681a281b20a32c5c0e17'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV24(): {calls: v24.Type_21[]} {
    assert(this.isV24)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV25(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e30f054052822967e49eecd679fd0bcae698b00dcdcf1bb49dd48ddbb635e487'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Base weight: 14.39 + .987 * c µs
   *  - Plus the sum of the weights of the `calls`.
   *  - Plus one additional event. (repeat read/write)
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV25(): {calls: v25.Type_21[]} {
    assert(this.isV25)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV26(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '66d959c328a330f9e4cba37610e06004a4dbee6a2a196754d6d6adabd5bd1507'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Trait::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV26(): {calls: v26.Type_21[]} {
    assert(this.isV26)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV28(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '075fff7f40b55192fd2eeaab690083c5d7014932c9f121646c85262aeeef06aa'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV28(): {calls: v28.Type_21[]} {
    assert(this.isV28)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV29(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '984d6b1dc7386c82d0219a4cadd30742a507dbe422f2b2931e93ebd4116962b0'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV29(): {calls: v29.Type_21[]} {
    assert(this.isV29)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV30(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '51ab26095f821e257e2975a5c16029953c90f82154e229f2cbbefce7c134df5c'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV30(): {calls: v30.Type_21[]} {
    assert(this.isV30)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV9050(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e032f2e9d1e852ae22701cf33127cef1c3c277d465ae14c5aeb2b1fa9ed99697'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV9050(): {calls: v9050.Type_21[]} {
    assert(this.isV9050)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV9080(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'dc293a9774b79deb3c8ca6adde6cf337731021f85e92bcc7a83db641b2fbe415'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin.
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV9080(): {calls: v9080.Type_21[]} {
    assert(this.isV9080)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *    exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV9090(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'd53c6dd4597b4e75d194b5da29e28eaa9d7b562f3b69a08797506268a4bfe122'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *    exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV9090(): {calls: v9090.Type_21[]} {
    assert(this.isV9090)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *    exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get isV9100(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === '6f845619491413fe6f0a99b2e0ffec66e9b024b1aa708df60c02a450277a2d23'
  }

  /**
   *  Send a batch of dispatch calls.
   * 
   *  May be called from any origin.
   * 
   *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *    exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   *  If origin is root then call are dispatch without checking origin filter. (This includes
   *  bypassing `frame_system::Config::BaseCallFilter`).
   * 
   *  # <weight>
   *  - Complexity: O(C) where C is the number of calls to be batched.
   *  # </weight>
   * 
   *  This will return `Ok` in all circumstances. To determine the success of the batch, an
   *  event is deposited. If a call failed and the batch was interrupted, then the
   *  `BatchInterrupted` event is deposited, along with the number of successful calls made
   *  and the error of the failed call. If all were successful, then the `BatchCompleted`
   *  event is deposited.
   */
  get asV9100(): {calls: v9100.Type_21[]} {
    assert(this.isV9100)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'f39ae1811b29c793caae130369024178bb4f3dd97321d077c6133e9068865eaf'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV9110(): {calls: v9110.Call[]} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getCallHash('utility.batch') === 'e80fd4ee582fb3e10b4838ccd53d0dbad856a56b0583f004844a55046c69b1c6'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV9140(): {calls: v9140.Call[]} {
    assert(this.isV9140)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {calls: v9140.Call[]} {
    deprecateLatest()
    return this.asV9140
  }
}