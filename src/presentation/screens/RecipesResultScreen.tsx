import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius, shadows } from '../../core/theme';
import { MOCK_RECIPES } from '../../data/sources/mockRecipes';

interface RecipesResultScreenProps {
  onBack: () => void;
}

export const RecipesResultScreen: React.FC<RecipesResultScreenProps> = ({ onBack }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={typography.headerTitle}>Recettes proposées</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={typography.subtitle}>
          Recettes basées sur les ingrédients sélectionnées dans votre frigo
        </Text>

        {MOCK_RECIPES.map(recipe => (
          <View key={recipe.id} style={[styles.card, shadows.soft]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{recipe.title}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{recipe.difficulty}</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>{recipe.description}</Text>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={16} color={colors.primary} />
                <Text style={styles.metaText}>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="checkmark-circle-outline" size={16} color={colors.primary} />
                <Text style={styles.metaText}>
                  {recipe.matchingIngredientsCount} / {recipe.totalIngredientsCount} ingrédients
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionHeading}>Ingrédients requises :</Text>
            <Text style={styles.ingredientsList}>
              {recipe.ingredients.join(', ')}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    marginRight: spacing.md,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    flex: 1,
    marginRight: spacing.sm,
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginVertical: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    marginVertical: spacing.xs,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  metaText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  ingredientsList: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
