import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { IngredientChip } from '../components/IngredientChip';
import { SearchBar } from '../components/SearchBar';
import { INITIAL_INGREDIENTS } from '../../data/sources/mockIngredients';

interface HomeScreenProps {
  onGenerateRecipes?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onGenerateRecipes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const popularIngredients = INITIAL_INGREDIENTS; // Using the mock ones

  const toggleIngredient = (id: string) => {
    setSelectedIngredients(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length < 6) {
        return [...prev, id];
      }
      return prev;
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recherche</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>Que vous reste-t-il ?</Text>
        <Text style={styles.subtitle}>Ajoutez vos ingrédients (1 à 6).</Text>
        
        <Text style={styles.counterText}>
          {selectedIngredients.length} / 6 INGRÉDIENTS SÉLECTIONNÉS
        </Text>
        
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Rechercher ou ajouter..."
        />

        <View style={styles.chipContainer}>
          {popularIngredients.map(ingredient => (
            <IngredientChip
              key={ingredient.id}
              name={ingredient.name}
              isSelected={selectedIngredients.includes(ingredient.id)}
              onPress={() => toggleIngredient(ingredient.id)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.generateButton} onPress={onGenerateRecipes}>
          <Text style={styles.generateButtonText}>Générer des recettes</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    padding: 20,
    paddingBottom: 150, // Leave space for button and bottom bar
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E2022',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D95D39',
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 150, // Moved up by ~1.5cm (50 points)
    left: 20,
    right: 20,
  },
  generateButton: {
    backgroundColor: '#D95D39',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#D95D39',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  }
});
