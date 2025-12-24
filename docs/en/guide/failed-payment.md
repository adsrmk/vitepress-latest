# Failed payment(s)

All recurring service fees are processed automatically via Stripe on the **1st calendar day of each month.** Payments are drawn from the primary default payment method (Credit Card or SEPA Direct Debit). It is the responsibility of the account holder to ensure that billing information is current and that sufficient funds are available to maintain service continuity.

### Automated Payment Remediation Schedule
In the event of a transaction failure—commonly due to card expiration, insufficient liquidity, or banking security flags—our system initiates the following recovery sequence:

**Second Attempt (Day 3):** 
Three days following the initial failure, a second automated attempt will be processed. If successful, the account returns to "Good Standing" automatically. If unsuccessful, a formal Notice of Overdue Invoice will be dispatched to the administrative email on file.
<br>

**Third Attempt & Service Suspension (Day 8):**
Eight days post-initial failure, a third attempt is executed. Should this fail, the account will enter suspension state. **All active plans, hosted applications, and databases will be taken offline**, effectively ceasing all inbound traffic and background processes.
<br>

**Final Notice and Termination of Services**
Fourteen days (14) after the initial billing failure, the system will execute a final payment attempt. At this stage, the system is authorized to attempt the charge against any and all secondary payment methods associated with the account to prevent permanent data loss. Failure to remit payment within 15 days of the initial due date constitutes a breach of service terms and results in Immediate Account Cancellation.

<div class="warning custom-block" style="padding-top: 8px">
Notice of permanent Deletion: Upon cancellation, all data hosted on our infrastructure—including production environments, staging instances, and associated databases—will be permanently purged from our active servers. In accordance with our security and data retention protocols, this action is irreversible. We strongly advise maintaining external backups to mitigate the risk of total data loss during a billing lapse.
</div>
