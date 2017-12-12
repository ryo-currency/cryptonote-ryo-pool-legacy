An updated cryptonote-sumokoin-pool fork
========================================

High performance Node.js (with native C addons) mining pool for CryptoNote based coins such as Bytecoin, DuckNote, Monero, QuazarCoin, Boolberry, Dashcoin, Sumokoin etc..
Comes with lightweight example front-end script which uses the pool's AJAX API.

#### Recent changes

##### Health monitoring
A new /health API handler was added and can be called by miners to learn
whether the pool is healthy (e.g wallet is reachable). The UI was also
updated and calles this handler regularly: when the health is not OK a
red message will inform pool visitors about this.

##### Proxy X-Forwarded-For support
In the configuration you can indicate whether your pool deployment is
behind a proxy. When you do this than the pool will take the client IP
(which can give unauthenticated access to the admin interface) from the
X-Forwarded-IP header that the proxy sets.

##### Email notifications
Miners can configure an email to receive notifications whenever they receive a
payment. More notifications will be added in the future (e.g. when a block is
found).

##### Miner can configure payout minimum
Miner can configure the minimum amount of sumo for their payments.

##### Subaddresses support
You can now mine using a subaddress as your login.


#### Basic features

* TCP (stratum-like) protocol for server-push based jobs
  * Compared to old HTTP protocol, this has a higher hash rate, lower network/CPU server load, lower orphan
    block percent, and less error prone
* IP banning to prevent low-diff share attacks
* Socket flooding detection
* Payment processing
  * Splintered transactions to deal with max transaction size
  * Minimum payment threshold before balance will be paid out
  * Minimum denomination for truncating payment amount precision to reduce size/complexity of block transactions
* Detailed logging
* Ability to configure multiple ports - each with their own difficulty
* Variable difficulty / share limiter
* Share trust algorithm to reduce share validation hashing CPU load
* Clustering for vertical scaling
* Modular components for horizontal scaling (pool server, database, stats/API, payment processing, front-end)
* Live stats API (using AJAX long polling with CORS)
  * Currency network/block difficulty
  * Current block height
  * Network hashrate
  * Pool hashrate
  * Each miners' individual stats (hashrate, shares submitted, pending balance, total paid, etc)
  * Blocks found (pending, confirmed, and orphaned)
* An easily extendable, responsive, light-weight front-end using API to display data
* Support for configuration using tls (https) in pool code to allowing the same for web frontend
* Multiple modules can be started on command line instead of one or none.
* Onishin's keepalive function https://github.com/perl5577/cpuminer-multi/commit/0c8aedb
#### Extra features

* Admin panel
  * Aggregated pool statistics
  * Coin daemon & wallet RPC services stability monitoring
  * Log files data access
  * Users list with detailed statistics
* Historic charts of pool's hashrate and miners count, coin difficulty, rates and coin profitability
* Historic charts of users's hashrate and payments
* Miner login(wallet address) validation
* Five configurable CSS themes
* Universal blocks and transactions explorer based on [chainradar.com](http://chainradar.com)
* FantomCoin support is not currently working after fixes to get node modules to work after Mar 23, 2016 fork.
* MonetaVerde support not tested since changes for monero fork
* Set fixed difficulty on miner client by passing "address" param with ".[difficulty]" postfix
* Prevent "transaction is too big" error with "payments.maxTransactionAmount" option
* Option to enable (simple) dynamic fee based on number of payees per transaction and option to have miner pay transfer fee instead of pool owner (applied to dynamic fee only)

### Community / Support

For support please join our development Telegram group:
https://t.me/joinchat/Hkpz6hIFOy4qGqMHTDzn1A

Or reach out to the [CryptoNote Universal Pool Forum](https://bitcointalk.org/index.php?topic=705509)

#### Pools Using This Software

* https://pool.sumokoin.com
* https://pool.sumokoin.ch

More pools can be found on [sumopools.com](https://www.sumopools.com)

#### Usage

Visit the usage guide here.
[Visit the usage guide here](https://github.com/SadBatman/cryptonote-sumokoin-pool/blob/master/USAGE.md)


#### License
-------
Released under the GNU General Public License v2

http://www.gnu.org/licenses/gpl-2.0.html
