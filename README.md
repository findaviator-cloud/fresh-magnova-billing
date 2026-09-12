# Fresh Magnova Billing

A browser-based GST billing and invoice application customized for Fresh Magnova.

## Main file

Open `fresh_magnova_gst_billing.html` in a modern browser, or run the project through its configured Node script.

## Business configuration

Update `fresh-magnova.config.json` before production use:

- Company and legal name
- GSTIN and PAN
- Address, contact information and state code
- Invoice prefix
- Bank, IFSC and UPI details

## Safety

- Historical/source baseline is preserved through Git history.
- A timestamped local backup is created before each rebrand batch.
- Do not enter production GST, bank, or customer information into public repositories.
