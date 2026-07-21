import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, borderRadius, typography, shadows, spacing } from '../../core/theme';

interface ProfileOptionCardProps {
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress: () => void;
  isDestructive?: boolean;
  showChevron?: boolean;
}

export const ProfileOptionCard: React.FC<ProfileOptionCardProps> = ({
  iconName,
  title,
  onPress,
  isDestructive = false,
  showChevron = true,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.card, shadows.soft]}
    >
      <View style={styles.leftContainer}>
        <View style={styles.iconCircle}>
          <Ionicons
            name={iconName}
            size={20}
            color={isDestructive ? colors.primary : colors.primaryDark}
          />
        </View>
        <Text
          style={[
            typography.chipText,
            styles.titleText,
            isDestructive && styles.destructiveText,
          ]}
        >
          {title}
        </Text>
      </View>

      {showChevron && (
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  destructiveText: {
    color: colors.primary,
    fontWeight: '700',
  },
});
