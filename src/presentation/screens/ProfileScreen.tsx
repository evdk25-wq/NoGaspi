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
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

        <View style={styles.profileHeaderSection}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80' }} 
              style={styles.profileImage} 
            />
            <TouchableOpacity style={styles.editButton} activeOpacity={0.8} onPress={() => Alert.alert('Photo de profil', 'Changer la photo de profil')}>
              <Ionicons name="camera" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Chef NoGaspi</Text>
          <Text style={styles.profileEmail}>chef@nogaspi.com</Text>
        </View>

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
  profileHeaderSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingTop: spacing.md,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: spacing.md,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#D95D39',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
