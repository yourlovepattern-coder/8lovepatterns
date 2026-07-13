# Connecting Stripe to 8LovePatterns (no backend)

You sell **the premium report**, one per buyer (built from their result), **$29**, one-time payment.
No server, no secret keys in the site. Buyers pay on Stripe's own secure page, and the
money lands in your Stripe account. This mirrors how 16personalities sells its packs.

Everything you touch lives in **one file**: `ui_kits/website/stripe-config.jsx`.

---

## One time: create your products

1. Sign in to the [Stripe Dashboard](https://dashboard.stripe.com).
2. **Products → Add product.** Create one product per pattern:

   | Code | Product name (suggested) |
   |------|--------------------------|
   | `inc` | The Arsonist . Full report |
   | `gue` | The Watcher . Full report |
   | `fug` | The Runaway . Full report |
   | `alc` | The Alchemist . Full report |
   | `sau` | The Savior . Full report |
   | `mir` | The Mirror . Full report |
   | `cam` | The Chameleon . Full report |
   | `bas` | The Bastion . Full report |

   Set each price to **9,00 EUR**, **One time**.

3. For each product: **Payment links → Create payment link → select the product.**
   Stripe gives you a URL like `https://buy.stripe.com/eVa...`. Copy it.

## Paste the 8 links

Open `ui_kits/website/stripe-config.jsx` and fill the `links` block:

```js
links: {
  inc: 'https://buy.stripe.com/...',   // The Arsonist
  gue: 'https://buy.stripe.com/...',   // The Watcher
  fug: 'https://buy.stripe.com/...',   // The Runaway
  alc: 'https://buy.stripe.com/...',   // The Alchemist
  sau: 'https://buy.stripe.com/...',   // The Savior
  mir: 'https://buy.stripe.com/...',   // The Mirror
  cam: 'https://buy.stripe.com/...',   // The Chameleon
  bas: 'https://buy.stripe.com/...',   // The Bastion
},
```

That is it. The **Continue** button on each sales page now sends the buyer to the right
Stripe checkout. Until a link is pasted, the button shows a setup notice instead of a
dead link, so you can never strand a customer.

## After payment (set once, on each Payment Link)

In each Payment Link's settings you can, with no code:

- **Confirmation page** → upload the report PDF as a downloadable file, or
- **Customer emails** → have Stripe email the receipt (attach the PDF there), and
- **After payment → redirect** → point back to your site if you prefer.

## Testing

- Use Stripe **Test mode** while you set up: toggle it in the Dashboard, create test
  Payment Links, and pay with card `4242 4242 4242 4242`, any future date, any CVC.
- When you are ready to take real money, switch to **Live mode**, regenerate the
  Payment Links, and paste the live URLs.

## Changing the displayed price

The price shown on the page is `priceLabel` in `stripe-config.jsx` (default `$29`).
The amount actually charged is whatever the Stripe Checkout Session says, so keep them in
sync. To show a crossed-out anchor price, set `priceCompareLabel` (e.g. `'$49'`).

## When you outgrow Payment Links

This setup is perfect for selling downloadable reports. If you later need accounts that
**unlock content after purchase** (login, gated dashboards, subscriptions with metered
access), that needs a real backend with webhooks. That is the moment to bring in a
developer; the front end built here is ready to plug into one.
