export interface UserProfile {
  id: string;
  name: string;
  email: string;
  dietaryPreferences: string[];
  isPremium: boolean;
  notificationsEnabled: boolean;
}
