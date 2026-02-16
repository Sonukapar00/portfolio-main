# Contact Form Setup Guide - EmailJS Integration

## ✅ What's Been Fixed

The contact form functionality has been implemented using **EmailJS**, a service that allows sending emails directly from your React application without a backend server.

### Changes Made:
1. ✅ Installed `emailjs-com` package
2. ✅ Updated `ContactSection.jsx` with email sending logic
3. ✅ Added loading state while sending emails
4. ✅ Improved error handling and user feedback
5. ✅ Created environment configuration files

---

## 🔧 Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. Log into your EmailJS dashboard
2. Go to **Email Services** → **Add Service**
3. Select **Gmail** (or your email provider)
4. Connect your email account
5. Save the **Service ID** (format: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template format:

```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}
```

3. Save and copy the **Template ID** (format: `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
1. Open `.env.local` in the project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
```

### Step 6: Restart Development Server
The server will automatically reload and pick up the new environment variables.

---

## 📝 Email Template Variables Used

- `{{from_name}}` - Contact form name
- `{{from_email}}` - Contact form email
- `{{message}}` - Contact form message
- `{{to_email}}` - Your email address (sonu.ic19@nsut.ac.in)

---

## 🎯 Features Implemented

✅ Form validation
✅ Loading state with spinner animation
✅ Success notification
✅ Error handling
✅ Form reset after successful submission
✅ Copy email button
✅ Responsive design

---

## 🚀 Testing

Once configured:
1. Go to your portfolio website (http://localhost:5173)
2. Scroll to the Contact section
3. Fill in the form and click "Send Message"
4. You should receive an email at your configured email address

---

## ❓ Troubleshooting

**Email not sending?**
- Verify your Public Key, Service ID, and Template ID are correct
- Check EmailJS dashboard for failed email logs
- Make sure environment variables are set in `.env.local`
- Restart the dev server after changing `.env.local`

**CORS Issues?**
- EmailJS should work without CORS issues
- Clear browser cache if you see strange errors

**Not seeing the update?**
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console (F12) for any errors

---

## 📦 Installed Packages

- `emailjs-com@3.2.0` - Email service library

All other required packages are already installed ✅
