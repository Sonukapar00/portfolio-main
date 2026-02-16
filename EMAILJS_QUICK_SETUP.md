# ⚡ Quick EmailJS Setup (5 Minutes)

## Step 1: Create Free EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** → Use Google or Email
3. Verify your email

## Step 2: Add Email Service (2 minutes)
1. In Dashboard, click **Email Services** → **Add Service**
2. Select **Gmail** (easiest option)
3. Connect your Gmail account: `sonu.ic19@nsut.ac.in`
4. Allow access when prompted
5. Save and copy your **Service ID** (looks like: `service_abc123def`)

## Step 3: Create Email Template (2 minutes)
1. Go to **Email Templates** → **Create New Template**
2. Template Name: `portfolio_contact`
3. Replace the default template with this:

```
Subject: New Portfolio Contact from {{from_name}}

---

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
```

4. Click **Save** → Copy your **Template ID** (looks like: `template_xyz789`)

## Step 4: Get Your Public Key (1 minute)
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update `.env.local`
Replace the placeholder values in `.env.local`:

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
```

## Step 6: Restart Dev Server
- The app will automatically reload
- Test the contact form!

---

## Visual Reference

### Service ID Location:
```
Dashboard → Email Services → [Your Service] → Copy Service ID
```

### Template ID Location:
```
Email Templates → [Your Template] → Copy Template ID
```

### Public Key Location:
```
Account → API Keys → Copy Public Key
```

---

## Testing Your Setup

After updating `.env.local`:
1. Go to Contact section
2. Fill in the form
3. Click Send Message
4. ✅ You should receive an email!

**Still having issues?**
- Make sure Dev Server is restarted after updating `.env.local`
- Check browser console (F12) for error details
- Verify Public Key is copied correctly (no spaces)
