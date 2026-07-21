import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IngredientChipProps {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

export const IngredientChip: React.FC<IngredientChipProps> = ({ name, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        isSelected ? styles.chipSelected : styles.chipUnselected
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.text,
        isSelected ? styles.textSelected : styles.textUnselected
      ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 12,
  },
  chipSelected: {
    backgroundColor: '#D95D39', // Orange
  },
  chipUnselected: {
    backgroundColor: '#F3F4F6', // Light gray
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  textSelected: {
    color: '#FFFFFF',
  },
  textUnselected: {
    color: '#374151',
  },
});
