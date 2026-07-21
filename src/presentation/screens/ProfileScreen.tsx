import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Alert,
  Platform,
} from 'react-native';
import { colors, spacing, typography } from '../../core/theme';
import { ProfileOptionCard } from '../components/ProfileOptionCard';

export const ProfileScreen: React.FC = () => {
  const handleDietaryPreferences = () => {
    Alert.alert('Régimes alimentaires', 'Gestion des préférences alimentaires (Végétarien, Sans gluten, etc.)');
  };

  const handleNotifications = () => {
    Alert.alert('Notifications', 'Gestion des notifications d’expiration des aliments et suggestions');
  };

  const handlePremium = () => {
    Alert.alert('Passer Premium', 'Débloquez toutes les fonctionnalités recettes et économies illimitées');
  };

  const handleSettings = () => {
    Alert.alert('Paramètres', 'Configuration générale du compte');
  };

  const handleLogout = () => {
    Alert.alert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mon Profil</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Préférences</Text>
          <ProfileOptionCard
            iconName="restaurant-outline"
            title="Régimes alimentaires"
            onPress={handleDietaryPreferences}
          />
          <ProfileOptionCard
            iconName="notifications-outline"
            title="Notifications"
            onPress={handleNotifications}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Abonnement</Text>
          <ProfileOptionCard
            iconName="star-outline"
            title="Passer Premium"
            onPress={handlePremium}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Compte</Text>
          <ProfileOptionCard
            iconName="settings-outline"
            title="Paramètres"
            onPress={handleSettings}
          />
          <ProfileOptionCard
            iconName="log-out-outline"
            title="Déconnexion"
            onPress={handleLogout}
            isDestructive={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D95D39',
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 110,
    paddingTop: spacing.md,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});
