export interface PurchaseNotification {
  id: string
  name: string
  location: string
  product: string
  time: string
  timestamp: number
}

export interface InventoryStatus {
  level: 'critical' | 'low' | 'medium' | 'high'
  count: number
  message: string
  showUrgency: boolean
}

export class SocialProofService {
  private static instance: SocialProofService
  private notifications: PurchaseNotification[] = []
  private notificationIndex = 0

  private readonly purchaseTemplates = [
    { name: 'Sarah M.', location: 'Miami, FL', product: 'Sun Ninja Premium' },
    { name: 'James K.', location: 'San Diego, CA', product: 'Sun Ninja Premium' },
    { name: 'Lisa R.', location: 'Honolulu, HI', product: 'Sun Ninja XL' },
    { name: 'Michael T.', location: 'Malibu, CA', product: 'Sun Ninja Premium + Anchors' },
    { name: 'Emma W.', location: 'Key West, FL', product: 'Sun Ninja Family Pack' },
    { name: 'David L.', location: 'Santa Monica, CA', product: 'Sun Ninja Premium' },
    { name: 'Sophia G.', location: 'Newport Beach, CA', product: 'Sun Ninja XL' },
    { name: 'Ryan P.', location: 'Clearwater, FL', product: 'Sun Ninja Premium' },
    { name: 'Olivia H.', location: 'Laguna Beach, CA', product: 'Sun Ninja Premium + Case' },
    { name: 'Chris B.', location: 'Destin, FL', product: 'Sun Ninja Family Pack' },
  ]

  private constructor() {
    this.generateNotifications()
  }

  public static getInstance(): SocialProofService {
    if (!SocialProofService.instance) {
      SocialProofService.instance = new SocialProofService()
    }
    return SocialProofService.instance
  }

  private generateNotifications(): void {
    const now = Date.now()

    this.notifications = this.purchaseTemplates.map((template, index) => ({
      id: `notif-${index}`,
      ...template,
      time: this.getRelativeTime(now - (index + 1) * 5 * 60 * 1000), // 5 min intervals
      timestamp: now - (index + 1) * 5 * 60 * 1000,
    }))
  }

  private getRelativeTime(timestamp: number): string {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)

    if (minutes < 1) return 'Just now'
    if (minutes === 1) return '1 min ago'
    if (minutes < 60) return `${minutes} min ago`

    const hours = Math.floor(minutes / 60)
    if (hours === 1) return '1 hour ago'
    if (hours < 24) return `${hours} hours ago`

    return 'Recently'
  }

  public getNextNotification(): PurchaseNotification | null {
    if (this.notifications.length === 0) return null

    const notification = this.notifications[this.notificationIndex]
    this.notificationIndex = (this.notificationIndex + 1) % this.notifications.length

    return {
      ...notification,
      time: this.getRelativeTime(notification.timestamp),
    }
  }

  public getCurrentViewers(): number {
    // Simulate realistic concurrent viewers with smooth drift
    const baseViewers = 15
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()

    // Peak hours (10am-8pm): higher traffic
    const isPeakHour = hour >= 10 && hour <= 20
    const multiplier = isPeakHour ? 1.5 : 1

    // Deterministic variance based on current minute (changes once per minute, not every call)
    const variance = ((Math.sin(minute * 0.5) + 1) / 2) * 20

    return Math.floor((baseViewers + variance) * multiplier)
  }

  public getInventoryStatus(variant: string = 'premium'): InventoryStatus {
    // Stable inventory levels (not re-randomized each call)
    const inventoryLevels: Record<string, { count: number; level: InventoryStatus['level'] }> = {
      premium: { count: 7, level: 'low' },
      xl: { count: 14, level: 'medium' },
      bundle: { count: 9, level: 'medium' },
    }

    const inventory = inventoryLevels[variant] || inventoryLevels.premium

    let message = ''
    let showUrgency = false

    if (inventory.count <= 5) {
      message = `⚠️ Only ${inventory.count} left in stock - order soon!`
      showUrgency = true
    } else if (inventory.count <= 10) {
      message = `${inventory.count} available - popular item!`
      showUrgency = false
    } else {
      message = `${inventory.count} in stock`
      showUrgency = false
    }

    return {
      level: inventory.level,
      count: inventory.count,
      message,
      showUrgency,
    }
  }

  public getRecentReviews(count: number = 3): Array<{
    id: string
    name: string
    rating: number
    title: string
    content: string
    date: string
    verified: boolean
  }> {
    const reviews = [
      {
        id: 'rev-1',
        name: 'Jennifer L.',
        rating: 5,
        title: 'Game changer for beach days!',
        content:
          'Setup takes literally 30 seconds. The UV protection is incredible - stayed cool all day.',
        date: '2 days ago',
        verified: true,
      },
      {
        id: 'rev-2',
        name: 'Mark S.',
        rating: 5,
        title: 'Worth every penny',
        content:
          "Bought for our family beach trip. Fit all 4 of us comfortably. Wind didn't budge it once.",
        date: '1 week ago',
        verified: true,
      },
      {
        id: 'rev-3',
        name: 'Amanda R.',
        rating: 5,
        title: 'Better than traditional umbrellas',
        content:
          'No more fighting with heavy umbrellas. This actually stays put and provides amazing shade.',
        date: '3 days ago',
        verified: true,
      },
      {
        id: 'rev-4',
        name: 'Tom W.',
        rating: 5,
        title: 'Compact and powerful',
        content: 'Fits in my car trunk easily. Setup is intuitive. Quality materials.',
        date: '5 days ago',
        verified: true,
      },
    ]

    return reviews.slice(0, count)
  }

  public getTrustStats(): {
    totalReviews: number
    averageRating: number
    fiveStarPercentage: number
    verifiedPurchases: number
  } {
    return {
      totalReviews: 1247,
      averageRating: 4.8,
      fiveStarPercentage: 94,
      verifiedPurchases: 1180,
    }
  }
}

export const socialProofService = SocialProofService.getInstance()
