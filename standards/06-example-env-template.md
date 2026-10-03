# 06 - Example Environment Configuration Template

A reference template showing required and optional environment variables for any Kontyra product. Copy to `.env.local` or `.env` and fill in with your real local or deployment credentials.

> **CRITICAL SECURITY RULE**: Never commit real secret keys, private service account JSONs, or client secrets to version control. Keep `.env` and `.env.local` in `.gitignore`.

```env
# ==============================================================================
# Kontyra Identity & Central SSO Configuration
# ==============================================================================

# The public URL of the central Kontyra Accounts provider
NEXT_PUBLIC_KONTYRA_ACCOUNTS_URL=https://accounts.kontyra.name.ng

# Unique Client ID registered in Kontyra Accounts for this application
NEXT_PUBLIC_KONTYRA_CLIENT_ID=client_yourproductname

# Return/Callback URL after successful SSO login
NEXT_PUBLIC_KONTYRA_RETURN_URL=https://yourproduct.kontyra.name.ng/auth/callback

# OAuth 2.0 Client Secret (Server-side ONLY; NEVER prefix with NEXT_PUBLIC_)
KONTYRA_CLIENT_SECRET=sec_live_example_secret_placeholder_do_not_commit

# ==============================================================================
# Product Firebase Project Configuration (Client SDK)
# ==============================================================================

NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyExampleKeyPlaceholder
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=yourproduct.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=kontyra-yourproduct
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=kontyra-yourproduct.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456

# ==============================================================================
# Firebase Admin SDK Configuration (Server-side API routes ONLY)
# ==============================================================================

FIREBASE_PROJECT_ID=kontyra-yourproduct
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@kontyra-yourproduct.iam.gserviceaccount.com
# Private key with literal newlines escaped as \n
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"

# ==============================================================================
# Email & Transactional Notifications (Server-side ONLY)
# ==============================================================================

# Resend API key for sending notifications from @kontyra.name.ng
RESEND_API_KEY=re_example_apiKeyPlaceholder

# Sender address (must match approved sender directory)
EMAIL_FROM="Your Product <yourproduct@kontyra.name.ng>"

# ==============================================================================
# Application URLs & Environment Settings
# ==============================================================================

NODE_ENV=development
PORT=3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
