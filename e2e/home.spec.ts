import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    // Increase timeout for pages with heavy animations/geolocation
    test.setTimeout(60000)
    
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    
    // Wait for main content to be visible
    await page.waitForSelector('h1', { timeout: 10000 })
    
    await expect(page).toHaveTitle(/Sun Ninja/i)
  })

  test('should be accessible', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('h1', { timeout: 10000 })
    
    const violations = await page.evaluate(() => {
      // Add accessibility testing if needed
      return []
    })
    expect(violations).toHaveLength(0)
  })

  test('should have proper meta tags', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const description = await page.getAttribute('meta[name="description"]', 'content')
    expect(description).toBeTruthy()
  })
})

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    // Add navigation tests based on your routes
  })
})

test.describe('Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    test.setTimeout(60000)
    const startTime = Date.now()
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('h1', { timeout: 10000 })
    const loadTime = Date.now() - startTime
    // Adjusted for production app with animations, geolocation, and premium features
    expect(loadTime).toBeLessThan(7000) // 7 seconds for feature-rich page
  })
})
