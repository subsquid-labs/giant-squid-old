import type {Result} from './support'

export type Type_93 = Type_93_System | Type_93_Timestamp | Type_93_Balances | Type_93_Authorship | Type_93_Staking | Type_93_Session | Type_93_FinalityTracker | Type_93_Grandpa | Type_93_ImOnline | Type_93_Democracy | Type_93_Council | Type_93_TechnicalCommittee | Type_93_ElectionsPhragmen | Type_93_TechnicalMembership | Type_93_Treasury | Type_93_Claims | Type_93_Parachains | Type_93_Attestations | Type_93_Slots | Type_93_Registrar | Type_93_Nicks | Type_93_Identity | Type_93_Utility

export interface Type_93_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_93_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_93_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_93_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_93_Staking {
  __kind: 'Staking'
  value: StakingCall
}

export interface Type_93_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_93_FinalityTracker {
  __kind: 'FinalityTracker'
  value: FinalityTrackerCall
}

export interface Type_93_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Type_93_ImOnline {
  __kind: 'ImOnline'
  value: ImOnlineCall
}

export interface Type_93_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_93_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_93_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_93_ElectionsPhragmen {
  __kind: 'ElectionsPhragmen'
  value: ElectionsPhragmenCall
}

export interface Type_93_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Type_93_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_93_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface Type_93_Parachains {
  __kind: 'Parachains'
  value: ParachainsCall
}

export interface Type_93_Attestations {
  __kind: 'Attestations'
  value: AttestationsCall
}

export interface Type_93_Slots {
  __kind: 'Slots'
  value: SlotsCall
}

export interface Type_93_Registrar {
  __kind: 'Registrar'
  value: RegistrarCall
}

export interface Type_93_Nicks {
  __kind: 'Nicks'
  value: NicksCall
}

export interface Type_93_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Type_93_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix

/**
 *  A big dispatch that will disallow any other transaction to be included.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
}

/**
 *  Make some on-chain remark.
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 *  Set the new code.
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  new: Uint8Array
}

/**
 *  Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive

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
 *    - Removing enough funds from an account will trigger
 *      `T::DustRemoval::on_unbalanced` and `T::OnFreeBalanceZero::on_free_balance_zero`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 * 
 *  # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: never
  value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  # </weight>
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: never
  newFree: bigint
  newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: never
  dest: never
  value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Module.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: never
  value: bigint
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
 *  the `origin` falls below _existential deposit_ and gets removed as dust.
 *  # </weight>
 */
export interface StakingCall_bond {
  __kind: 'bond'
  controller: never
  value: bigint
  payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  # </weight>
 */
export interface StakingCall_bond_extra {
  __kind: 'bond_extra'
  maxAdditional: bigint
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
 *  - One DB entry.
 *  </weight>
 */
export interface StakingCall_unbond {
  __kind: 'unbond'
  value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
  __kind: 'withdraw_unbonded'
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_validate {
  __kind: 'validate'
  prefs: ValidatorPrefsWithCommission
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets`,
 *  which is capped at `MAX_NOMINATIONS`.
 *  - Both the reads and writes follow a similar pattern.
 *  # </weight>
 */
export interface StakingCall_nominate {
  __kind: 'nominate'
  targets: never[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_chill {
  __kind: 'chill'
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_set_payee {
  __kind: 'set_payee'
  payee: RewardDestination
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_set_controller {
  __kind: 'set_controller'
  controller: never
}

/**
 *  The ideal number of validators.
 */
export interface StakingCall_set_validator_count {
  __kind: 'set_validator_count'
  new: number
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  # <weight>
 *  - No arguments.
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
  __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  # <weight>
 *  - No arguments.
 *  # </weight>
 */
export interface StakingCall_force_new_era {
  __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 */
export interface StakingCall_set_invulnerables {
  __kind: 'set_invulnerables'
  validators: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 */
export interface StakingCall_force_unstake {
  __kind: 'force_unstake'
  stash: Uint8Array
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  # <weight>
 *  - One storage write
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
  __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash. Can be called by either the root origin or
 *  the `T::SlashCancelOrigin`.
 *  passing the era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  - One storage write.
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
  __kind: 'cancel_deferred_slash'
  era: number
  slashIndices: number[]
}

export type SessionCall = SessionCall_set_keys

/**
 *  Sets the session key(s) of the function caller to `key`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - O(log n) in number of accounts.
 *  - One extra DB entry.
 *  # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]
  proof: Uint8Array
}

export type FinalityTrackerCall = FinalityTrackerCall_final_hint

/**
 *  Hint that the author of this block thinks the best finalized
 *  block is the given number.
 */
export interface FinalityTrackerCall_final_hint {
  __kind: 'final_hint'
  hint: number
}

export type GrandpaCall = GrandpaCall_report_misbehavior

/**
 *  Report some misbehavior.
 */
export interface GrandpaCall_report_misbehavior {
  __kind: 'report_misbehavior'
  report: Uint8Array
}

export type ImOnlineCall = ImOnlineCall_heartbeat

export interface ImOnlineCall_heartbeat {
  __kind: 'heartbeat'
  heartbeat: HeartbeatTo244
  signature: Uint8Array
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_proxy_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_set_proxy | DemocracyCall_resign_proxy | DemocracyCall_remove_proxy | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_imminent_preimage | DemocracyCall_reap_preimage

/**
 *  Propose a sensitive action to be taken.
 * 
 *  # <weight>
 *  - O(1).
 *  - Two DB changes, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: Uint8Array
  value: bigint
}

/**
 *  Propose a sensitive action to be taken.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB entry.
 *  # </weight>
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB change, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: number
}

/**
 *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
 *  the proposal;  otherwise it is a vote to keep the status quo.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB change, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_proxy_vote {
  __kind: 'proxy_vote'
  refIndex: number
  vote: number
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: Uint8Array
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: Uint8Array
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: Uint8Array
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `EmergencyVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
}

/**
 *  Veto and blacklist the external proposal hash.
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Uint8Array
}

/**
 *  Remove a referendum.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

/**
 *  Specify a proxy. Called by the stash.
 * 
 *  # <weight>
 *  - One extra DB entry.
 *  # </weight>
 */
export interface DemocracyCall_set_proxy {
  __kind: 'set_proxy'
  proxy: Uint8Array
}

/**
 *  Clear the proxy. Called by the proxy.
 * 
 *  # <weight>
 *  - One DB clear.
 *  # </weight>
 */
export interface DemocracyCall_resign_proxy {
  __kind: 'resign_proxy'
}

/**
 *  Clear the proxy. Called by the stash.
 * 
 *  # <weight>
 *  - One DB clear.
 *  # </weight>
 */
export interface DemocracyCall_remove_proxy {
  __kind: 'remove_proxy'
  proxy: Uint8Array
}

/**
 *  Delegate vote.
 * 
 *  # <weight>
 *  - One extra DB entry.
 *  # </weight>
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: Uint8Array
  conviction: Conviction
}

/**
 *  Undelegate vote.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 *  Veto and blacklist the proposal hash. Must be from Root origin.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed.
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: Uint8Array
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote

/**
 *  Set the collective's membership manually to `new_members`. Be nice to the chain and
 *  provide it pre-sorted.
 * 
 *  Requires root origin.
 */
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 */
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Type_92
}

/**
 *  # <weight>
 *  - Bounded storage reads and writes.
 *  - Argument `threshold` has bearing on weight.
 *  # </weight>
 */
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Type_92
}

/**
 *  # <weight>
 *  - Bounded storage read and writes.
 *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
 *  # </weight>
 */
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote

/**
 *  Set the collective's membership manually to `new_members`. Be nice to the chain and
 *  provide it pre-sorted.
 * 
 *  Requires root origin.
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Type_92
}

/**
 *  # <weight>
 *  - Bounded storage reads and writes.
 *  - Argument `threshold` has bearing on weight.
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Type_92
}

/**
 *  # <weight>
 *  - Bounded storage read and writes.
 *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

export type ElectionsPhragmenCall = ElectionsPhragmenCall_vote | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_report_defunct_voter | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_remove_member

/**
 *  Vote for a set of candidates for the upcoming round of election.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of candidates.
 * 
 *  Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved.
 *  It is the responsibility of the caller to not place all of their balance into the lock
 *  and keep some for further transactions.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(1)
 *  Writes: O(V) given `V` votes. V is bounded by 16.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 *  Remove `origin` as a voter. This removes the lock and returns the bond.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(1)
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
 *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
 *  their bond is slashed.
 * 
 *  A defunct voter is defined to be:
 *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
 *      longer a candidate nor an active member.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(NLogM) given M current candidates and N votes for `target`.
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_report_defunct_voter {
  __kind: 'report_defunct_voter'
  target: never
}

/**
 *  Submit oneself for candidacy.
 * 
 *  A candidate will either:
 *    - Lose at the end of the term and forfeit their deposit.
 *    - Win and become a member. Members will eventually get their stash back.
 *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
 *      removed.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(LogN) Given N candidates.
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_submit_candidacy {
  __kind: 'submit_candidacy'
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 *  - `origin` is a candidate and not elected in any set. In this case, the bond is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner up. In this case, the bond is unreserved, returned and
 *    origin is removed as a runner.
 *  - `origin` is a current member. In this case, the bond is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
 */
export interface ElectionsPhragmenCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen round is started.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(do_phragmen)
 *  Writes: O(do_phragmen)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_remove_member {
  __kind: 'remove_member'
  who: never
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `AddOrigin` or root.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member'
  who: Uint8Array
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `RemoveOrigin` or root.
 */
export interface TechnicalMembershipCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 */
export interface TechnicalMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: Uint8Array
  add: Uint8Array
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `ResetOrigin` or root.
 */
export interface TechnicalMembershipCall_reset_members {
  __kind: 'reset_members'
  members: Uint8Array[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 */
export interface TechnicalMembershipCall_change_key {
  __kind: 'change_key'
  new: Uint8Array
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change, one extra DB entry.
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: never
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB clear.
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim

/**
 *  Make a claim.
 */
export interface ClaimsCall_claim {
  __kind: 'claim'
  dest: Uint8Array
  ethereumSignature: Uint8Array
}

/**
 *  Add a new claim, if you are root.
 */
export interface ClaimsCall_mint_claim {
  __kind: 'mint_claim'
  who: Uint8Array
  value: bigint
  vestingSchedule: ([bigint, bigint, number] | undefined)
}

export type ParachainsCall = ParachainsCall_set_heads

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface ParachainsCall_set_heads {
  __kind: 'set_heads'
  heads: AttestedCandidate[]
}

export type AttestationsCall = AttestationsCall_more_attestations

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface AttestationsCall_more_attestations {
  __kind: 'more_attestations'
  more: MoreAttestations
}

export type SlotsCall = SlotsCall_new_auction | SlotsCall_bid | SlotsCall_bid_renew | SlotsCall_set_offboarding | SlotsCall_fix_deploy_data | SlotsCall_elaborate_deploy_data

/**
 *  Create a new auction.
 * 
 *  This can only happen when there isn't already an auction in progress and may only be
 *  called by the root origin. Accepts the `duration` of this auction and the
 *  `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface SlotsCall_new_auction {
  __kind: 'new_auction'
  duration: number
  leasePeriodIndex: number
}

/**
 *  Make a new bid from an account (including a parachain account) for deploying a new
 *  parachain.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 *  funded by) the same account.
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid {
  __kind: 'bid'
  sub: number
  auctionIndex: number
  firstSlot: number
  lastSlot: number
  amount: bigint
}

/**
 *  Make a new bid from a parachain account for renewing that (pre-existing) parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid_renew {
  __kind: 'bid_renew'
  auctionIndex: number
  firstSlot: number
  lastSlot: number
  amount: bigint
}

/**
 *  Set the off-boarding information for a parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  - `dest` is the destination account to receive the parachain's deposit.
 */
export interface SlotsCall_set_offboarding {
  __kind: 'set_offboarding'
  dest: never
}

/**
 *  Set the deploy information for a successful bid to deploy a new parachain.
 * 
 *  - `origin` must be the successful bidder account.
 *  - `sub` is the sub-bidder ID of the bidder.
 *  - `para_id` is the parachain ID allotted to the winning bidder.
 *  - `code_hash` is the hash of the parachain's Wasm validation function.
 *  - `initial_head_data` is the parachain's initial head data.
 */
export interface SlotsCall_fix_deploy_data {
  __kind: 'fix_deploy_data'
  sub: number
  paraId: number
  codeHash: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Note a new parachain's code.
 * 
 *  This must be called after `fix_deploy_data` and `code` must be the preimage of the
 *  `code_hash` passed there for the same `para_id`.
 * 
 *  This may be called before or after the beginning of the parachain's first lease period.
 *  If called before then the parachain will become active at the first block of its
 *  starting lease period. If after, then it will become active immediately after this call.
 * 
 *  - `_origin` is irrelevant.
 *  - `para_id` is the parachain ID whose code will be elaborated.
 *  - `code` is the preimage of the registered `code_hash` of `para_id`.
 */
export interface SlotsCall_elaborate_deploy_data {
  __kind: 'elaborate_deploy_data'
  paraId: number
  code: Uint8Array
}

export type RegistrarCall = RegistrarCall_register_para | RegistrarCall_deregister_para | RegistrarCall_set_thread_count | RegistrarCall_register_parathread | RegistrarCall_select_parathread | RegistrarCall_deregister_parathread | RegistrarCall_swap

/**
 *  Register a parachain with given code.
 *  Fails if given ID is already used.
 */
export interface RegistrarCall_register_para {
  __kind: 'register_para'
  id: number
  info: ParaInfo
  code: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Deregister a parachain with given id
 */
export interface RegistrarCall_deregister_para {
  __kind: 'deregister_para'
  id: number
}

/**
 *  Reset the number of parathreads that can pay to be scheduled in a single block.
 * 
 *  - `count`: The number of parathreads.
 * 
 *  Must be called from Root origin.
 */
export interface RegistrarCall_set_thread_count {
  __kind: 'set_thread_count'
  count: number
}

/**
 *  Register a parathread for immediate use.
 * 
 *  Must be sent from a Signed origin that is able to have ParathreadDeposit reserved.
 *  `code` and `initial_head_data` are used to initialize the parathread's state.
 */
export interface RegistrarCall_register_parathread {
  __kind: 'register_parathread'
  code: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Place a bid for a parathread to be progressed in the next block.
 * 
 *  This is a kind of special transaction that should be heavily prioritized in the
 *  transaction pool according to the `value`; only `ThreadCount` of them may be presented
 *  in any single block.
 */
export interface RegistrarCall_select_parathread {
  __kind: 'select_parathread'
  id: number
  collator: Uint8Array
  headHash: Uint8Array
}

/**
 *  Deregister a parathread and retrieve the deposit.
 * 
 *  Must be sent from a `Parachain` origin which is currently a parathread.
 * 
 *  Ensure that before calling this that any funds you want emptied from the parathread's
 *  account is moved out; after this it will be impossible to retrieve them (without
 *  governance intervention).
 */
export interface RegistrarCall_deregister_parathread {
  __kind: 'deregister_parathread'
}

/**
 *  Swap a parachain with another parachain or parathread. The origin must be a `Parachain`.
 *  The swap will happen only if there is already an opposite swap pending. If there is not,
 *  the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 *  The `ParaId`s remain mapped to the same head data and code so external code can rely on
 *  `ParaId` to be a long-term identifier of a notional "parachain". However, their
 *  scheduling info (i.e. whether they're a parathread or parachain), auction information
 *  and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
  __kind: 'swap'
  other: number
}

export type NicksCall = NicksCall_set_name | NicksCall_clear_name | NicksCall_kill_name | NicksCall_force_name

/**
 *  Set an account's name. The name should be a UTF-8-encoded string by convention, though
 *  we don't check it.
 * 
 *  The name may not be more than `T::MaxLength` bytes, nor less than `T::MinLength` bytes.
 * 
 *  If the account doesn't already have a name, then a fee of `ReservationFee` is reserved
 *  in the account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - At most one balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_set_name {
  __kind: 'set_name'
  name: Uint8Array
}

/**
 *  Clear an account's name and return the deposit. Fails if the account was not named.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - One balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_clear_name {
  __kind: 'clear_name'
}

/**
 *  Remove an account's name and take charge of the deposit.
 * 
 *  Fails if `who` has not been named. The deposit is dealt with through `T::Slashed`
 *  imbalance handler.
 * 
 *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - One unbalanced handler (probably a balance transfer)
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_kill_name {
  __kind: 'kill_name'
  target: never
}

/**
 *  Set a third-party account's name with no deposit.
 * 
 *  No length checking is done on the name.
 * 
 *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - At most one balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_force_name {
  __kind: 'force_name'
  target: never
  name: Uint8Array
}

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `RegistrarOrigin` or `Root`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar'
  account: Uint8Array
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + R)` where `X` additional-field-count (deposit-bounded).
 *  - At most two balance operations.
 *  - One storage mutation (codec `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity'
  info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's sub-accounts.
 * 
 *  # <weight>
 *  - `O(S)` where `S` subs-count (hard- and deposit-bounded).
 *  - At most two balance operations.
 *  - At most O(2 * S + 1) storage mutations; codec complexity `O(1 * S + S * 1)`);
 *    one storage-exists.
 *  # </weight>
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs'
  subs: [Uint8Array, Data][]
}

/**
 *  Clear an account's identity info and all sub-account and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity'
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars(reg_index).uwnrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement'
  regIndex: number
  maxFee: bigint
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request'
  regIndex: number
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  # </weight>
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee'
  index: number
  fee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id'
  index: number
  new: Uint8Array
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  # </weight>
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields'
  index: number
  fields: bigint
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement'
  regIndex: number
  target: never
  judgement: IdentityJudgement
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity'
  target: never
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_sub | UtilityCall_as_multi | UtilityCall_approve_as_multi | UtilityCall_cancel_as_multi

/**
 *  Send a batch of dispatch calls.
 * 
 *  This will execute until the first one fails and then stop.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  # <weight>
 *  - The sum of the weights of the `calls`.
 *  - One event.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Type_93[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - The weight of the `call`.
 *  # </weight>
 */
export interface UtilityCall_as_sub {
  __kind: 'as_sub'
  index: number
  call: Type_93
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
 *  # </weight>
 */
export interface UtilityCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  call: Type_93
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
 *  # </weight>
 */
export interface UtilityCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  # </weight>
 */
export interface UtilityCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  timepoint: Timepoint
  callHash: Uint8Array
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
  __kind: 'Staked'
  value: null
}

export interface RewardDestination_Stash {
  __kind: 'Stash'
  value: null
}

export interface RewardDestination_Controller {
  __kind: 'Controller'
  value: null
}

export interface RewardDestination_Account {
  __kind: 'Account'
  value: Uint8Array
}

export interface RewardDestination_None {
  __kind: 'None'
  value: null
}

export interface ValidatorPrefsWithCommission {
  commission: number
}

export interface HeartbeatTo244 {
  blockNumber: number
  networkState: OpaqueNetworkState
  sessionIndex: number
  authorityIndex: number
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
  __kind: 'None'
}

export interface Conviction_Locked1x {
  __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
  __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
  __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
  __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
  __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
  __kind: 'Locked6x'
}

export type Type_92 = Type_92_System | Type_92_Timestamp | Type_92_Balances | Type_92_Authorship | Type_92_Staking | Type_92_Session | Type_92_FinalityTracker | Type_92_Grandpa | Type_92_ImOnline | Type_92_Democracy | Type_92_Council | Type_92_TechnicalCommittee | Type_92_ElectionsPhragmen | Type_92_TechnicalMembership | Type_92_Treasury | Type_92_Claims | Type_92_Parachains | Type_92_Attestations | Type_92_Slots | Type_92_Registrar | Type_92_Nicks | Type_92_Identity | Type_92_Utility

export interface Type_92_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_92_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_92_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_92_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_92_Staking {
  __kind: 'Staking'
  value: StakingCall
}

export interface Type_92_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_92_FinalityTracker {
  __kind: 'FinalityTracker'
  value: FinalityTrackerCall
}

export interface Type_92_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Type_92_ImOnline {
  __kind: 'ImOnline'
  value: ImOnlineCall
}

export interface Type_92_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_92_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_92_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_92_ElectionsPhragmen {
  __kind: 'ElectionsPhragmen'
  value: ElectionsPhragmenCall
}

export interface Type_92_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Type_92_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_92_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface Type_92_Parachains {
  __kind: 'Parachains'
  value: ParachainsCall
}

export interface Type_92_Attestations {
  __kind: 'Attestations'
  value: AttestationsCall
}

export interface Type_92_Slots {
  __kind: 'Slots'
  value: SlotsCall
}

export interface Type_92_Registrar {
  __kind: 'Registrar'
  value: RegistrarCall
}

export interface Type_92_Nicks {
  __kind: 'Nicks'
  value: NicksCall
}

export interface Type_92_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Type_92_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface AttestedCandidate {
  candidate: AbridgedCandidateReceipt
  validityVotes: ValidityAttestation[]
  validatorIndices: Uint8Array
}

export type MoreAttestations = null

export interface ParaInfo {
  manager: Uint8Array
  deposit: bigint
  locked: boolean
}

export interface IdentityInfo {
  fallback: IdentityInfoTo198
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
  twitter: Data
}

export type Data = Data_None | Data_Raw | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
  __kind: 'None'
  value: null
}

export interface Data_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256'
  value: Uint8Array
}

export interface Data_Sha256 {
  __kind: 'Sha256'
  value: Uint8Array
}

export interface Data_Keccak256 {
  __kind: 'Keccak256'
  value: Uint8Array
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256'
  value: Uint8Array
}

export type IdentityJudgement = IdentityJudgement_Unknown | IdentityJudgement_FeePaid | IdentityJudgement_Reasonable | IdentityJudgement_KnownGood | IdentityJudgement_OutOfDate | IdentityJudgement_LowQuality | IdentityJudgement_Erroneous

export interface IdentityJudgement_Unknown {
  __kind: 'Unknown'
  value: null
}

export interface IdentityJudgement_FeePaid {
  __kind: 'FeePaid'
  value: bigint
}

export interface IdentityJudgement_Reasonable {
  __kind: 'Reasonable'
  value: null
}

export interface IdentityJudgement_KnownGood {
  __kind: 'KnownGood'
  value: null
}

export interface IdentityJudgement_OutOfDate {
  __kind: 'OutOfDate'
  value: null
}

export interface IdentityJudgement_LowQuality {
  __kind: 'LowQuality'
  value: null
}

export interface IdentityJudgement_Erroneous {
  __kind: 'Erroneous'
  value: null
}

export interface Timepoint {
  height: number
  index: number
}

export interface Digest {
  logs: DigestItem[]
}

export interface OpaqueNetworkState {
  peerId: Uint8Array
  externalAddresses: Uint8Array[]
}

export interface AbridgedCandidateReceipt {
  parachainIndex: number
  relayParent: Uint8Array
  headData: Uint8Array
  collator: Uint8Array
  signature: Uint8Array
  povBlockHash: Uint8Array
  commitments: CandidateCommitments
}

export type ValidityAttestation = ValidityAttestation_Never | ValidityAttestation_Implicit | ValidityAttestation_Explicit

export interface ValidityAttestation_Never {
  __kind: 'Never'
  value: null
}

export interface ValidityAttestation_Implicit {
  __kind: 'Implicit'
  value: Uint8Array
}

export interface ValidityAttestation_Explicit {
  __kind: 'Explicit'
  value: Uint8Array
}

export interface IdentityInfoTo198 {
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
  __kind: 'AuthoritiesChange'
  value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: Uint8Array
}

export interface DigestItem_SealV0 {
  __kind: 'SealV0'
  value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
  value: null
}

export interface CandidateCommitments {
  upwardMessages: Uint8Array[]
  horizontalMessages: OutboundHrmpMessage[]
  newValidationCode: (Uint8Array | undefined)
  headData: Uint8Array
  processedDownwardMessages: number
  hrmpWatermark: number
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

export interface OutboundHrmpMessage {
  recipient: number
  data: Uint8Array
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}
