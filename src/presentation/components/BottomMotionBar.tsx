import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type TabType = 'history' | 'search' | 'favorites' | 'profile';

interface BottomMotionBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomMotionBar: React.FC<BottomMotionBarProps> = ({ activeTab, onTabChange }) => {
  const renderTab = (tab: TabType, icon: string, label: string) => {
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange(tab)}
      >
        <View style={[styles.iconContainer, isActive && styles.iconContainerActive]}>
          <Ionicons
            name={icon as any}
            size={24}
            color={isActive ? '#FFFFFF' : '#9CA3AF'}
          />
        </View>
        <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {renderTab('search', 'search-outline', 'Recherche')}
        {renderTab('history', 'time-outline', 'Historique')}
        {renderTab('favorites', 'heart-outline', 'Favoris')}
        {renderTab('profile', 'person', 'Profil')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    width: '90%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconContainerActive: {
    backgroundColor: '#D95D39',
    borderRadius: 24,
  },
  tabLabel: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: -6,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#D95D39',
    display: 'none', // Hide text when active according to screenshot
  },
});
