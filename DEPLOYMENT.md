# Deployment Guide

## Prerequisites

Before deploying, ensure you have:

- [ ] Configured all environment variables
- [ ] Generated PWA icons (192x192 and 512x512)
- [ ] Added OG images for social sharing
- [ ] Set up Sentry and Google Analytics accounts
- [ ] Tested the production build locally
- [ ] Run all tests and ensure they pass

## Environment Setup

### 1. Create Production Environment File

Create `.env.production`:

```env
VITE_APP_NAME=Sun Ninja
VITE_APP_URL=https://sunninja.com
VITE_API_URL=https://api.sunninja.com

VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
VITE_SENTRY_ENVIRONMENT=production
VITE_SENTRY_TRACES_SAMPLE_RATE=0.1

VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=true
VITE_ENABLE_PWA=true

VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxx
```

## Deployment Options

### Option 1: Vercel (Recommended for Quick Deploy)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables** in Vercel Dashboard

### Option 2: Netlify

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**

   ```bash
   npm run build
   ```

3. **Deploy**

   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Configure in `netlify.toml`**:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
   ```

### Option 3: Docker (Self-Hosted)

1. **Build Docker Image**

   ```bash
   docker build -t sun-ninja:latest .
   ```

2. **Run Container**

   ```bash
   docker run -d \
     -p 80:80 \
     -p 443:443 \
     --name sun-ninja \
     sun-ninja:latest
   ```

3. **Or use Docker Compose**

   ```bash
   docker-compose up -d
   ```

4. **For HTTPS**, set up Let's Encrypt:

   ```bash
   # Install certbot
   sudo apt-get install certbot python3-certbot-nginx

   # Get certificate
   sudo certbot --nginx -d sunninja.com -d www.sunninja.com
   ```

### Option 4: AWS (S3 + CloudFront)

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Create S3 Bucket**

   ```bash
   aws s3 mb s3://sunninja-production
   ```

3. **Upload to S3**

   ```bash
   aws s3 sync dist/ s3://sunninja-production
   ```

4. **Create CloudFront Distribution**
   - Origin: Your S3 bucket
   - Default Root Object: index.html
   - Error Pages: 404 -> /index.html (for SPA routing)

5. **Configure Route 53** for DNS

### Option 5: DigitalOcean App Platform

1. **Connect GitHub Repository** in DigitalOcean dashboard

2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node Version: 20.x

3. **Add Environment Variables** in App settings

4. **Deploy** from the dashboard

## Post-Deployment Checklist

### Testing

- [ ] Test the deployed application
- [ ] Verify all pages load correctly
- [ ] Test PWA installation
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify analytics tracking
- [ ] Check error tracking

### Performance

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test loading speed from different locations
- [ ] Verify asset compression (Gzip/Brotli)
- [ ] Check Web Vitals in production
- [ ] Test PWA offline functionality

### SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags with social media debuggers
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
- [ ] Check robots.txt accessibility
- [ ] Verify canonical URLs
- [ ] Test structured data with Google's Rich Results Tool

### Security

- [ ] Enable HTTPS/SSL
- [ ] Verify security headers
- [ ] Test CORS configuration
- [ ] Check for exposed secrets
- [ ] Enable rate limiting (if applicable)
- [ ] Set up firewall rules

### Monitoring

- [ ] Verify Sentry error tracking
- [ ] Check Google Analytics data flow
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure performance budgets
- [ ] Set up alerts for critical errors

## Continuous Deployment

### GitHub Actions (Already Configured)

The project includes GitHub Actions workflows:

1. **Push to `develop`** → Deploy to Staging
2. **Push to `main`** → Deploy to Production

Configure secrets in GitHub:

- `VERCEL_TOKEN` or `NETLIFY_AUTH_TOKEN`
- `SENTRY_AUTH_TOKEN`
- Other deployment credentials

### Manual Deployment Script

Create `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Run tests
echo "Running tests..."
npm run test || exit 1

# Build
echo "Building application..."
npm run build || exit 1

# Deploy (example for Vercel)
echo "Deploying to production..."
vercel --prod || exit 1

echo "✅ Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
./deploy.sh
```

## Rollback Procedure

If deployment fails:

### Vercel/Netlify

- Use dashboard to rollback to previous deployment
- Or redeploy previous commit

### Docker

```bash
# Stop current container
docker stop sun-ninja

# Start previous version
docker run -d --name sun-ninja sun-ninja:previous-tag
```

### Manual

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Trigger deployment
```

## Performance Optimization

After deployment, consider:

1. **CDN**: Use CloudFront, Cloudflare, or Fastly
2. **Image CDN**: Cloudinary, ImageKit, or Imgix
3. **Asset Optimization**: Ensure all images are compressed
4. **Caching**: Configure proper cache headers
5. **Monitoring**: Set up Real User Monitoring (RUM)

## Domain Configuration

1. **Purchase Domain** (GoDaddy, Namecheap, etc.)

2. **Configure DNS**:

   ```
   A     @     <your-server-ip>
   CNAME www   <your-domain>
   ```

3. **SSL Certificate**:
   - Vercel/Netlify: Automatic
   - Self-hosted: Use Let's Encrypt

## Support

If you encounter issues:

- Check deployment logs
- Verify environment variables
- Review error tracking (Sentry)
- Check server/CDN status
- Review DNS propagation

---

**Good luck with your deployment! 🚀**
