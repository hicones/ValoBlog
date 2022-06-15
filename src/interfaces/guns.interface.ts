export interface IGuns {
  uuid: string;
  displayName: string;
  description: string;
  category: string;
  displayIcon: string;
  killStreamIcon: string;
  weaponStats: WeaponStats;
  shopData: ShopData;
}

interface ShopData {
  cost: number;
  category: string;
}

interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
}
