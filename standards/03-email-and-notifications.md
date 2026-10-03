# 03 - Email & Transactional Notifications Architecture

All transactional, verification, billing, and security emails across the Kontyra ecosystem are orchestrated through a centralized email provider configuration anchored on the verified apex domain `kontyra.name.ng`.

---

## 1. Provider & Infrastructure

- **Provider**: **Resend** (REST API & Node SDK).
- **Apex Domain**: `kontyra.name.ng` (DKIM, SPF, and DMARC configured and verified).
- **Core Dispatcher**: Centralized in `Kontyra-Accounts` (`src/lib/mail.ts`).

---

## 2. Sender Identity Directory

To preserve domain reputation and avoid phishing suspicion, sender identities are strictly partitioned by function and product origin:

| Service / Product | From Display Name | Address | Usage |
| :--- | :--- | :--- | :--- |
| **Authentication** | `Kontyra Security` | `auth@kontyra.name.ng` | OTPs, email verifications, password reset links, magic links |
| **Billing & Payments** | `Kontyra Billing` | `billing@kontyra.name.ng` | Receipts, invoices, subscription confirmations, payment failure alerts |
| **System & Status** | `Kontyra Notifications`| `notifications@kontyra.name.ng`| Workspace invites, permission changes, team updates |
| **Support** | `Kontyra Support` | `support@kontyra.name.ng` | Customer service tickets, inquiry responses |
| **DevOS** | `DevOS by Kontyra` | `devos@kontyra.name.ng` | Build alerts, environment deployments, execution errors |
| **Novel Weaver** | `Novel Weaver` | `novelweaver@kontyra.name.ng` | Publication notifications, author updates, review alerts |

---

## 3. Approved Email Template Structure

All transactional emails must follow a clean, dark-mode friendly responsive layout:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{subject}}</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 40px 20px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 520px; background-color: #0A0A0A; border: 1px solid #222222; border-radius: 12px; padding: 32px;">
    <!-- Brand Header -->
    <tr>
      <td align="center" style="padding-bottom: 24px;">
        <span style="font-size: 20px; font-weight: 700; letter-spacing: -0.5px; color: #FFFFFF;">KONTYRA</span>
        {{#if productName}}
          <span style="color: #666666; margin: 0 8px;">/</span>
          <span style="color: #AAAAAA; font-size: 15px;">{{productName}}</span>
        {{/if}}
      </td>
    </tr>

    <!-- Headline -->
    <tr>
      <td style="font-size: 18px; font-weight: 600; color: #FFFFFF; padding-bottom: 16px;">
        {{headline}}
      </td>
    </tr>

    <!-- Body Copy -->
    <tr>
      <td style="font-size: 14px; line-height: 22px; color: #CCCCCC; padding-bottom: 28px;">
        {{bodyContent}}
      </td>
    </tr>

    <!-- Primary CTA (if applicable) -->
    {{#if ctaUrl}}
    <tr>
      <td align="center" style="padding-bottom: 28px;">
        <a href="{{ctaUrl}}" style="background-color: #FFFFFF; color: #000000; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 6px; display: inline-block;">
          {{ctaLabel}}
        </a>
      </td>
    </tr>
    {{/if}}

    <!-- Footer & Security Notice -->
    <tr>
      <td style="border-top: 1px solid #1A1A1A; padding-top: 20px; font-size: 12px; color: #666666; text-align: center; line-height: 18px;">
        This email was sent regarding your Kontyra account. If you did not make this request, you can safely ignore this message.<br>
        &copy; 2026 Kontyra Inc. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 4. Expiration & Security Invariants

1. **Verification & Password Reset Tokens**:
   - Time-to-live (TTL) must **never exceed 15 minutes**.
   - Single-use only; invalidated immediately upon first consumption.
2. **One-Time Passcodes (OTP)**:
   - 6 digits, strictly numeric.
   - Max 3 invalid attempts before code invalidation.
3. **No Unencrypted Secrets**:
   - Verification links and magic links must be transmitted using TLS/HTTPS.
   - Never embed database passwords, API secret keys, or permanent auth credentials in email bodies.
