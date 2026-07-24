import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './src/presentation/screens/HomeScreen';
import { HistoryScreen } from './src/presentation/screens/HistoryScreen';
import { FavoritesScreen } from './src/presentation/screens/FavoritesScreen';
import { ProfileScreen } from './src/presentation/screens/ProfileScreen';
import { RecipesResultScreen } from './src/presentation/screens/RecipesResultScreen';
import { LandingScreen } from './src/presentation/screens/LandingScreen';
import { BottomMotionBar, TabType } from './src/presentation/components/BottomMotionBar';
import { colors } from './src/core/theme';
import { useIngredientSelection } from './src/presentation/hooks/useIngredientSelection';

export default function App() {
  const [fontsLoaded] = useFonts(Ionicons.font);
  const [activeTab, setActiveTab] = useState<TabType>('search');
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const selectionHook = useIngredientSelection();

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const handleGenerate = async () => {
    await selectionHook.generateRecipes();
    setShowResults(true);
  };

  const renderContent = () => {
    if (showResults) {
      return (
        <RecipesResultScreen 
          recipes={selectionHook.generatedRecipes} 
          isLoading={selectionHook.isLoading}
          error={selectionHook.error}
          onBack={() => setShowResults(false)} 
        />
      );
    }

    switch (activeTab) {
      case 'history':
        return <HistoryScreen />;
      case 'favorites':
        return <FavoritesScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'search':
      default:
        return (
          <HomeScreen 
            ingredients={selectionHook.ingredients}
            selectedIngredients={selectionHook.selectedIngredients}
            searchQuery={selectionHook.searchQuery}
            onSearchChange={selectionHook.handleSearchChange}
            onToggleIngredient={selectionHook.toggleIngredient}
            onGenerateRecipes={handleGenerate} 
            maxSelection={selectionHook.MAX_SELECTION}
            isLoading={selectionHook.isLoading}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      {!hasStarted ? (
        <LandingScreen onStart={() => setHasStarted(true)} />
      ) : (
        <>
          {renderContent()}
          {!showResults && (
            <BottomMotionBar
              activeTab={activeTab}
              onTabChange={(tab) => {
                setShowResults(false);
                setActiveTab(tab);
              }}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
